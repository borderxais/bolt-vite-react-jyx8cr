import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Book, Palette, Trophy, ChevronRight } from 'lucide-react';

interface ChildProfileProps {
  onNext: () => void;
  onChildDataChange: (data: {
    name: string;
    age: string;
    interests: string[];
    grade: string;
  }) => void;
}

const interests = [
  { id: 'math', label: 'Mathematics', icon: Book },
  { id: 'science', label: 'Science', icon: Book },
  { id: 'arts', label: 'Arts', icon: Palette },
  { id: 'music', label: 'Music', icon: Palette },
  { id: 'sports', label: 'Sports', icon: Trophy }
];

export function ChildProfile({ onNext, onChildDataChange }: ChildProfileProps) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    interests: [] as string[],
    grade: ''
  });

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.age) {
      onChildDataChange(formData);
      onNext();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <User className="w-16 h-16 text-blue-600 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Tell us about your child
        </h2>
        <p className="text-xl text-gray-600">
          Help us create a personalized learning experience
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Child's Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              placeholder="Enter age"
              min="1"
              max="18"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Areas of Interest
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map(interest => {
              const Icon = interest.icon;
              return (
                <button
                  key={interest.id}
                  type="button"
                  onClick={() => handleInterestToggle(interest.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.interests.includes(interest.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-200'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <span className="block text-sm font-medium text-gray-900">
                    {interest.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Grade Level
          </label>
          <select
            value={formData.grade}
            onChange={(e) => setFormData(prev => ({ ...prev, grade: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          >
            <option value="">Select grade</option>
            <option value="k">Kindergarten</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                Grade {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <span>Continue</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.form>
    </div>
  );
}