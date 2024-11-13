import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight } from 'lucide-react';

interface WelcomeProps {
  onNext: () => void;
  onParentNameChange: (name: string) => void;
}

export function Welcome({ onNext, onParentNameChange }: WelcomeProps) {
  const [name, setName] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onParentNameChange(name);
      onNext();
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center">
          <Brain className="w-12 h-12 text-white" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4"
      >
        Welcome to Victoria
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-xl text-gray-600 text-center mb-12 max-w-2xl"
      >
        Your AI-powered education companion, ready to help unlock your child's full potential
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        onSubmit={handleSubmit}
        className="w-full max-w-md"
      >
        <div className="relative">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="What's your name?"
            className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </motion.form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center"
      >
        <p className="text-gray-500">Press Enter or click the arrow to continue</p>
      </motion.div>
    </div>
  );
}