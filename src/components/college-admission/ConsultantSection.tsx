import React from 'react';
import { MessageSquare, Calendar, Star, Award, BookOpen } from 'lucide-react';

interface Consultant {
  id: string;
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  education: string;
  image: string;
  rating: number;
  availability: string;
}

const consultants: Consultant[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    title: 'Senior Admissions Consultant',
    experience: 'Former Admissions Officer at Stanford University',
    specialties: ['Ivy League Admissions', 'STEM Programs', 'International Students'],
    education: 'Ph.D. in Education, Harvard University',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    rating: 4.9,
    availability: 'Available next week'
  },
  {
    id: '2',
    name: 'Michael Thompson',
    title: 'College Planning Specialist',
    experience: 'Former Dean of Admissions at MIT',
    specialties: ['Engineering Programs', 'Research Applications', 'Scholarship Planning'],
    education: 'M.Ed. in Higher Education, Yale University',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    rating: 4.8,
    availability: 'Available tomorrow'
  }
];

export function ConsultantSection() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <MessageSquare className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">Expert Consultants</h3>
        </div>

        <p className="text-gray-600 mb-4">
          Connect with our experienced admissions consultants who provide personalized guidance 
          throughout your college application journey.
        </p>
      </div>

      {/* Consultant Cards */}
      <div className="space-y-6">
        {consultants.map((consultant) => (
          <div key={consultant.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/4 p-6">
                <img
                  src={consultant.image}
                  alt={consultant.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="text-center mt-4">
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{consultant.rating}</span>
                  </div>
                  <p className="text-sm text-green-600 mt-2">{consultant.availability}</p>
                </div>
              </div>
              
              <div className="p-6 md:w-3/4">
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">{consultant.name}</h4>
                  <p className="text-blue-600">{consultant.title}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-gray-900 font-medium">Experience</p>
                      <p className="text-gray-600">{consultant.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <BookOpen className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-gray-900 font-medium">Education</p>
                      <p className="text-gray-600">{consultant.education}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-medium text-gray-900 mb-2">Specialties</h5>
                  <div className="flex flex-wrap gap-2">
                    {consultant.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Consultation</span>
                  </button>
                  <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}