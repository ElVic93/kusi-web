
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white border border-[#E4E6E8] rounded-[18px] p-6 md:p-8 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export default Card;
