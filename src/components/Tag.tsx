import { CSSProperties, ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  style?: CSSProperties;
}

export function Tag({ children, style = {} }: TagProps) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        fontWeight: 400,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--coral-400)',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.10)',
        borderRadius: 'var(--radius-pill)',
        padding: '6px 14px',
        display: 'inline-block',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
