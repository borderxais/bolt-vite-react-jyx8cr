import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Star, ChevronRight, ChevronLeft } from 'lucide-react';

interface IntroductionProps {
  onNext: () => void;
  onSkip: () => void;
}

const slides = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Victoria uses advanced AI to understand your child's unique learning style and potential"
  },
  {
    icon: Target,
    title: "Personalized Goals",
    description: "Set and track educational goals tailored to your child's interests and abilities"
  },
  {
    icon: Star,
    title: "Expert Guidance",
    description: "Get real-time recommendations from education experts and AI insights"
  }
];

export function Introduction({ onNext, onSkip }: IntroductionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      onNext();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev - 1);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="text-center max-w-2xl mx-auto px-4"
      >
        <div className="mb-12">
          {React.createElement(slides[currentSlide].icon, {
            className: "w-16 h-16 text-blue-600 mx-auto"
          })}
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {slides[currentSlide].title}
        </h2>

        <p className="text-xl text-gray-600 mb-12">
          {slides[currentSlide].description}
        </p>

        <div className="flex items-center justify-center space-x-4">
          {currentSlide > 0 && (
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-blue-500 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          )}

          <button
            onClick={nextSlide}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <span>{currentSlide === slides.length - 1 ? "Get Started" : "Next"}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={onSkip}
          className="mt-8 text-gray-500 hover:text-gray-700 transition-colors"
        >
          Skip Introduction
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center space-x-2 mt-12">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-blue-600'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}