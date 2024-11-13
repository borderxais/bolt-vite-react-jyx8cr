import React from 'react';
import { FeatureNavigation } from './FeatureNavigation';

interface FeatureLayoutProps {
  children: React.ReactNode;
}

export function FeatureLayout({ children }: FeatureLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <FeatureNavigation />
      <div className="pt-4">
        {children}
      </div>
    </div>
  );
}