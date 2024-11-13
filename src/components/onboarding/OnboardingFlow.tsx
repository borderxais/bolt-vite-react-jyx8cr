import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Welcome } from './Welcome';
import { Introduction } from './Introduction';
import { ChildProfile } from './ChildProfile';
import { Assessment } from './Assessment';
import { Features } from './Features';
import { Setup } from './Setup';

export function OnboardingFlow() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [parentName, setParentName] = useState('');
  const [childData, setChildData] = useState({
    name: '',
    age: '',
    interests: [] as string[],
    grade: ''
  });

  const handleComplete = () => {
    // In a real app, we would save the data to a backend
    navigate('/features/talent-discovery');
  };

  const steps = [
    {
      component: Welcome,
      props: { onNext: () => setStep(1), onParentNameChange: setParentName }
    },
    {
      component: Introduction,
      props: { onNext: () => setStep(2), onSkip: () => setStep(4) }
    },
    {
      component: ChildProfile,
      props: { onNext: () => setStep(3), onChildDataChange: setChildData }
    },
    {
      component: Assessment,
      props: { onNext: () => setStep(4), childData }
    },
    {
      component: Features,
      props: { onNext: () => setStep(5), parentName, childData }
    },
    {
      component: Setup,
      props: { parentName, childData, onComplete: handleComplete }
    }
  ];

  const CurrentStep = steps[step].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto px-4 py-12"
        >
          <CurrentStep {...steps[step].props} />
          
          {/* Progress Indicator */}
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === step
                      ? 'w-8 bg-blue-600'
                      : index < step
                      ? 'bg-blue-400'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}