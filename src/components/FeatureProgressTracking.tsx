import React, { useState } from 'react';
import { Brain, Star, ChevronRight, Activity, LineChart, Trophy, Target } from 'lucide-react';
import { FeatureLayout } from './FeatureLayout';
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

const skillTrees = {
  leadership: {
    category: 'Leadership',
    color: 'purple',
    skills: [
      {
        id: 'lead-1',
        name: 'Team Communication',
        level: 1,
        progress: 100,
        status: 'completed',
        prerequisites: [],
        description: 'Basic communication and collaboration skills',
        recentActivities: ['Group discussion participation', 'Team presentation'],
        nextSteps: ['Lead small group discussions', 'Organize study groups']
      },
      {
        id: 'lead-2',
        name: 'Group Facilitation',
        level: 2,
        progress: 85,
        status: 'in-progress',
        prerequisites: ['lead-1'],
        description: 'Leading group discussions and activities',
        recentActivities: ['Led class debate', 'Organized team building activity'],
        nextSteps: ['Lead larger groups', 'Handle conflict resolution']
      },
      {
        id: 'lead-3',
        name: 'Project Management',
        level: 3,
        progress: 60,
        status: 'in-progress',
        prerequisites: ['lead-2'],
        description: 'Planning and executing group projects',
        recentActivities: ['Managing science fair team', 'Event planning'],
        nextSteps: ['Lead school-wide project', 'Develop resource management']
      },
      {
        id: 'lead-4',
        name: 'Strategic Leadership',
        level: 4,
        progress: 30,
        status: 'in-progress',
        prerequisites: ['lead-3'],
        description: 'Advanced leadership and strategy development',
        recentActivities: ['Student council participation', 'Club leadership'],
        nextSteps: ['Run for student body president', 'Develop school initiatives']
      }
    ]
  },
  mathematics: {
    category: 'Mathematics',
    color: 'blue',
    skills: [
      {
        id: 'math-1',
        name: 'Basic Arithmetic',
        level: 1,
        progress: 100,
        status: 'completed',
        prerequisites: [],
        description: 'Fundamental math operations',
        recentActivities: ['Speed calculation practice', 'Word problems'],
        nextSteps: ['Begin pre-algebra', 'Complex word problems']
      },
      {
        id: 'math-2',
        name: 'Pre-Algebra',
        level: 2,
        progress: 100,
        status: 'completed',
        prerequisites: ['math-1'],
        description: 'Introduction to algebraic concepts',
        recentActivities: ['Variable manipulation', 'Simple equations'],
        nextSteps: ['Start algebra', 'Mathematical modeling']
      },
      {
        id: 'math-3',
        name: 'Algebra',
        level: 3,
        progress: 75,
        status: 'in-progress',
        prerequisites: ['math-2'],
        description: 'Advanced algebraic operations',
        recentActivities: ['Quadratic equations', 'Function analysis'],
        nextSteps: ['Complex equations', 'Begin geometry']
      },
      {
        id: 'math-4',
        name: 'Geometry',
        level: 3,
        progress: 40,
        status: 'in-progress',
        prerequisites: ['math-2'],
        description: 'Spatial reasoning and geometric proofs',
        recentActivities: ['Triangle theorems', 'Area calculations'],
        nextSteps: ['3D geometry', 'Trigonometry basics']
      },
      {
        id: 'math-5',
        name: 'Advanced Algebra',
        level: 4,
        progress: 20,
        status: 'in-progress',
        prerequisites: ['math-3'],
        description: 'Complex algebraic concepts',
        recentActivities: ['Polynomial functions', 'Series and sequences'],
        nextSteps: ['Calculus preparation', 'Advanced functions']
      }
    ]
  },
  science: {
    category: 'Science',
    color: 'green',
    skills: [
      {
        id: 'sci-1',
        name: 'Scientific Method',
        level: 1,
        progress: 100,
        status: 'completed',
        prerequisites: [],
        description: 'Basic scientific inquiry process',
        recentActivities: ['Simple experiments', 'Data collection'],
        nextSteps: ['Design experiments', 'Hypothesis testing']
      },
      {
        id: 'sci-2',
        name: 'Biology Basics',
        level: 2,
        progress: 90,
        status: 'in-progress',
        prerequisites: ['sci-1'],
        description: 'Fundamental life science concepts',
        recentActivities: ['Cell study', 'Ecosystem analysis'],
        nextSteps: ['Advanced biology', 'Laboratory techniques']
      },
      {
        id: 'sci-3',
        name: 'Chemistry Fundamentals',
        level: 2,
        progress: 85,
        status: 'in-progress',
        prerequisites: ['sci-1'],
        description: 'Basic chemical principles',
        recentActivities: ['Atomic structure', 'Chemical reactions'],
        nextSteps: ['Advanced chemistry', 'Molecular studies']
      },
      {
        id: 'sci-4',
        name: 'Physics Introduction',
        level: 3,
        progress: 60,
        status: 'in-progress',
        prerequisites: ['sci-1', 'math-3'],
        description: 'Basic physics concepts',
        recentActivities: ['Force and motion', 'Energy studies'],
        nextSteps: ['Advanced physics', 'Mechanics']
      }
    ]
  },
  language: {
    category: 'Language',
    color: 'indigo',
    skills: [
      {
        id: 'lang-1',
        name: 'Reading Comprehension',
        level: 1,
        progress: 100,
        status: 'completed',
        prerequisites: [],
        description: 'Basic text analysis and understanding',
        recentActivities: ['Novel analysis', 'Reading workshop'],
        nextSteps: ['Advanced literature', 'Critical analysis']
      },
      {
        id: 'lang-2',
        name: 'Writing Fundamentals',
        level: 2,
        progress: 90,
        status: 'in-progress',
        prerequisites: ['lang-1'],
        description: 'Basic writing skills',
        recentActivities: ['Essay writing', 'Grammar practice'],
        nextSteps: ['Creative writing', 'Research papers']
      },
      {
        id: 'lang-3',
        name: 'Creative Writing',
        level: 3,
        progress: 70,
        status: 'in-progress',
        prerequisites: ['lang-2'],
        description: 'Advanced writing techniques',
        recentActivities: ['Short story writing', 'Poetry'],
        nextSteps: ['Novel writing', 'Publication']
      },
      {
        id: 'lang-4',
        name: 'Public Speaking',
        level: 3,
        progress: 65,
        status: 'in-progress',
        prerequisites: ['lang-2'],
        description: 'Oral communication skills',
        recentActivities: ['Class presentations', 'Debate club'],
        nextSteps: ['Speech competition', 'Debate tournament']
      }
    ]
  },
  sports: {
    category: 'Sports',
    color: 'red',
    skills: [
      {
        id: 'sport-1',
        name: 'Basic Fitness',
        level: 1,
        progress: 100,
        status: 'completed',
        prerequisites: [],
        description: 'Fundamental physical fitness',
        recentActivities: ['Running practice', 'Strength training'],
        nextSteps: ['Endurance building', 'Speed training']
      },
      {
        id: 'sport-2',
        name: 'Swimming',
        level: 2,
        progress: 85,
        status: 'in-progress',
        prerequisites: ['sport-1'],
        description: 'Swimming techniques and water safety',
        recentActivities: ['Freestyle practice', 'Endurance swimming'],
        nextSteps: ['Advanced strokes', 'Competition prep']
      },
      {
        id: 'sport-3',
        name: 'Team Sports',
        level: 2,
        progress: 80,
        status: 'in-progress',
        prerequisites: ['sport-1'],
        description: 'Basic team sports skills',
        recentActivities: ['Basketball practice', 'Soccer training'],
        nextSteps: ['Team strategy', 'Leadership role']
      },
      {
        id: 'sport-4',
        name: 'Track & Field',
        level: 3,
        progress: 60,
        status: 'in-progress',
        prerequisites: ['sport-1'],
        description: 'Advanced running and field events',
        recentActivities: ['Sprint training', 'Long jump practice'],
        nextSteps: ['Competition preparation', 'Specialized events']
      }
    ]
  },
  arts: {
    category: 'Music & Arts',
    color: 'yellow',
    skills: [
      {
        id: 'art-1',
        name: 'Music Theory',
        level: 1,
        progress: 100,
        status: 'completed',
        prerequisites: [],
        description: 'Basic music concepts',
        recentActivities: ['Note reading', 'Rhythm practice'],
        nextSteps: ['Instrument selection', 'Advanced theory']
      },
      {
        id: 'art-2',
        name: 'Piano Basics',
        level: 2,
        progress: 75,
        status: 'in-progress',
        prerequisites: ['art-1'],
        description: 'Fundamental piano skills',
        recentActivities: ['Scale practice', 'Simple pieces'],
        nextSteps: ['Advanced pieces', 'Performance prep']
      },
      {
        id: 'art-3',
        name: 'Drawing',
        level: 2,
        progress: 70,
        status: 'in-progress',
        prerequisites: ['art-1'],
        description: 'Basic drawing techniques',
        recentActivities: ['Sketching practice', 'Perspective drawing'],
        nextSteps: ['Advanced techniques', 'Portfolio development']
      },
      {
        id: 'art-4',
        name: 'Painting',
        level: 3,
        progress: 40,
        status: 'in-progress',
        prerequisites: ['art-3'],
        description: 'Painting techniques and color theory',
        recentActivities: ['Watercolor practice', 'Color mixing'],
        nextSteps: ['Advanced painting', 'Art exhibition']
      }
    ]
  }
};

