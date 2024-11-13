import React from 'react';
import { Briefcase, Star, TrendingUp, GraduationCap } from 'lucide-react';

interface CareerProjectionProps {
  profileId: string;
}

export function CareerProjection({ profileId }: CareerProjectionProps) {
  // This would typically come from an API based on the child's profile
  const careers = [
    {
      field: 'STEM',
      careers: [
        {
          title: 'Data Scientist',
          match: 95,
          description: 'Perfect alignment with strong analytical skills and mathematical aptitude',
          requiredSkills: ['Mathematics', 'Programming', 'Analytical Thinking'],
          preparatorySteps: [
            'Advanced mathematics courses',
            'Introduction to programming',
            'Statistics and probability'
          ]
        },
        {
          title: 'Research Scientist',
          match: 92,
          description: 'Well-suited for the demonstrated curiosity and methodical approach',
          requiredSkills: ['Scientific Method', 'Critical Thinking', 'Research'],
          preparatorySteps: [
            'Science fair projects',
            'Research internships',
            'Advanced science courses'
          ]
        }
      ]
    },
    {
      field: 'Creative & Leadership',
      careers: [
        {
          title: 'Innovation Consultant',
          match: 88,
          description: 'Combines creative problem-solving with strong interpersonal skills',
          requiredSkills: ['Problem Solving', 'Communication', 'Leadership'],
          preparatorySteps: [
            'Leadership programs',
            'Public speaking',
            'Project management experience'
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Briefcase className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">Career Projections</h3>
      </div>

      <div className="space-y-8">
        {careers.map((field, index) => (
          <div key={index}>
            <h4 className="font-medium text-gray-900 mb-4">{field.field}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {field.careers.map((career, careerIndex) => (
                <div key={careerIndex} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h5 className="font-medium text-gray-900">{career.title}</h5>
                      <div className="flex items-center space-x-2 mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{career.match}% Match</span>
                      </div>
                    </div>
                    <TrendingUp className={`w-5 h-5 ${
                      career.match >= 90 ? 'text-green-500' : 'text-blue-500'
                    }`} />
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{career.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h6 className="text-sm font-medium text-gray-900 mb-2">Key Skills Required</h6>
                      <div className="flex flex-wrap gap-2">
                        {career.requiredSkills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h6 className="text-sm font-medium text-gray-900 mb-2">Preparatory Steps</h6>
                      <div className="space-y-2">
                        {career.preparatorySteps.map((step, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <GraduationCap className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}