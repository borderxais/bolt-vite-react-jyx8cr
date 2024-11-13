import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    
    // Features Navigation
    'features.talentDiscovery': 'Talent',
    'features.talentDiscoveryDesc': 'AI-powered assessment',
    'features.learning': 'Learning',
    'features.learningDesc': 'Custom strategies',
    'features.progress': 'Progress',
    'features.progressDesc': 'Real-time monitoring',
    'features.experts': 'Marketplace',
    'features.expertsDesc': 'Education resources',
    'features.curriculum': 'Optimization',
    'features.curriculumDesc': 'Schedule balancing',
    'features.admission': 'College Prep',
    'features.admissionDesc': 'College preparation',
    
    // Hero Section
    'hero.title': 'Meet Victoria',
    'hero.subtitle': 'Your Family Education Strategist',
    'hero.description': 'The AI co-pilot that empowers parents to unlock their children\'s full potential',
    'hero.cta': 'Get Started Today',
    
    // Rest of the translations...
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    
    // Features Navigation
    'features.talentDiscovery': 'Talento',
    'features.talentDiscoveryDesc': 'Evaluación con IA',
    'features.learning': 'Aprendizaje',
    'features.learningDesc': 'Estrategias personalizadas',
    'features.progress': 'Progreso',
    'features.progressDesc': 'Monitoreo en tiempo real',
    'features.experts': 'Mercado',
    'features.expertsDesc': 'Recursos educativos',
    'features.curriculum': 'Optimización',
    'features.curriculumDesc': 'Balance de horarios',
    'features.admission': 'Preparación',
    'features.admissionDesc': 'Preparación universitaria',
    
    // Rest of the translations...
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.features': '功能',
    'nav.pricing': '价格',
    
    // Features Navigation
    'features.talentDiscovery': '天赋',
    'features.talentDiscoveryDesc': 'AI能力评估',
    'features.learning': '学习',
    'features.learningDesc': '个性化策略',
    'features.progress': '进度',
    'features.progressDesc': '实时监控',
    'features.experts': '教育市场',
    'features.expertsDesc': '教育资源',
    'features.curriculum': '优化',
    'features.curriculumDesc': '日程优化',
    'features.admission': '升学准备',
    'features.admissionDesc': '大学准备',
    
    // Rest of the translations...
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, params?: Record<string, string | number>): string => {
    let text = translations[language][key] || translations.en[key] || key;
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        text = text.replace(`{${key}}`, String(value));
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}