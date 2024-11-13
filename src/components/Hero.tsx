import React from 'react';
import { Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/onboarding');
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80"
          alt="Parent and child learning"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white space-y-8 max-w-3xl">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8" />
            <h2 className="text-xl font-medium">Victory AI</h2>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {t('hero.title')}
            <span className="block text-3xl md:text-4xl mt-4 text-blue-300">
              {t('hero.subtitle')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {t('hero.description')}
          </p>
          <button 
            onClick={handleGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </div>
  );
}