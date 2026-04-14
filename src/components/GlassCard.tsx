import { CSSProperties, ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  variant?: 'dark' | 'light';
  style?: CSSProperties;
}

export function GlassCard({
  children,
  variant = 'dark',
  style = {},
}: GlassCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      style={{
        background: isDark ? 'var(--glass-dark-bg)' : 'var(--glass-light-bg)',
        backdropFilter: isDark ? 'var(--glass-dark-blur)' : 'var(--glass-light-blur)',
        WebkitBackdropFilter: isDark ? 'var(--glass-dark-blur)' : 'var(--glass-light-blur)',
        border: isDark ? 'var(--glass-dark-border)' : 'var(--glass-light-border)',
        boxShadow: isDark ? 'var(--glass-dark-shadow)' : 'var(--glass-light-shadow)',
        borderRadius: 'var(--radius-sm)',
        padding: '24px',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
