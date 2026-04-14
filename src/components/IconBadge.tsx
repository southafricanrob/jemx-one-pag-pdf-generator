import { CSSProperties, ReactNode } from 'react';

interface IconBadgeProps {
  children: ReactNode;
  size?: 'sm' | 'md';
  style?: CSSProperties;
}

const sizeMap = {
  sm: '32px',
  md: '40px',
};

export function IconBadge({
  children,
  size = 'md',
  style = {},
}: IconBadgeProps) {
  const dimension = sizeMap[size];

  return (
    <div
      style={{
        width: dimension,
        height: dimension,
        borderRadius: '50%',
        background: 'var(--navy-900)',
        color: 'var(--coral-500)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size === 'sm' ? '14px' : '18px',
        flexShrink: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
