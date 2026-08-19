import React from 'react';

interface MetaLogoProps {
  className?: string;
  height?: number;
}

export const MetaLogo: React.FC<MetaLogoProps> = ({
  className = '',
  height = 20,
}) => {
  return (
    <div
      id="meta-brand-badge"
      className={`inline-flex items-center justify-center select-none ${className}`}
    >
      <img
        src="https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png"
        alt="Meta"
        style={{ height: `${height}px` }}
        className="w-auto object-contain transition-opacity hover:opacity-90"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
