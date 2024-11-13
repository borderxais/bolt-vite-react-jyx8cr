import React from 'react';
import { Search, MapPin, DollarSign, Clock, Globe } from 'lucide-react';
import type { FilterOptions } from '../FeatureExpertCoordination';

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function FilterBar({ 
  filters, 
  onFilterChange, 
  searchQuery, 
  onSearchChange 
}: FilterBarProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      {/* Search */}
      <div>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search programs or schools..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Filters</h3>
        
        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <div className="relative">
            <select
              value={filters.location}
              onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Any Location</option>
              <option value="nearby">Nearby</option>
              <option value="city">Within City</option>
              <option value="region">Within Region</option>
            </select>
            <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Range
          </label>
          <div className="relative">
            <select
              value={filters.price}
              onChange={(e) => onFilterChange({ ...filters, price: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Any Price</option>
              <option value="free">Free</option>
              <option value="low">$</option>
              <option value="medium">$$</option>
              <option value="high">$$$</option>
            </select>
            <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Availability */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Availability
          </label>
          <div className="relative">
            <select
              value={filters.availability}
              onChange={(e) => onFilterChange({ ...filters, availability: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Any Time</option>
              <option value="weekday">Weekdays</option>
              <option value="weekend">Weekends</option>
              <option value="evening">Evenings</option>
            </select>
            <Clock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Mode */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mode
          </label>
          <div className="relative">
            <select
              value={filters.mode}
              onChange={(e) => onFilterChange({ 
                ...filters, 
                mode: e.target.value as FilterOptions['mode']
              })}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Any Mode</option>
              <option value="online">Online</option>
              <option value="in-person">In-Person</option>
              <option value="hybrid">Hybrid</option>
            </select>
            <Globe className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>
      </div>
    </div>
  );
}