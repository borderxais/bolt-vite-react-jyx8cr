import React from 'react';
import { CheckCircle, AlertCircle, Download, Send, Clock, MapPin } from 'lucide-react';
import type { ChildProfile } from '../FeatureTalentDiscovery';

interface OptimizationResultsProps {
  profile: ChildProfile;
}

export function OptimizationResults({ profile }: OptimizationResultsProps) {
  const optimizationChanges = [
    {
      type: 'removed',
      activity: 'Piano Practice (Thursday)',
      reason: 'Overlapping with Math Tutoring'
    },
    {
      type: 'adjusted',
      activity: 'Soccer Practice',
      reason: 'Moved to earlier time slot for better energy levels'
    },
    {
      type: 'added',
      activity: 'Study Break',
      reason: 'Added between activities for better focus'
    }
  ];

  const recommendations = [
    'Consider moving intensive activities to morning hours',
    'Add short breaks between academic sessions',
    'Balance physical activities throughout the week'
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <div className="flex items-center space-x-3 mb-6">
        <CheckCircle className="w-6 h-6 text-green-600" />
        <h3 className="text-xl font-semibold text-gray-900">Schedule Optimized</h3>
      </div>

      {/* Changes Summary */}
      <div className="space-y-6 mb-8">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900">Optimization Complete</h4>
              <p className="text-sm text-gray-600 mt-1">
                Your schedule has been optimized based on your goals and preferences.
                The following changes have been made:
              </p>
            </div>
          </div>
        </div>

        {/* Changes List */}
        <div className="space-y-4">
          {optimizationChanges.map((change, index) => (
            <div key={index} className="flex items-start space-x-3">
              <AlertCircle className={`w-5 h-5 mt-0.5 ${
                change.type === 'removed' 
                  ? 'text-red-500'
                  : change.type === 'adjusted'
                  ? 'text-yellow-500'
                  : 'text-green-500'
              }`} />
              <div>
                <h5 className="font-medium text-gray-900">{change.activity}</h5>
                <p className="text-sm text-gray-600">{change.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-blue-50 rounded-lg p-4 mb-8">
        <h4 className="font-medium text-gray-900 mb-3">Recommendations</h4>
        <ul className="space-y-2">
          {recommendations.map((rec, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Download className="w-4 h-4" />
          <span>Download Schedule</span>
        </button>
        <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          <Send className="w-4 h-4" />
          <span>Share Schedule</span>
        </button>
      </div>
    </div>
  );
}