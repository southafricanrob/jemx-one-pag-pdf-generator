import { CSSProperties, ReactNode } from 'react';

type ButtonVariant = 'primary-coral' | 'primary-navy' | 'outline-navy' | 'outline-inverse';

interface PillButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  style?: CSSProperties;
}

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  'primary-coral': {
    background: 'var(--coral-500)',
    color: 'white',
    border: '1.5px solid var(--coral-500)',
    boxShadow: '0 0 20px -4px rgba(255, 105, 127, 0.4)',
  },
  'primary-navy': {
    background: 'var(--navy-900)',
    color: 'white',
    border: '1.5px solid var(--navy-900)',
  },
  'outline-navy': {
    background: 'transparent',
    color: 'var(--navy-900)',
    border: '1.5px solid var(--border-contrast)',
  },
  'outline-inverse': {
    background: 'transparent',
    color: 'white',
    border: '1.5px solid white',
  },
};

export function PillButton({
  children,
  variant = 'primary-coral',
  style = {},
}: PillButtonProps) {
  return (
    <button
      style={{
        borderRadius: 'var(--radius-pill)',
        padding: '14px 24px',
        fontFamily: 'var(--font-primary)',
        fontWeight: 500,
        fontSize: '14px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        ...variantStyles[variant],
        ...style,
      }}
    >
      {children}
    </button>
  );
}
