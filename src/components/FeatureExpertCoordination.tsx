import React, { useState } from 'react';
import { GraduationCap, Search, MapPin, Clock, Globe, DollarSign } from 'lucide-react';
import { FeatureLayout } from './FeatureLayout';
import { PersonalizedSummary } from './expert-coordination/PersonalizedSummary';
import { ProgramsList } from './expert-coordination/ProgramsList';
import { SchoolsList } from './expert-coordination/SchoolsList';
import { FilterBar } from './expert-coordination/FilterBar';
import type { ChildProfile } from './FeatureTalentDiscovery';

const profiles: ChildProfile[] = [
  {
    id: '1',
    name: 'Emma',
    age: 8,
    avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
    lastActive: '2 days ago',
    skills: [
      { category: 'Mathematics', level: 3, progress: 85 },
      { category: 'Arts', level: 4, progress: 92 },
      { category: 'Science', level: 3, progress: 78 },
      { category: 'Music', level: 4, progress: 88 }
    ]
  },
  {
    id: '2',
    name: 'Lucas',
    age: 12,
    avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
    lastActive: '5 hours ago',
    skills: [
      { category: 'Mathematics', level: 4, progress: 95 },
      { category: 'Programming', level: 3, progress: 82 },
      { category: 'Science', level: 4, progress: 90 },
      { category: 'Language', level: 3, progress: 75 }
    ]
  }
];

export type FilterOptions = {
  location: string;
  price: string;
  availability: string;
  mode: 'online' | 'in-person' | 'hybrid' | '';
};

export function FeatureExpertCoordination() {
  const [activeProfile, setActiveProfile] = useState<string>(profiles[0].id);
  const [activeTab, setActiveTab] = useState<'programs' | 'schools'>('programs');
  const [filters, setFilters] = useState<FilterOptions>({
    location: '',
    price: '',
    availability: '',
    mode: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  const currentProfile = profiles.find(p => p.id === activeProfile);

  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="w-12 h-12 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Educational Marketplace</h1>
              <p className="text-xl text-gray-600 mt-2">
                Empowering your child's growth with the right programs and schools, all in one place.
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Victoria connects all educational stakeholders—schools, coaches, and after-school 
            programs—ensuring a collaborative approach for your child's success. Find tailored 
            recommendations for extracurricular programs and schools that align with your 
            child's strengths and goals.
          </p>

          {/* Quick Filter Icons */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>Location-based</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Globe className="w-5 h-5" />
              <span>Online & In-person</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <DollarSign className="w-5 h-5" />
              <span>Various Price Points</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Profile & Filters */}
          <div className="lg:col-span-1">
            {currentProfile && (
              <PersonalizedSummary 
                profile={currentProfile}
                onProfileChange={setActiveProfile}
                profiles={profiles}
              />
            )}
            
            <FilterBar 
              filters={filters}
              onFilterChange={setFilters}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActiveTab('programs')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'programs'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Extra Curricular Programs
              </button>
              <button
                onClick={() => setActiveTab('schools')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'schools'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                School Recommendations
              </button>
            </div>

            {/* Content */}
            {activeTab === 'programs' ? (
              <ProgramsList
                profile={currentProfile!}
                filters={filters}
                searchQuery={searchQuery}
              />
            ) : (
              <SchoolsList
                profile={currentProfile!}
                filters={filters}
                searchQuery={searchQuery}
              />
            )}
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
}