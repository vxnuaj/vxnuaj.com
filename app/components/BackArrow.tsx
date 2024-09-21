"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const BackArrow = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); 
  };

  return (
    <div onClick={handleBack} className="flex items-center cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white" 
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M30 12H0m0 0l6-6m-6 6l6 6" 
        />
      </svg>
    </div>
  );
};

export default BackArrow;