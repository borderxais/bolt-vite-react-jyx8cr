import React from 'react';
import { GraduationCap, TrendingUp, Star, AlertCircle } from 'lucide-react';
import type { ChildProfile } from '../FeatureTalentDiscovery';

interface University {
  name: string;
  matchScore: number;
  logo: string;
  requirements: {
    category: string;
    current: number;
    target: number;
    onTrack: boolean;
  }[];
  admissionChance: 'high' | 'medium' | 'reach';
}

interface UniversityProjectionProps {
  profile: ChildProfile;
}

const topUniversities: University[] = [
  {
    name: "Harvard University",
    matchScore: 85,
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
    requirements: [
      { category: "GPA", current: 3.9, target: 4.0, onTrack: true },
      { category: "SAT", current: 1480, target: 1540, onTrack: true },
      { category: "Leadership", current: 8, target: 10, onTrack: true }
    ],
    admissionChance: "reach"
  },
  {
    name: "Stanford University",
    matchScore: 88,
    logo: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80",
    requirements: [
      { category: "GPA", current: 3.9, target: 4.0, onTrack: true },
      { category: "SAT", current: 1480, target: 1520, onTrack: true },
      { category: "STEM Activities", current: 9, target: 10, onTrack: true }
    ],
    admissionChance: "reach"
  },
  {
    name: "MIT",
    matchScore: 92,
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80",
    requirements: [
      { category: "GPA", current: 3.9, target: 4.0, onTrack: true },
      { category: "SAT Math", current: 790, target: 800, onTrack: true },
      { category: "Research Projects", current: 3, target: 4, onTrack: true }
    ],
    admissionChance: "medium"
  }
];

export function UniversityProjection({ profile }: UniversityProjectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <GraduationCap className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">University Projection</h3>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            On Track
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {topUniversities.map((university, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={university.logo}
                  alt={university.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{university.name}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">
                      {university.matchScore}% Match
                    </span>
                    <span className={`text-sm px-2 py-0.5 rounded-full ${
                      university.admissionChance === 'high'
                        ? 'bg-green-100 text-green-700'
                        : university.admissionChance === 'medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {university.admissionChance === 'high'
                        ? 'Target'
                        : university.admissionChance === 'medium'
                        ? 'Match'
                        : 'Reach'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {university.requirements.map((req, reqIndex) => (
                <div key={reqIndex} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">{req.category}</span>
                      <span className="text-sm font-medium text-gray-900">
                        {req.current} / {req.target}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          req.onTrack ? 'bg-green-500' : 'bg-yellow-500'
                        }`}
                        style={{ width: `${(req.current / req.target) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!university.requirements.every(req => req.onTrack) && (
              <div className="mt-4 flex items-start space-x-2 text-sm bg-yellow-50 text-yellow-700 p-3 rounded-lg">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>Some areas need attention to improve admission chances</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Brain className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-gray-900">Victoria's Insight</h4>
            <p className="text-sm text-gray-600 mt-1">
              Based on {profile.name}'s strong performance in STEM subjects and leadership activities, 
              they're well-positioned for top universities. Focus on research projects and 
              standardized test prep to further strengthen the application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}