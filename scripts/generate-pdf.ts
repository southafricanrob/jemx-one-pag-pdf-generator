import puppeteer from 'puppeteer';
import { resolve, dirname } from 'path';
import { mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = resolve(__dirname, '..', 'output');
const DEV_URL = 'http://localhost:5173';

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

  console.log(`Navigating to ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30_000 });

  // Wait for page content to be in the DOM
  await page.waitForSelector(waitForSelector, { timeout: 10_000 });

  // Ensure all fonts are fully loaded and rendered
  await page.evaluate(async () => {
    await document.fonts.ready;
    await document.fonts.load('600 48px "Inter"');
    await document.fonts.load('400 16px "Manrope"');
    await document.fonts.load('400 12px "JetBrains Mono"');
  });

  console.log('Generating PDF...');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: false,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  console.log(`PDF generated: ${outputPath}`);
  await browser.close();
}

generatePdf().catch((err) => {
  console.error('PDF generation failed:', err);
  process.exit(1);
});
