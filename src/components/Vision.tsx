import React from 'react';
import { Sparkles } from 'lucide-react';

export function Vision() {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <Sparkles className="w-12 h-12 mx-auto mb-8" />
        <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
        <p className="text-xl max-w-3xl mx-auto">
          To become the leading AI platform for family education management, transforming how parents engage with and support their children's development and growth.
        </p>
      </div>
    </div>
  );
}