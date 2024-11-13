import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OnboardingFlow } from './components/onboarding/OnboardingFlow';
import { HomePage } from './components/HomePage';
import { FeatureTalentDiscovery } from './components/FeatureTalentDiscovery';
import { FeaturePersonalizedLearning } from './components/FeaturePersonalizedLearning';
import { FeatureProgressTracking } from './components/FeatureProgressTracking';
import { FeatureExpertCoordination } from './components/FeatureExpertCoordination';
import { FeatureCurriculumOptimization } from './components/FeatureCurriculumOptimization';
import { FeatureTalentDevelopment } from './components/FeatureTalentDevelopment';
import { Pricing } from './components/Pricing';
import { LanguageToggle } from './components/LanguageToggle';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="relative">
          <div className="fixed top-4 right-4 z-50">
            <LanguageToggle />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/onboarding" element={<OnboardingFlow />} />
            <Route path="/features/talent-discovery" element={<FeatureTalentDiscovery />} />
            <Route path="/features/personalized-learning" element={<FeaturePersonalizedLearning />} />
            <Route path="/features/progress-tracking" element={<FeatureProgressTracking />} />
            <Route path="/features/expert-coordination" element={<FeatureExpertCoordination />} />
            <Route path="/features/curriculum-optimization" element={<FeatureCurriculumOptimization />} />
            <Route path="/features/talent-development" element={<FeatureTalentDevelopment />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;