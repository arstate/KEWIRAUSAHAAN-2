import React from 'react';

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const ArrowIcon: React.FC<{ direction: 'left' | 'right', className?: string }> = ({ direction, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    {direction === 'left' ? (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    )}
  </svg>
);


export const Navigation: React.FC<NavigationProps> = ({ onPrev, onNext, isFirst, isLast }) => {
  const buttonBaseClasses = "absolute top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-100/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none z-20";
  const iconClasses = "w-7 h-7 text-slate-600";
    
  return (
    <>
      <button 
        onClick={onPrev} 
        disabled={isFirst}
        className={`${buttonBaseClasses} left-8`}
        aria-label="Previous Slide"
      >
        <ArrowIcon direction="left" className={iconClasses}/>
      </button>
      <button 
        onClick={onNext} 
        disabled={isLast}
        className={`${buttonBaseClasses} right-8`}
        aria-label="Next Slide"
      >
        <ArrowIcon direction="right" className={iconClasses}/>
      </button>
    </>
  );
};
