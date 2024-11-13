import React from 'react';
import { Brain, TrendingUp } from 'lucide-react';
import type { ChildProfile } from '../FeatureTalentDiscovery';

interface VictoriaInsightsProps {
  profile: ChildProfile;
}

export function VictoriaInsights({ profile }: VictoriaInsightsProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Brain className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-900">Victoria's Insights</h3>
      </div>

      <div className="space-y-4">
        <div className="bg-white/80 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <h4 className="font-medium text-gray-900">Recent Progress</h4>
          </div>
          <p className="text-sm text-gray-600">
            {profile.name} has shown significant improvement in {profile.skills?.[0].category}. 
            Consider exploring advanced topics in this area.
          </p>
        </div>

        <div className="bg-white/80 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">Recommended Focus</h4>
          <p className="text-sm text-gray-600">
            Based on recent performance, we recommend focusing on {profile.skills?.[1].category} 
            to maintain balanced development.
          </p>
        </div>
      </div>
    </div>
  );
}