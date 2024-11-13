import React from 'react';
import { Brain, Zap, AlertCircle, ThumbsUp } from 'lucide-react';

interface CognitiveAnalysisProps {
  profileId: string;
}

export function CognitiveAnalysis({ profileId }: CognitiveAnalysisProps) {
  // This would typically come from an API with real analysis
  const analysis = {
    strengths: [
      {
        title: 'Strong Analytical Reasoning',
        description: 'Demonstrates exceptional ability to break down complex problems and identify patterns',
        examples: ['Quick grasp of mathematical concepts', 'Excels in strategic games']
      },
      {
        title: 'Creative Problem-Solving',
        description: 'Shows unique approaches to challenges with innovative solutions',
        examples: ['Novel solutions in science projects', 'Creative storytelling abilities']
      },
      {
        title: 'High Emotional Intelligence',
        description: 'Exhibits strong empathy and social awareness',
        examples: ['Natural leadership in group activities', 'Effective peer mediation']
      }
    ],
    areasForGrowth: [
      {
        title: 'Sequential Processing',
        description: 'Could benefit from strengthening step-by-step procedural thinking',
        recommendations: ['Break down complex tasks', 'Practice systematic approaches']
      },
      {
        title: 'Sustained Attention',
        description: 'Shows higher engagement in interactive vs. passive learning',
        recommendations: ['Active learning strategies', 'Regular break intervals']
      }
    ],
    cognitiveStyle: {
      learningPreference: 'Visual-Spatial',
      thinkingPattern: 'Divergent',
      informationProcessing: 'Global'
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Brain className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">Cognitive Profile Analysis</h3>
      </div>

      {/* Cognitive Style Overview */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <div className="flex items-start space-x-3">
          <Zap className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <h4 className="font-medium text-gray-900">Learning Style Profile</h4>
            <div className="mt-2 space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Learning Preference:</span> {analysis.cognitiveStyle.learningPreference}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Thinking Pattern:</span> {analysis.cognitiveStyle.thinkingPattern}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Information Processing:</span> {analysis.cognitiveStyle.informationProcessing}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strengths */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-4">Key Strengths</h4>
        <div className="space-y-4">
          {analysis.strengths.map((strength, index) => (
            <div key={index} className="bg-green-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <ThumbsUp className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h5 className="font-medium text-gray-900">{strength.title}</h5>
                  <p className="text-sm text-gray-600 mt-1">{strength.description}</p>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-900">Observed in:</p>
                    <ul className="mt-1 text-sm text-gray-600 list-disc list-inside">
                      {strength.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Areas for Growth */}
      <div>
        <h4 className="font-medium text-gray-900 mb-4">Growth Opportunities</h4>
        <div className="space-y-4">
          {analysis.areasForGrowth.map((area, index) => (
            <div key={index} className="bg-amber-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-1" />
                <div>
                  <h5 className="font-medium text-gray-900">{area.title}</h5>
                  <p className="text-sm text-gray-600 mt-1">{area.description}</p>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-900">Recommendations:</p>
                    <ul className="mt-1 text-sm text-gray-600 list-disc list-inside">
                      {area.recommendations.map((rec, i) => (
                        <li key={i}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}