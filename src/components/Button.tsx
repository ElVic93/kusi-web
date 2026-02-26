
import React from 'react';
import { trackWhatsAppClick } from '../lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  fullWidth?: boolean;
  trackingLabel?: string;
  trackingSection?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  className = '',
  fullWidth = false,
  trackingLabel,
  trackingSection
}) => {
  const baseStyles = `inline-flex items-center justify-center font-semibold transition-all active:scale-95 disabled:opacity-50 rounded-[14px] ${fullWidth ? 'w-full' : ''}`;
  
  const variants = {
    primary: 'bg-[#C4161C] text-white hover:brightness-95 h-[44px] md:h-[48px] px-6 shadow-sm',
    secondary: 'bg-white text-[#111111] border border-[#E4E6E8] hover:bg-[#F7F8FA] h-[44px] md:h-[48px] px-6'
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const handleInteraction = () => {
    if (trackingLabel && trackingSection) {
      trackWhatsAppClick(trackingLabel, trackingSection);
    }
    if (onClick) onClick();
  };

  if (href) {
    return (
      <a href={href} onClick={handleInteraction} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={handleInteraction} className={combinedStyles}>
      {children}
    </button>
  );
};

export default Button;
