import React from 'react';
import { Star, MapPin, Globe, ExternalLink, Heart } from 'lucide-react';
import type { ChildProfile } from '../FeatureTalentDiscovery';
import type { FilterOptions } from '../FeatureExpertCoordination';

interface School {
  id: string;
  name: string;
  description: string;
  matchScore: number;
  image: string;
  location: string;
  type: string;
  specializations: string[];
  victoriaComment: string;
}

interface SchoolsListProps {
  profile: ChildProfile;
  filters: FilterOptions;
  searchQuery: string;
}

const schools: School[] = [
  {
    id: '1',
    name: 'Innovation Academy',
    description: 'A progressive school focusing on STEM education and creative problem-solving.',
    matchScore: 92,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
    location: 'nearby',
    type: 'Private',
    specializations: ['STEM', 'Project-Based Learning', 'Advanced Mathematics'],
    victoriaComment: 'Strong focus on STEM subjects aligns perfectly with the student\'s interests in mathematics and science.'
  },
  {
    id: '2',
    name: 'Creative Minds International',
    description: 'Balancing academic excellence with strong arts and cultural programs.',
    matchScore: 88,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80',
    location: 'city',
    type: 'International',
    specializations: ['Arts', 'Languages', 'Cultural Studies'],
    victoriaComment: 'Excellent arts program would support creative development while maintaining academic standards.'
  },
  {
    id: '3',
    name: 'Excellence Preparatory',
    description: 'Traditional college preparatory school with strong academic programs.',
    matchScore: 85,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80',
    location: 'region',
    type: 'College Prep',
    specializations: ['College Preparation', 'Advanced Placement', 'Leadership'],
    victoriaComment: 'Rigorous academic program would challenge and prepare for future college success.'
  }
];

export function SchoolsList({ profile, filters, searchQuery }: SchoolsListProps) {
  const [favorites, setFavorites] = React.useState<string[]>([]);

  // Filter schools based on search query and filters
  const filteredSchools = schools.filter(school => {
    if (searchQuery && !school.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filters.location && filters.location !== school.location) {
      return false;
    }
    return true;
  });

  // Sort schools by match score
  const sortedSchools = [...filteredSchools].sort((a, b) => b.matchScore - a.matchScore);

  const toggleFavorite = (schoolId: string) => {
    setFavorites(prev => 
      prev.includes(schoolId)
        ? prev.filter(id => id !== schoolId)
        : [...prev, schoolId]
    );
  };

  return (
    <div className="space-y-6">
      {sortedSchools.map((school) => (
        <div key={school.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={school.image}
                alt={school.name}
                className="h-48 w-full object-cover md:h-full"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {school.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{school.location}</span>
                    <span>•</span>
                    <span>{school.type}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleFavorite(school.id)}
                    className={`p-2 rounded-full ${
                      favorites.includes(school.id)
                        ? 'text-red-600 bg-red-50'
                        : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${
                      favorites.includes(school.id) ? 'fill-current' : ''
                    }`} />
                  </button>
                  <div className="flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{school.matchScore}% Match</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 my-4">{school.description}</p>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-2">
                  <Globe className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Victoria's Analysis</h4>
                    <p className="text-sm text-gray-600 mt-1">{school.victoriaComment}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {school.specializations.map((spec, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <span>Contact School</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {sortedSchools.length === 0 && (
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <p className="text-gray-600">
            No schools found matching your criteria. Try adjusting your filters.
          </p>
        </div>
      )}
    </div>
  );
}