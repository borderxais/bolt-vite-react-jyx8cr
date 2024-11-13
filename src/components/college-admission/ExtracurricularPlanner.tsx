import React from 'react';
import { Users, Star, Calendar, Award, TrendingUp, Plus } from 'lucide-react';

interface Activity {
  id: string;
  name: string;
  category: string;
  role: string;
  duration: string;
  impact: string;
  status: 'active' | 'planned' | 'completed';
  matchScore: number;
}

const activities: Activity[] = [
  {
    id: '1',
    name: 'Student Government',
    category: 'Leadership',
    role: 'President',
    duration: '2 years',
    impact: 'Led initiatives improving student life, managed $50k budget',
    status: 'active',
    matchScore: 95
  },
  {
    id: '2',
    name: 'Science Olympiad',
    category: 'Academic',
    role: 'Team Captain',
    duration: '3 years',
    impact: 'State-level awards in Biology and Chemistry events',
    status: 'active',
    matchScore: 92
  },
  {
    id: '3',
    name: 'Community Service Club',
    category: 'Service',
    role: 'Volunteer Coordinator',
    duration: '1.5 years',
    impact: 'Organized 10+ community events, 500+ service hours',
    status: 'active',
    matchScore: 88
  }
];

export function ExtracurricularPlanner() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Users className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Extracurricular Activities</h3>
          </div>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Activity</span>
          </button>
        </div>

        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium text-gray-900">{activity.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : activity.status === 'planned'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{activity.role}</p>
                </div>
                <div className="flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">{activity.matchScore}% Impact</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{activity.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Award className="w-4 h-4" />
                  <span>{activity.category}</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h5 className="text-sm font-medium text-gray-900 mb-2">Impact & Achievements</h5>
                <p className="text-sm text-gray-600">{activity.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Victoria's Recommendations</h4>
            <p className="text-sm text-gray-600 mb-4">
              Consider adding a STEM-focused research project or internship to strengthen your profile. 
              Your leadership activities are strong, but adding technical experience would create a 
              more well-rounded application.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}