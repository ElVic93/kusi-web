
import React, { useState } from 'react';
import type { FAQItem } from '../lib/types';
interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border border-[#E4E6E8] rounded-[14px] bg-white overflow-hidden transition-all"
        >
          <button
            className="w-full text-left p-5 flex justify-between items-center hover:bg-[#F7F8FA] transition-colors"
            onClick={() => toggle(index)}
          >
            <span className="font-semibold text-[17px]">{item.question}</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 pointer-events-none'
            }`}
          >
            <p className="text-[#111111]/70 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
