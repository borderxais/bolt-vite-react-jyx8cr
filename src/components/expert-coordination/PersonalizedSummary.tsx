import React from 'react';
import { Brain, User } from 'lucide-react';
import type { ChildProfile } from '../FeatureTalentDiscovery';

interface PersonalizedSummaryProps {
  profile: ChildProfile;
  profiles: ChildProfile[];
  onProfileChange: (profileId: string) => void;
}

export function PersonalizedSummary({ profile, profiles, onProfileChange }: PersonalizedSummaryProps) {
  const getPersonalizedSuggestion = (profile: ChildProfile) => {
    const topSkill = profile.skills?.reduce((prev, current) => 
      (current.progress > prev.progress) ? current : prev
    );
    
    return `Based on ${profile.name}'s strong ${topSkill?.category.toLowerCase()} skills, 
    we recommend exploring advanced programs in this area to further develop their talents.`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 sticky top-24">
      <div className="flex items-center space-x-3 mb-6">
        <Brain className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">Victoria's Insights</h3>
      </div>

      {/* Profile Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Child
        </label>
        <div className="space-y-2">
          {profiles.map((p) => (
            <button
              key={p.id}
              onClick={() => onProfileChange(p.id)}
              className={`w-full flex items-center space-x-3 p-2 rounded-lg ${
                p.id === profile.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'hover:bg-gray-50'
              }`}
            >
              {p.avatar ? (
                <img
                  src={p.avatar}
                  alt={p.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
              )}
              <span className="font-medium">{p.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Personalized Suggestion */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-700">
          {getPersonalizedSuggestion(profile)}
        </p>
      </div>

      {/* Skills Overview */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Current Strengths</h4>
        <div className="space-y-3">
          {profile.skills?.map((skill, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{skill.category}</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${skill.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}