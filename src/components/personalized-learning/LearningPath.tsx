import React from 'react';
import { Star } from 'lucide-react';
import type { ChildProfile } from '../FeatureTalentDiscovery';

interface LearningPathProps {
  profile: ChildProfile;
}

export function LearningPath({ profile }: LearningPathProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Learning Journey
      </h3>

      <div className="space-y-6">
        {profile.skills?.map((skill, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">{skill.category}</h4>
              <div className="flex">
                {Array.from({ length: skill.level }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
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
              Level {skill.level} • {skill.progress}% to next level
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}