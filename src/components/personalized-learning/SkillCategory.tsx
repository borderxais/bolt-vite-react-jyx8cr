import React from 'react';
import { Star } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  progress: number;
}

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
  color: 'blue' | 'green' | 'purple' | 'orange';
}

const colorClasses = {
  blue: 'bg-blue-50',
  green: 'bg-green-50',
  purple: 'bg-purple-50',
  orange: 'bg-orange-50'
};

export function SkillCategory({ icon, title, skills, color }: SkillCategoryProps) {
  return (
    <div className={`${colorClasses[color]} rounded-xl p-6`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-white p-2 rounded-lg">
          {icon}
        </div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white/80 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">{skill.name}</h4>
              <div className="flex">
                {Array.from({ length: skill.level }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2"
                style={{ width: `${skill.progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Level {skill.level} • {skill.progress}% to next level
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}