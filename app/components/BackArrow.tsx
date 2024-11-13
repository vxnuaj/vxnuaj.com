"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const BackArrow = () => {
  const router = useRouter();

  const handleBack = () => {
    const currentPath = window.location.pathname;

    const parentPath = currentPath
      .split('/')
      .slice(0, -1)
      .join('/');

    const targetPath = parentPath || '/'

    router.push(targetPath)

    //router.back(); 
  };

  return (
    <div onClick={handleBack} className="flex items-center cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-7 dark:text-white" 
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