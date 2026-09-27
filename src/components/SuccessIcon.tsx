import React from 'react';

const SuccessIcon = () => {
   return (
    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mx-auto">
      <svg
        className="w-10 h-10 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
};

export default SuccessIcon;