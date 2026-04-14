import { CSSProperties, ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  gradient?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
  style?: CSSProperties;
}

export function GradientText({
  children,
  gradient,
  as: Tag = 'span',
  style = {},
}: GradientTextProps) {
  return (
    <Tag
      style={{
        background: gradient || 'var(--gradient-ai)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        display: 'inline',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
