import React from 'react';
import { Brain, Star } from 'lucide-react';
import { RadarChart } from '../progress-tracking/RadarChart';
import type { ChildProfile } from '../FeatureTalentDiscovery';

interface CurrentStateProps {
  profile: ChildProfile;
}

export function CurrentState({ profile }: CurrentStateProps) {
  const radarData = profile.skills?.map(skill => ({
    category: skill.category,
    value: skill.progress,
    maxValue: 100
  })) || [];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Brain className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">Current State</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Radar Chart */}
        <div className="flex justify-center items-center">
          <RadarChart data={radarData} size={400} />
        </div>

        {/* Skill Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.skills?.map((skill, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{skill.category}</h4>
                <div className="flex">
                  {Array.from({ length: skill.level }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{ width: `${skill.progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Level {skill.level} • {skill.progress}% mastered
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}