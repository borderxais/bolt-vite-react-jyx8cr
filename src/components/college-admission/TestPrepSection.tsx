import React from 'react';
import { BookOpen, Target, TrendingUp, Calendar, Star } from 'lucide-react';

interface TestPrep {
  id: string;
  name: string;
  currentScore: number;
  targetScore: number;
  nextTest: string;
  progress: number;
  recommendations: string[];
}

const testPrepData: TestPrep[] = [
  {
    id: '1',
    name: 'SAT',
    currentScore: 1480,
    targetScore: 1550,
    nextTest: '2024-05-15',
    progress: 85,
    recommendations: [
      'Focus on advanced math concepts',
      'Practice reading comprehension daily',
      'Take 2 full practice tests weekly'
    ]
  },
  {
    id: '2',
    name: 'ACT',
    currentScore: 32,
    targetScore: 34,
    nextTest: '2024-06-10',
    progress: 78,
    recommendations: [
      'Review science reasoning strategies',
      'Work on time management',
      'Practice math speed drills'
    ]
  },
  {
    id: '3',
    name: 'AP Calculus BC',
    currentScore: 4,
    targetScore: 5,
    nextTest: '2024-05-20',
    progress: 92,
    recommendations: [
      'Practice integration techniques',
      'Review series concepts',
      'Complete past exam papers'
    ]
  }
];

export function TestPrepSection() {
  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">Test Preparation</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testPrepData.map((test) => (
            <div key={test.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">{test.name}</h4>
                <div className="flex items-center space-x-1">
                  <Target className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">
                    Target: {test.targetScore}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Current Score</span>
                    <span className="font-medium text-gray-900">{test.currentScore}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 rounded-full h-2"
                      style={{ width: `${test.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Next Test: {new Date(test.nextTest).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Star className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">Study Recommendations</h3>
        </div>

        <div className="space-y-6">
          {testPrepData.map((test) => (
            <div key={test.id} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
              <h4 className="font-medium text-gray-900 mb-4">{test.name} Preparation Plan</h4>
              <ul className="space-y-3">
                {test.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-600">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Study Resources */}
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <BookOpen className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Available Resources</h4>
            <p className="text-sm text-gray-600 mb-4">
              Access our comprehensive library of study materials, practice tests, and video lessons
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Browse Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}