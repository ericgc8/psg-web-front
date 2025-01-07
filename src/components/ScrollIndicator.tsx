// src/components/ScrollIndicator.tsx

import React from 'react';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="scroll-indicator flex flex-col items-center mt-8">
      <div className="arrow bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m0 0l-4-4m4 4l4-4"
          />
        </svg>
      </div>
      <p className="text-blue-100 text-sm mt-2">Scroll Down</p>
    </div>
  );
};

export default ScrollIndicator;
