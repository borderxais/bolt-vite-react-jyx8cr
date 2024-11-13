import React from 'react';
import { PlusCircle, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { mockProfiles } from '../data/mockProfiles';

interface ProfileSectionProps {
  activeProfile: string | null;
  onProfileSelect: (profileId: string) => void;
}

export function ProfileSection({ activeProfile, onProfileSelect }: ProfileSectionProps) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleAddChild = () => {
    navigate('/onboarding');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{t('profiles.title')}</h2>
        <button 
          onClick={handleAddChild}
          className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
        >
          <PlusCircle className="w-5 h-5" />
          <span>{t('profiles.addChild')}</span>
        </button>
      </div>

      <div className="space-y-4">
        {mockProfiles.map((profile) => (
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
              <p className="text-sm text-gray-500">{t('profiles.age')}: {profile.age}</p>
              <p className="text-xs text-gray-400">{t('profiles.lastActive')}: {profile.lastActive}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}