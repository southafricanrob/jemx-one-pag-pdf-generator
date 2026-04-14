import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import { resolve, dirname } from 'path';
import { mkdir, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = resolve(__dirname, '..', 'output');
const DEV_URL = 'http://localhost:5173';

// A4 in points (PDF standard unit: 72 points per inch)
const A4_WIDTH_PT = 595.28;
const A4_HEIGHT_PT = 841.89;

// A4 at 96 CSS px per inch
const A4_WIDTH_PX = 794;
const A4_HEIGHT_PX = 1123;

// Higher scale = sharper text/images in the PDF
const DEVICE_SCALE = 3;

interface PdfOptions {
  url?: string;
  outputPath?: string;
  waitForSelector?: string;
}

async function generatePdf(options: PdfOptions = {}) {
  const {
    url = DEV_URL,
    outputPath = resolve(OUTPUT_DIR, `jemx-document-${Date.now()}.pdf`),
    waitForSelector = '.page',
  } = options;

  await mkdir(OUTPUT_DIR, { recursive: true });

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--font-render-hinting=none',
    ],
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: A4_WIDTH_PX,
    height: A4_HEIGHT_PX,
    deviceScaleFactor: DEVICE_SCALE,
  });

  console.log(`Navigating to ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60_000 });
  await page.waitForSelector(waitForSelector, { timeout: 10_000 });

  // Wait for fonts + images
  console.log('Waiting for fonts and images...');
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([
      document.fonts.load('100 10px "Inter"'),
      document.fonts.load('400 16px "Inter"'),
      document.fonts.load('600 48px "Inter"'),
      document.fonts.load('700 44px "Inter"'),
      document.fonts.load('400 16px "Manrope"'),
      document.fonts.load('400 12px "JetBrains Mono"'),
    ]);

    const images = Array.from(document.querySelectorAll('img'));
    await Promise.all(
      images
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise<void>((resolve) => {
              img.onload = () => resolve();
              img.onerror = () => resolve();
            })
        )
    );

    // Two repaint cycles
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    );
  });

  // Let the browser settle
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Screenshot each .page element — this captures exactly what Chrome paints,
  // bypassing the print/PDF pipeline that drops backdrop-filter and other effects.
  const pageElements = await page.$$('.page');
  console.log(`Found ${pageElements.length} page(s). Capturing screenshots...`);

  const pdfDoc = await PDFDocument.create();

  for (let i = 0; i < pageElements.length; i++) {
    const el = pageElements[i];
    const screenshot = await el.screenshot({ type: 'png' }) as Buffer;
    const pngImage = await pdfDoc.embedPng(screenshot);

    const pdfPage = pdfDoc.addPage([A4_WIDTH_PT, A4_HEIGHT_PT]);
    pdfPage.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: A4_WIDTH_PT,
      height: A4_HEIGHT_PT,
    });

    console.log(`  Page ${i + 1} captured.`);
  }

  const pdfBytes = await pdfDoc.save();
  await writeFile(outputPath, pdfBytes);

  console.log(`PDF generated: ${outputPath}`);
  await browser.close();
}

generatePdf().catch((err) => {
  console.error('PDF generation failed:', err);
  process.exit(1);
});
