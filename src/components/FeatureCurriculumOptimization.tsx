import React, { useState } from 'react';
import { Calendar, Target, Brain, ChevronRight, Clock, Download, Send, Printer } from 'lucide-react';
import { FeatureLayout } from './FeatureLayout';
import { CalendarView } from './curriculum-optimization/CalendarView';
import { GoalsSetup } from './curriculum-optimization/GoalsSetup';
import { ImportCalendar } from './curriculum-optimization/ImportCalendar';
import { OptimizationResults } from './curriculum-optimization/OptimizationResults';
import { ProfileSelector } from './personalized-learning/ProfileSelector';
import type { ChildProfile } from './FeatureTalentDiscovery';

const profiles: ChildProfile[] = [
  {
    id: '1',
    name: 'Emma',
    age: 8,
    avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
    lastActive: '2 days ago',
    skills: [
      { category: 'Sports', level: 3, progress: 75 },
      { category: 'Arts', level: 4, progress: 88 },
      { category: 'Music', level: 2, progress: 45 },
      { category: 'Academics', level: 4, progress: 92 }
    ]
  },
  {
    id: '2',
    name: 'Lucas',
    age: 12,
    avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
    lastActive: '5 hours ago',
    skills: [
      { category: 'Sports', level: 4, progress: 85 },
      { category: 'Arts', level: 2, progress: 60 },
      { category: 'Music', level: 3, progress: 70 },
      { category: 'Academics', level: 4, progress: 90 }
    ]
  }
];

export function FeatureCurriculumOptimization() {
  const [activeProfile, setActiveProfile] = useState<string>(profiles[0].id);
  const [isOptimized, setIsOptimized] = useState(false);
  const [activeTab, setActiveTab] = useState<'calendar' | 'goals'>('calendar');
  
  const currentProfile = profiles.find(p => p.id === activeProfile);

  const handleOptimize = () => {
    setIsOptimized(true);
  };

  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="w-12 h-12 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Extra Curriculum Optimization</h1>
              <p className="text-xl text-gray-600 mt-2">
                Optimize your child's schedule for a balanced and holistic development plan.
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Create an optimized schedule that aligns with your child's long-term educational goals 
            while maintaining a healthy balance between different activities.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
            <div className="flex items-start space-x-4">
              <Brain className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  AI-Powered Schedule Optimization
                </h2>
                <p className="text-gray-600">
                  Victoria analyzes your child's current activities and goals to create an 
                  optimized schedule that maximizes development while preventing burnout.
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

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-2 p-2 text-left hover:bg-gray-50 rounded-lg">
                  <Download className="w-5 h-5 text-gray-500" />
                  <span>Import Calendar</span>
                </button>
                <button className="w-full flex items-center space-x-2 p-2 text-left hover:bg-gray-50 rounded-lg">
                  <Printer className="w-5 h-5 text-gray-500" />
                  <span>Print Schedule</span>
                </button>
                <button className="w-full flex items-center space-x-2 p-2 text-left hover:bg-gray-50 rounded-lg">
                  <Send className="w-5 h-5 text-gray-500" />
                  <span>Send to Phone</span>
                </button>
              </div>
            </div>

            {/* Optimization Status */}
            {isOptimized && (
              <div className="bg-green-50 rounded-xl p-6 mt-6">
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Schedule Optimized</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Your child's schedule has been optimized for maximum effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  <button
                    onClick={() => setActiveTab('calendar')}
                    className={`px-6 py-4 text-sm font-medium border-b-2 ${
                      activeTab === 'calendar'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Calendar View
                  </button>
                  <button
                    onClick={() => setActiveTab('goals')}
                    className={`px-6 py-4 text-sm font-medium border-b-2 ${
                      activeTab === 'goals'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Goals & Objectives
                  </button>
                </nav>
              </div>
            </div>

            {/* Content */}
            {activeTab === 'calendar' ? (
              <>
                <ImportCalendar />
                <CalendarView profile={currentProfile!} />
              </>
            ) : (
              <GoalsSetup profile={currentProfile!} onOptimize={handleOptimize} />
            )}

            {isOptimized && <OptimizationResults profile={currentProfile!} />}
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
}