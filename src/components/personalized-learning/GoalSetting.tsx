import React from 'react';
import { Target, Plus } from 'lucide-react';
import type { Goal } from '../FeaturePersonalizedLearning';

interface GoalSettingProps {
  selectedGoals: Goal[];
  onGoalSelect: (goal: Goal) => void;
}

const availableGoals: Goal[] = [
  {
    id: '1',
    category: 'Academic',
    title: 'Advanced Mathematics',
    description: 'Master advanced mathematical concepts and problem-solving skills',
    timeframe: '1year',
    status: 'active'
  },
  {
    id: '2',
    category: 'Language',
    title: 'Creative Writing',
    description: 'Develop strong creative writing and storytelling abilities',
    timeframe: '2year',
    status: 'upcoming'
  },
  {
    id: '3',
    category: 'Science',
    title: 'Scientific Investigation',
    description: 'Learn scientific method and conduct experiments',
    timeframe: '1year',
    status: 'active'
  }
];

export function GoalSetting({ selectedGoals, onGoalSelect }: GoalSettingProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Target className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">Set Learning Goals</h3>
        </div>
        <button className="text-blue-600 hover:text-blue-700 flex items-center space-x-1">
          <Plus className="w-5 h-5" />
          <span>Custom Goal</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {availableGoals.map((goal) => {
          const isSelected = selectedGoals.some(g => g.id === goal.id);
          
          return (
            <button
              key={goal.id}
              onClick={() => !isSelected && onGoalSelect(goal)}
              className={`p-4 rounded-lg text-left transition-all ${
                isSelected
                  ? 'bg-blue-50 border-2 border-blue-200'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-sm font-medium text-blue-600">
                    {goal.category}
                  </span>
                  <h4 className="font-medium text-gray-900 mt-1">{goal.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{goal.description}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  goal.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {goal.timeframe}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}