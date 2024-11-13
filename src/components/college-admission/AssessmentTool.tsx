import React, { useState } from 'react';
import { Brain, ChevronRight, CheckCircle } from 'lucide-react';
import { UniversityProjection } from '../expert-coordination/UniversityProjection';

interface Question {
  id: string;
  text: string;
  type: 'multiple' | 'scale' | 'text';
  options?: string[];
}

const assessmentQuestions: Question[] = [
  {
    id: '1',
    text: 'What grade is your child currently in?',
    type: 'multiple',
    options: ['9th Grade', '10th Grade', '11th Grade', '12th Grade']
  },
  {
    id: '2',
    text: 'What is their current unweighted GPA?',
    type: 'text'
  },
  {
    id: '3',
    text: 'How would you rate their involvement in extracurricular activities?',
    type: 'scale',
    options: ['1', '2', '3', '4', '5']
  }
];

export function AssessmentTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    if (currentStep < assessmentQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  return (
    <div className="space-y-8">
      {!isComplete ? (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-3 mb-8">
            <Brain className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">
              Initial Assessment
            </h3>
          </div>

          <div className="max-w-2xl mx-auto">
            {assessmentQuestions.map((question, index) => (
              <div
                key={question.id}
                className={`transition-all duration-300 ${
                  index === currentStep ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  {question.text}
                </h4>

                {question.type === 'multiple' && (
                  <div className="space-y-3">
                    {question.options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswer(question.id, option)}
                        className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {question.type === 'scale' && (
                  <div className="flex justify-between space-x-4">
                    {question.options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswer(question.id, option)}
                        className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center font-medium transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {question.type === 'text' && (
                  <input
                    type="text"
                    placeholder="Enter your answer"
                    className="w-full p-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleAnswer(question.id, e.currentTarget.value);
                      }
                    }}
                  />
                )}
              </div>
            ))}

            <div className="mt-8 flex justify-between items-center text-sm text-gray-500">
              <span>Question {currentStep + 1} of {assessmentQuestions.length}</span>
              <div className="flex items-center space-x-2">
                <span>Progress</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-blue-600 rounded-full transition-all"
                    style={{
                      width: `${((currentStep + 1) / assessmentQuestions.length) * 100}%`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Assessment Complete!
            </h3>
            <p className="text-gray-600">
              Based on your responses, here's a projection of potential university matches
            </p>
          </div>

          <UniversityProjection profile={{
            id: '1',
            name: 'Your Child',
            age: 16,
            avatar: '',
            lastActive: 'Now',
            skills: []
          }} />
        </>
      )}
    </div>
  );
}