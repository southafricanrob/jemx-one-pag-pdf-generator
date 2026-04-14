import { CSSProperties } from 'react';

interface AmbientOrbProps {
  color?: 'coral' | 'violet';
  size?: 'sm' | 'default' | 'lg';
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  style?: CSSProperties;
}

const sizeMap = {
  sm: '200px',
  default: '400px',
  lg: '500px',
};

export function AmbientOrb({
  color = 'coral',
  size = 'default',
  top,
  left,
  right,
  bottom,
  style = {},
}: AmbientOrbProps) {
  const dimension = sizeMap[size];
  const gradientColor = color === 'coral'
    ? 'rgba(255, 105, 127, 0.35)'
    : 'rgba(86, 79, 255, 0.30)';

  return (
    <div
      style={{
        position: 'absolute',
        width: dimension,
        height: dimension,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${gradientColor} 0%, transparent 70%)`,
        filter: 'blur(60px)',
        pointerEvents: 'none',
        top,
        left,
        right,
        bottom,
        zIndex: 0,
        ...style,
      }}
    />
  );
}
