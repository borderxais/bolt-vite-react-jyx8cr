import React from 'react';
import { User, Star } from 'lucide-react';
import type { ChildProfile } from '../FeatureTalentDiscovery';

interface ProfileSelectorProps {
  profiles: ChildProfile[];
  activeProfile: string;
  onProfileSelect: (profileId: string) => void;
}

export function ProfileSelector({ profiles, activeProfile, onProfileSelect }: ProfileSelectorProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Children's Profiles</h2>
      
      <div className="space-y-4">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => onProfileSelect(profile.id)}
            className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-colors ${
              activeProfile === profile.id 
                ? 'bg-blue-50 text-blue-700' 
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            <div className="relative">
              {profile.avatar ? (
                <img 
                  src={profile.avatar} 
                  alt={profile.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-400" />
                </div>
              )}
              {profile.skills && profile.skills.some(skill => skill.progress >= 90) && (
                <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1">
                  <Star className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            
            <div className="flex-1 text-left">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{profile.name}</h3>
                <span className="text-sm text-gray-500">Age: {profile.age}</span>
              </div>
              
              {profile.skills && (
                <div className="mt-2 space-y-1">
                  {profile.skills.slice(0, 2).map((skill, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <span className="text-gray-600">{skill.category}</span>
                      <div className="ml-2 flex-1">
                        <div className="w-24 h-1 bg-gray-200 rounded-full">
                          <div
                            className="h-full bg-blue-600 rounded-full"
                            style={{ width: `${skill.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <p className="text-xs text-gray-400 mt-2">
                Last active: {profile.lastActive}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}