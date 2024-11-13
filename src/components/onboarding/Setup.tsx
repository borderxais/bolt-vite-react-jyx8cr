import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Check, Calendar, Bell, Settings, ArrowRight } from 'lucide-react';

interface SetupProps {
  parentName: string;
  childData: {
    name: string;
    age: string;
    interests: string[];
    grade: string;
  };
  onComplete: () => void;
}

const setupSteps = [
  {
    id: 'notifications',
    title: 'Enable Notifications',
    description: 'Stay updated on your child\'s progress',
    icon: Bell,
    completed: false
  },
  {
    id: 'calendar',
    title: 'Sync Calendar',
    description: 'Connect your preferred calendar',
    icon: Calendar,
    completed: false
  },
  {
    id: 'preferences',
    title: 'Set Preferences',
    description: 'Customize your experience',
    icon: Settings,
    completed: false
  }
];

export function Setup({ parentName, childData, onComplete }: SetupProps) {
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const handleStepComplete = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps(prev => [...prev, stepId]);
    }
  };

  const handleFinish = () => {
    onComplete();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Brain className="w-16 h-16 text-blue-600 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Quick Setup
        </h2>
        <p className="text-xl text-gray-600">
          Let's get your account ready, {parentName}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6 mb-12"
      >
        {setupSteps.map((step, index) => {
          const isCompleted = completedSteps.includes(step.id);
          const Icon = step.icon;
          
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`p-6 rounded-xl border-2 transition-all ${
                isCompleted
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Icon className={`w-6 h-6 ${
                    isCompleted ? 'text-green-600' : 'text-blue-600'
                  }`} />
                  <div>
                    <h3 className="font-medium text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleStepComplete(step.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    'Set up'
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <button
          onClick={handleFinish}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
        >
          <span>Start Using Victoria</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-sm text-gray-500 mt-4">
          You can always adjust these settings later
        </p>
      </motion.div>
    </div>
  );
}