import React from 'react';
import { MapPin, ChevronRight, Star, Calendar } from 'lucide-react';

interface Milestone {
  id: string;
  title: string;
  description: string;
  timeline: string;
  status: 'completed' | 'current' | 'upcoming';
  category: string;
  targetLevel: number;
}

interface LearningRoadmapProps {
  milestones: Milestone[];
}

export function LearningRoadmap({ milestones }: LearningRoadmapProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <MapPin className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">Learning Roadmap</h3>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

        {/* Milestones */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={milestone.id} className="relative flex items-start">
              {/* Timeline dot */}
              <div className={`absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                milestone.status === 'completed'
                  ? 'bg-green-500 border-green-500'
                  : milestone.status === 'current'
                  ? 'bg-blue-500 border-blue-500'
                  : 'bg-white border-gray-300'
              }`} />

              {/* Content */}
              <div className="ml-16 flex-1">
                <div className={`bg-gray-50 rounded-lg p-6 ${
                  milestone.status === 'current' ? 'ring-2 ring-blue-200' : ''
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{milestone.title}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{milestone.timeline}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">{milestone.category}</span>
                      <div className="flex">
                        {Array.from({ length: milestone.targetLevel }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600">{milestone.description}</p>

                  {milestone.status === 'current' && (
                    <div className="mt-4 flex items-center justify-end">
                      <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Connection line to next milestone */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-8 top-full h-8 w-0.5 bg-gray-200" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}