export function FeatureProgressTracking() {
  const [activeProfile, setActiveProfile] = useState<string>(profiles[0].id);
  const currentProfile = profiles.find(p => p.id === activeProfile);

  const progressData = currentProfile?.skills?.map(skill => ({
    subject: skill.category,
    progress: skill.progress,
    trend: skill.progress > 80 ? 'up' as const : 'stable' as const
  })) || [];

  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Progress Tracking</h1>
          </div>
          
          <p className="text-xl text-gray-600 mb-8">
            Monitor your child's educational journey with real-time insights and detailed analytics 
            that help you make informed decisions about their learning path.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Profile Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Child</h2>
              <div className="space-y-4">
                {profiles.map((profile) => (
                  <button
                    key={profile.id}
                    onClick={() => setActiveProfile(profile.id)}
                    className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-colors ${
                      activeProfile === profile.id 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <img 
                      src={profile.avatar} 
                      alt={profile.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 text-left">
                      <h3 className="font-medium">{profile.name}</h3>
                      <p className="text-sm text-gray-500">Age: {profile.age}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {currentProfile && (
              <>
                {/* Skill Overview */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Activity className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Skill Overview</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentProfile.skills?.map((skill, index) => (
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
                          Level {skill.level} • {skill.progress}% mastered
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skill Trees */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Target className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Skill Development Trees</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.values(skillTrees).map((tree) => (
                      <div
                        key={tree.category}
                        className="bg-gray-50 rounded-lg p-6"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          {tree.category}
                        </h4>
                        <div className="space-y-4">
                          {tree.skills.map((skill) => (
                            <div
                              key={skill.id}
                              className={`relative p-4 rounded-lg border-2 ${
                                skill.status === 'completed'
                                  ? 'border-green-200 bg-green-50'
                                  : skill.status === 'in-progress'
                                  ? 'border-blue-200 bg-blue-50'
                                  : 'border-gray-200 bg-white'
                              }`}
                            >
                              <h5 className="font-medium text-gray-900">{skill.name}</h5>
                              <p className="text-sm text-gray-600 mt-1">
                                Level {skill.level} • {skill.progress}%
                              </p>
                              {skill.prerequisites.length > 0 && (
                                <div className="absolute -top-4 left-1/2 w-px h-4 bg-gray-300" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Achievements */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Trophy className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Recent Achievements</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentProfile.skills?.map((skill, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <div>
                          <h4 className="font-medium text-gray-900">{skill.category}</h4>
                          <p className="text-sm text-gray-600">
                            Reached Level {skill.level} with {skill.progress}% mastery
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
}