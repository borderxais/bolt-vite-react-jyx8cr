import React, { useState } from 'react';
import { Target, Plus, Brain, Star } from 'lucide-react';
import type { ChildProfile } from '../FeatureTalentDiscovery';

interface Goal {
  id: string;
  category: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  status: 'active' | 'completed';
}

interface GoalsSetupProps {
  profile: ChildProfile;
  onOptimize: () => void;
}

const initialGoals: Goal[] = [
  {
    id: '1',
    category: 'Balance',
    title: 'Balanced Activity Distribution',
    description: 'Ensure equal time distribution between academics, sports, and arts',
    priority: 'high',
    status: 'active'
  },
  {
    id: '2',
    category: 'Academic',
    title: 'Academic Excellence',
    description: 'Maintain strong academic performance while participating in activities',
    priority: 'high',
    status: 'active'
  },
  {
    id: '3',
    category: 'Development',
    title: 'Skill Development',
    description: 'Focus on developing leadership and teamwork skills through activities',
    priority: 'medium',
    status: 'active'
  }
];

export function GoalsSetup({ profile, onOptimize }: GoalsSetupProps) {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleGoalSelection = (goalId: string) => {
    setSelectedGoals(prev =>
      prev.includes(goalId)
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleOptimize = () => {
    if (selectedGoals.length > 0) {
      onOptimize();
    }
  };

  return (
    <div className="space-y-8">
      {/* Goals Selection */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Target className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Optimization Goals</h3>
          </div>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <Plus className="w-5 h-5" />
            <span>Add Custom Goal</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => toggleGoalSelection(goal.id)}
              className={`p-4 rounded-lg text-left transition-all ${
                selectedGoals.includes(goal.id)
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
                  goal.priority === 'high'
                    ? 'bg-red-100 text-red-700'
                    : goal.priority === 'medium'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {goal.priority.charAt(0).toUpperCase() + goal.priority.slice(1)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Victoria's Recommendations */}
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <Brain className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Victoria's Recommendations</h4>
            <p className="text-sm text-gray-600 mb-4">
              Based on {profile.name}'s current activities and progress, I recommend focusing on 
              balancing academic commitments with extracurricular activities to prevent burnout 
              while maintaining optimal development.
            </p>
            <div className="space-y-2">
              {profile.skills?.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-600">
                    {skill.category}: Level {skill.level} ({skill.progress}% progress)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optimize Button */}
      <div className="flex justify-end">
        <button
          onClick={handleOptimize}
          disabled={selectedGoals.length === 0}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-white ${
            selectedGoals.length > 0
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          <Target className="w-5 h-5" />
          <span>Optimize Schedule</span>
        </button>
      </div>
    </div>
  );
}