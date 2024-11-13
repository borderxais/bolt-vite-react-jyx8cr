import React, { useState } from 'react';
import { GraduationCap, Brain, Target, ChevronRight, BookOpen, Users, Star, Calendar, FileText, MessageSquare } from 'lucide-react';
import { FeatureLayout } from './FeatureLayout';
import { AssessmentTool } from './college-admission/AssessmentTool';
import { TestPrepSection } from './college-admission/TestPrepSection';
import { ExtracurricularPlanner } from './college-admission/ExtracurricularPlanner';
import { CollegeMatchingTool } from './college-admission/CollegeMatchingTool';
import { ConsultantSection } from './college-admission/ConsultantSection';
import { WorkshopsEvents } from './college-admission/WorkshopsEvents';
import { UniversityProjection } from './expert-coordination/UniversityProjection';

export function FeatureCollegeAdmission() {
  const [activeSection, setActiveSection] = useState<string>('assessment');

  // Sample profile for demonstration
  const sampleProfile = {
    id: '1',
    name: 'Emma',
    age: 16,
    avatar: '',
    lastActive: 'Now',
    skills: [
      { category: 'Mathematics', level: 4, progress: 92 },
      { category: 'Science', level: 4, progress: 88 },
      { category: 'Leadership', level: 3, progress: 85 }
    ]
  };

  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="w-12 h-12 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Comprehensive College Admission Prep</h1>
              <p className="text-xl text-gray-600 mt-2">
                Your pathway to college success, with personalized support at every step.
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            With a team of dedicated consultants and former admissions officers from colleges and 
            universities across the U.S., we offer expert guidance to maximize students' chances 
            of admission to their target schools.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
            <div className="flex items-start space-x-4">
              <Brain className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  AI-Powered Admissions Strategy
                </h2>
                <p className="text-gray-600">
                  Victoria, your AI co-pilot, analyzes your profile and provides personalized 
                  recommendations while connecting you with expert consultants who guide you 
                  through every step of the admissions journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* University Projection Section */}
        <div className="mb-16">
          <UniversityProjection profile={sampleProfile} />
        </div>

        {/* Main Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Journey</h3>
              <nav className="space-y-2">
                {[
                  { id: 'assessment', icon: Target, label: 'Assessment & Strategy' },
                  { id: 'test-prep', icon: BookOpen, label: 'Test Prep Guidance' },
                  { id: 'extracurricular', icon: Users, label: 'Extracurricular Development' },
                  { id: 'college-match', icon: Star, label: 'College Matching' },
                  { id: 'consultants', icon: MessageSquare, label: 'Expert Consultants' },
                  { id: 'workshops', icon: Calendar, label: 'Workshops & Events' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeSection === 'assessment' && <AssessmentTool />}
            {activeSection === 'test-prep' && <TestPrepSection />}
            {activeSection === 'extracurricular' && <ExtracurricularPlanner />}
            {activeSection === 'college-match' && <CollegeMatchingTool />}
            {activeSection === 'consultants' && <ConsultantSection />}
            {activeSection === 'workshops' && <WorkshopsEvents />}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                school: "Stanford University",
                quote: "The personalized guidance and strategic planning made all the difference in my application journey."
              },
              {
                name: "David L.",
                school: "MIT",
                quote: "Victoria's insights helped me focus on the right activities and build a compelling profile."
              },
              {
                name: "Emma K.",
                school: "Harvard University",
                quote: "The combination of AI insights and expert consultation gave me the confidence to aim high."
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-blue-600">{story.school}</p>
                  </div>
                </div>
                <p className="text-gray-600">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
}