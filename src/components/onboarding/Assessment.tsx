import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Book, Palette, Trophy, ChevronRight } from 'lucide-react';

interface AssessmentProps {
  onNext: () => void;
  childData: {
    name: string;
    age: string;
    interests: string[];
    grade: string;
  };
}

const questions = [
  {
    id: 'learning_style',
    question: "How does your child prefer to learn new things?",
    options: [
      { id: 'visual', label: 'Through pictures and videos', icon: Brain },
      { id: 'auditory', label: 'By listening and discussing', icon: Brain },
      { id: 'kinesthetic', label: 'Through hands-on activities', icon: Brain },
      { id: 'reading', label: 'By reading and writing', icon: Book }
    ]
  },
  {
    id: 'motivation',
    question: "What motivates your child the most?",
    options: [
      { id: 'achievement', label: 'Achieving goals', icon: Target },
      { id: 'creativity', label: 'Being creative', icon: Palette },
      { id: 'competition', label: 'Competing with others', icon: Trophy },
      { id: 'discovery', label: 'Discovering new things', icon: Brain }
    ]
  },
  {
    id: 'challenges',
    question: "What are the main challenges your child faces?",
    options: [
      { id: 'focus', label: 'Maintaining focus', icon: Target },
      { id: 'organization', label: 'Staying organized', icon: Book },
      { id: 'confidence', label: 'Building confidence', icon: Trophy },
      { id: 'time', label: 'Managing time', icon: Brain }
    ]
  }
];

export function Assessment({ onNext, childData }: AssessmentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onNext();
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Brain className="w-16 h-16 text-blue-600 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Let's understand {childData.name} better
        </h2>
        <p className="text-xl text-gray-600">
          Help Victoria create the perfect learning experience
        </p>
      </motion.div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="space-y-8"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-900">
            {currentQ.question}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQ.options.map(option => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => handleAnswer(currentQ.id, option.id)}
                className="p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left flex items-center space-x-4"
              >
                <Icon className="w-8 h-8 text-blue-600" />
                <span className="text-lg text-gray-900">{option.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex justify-center items-center space-x-4">
          <div className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="w-32 h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full transition-all"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}