import React, { useState } from 'react';
import { GraduationCap, Brain } from 'lucide-react';
import { FeatureLayout } from './FeatureLayout';
import { AssessmentTool } from './college-admission/AssessmentTool';
import { TestPrepSection } from './college-admission/TestPrepSection';
import { ExtracurricularPlanner } from './college-admission/ExtracurricularPlanner';
import { CollegeMatchingTool } from './college-admission/CollegeMatchingTool';
import { ConsultantSection } from './college-admission/ConsultantSection';
import { WorkshopsEvents } from './college-admission/WorkshopsEvents';

export function FeatureTalentDevelopment() {
  const [activeSection, setActiveSection] = useState<'assessment' | 'test-prep' | 'extracurricular' | 'matching' | 'consultants' | 'workshops'>('assessment');

  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="w-12 h-12 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">College Admission Journey</h1>
              <p className="text-xl text-gray-600 mt-2">
                Your comprehensive path to college success, guided by expert consultants and AI-powered insights.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mt-8">
            <div className="flex items-start space-x-4">
              <Brain className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Strategic College Planning
                </h2>
                <p className="text-gray-600">
                  From initial assessment to final applications, we provide comprehensive support 
                  to maximize your chances of admission to top universities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {[
              { id: 'assessment', label: 'Assessment' },
              { id: 'test-prep', label: 'Test Prep' },
              { id: 'extracurricular', label: 'Activities' },
              { id: 'matching', label: 'College Match' },
              { id: 'consultants', label: 'Consultants' },
              { id: 'workshops', label: 'Workshops' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as typeof activeSection)}
                className={`py-4 text-center ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div>
          {activeSection === 'assessment' && <AssessmentTool />}
          {activeSection === 'test-prep' && <TestPrepSection />}
          {activeSection === 'extracurricular' && <ExtracurricularPlanner />}
          {activeSection === 'matching' && <CollegeMatchingTool />}
          {activeSection === 'consultants' && <ConsultantSection />}
          {activeSection === 'workshops' && <WorkshopsEvents />}
        </div>
      </div>
    </FeatureLayout>
  );
}