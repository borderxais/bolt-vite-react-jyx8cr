import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

export function TalentDiscoveryHero() {
  return (
    <div className="max-w-3xl mb-16">
      <div className="flex items-center space-x-3 mb-6">
        <Brain className="w-12 h-12 text-blue-600" />
        <h1 className="text-4xl font-bold text-gray-900">Talent Discovery</h1>
      </div>
      
      <p className="text-xl text-gray-600 mb-8">
        Embark on a journey of discovery with Victoria, your AI co-pilot, to uncover and nurture your child's unique talents and potential.
      </p>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
        <div className="flex items-start space-x-4">
          <Sparkles className="w-8 h-8 text-blue-600 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              A Continuous Journey of Growth
            </h2>
            <p className="text-gray-600">
              Talent discovery is an ongoing process. Victoria will be your guide, continuously monitoring, evaluating, and supporting your child's development through AI-powered insights and personalized recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}