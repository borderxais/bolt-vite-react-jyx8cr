import React from 'react';

interface CircularProgressProps {
  progress: number;
  className?: string;
}

export function CircularProgress({ progress, className = '' }: CircularProgressProps) {
  const radius = 12;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg className={`w-8 h-8 transform -rotate-90 ${className}`}>
      <circle
        className="text-gray-200"
        strokeWidth="2"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="16"
        cy="16"
      />
      <circle
        className="transition-all duration-300"
        strokeWidth="2"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="16"
        cy="16"
      />
    </svg>
  );
}