import React from 'react';
import { ChevronRight, Target, Star } from 'lucide-react';
import type { ChildProfile } from '../FeatureTalentDiscovery';
import type { Goal } from '../FeaturePersonalizedLearning';

interface LearningPathTimelineProps {
  profile: ChildProfile;
  goals: Goal[];
}

export function LearningPathTimeline({ profile, goals }: LearningPathTimelineProps) {
  const timeframes = ['1year', '2year', '3year'];
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Target className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">3-Year Learning Path</h3>
      </div>

      <div className="space-y-8">
        {timeframes.map((timeframe, index) => {
          const timeframeGoals = goals.filter(g => g.timeframe === timeframe);
          
          return (
            <div key={timeframe} className="relative">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-medium">Y{index + 1}</span>
                </div>
                <h4 className="font-medium text-gray-900">Year {index + 1}</h4>
              </div>

              <div className="ml-4 border-l-2 border-blue-100 pl-8 space-y-4">
                {timeframeGoals.map((goal) => (
                  <div key={goal.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h5 className="font-medium text-gray-900">{goal.title}</h5>
                        <p className="text-sm text-gray-600 mt-1">
                          {goal.description}
                        </p>
                        {goal.status === 'active' && (
                          <div className="flex items-center space-x-2 mt-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm text-gray-500">In Progress</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {timeframeGoals.length === 0 && (
                  <div className="text-gray-500 text-sm py-2">
                    No goals set for this period yet
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}