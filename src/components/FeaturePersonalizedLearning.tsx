import React, { useState } from 'react';
import { Brain, Target, Star, ChevronRight, BookOpen, Music, Palette, Trophy } from 'lucide-react';
import { FeatureLayout } from './FeatureLayout';
import { ProfileSelector } from './personalized-learning/ProfileSelector';
import { CurrentState } from './personalized-learning/CurrentState';
import { GoalSetting } from './personalized-learning/GoalSetting';
import { LearningRoadmap } from './personalized-learning/LearningRoadmap';
import { VictoriaInsights } from './personalized-learning/VictoriaInsights';
import type { ChildProfile } from './FeatureTalentDiscovery';

const profiles: ChildProfile[] = [
  {
    id: '1',
    name: 'Emma',
    age: 8,
    avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
    lastActive: '2 days ago',
    skills: [
      { category: 'Leadership', level: 3, progress: 75 },
      { category: 'Mathematics', level: 4, progress: 92 },
      { category: 'Science', level: 4, progress: 88 },
      { category: 'Language', level: 3, progress: 82 },
      { category: 'Sports', level: 2, progress: 65 },
      { category: 'Music & Arts', level: 3, progress: 78 }
    ]
  },
  {
    id: '2',
    name: 'Lucas',
    age: 12,
    avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
    lastActive: '5 hours ago',
    skills: [
      { category: 'Leadership', level: 4, progress: 85 },
      { category: 'Mathematics', level: 4, progress: 95 },
      { category: 'Science', level: 3, progress: 80 },
      { category: 'Language', level: 4, progress: 88 },
      { category: 'Sports', level: 3, progress: 70 },
      { category: 'Music & Arts', level: 2, progress: 60 }
    ]
  }
];

const milestones = [
  {
    id: '1',
    title: 'Advanced Mathematics Mastery',
    description: 'Complete advanced algebra concepts and begin calculus preparation',
    timeline: 'Current Quarter',
    status: 'current' as const,
    category: 'Mathematics',
    targetLevel: 5
  },
  {
    id: '2',
    title: 'Science Fair Project Leadership',
    description: 'Lead a team of 4 students in developing an innovative science project',
    timeline: 'Next Quarter',
    status: 'upcoming' as const,
    category: 'Leadership',
    targetLevel: 4
  },
  {
    id: '3',
    title: 'Language Arts Publication',
    description: 'Write and publish a short story in the school literary magazine',
    timeline: 'Next Semester',
    status: 'upcoming' as const,
    category: 'Language',
    targetLevel: 4
  },
  {
    id: '4',
    title: 'Regional Sports Competition',
    description: 'Participate in the regional swimming championship',
    timeline: 'Next Year',
    status: 'upcoming' as const,
    category: 'Sports',
    targetLevel: 3
  }
];

export interface Goal {
  id: string;
  category: string;
  title: string;
  description: string;
  timeframe: '1year' | '2year' | '3year';
  status: 'active' | 'completed' | 'upcoming';
}

export function FeaturePersonalizedLearning() {
  const [activeProfile, setActiveProfile] = useState<string>(profiles[0].id);
  const [selectedGoals, setSelectedGoals] = useState<Goal[]>([]);
  
  const currentProfile = profiles.find(p => p.id === activeProfile);

  const handleGoalSelect = (goal: Goal) => {
    setSelectedGoals(prev => [...prev, goal]);
  };

  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="w-12 h-12 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Personalized Learning Path</h1>
              <p className="text-xl text-gray-600 mt-2">
                Set objectives, build a future, and unlock your child's potential with Victoria's tailored learning plan.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mt-8">
            <div className="flex items-start space-x-4">
              <Target className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Your Child's Journey Starts Here
                </h2>
                <p className="text-gray-600">
                  Together with Victoria, we'll create a personalized learning path that adapts 
                  to your child's unique talents and goals. Start by selecting your objectives, and 
                  watch as we craft a roadmap for success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <ProfileSelector
              profiles={profiles}
              activeProfile={activeProfile}
              onProfileSelect={setActiveProfile}
            />
            
            {currentProfile && (
              <VictoriaInsights profile={currentProfile} />
            )}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {currentProfile && (
              <>
                <CurrentState profile={currentProfile} />
                
                <LearningRoadmap milestones={milestones} />
                
                <GoalSetting
                  selectedGoals={selectedGoals}
                  onGoalSelect={handleGoalSelect}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
}