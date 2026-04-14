import { CSSProperties, ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
  background?: 'dark' | 'light' | 'dark-mid' | 'dark-alt';
  dotGrid?: boolean;
  className?: string;
  style?: CSSProperties;
  pageBreakAfter?: boolean;
}

const backgroundMap: Record<string, string> = {
  dark: 'var(--navy-900)',
  light: 'var(--cream-50)',
  'dark-mid': 'var(--navy-850)',
  'dark-alt': 'var(--navy-800)',
};

export function Page({
  children,
  background = 'dark',
  dotGrid = false,
  className = '',
  style = {},
  pageBreakAfter = true,
}: PageProps) {
  const isDark = background !== 'light';
  const bgColor = backgroundMap[background];

  const pageStyle: CSSProperties = {
    width: 'var(--page-width)',
    height: 'var(--page-height)',
    padding: 'var(--page-padding)',
    background: bgColor,
    color: isDark ? 'var(--cream-50)' : 'var(--ink-800)',
    position: 'relative',
    overflow: 'hidden',
    breakAfter: pageBreakAfter ? 'page' : 'auto',
    boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
    ...style,
  };

  return (
    <div className={`page ${className}`} style={pageStyle}>
      {dotGrid && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: isDark ? 'var(--dot-grid-dark)' : 'var(--dot-grid-light)',
            backgroundSize: 'var(--dot-grid-size)',
            pointerEvents: 'none',
          }}
        />
      )}
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        {children}
      </div>
    </div>
  );
}
