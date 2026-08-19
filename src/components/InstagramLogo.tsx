import React from 'react';

interface InstagramLogoProps {
  className?: string;
  size?: number;
}

export const InstagramLogo: React.FC<InstagramLogoProps> = ({
  className = '',
  size = 68,
}) => {
  return (
    <img
      id="instagram-brand-logo"
      src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Instagram-Gradient-Logo-PNG.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
      alt="Instagram"
      width={size}
      height={size}
      className={`object-contain transition-transform hover:scale-105 duration-200 select-none ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};
