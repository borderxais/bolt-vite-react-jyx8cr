import React from 'react';
import { TrendingUp, Trophy, Medal } from 'lucide-react';

interface GrowthData {
  category: string;
  growth: number;
  timeframe: string;
  achievements?: string[];
  color: string;
}

interface GrowthTrajectoryProps {
  data: GrowthData[];
}

export function GrowthTrajectory({ data }: GrowthTrajectoryProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Growth Trajectory</h3>
      
      {data.map((item, index) => (
        <div
          key={index}
          className={`bg-${item.color}-50 rounded-lg p-4 transition-all hover:shadow-md`}
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <h4 className="font-medium text-gray-900">{item.category}</h4>
              <p className="text-sm text-gray-600">{item.timeframe}</p>
            </div>
            <div className={`flex items-center space-x-1 text-${item.color}-600`}>
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">+{item.growth} pts</span>
            </div>
          </div>

          {item.achievements && item.achievements.length > 0 && (
            <div className="mt-3 space-y-2">
              {item.achievements.map((achievement, i) => (
                <div key={i} className="flex items-center space-x-2">
                  {i === 0 ? (
                    <Trophy className={`w-4 h-4 text-${item.color}-500`} />
                  ) : (
                    <Medal className={`w-4 h-4 text-${item.color}-500`} />
                  )}
                  <span className="text-sm text-gray-600">{achievement}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}