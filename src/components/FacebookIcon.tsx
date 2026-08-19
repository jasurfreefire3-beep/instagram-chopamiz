import React from 'react';

interface FacebookIconProps {
  className?: string;
  size?: number;
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({
  className = '',
  size = 20,
}) => {
  return (
    <svg
      id="facebook-login-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M14.5 12.25H12.5V19.5H9.5V12.25H8V9.75H9.5V8.125C9.5 6.47 10.36 5.5 12.18 5.5H14.5V8H13.25C12.45 8 12.5 8.35 12.5 8.9V9.75H14.75L14.5 12.25Z"
        fill="white"
      />
    </svg>
  );
};
