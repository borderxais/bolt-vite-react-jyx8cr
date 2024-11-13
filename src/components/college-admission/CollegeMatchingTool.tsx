import React, { useState } from 'react';
import { School, MapPin, Users, Book, Star, Heart, ExternalLink, Filter } from 'lucide-react';

interface College {
  id: string;
  name: string;
  location: string;
  type: string;
  enrollment: string;
  acceptanceRate: string;
  matchScore: number;
  strengths: string[];
  image: string;
  victoriaComment: string;
}

const colleges: College[] = [
  {
    id: '1',
    name: 'Stanford University',
    location: 'Stanford, CA',
    type: 'Private Research University',
    enrollment: '16,937',
    acceptanceRate: '4.3%',
    matchScore: 92,
    strengths: ['STEM Excellence', 'Research Opportunities', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80',
    victoriaComment: 'Your strong STEM background and leadership activities align well with Stanford\'s focus on innovation and collaborative learning.'
  },
  {
    id: '2',
    name: 'MIT',
    location: 'Cambridge, MA',
    type: 'Private Research University',
    enrollment: '11,376',
    acceptanceRate: '7.3%',
    matchScore: 88,
    strengths: ['Engineering', 'Research', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80',
    victoriaComment: 'Your exceptional performance in mathematics and science makes you a strong candidate for MIT\'s rigorous programs.'
  },
  {
    id: '3',
    name: 'Harvard University',
    location: 'Cambridge, MA',
    type: 'Private Research University',
    enrollment: '23,731',
    acceptanceRate: '4.6%',
    matchScore: 85,
    strengths: ['Liberal Arts', 'Research', 'Global Focus'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
    victoriaComment: 'Your balanced profile of academic excellence and leadership aligns with Harvard\'s holistic approach to education.'
  }
];

export function CollegeMatchingTool() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    size: ''
  });

  const toggleFavorite = (collegeId: string) => {
    setFavorites(prev => 
      prev.includes(collegeId)
        ? prev.filter(id => id !== collegeId)
        : [...prev, collegeId]
    );
  };

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Filter className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Filter Colleges</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={filters.location}
            onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any Location</option>
            <option value="northeast">Northeast</option>
            <option value="west">West Coast</option>
            <option value="midwest">Midwest</option>
          </select>

          <select
            value={filters.type}
            onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any Type</option>
            <option value="private">Private</option>
            <option value="public">Public</option>
            <option value="liberal">Liberal Arts</option>
          </select>

          <select
            value={filters.size}
            onChange={(e) => setFilters(prev => ({ ...prev, size: e.target.value }))}
            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any Size</option>
            <option value="small">Small (&lt;5,000)</option>
            <option value="medium">Medium (5,000-15,000)</option>
            <option value="large">Large (&gt;15,000)</option>
          </select>
        </div>
      </div>

      {/* College List */}
      <div className="space-y-6">
        {colleges.map((college) => (
          <div key={college.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={college.image}
                  alt={college.name}
                  className="h-48 w-full object-cover md:h-full"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {college.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{college.location}</span>
                      <span>•</span>
                      <span>{college.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => toggleFavorite(college.id)}
                      className={`p-2 rounded-full ${
                        favorites.includes(college.id)
                          ? 'text-red-600 bg-red-50'
                          : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${
                        favorites.includes(college.id) ? 'fill-current' : ''
                      }`} />
                    </button>
                    <div className="flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{college.matchScore}% Match</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 my-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>Enrollment: {college.enrollment}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Book className="w-4 h-4" />
                    <span>Acceptance Rate: {college.acceptanceRate}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {college.strengths.map((strength, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {strength}
                    </span>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <div className="flex items-start space-x-2">
                    <School className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Victoria's Analysis</h4>
                      <p className="text-sm text-gray-600 mt-1">{college.victoriaComment}</p>
                    </div>
                  </div>
                </div>

                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}