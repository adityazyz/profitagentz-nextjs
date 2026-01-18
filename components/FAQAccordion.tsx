'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  item: FAQItem;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border-b border-slate-200 dark:border-white/10 last:border-b-0"
      itemScope
      itemType="https://schema.org/Question"
    >
      <button
        className="w-full py-4 sm:py-5 flex items-center justify-between text-left hover:text-purple-700 transition-colors group focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        itemProp="name"
      >
        <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-700">
          {item.question}
        </span>
        {isOpen ? <ChevronUp className="text-purple-700 w-5 h-5" /> : <ChevronDown className="text-slate-400 w-5 h-5" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[400px] pb-4 sm:pb-5' : 'max-h-0'}`}
        itemScope
        itemType="https://schema.org/Answer"
      >
        <p 
          className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-medium"
          itemProp="text"
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQAccordion;