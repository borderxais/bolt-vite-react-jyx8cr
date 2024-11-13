import React from 'react';
import { Star, MapPin, Clock, Globe, DollarSign, ExternalLink } from 'lucide-react';
import type { ChildProfile } from '../FeatureTalentDiscovery';
import type { FilterOptions } from '../FeatureExpertCoordination';

interface Program {
  id: string;
  name: string;
  provider: string;
  description: string;
  matchScore: number;
  image: string;
  location: string;
  price: string;
  schedule: string;
  mode: 'online' | 'in-person' | 'hybrid';
  category: string;
}

interface ProgramsListProps {
  profile: ChildProfile;
  filters: FilterOptions;
  searchQuery: string;
}

const programs: Program[] = [
  {
    id: '1',
    name: 'Advanced Mathematics Academy',
    provider: 'MathGenius Learning',
    description: 'Comprehensive mathematics program focusing on advanced problem-solving and analytical thinking.',
    matchScore: 95,
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80',
    location: 'nearby',
    price: 'medium',
    schedule: 'weekday',
    mode: 'hybrid',
    category: 'Mathematics'
  },
  {
    id: '2',
    name: 'Creative Arts Workshop',
    provider: 'ArtisticMinds Studio',
    description: 'Explore various art forms and develop creative expression through hands-on projects.',
    matchScore: 88,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80',
    location: 'city',
    price: 'low',
    schedule: 'weekend',
    mode: 'in-person',
    category: 'Arts'
  },
  {
    id: '3',
    name: 'Science Discovery Lab',
    provider: 'Future Scientists Institute',
    description: 'Interactive science experiments and projects focusing on practical applications.',
    matchScore: 92,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80',
    location: 'nearby',
    price: 'high',
    schedule: 'weekday',
    mode: 'in-person',
    category: 'Science'
  }
];

export function ProgramsList({ profile, filters, searchQuery }: ProgramsListProps) {
  // Filter programs based on search query and filters
  const filteredPrograms = programs.filter(program => {
    if (searchQuery && !program.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filters.location && filters.location !== program.location) {
      return false;
    }
    if (filters.price && filters.price !== program.price) {
      return false;
    }
    if (filters.availability && filters.availability !== program.schedule) {
      return false;
    }
    if (filters.mode && filters.mode !== program.mode) {
      return false;
    }
    return true;
  });

  // Sort programs by match score
  const sortedPrograms = [...filteredPrograms].sort((a, b) => b.matchScore - a.matchScore);

  return (
    <div className="space-y-6">
      {sortedPrograms.map((program) => (
        <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={program.image}
                alt={program.name}
                className="h-48 w-full object-cover md:h-full"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {program.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">by {program.provider}</p>
                </div>
                <div className="flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">{program.matchScore}% Match</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{program.description}</p>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{program.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{program.schedule}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{program.mode}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm">
                    {program.price === 'low' ? '$' : program.price === 'medium' ? '$$' : '$$$'}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Category: {program.category}
                </span>
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {sortedPrograms.length === 0 && (
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <p className="text-gray-600">
            No programs found matching your criteria. Try adjusting your filters.
          </p>
        </div>
      )}
    </div>
  );
}