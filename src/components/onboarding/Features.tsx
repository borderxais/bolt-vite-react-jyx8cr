import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Star, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface FeaturesProps {
  onNext: () => void;
  parentName: string;
  childData: {
    name: string;
    age: string;
    interests: string[];
    grade: string;
  };
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

export function Features({ onNext, parentName, childData }: FeaturesProps) {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t('onboarding.welcome')}, {parentName}!
        </h2>
        <p className="text-xl text-gray-600">
          {t('onboarding.helpMessage', { name: childData.name })}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <Icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {slide.title}
              </h3>
              <p className="text-gray-600">{slide.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
        >
          <span>{t('onboarding.startJourney')}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}