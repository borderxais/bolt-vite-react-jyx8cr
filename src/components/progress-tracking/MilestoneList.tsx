import React from 'react';
import { Trophy, Star } from 'lucide-react';

interface Milestone {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  date?: string;
}

interface MilestoneListProps {
  milestones: Milestone[];
}

export function MilestoneList({ milestones }: MilestoneListProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Trophy className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">Recent Milestones</h3>
      </div>
      
      <div className="space-y-4">
        {milestones.map((milestone) => (
          <div 
            key={milestone.id}
            className={`p-4 rounded-lg ${
              milestone.completed ? 'bg-blue-50' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-start space-x-3">
              <Star className={`w-5 h-5 mt-1 ${
                milestone.completed ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <div>
                <h4 className="font-medium text-gray-900">{milestone.title}</h4>
                <p className="text-sm text-gray-600">{milestone.description}</p>
                {milestone.date && (
                  <p className="text-xs text-gray-500 mt-1">{milestone.date}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}