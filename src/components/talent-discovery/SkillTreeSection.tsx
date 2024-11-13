import React, { useState } from 'react';
import { Brain, Book, Palette, Trophy, Heart } from 'lucide-react';
import { SkillTree } from '../SkillTree';
import { Skill } from '../../types/skills';
import { skillsData } from '../../data/skillsData';

interface SkillTreeSectionProps {
  profileId: string;
}

export function SkillTreeSection({ profileId }: SkillTreeSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('STEM');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const categories = [
    { id: 'STEM', icon: Brain, label: 'STEM Skills' },
    { id: 'Language', icon: Book, label: 'Language Skills' },
    { id: 'Arts', icon: Palette, label: 'Arts Skills' },
    { id: 'Sports', icon: Trophy, label: 'Sports Skills' },
    { id: 'SEL', icon: Heart, label: 'Social-Emotional Skills' }
  ];

  const filteredSkills = skillsData.filter(skill => skill.category === selectedCategory);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Skill Development Tree</h3>
        <div className="flex space-x-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="hidden md:inline">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px] h-[600px] relative">
          <SkillTree 
            skills={filteredSkills}
            onSkillClick={handleSkillClick}
          />
        </div>
      </div>

      {selectedSkill && (
        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Brain className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <h4 className="font-medium text-gray-900">Victoria's Insight</h4>
              <p className="text-sm text-gray-600 mt-1">
                Based on the current progress in {selectedSkill.name}, 
                I recommend focusing on completing the prerequisites for advanced skills 
                in this area. This will unlock new learning opportunities and accelerate progress.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}