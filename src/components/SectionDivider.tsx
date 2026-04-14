import { CSSProperties } from 'react';

interface SectionDividerProps {
  style?: CSSProperties;
}

export function SectionDivider({ style = {} }: SectionDividerProps) {
  return (
    <div
      style={{
        height: '1px',
        width: '100%',
        background: 'var(--gradient-section-divider)',
        ...style,
      }}
    />
  );
}
