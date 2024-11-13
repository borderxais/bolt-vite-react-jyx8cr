import React, { useRef } from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { Vision } from './Vision';
import { Testimonials } from './Testimonials';
import { Footer } from './Footer';

export function HomePage() {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onGetStarted={scrollToFeatures} />
      
      <div ref={featuresRef}>
        <Features />
      </div>
      <Vision />
      <Testimonials />
      <Footer />
    </div>
  );
}