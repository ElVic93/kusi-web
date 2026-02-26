
import React from 'react';
import { BadgeVariant } from '../lib/types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = BadgeVariant.INFO }) => {
  const variants = {
    [BadgeVariant.INFO]: 'bg-blue-50 text-blue-600 border-blue-100',
    [BadgeVariant.AMBER]: 'bg-[#F2B705]/10 text-[#B7791F] border-[#F2B705]/20'
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
