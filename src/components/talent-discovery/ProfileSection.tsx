import React from 'react';
import { PlusCircle, User } from 'lucide-react';
import type { ChildProfile } from '../FeatureTalentDiscovery';

interface ProfileSectionProps {
  activeProfile: string | null;
  onProfileSelect: (profileId: string) => void;
}

export function ProfileSection({ activeProfile, onProfileSelect }: ProfileSectionProps) {
  const profiles: ChildProfile[] = [
    {
      id: '1',
      name: 'Emma',
      age: 8,
      avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
      lastActive: '2 days ago'
    },
    {
      id: '2',
      name: 'Lucas',
      age: 12,
      avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
      lastActive: '5 hours ago'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Children's Profiles</h2>
        <button className="text-blue-600 hover:text-blue-700 flex items-center space-x-1">
          <PlusCircle className="w-5 h-5" />
          <span>Add Child</span>
        </button>
      </div>

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
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-medium">{profile.name}</h3>
              <p className="text-sm text-gray-500">Age: {profile.age}</p>
              <p className="text-xs text-gray-400">Last active: {profile.lastActive}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}