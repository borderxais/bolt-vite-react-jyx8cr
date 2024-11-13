import React from 'react';
import { Lock, Check, Star, ChevronUp } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  level: number;
  progress: number;
  status: 'locked' | 'in-progress' | 'completed';
  prerequisites: string[];
  description: string;
  recentActivities?: string[];
  nextSteps?: string[];
}

interface SkillTreeProps {
  category: string;
  skills: Skill[];
  color: string;
}

export function SkillTree({ category, skills, color }: SkillTreeProps) {
  const [selectedSkill, setSelectedSkill] = React.useState<string | null>(null);

  const getStatusIcon = (status: Skill['status']) => {
    switch (status) {
      case 'locked':
        return <Lock className="w-4 h-4" />;
      case 'completed':
        return <Check className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getNodeColor = (status: Skill['status']) => {
    switch (status) {
      case 'locked':
        return 'bg-gray-100 text-gray-400 border-gray-200';
      case 'completed':
        return `bg-${color}-100 text-${color}-700 border-${color}-200`;
      default:
        return `bg-${color}-50 text-${color}-600 border-${color}-200`;
    }
  };

  // Group skills by level
  const skillsByLevel = skills.reduce((acc, skill) => {
    const level = skill.level;
    if (!acc[level]) acc[level] = [];
    acc[level].push(skill);
    return acc;
  }, {} as Record<number, Skill[]>);

  // Get levels in descending order (top to bottom)
  const levels = Object.keys(skillsByLevel)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">{category}</h3>
      
      <div className="relative">
        {/* Skill Tree */}
        <div className="space-y-12">
          {levels.map((level) => (
            <div key={level} className="relative">
              <div className="absolute left-0 -top-6 text-sm font-medium text-gray-500">
                Level {level}
              </div>
              <div className="grid grid-cols-3 gap-6">
                {skillsByLevel[level].map((skill) => (
                  <div key={skill.id} className="relative group">
                    {/* Connection lines to prerequisites */}
                    {skill.prerequisites.map((prereqId) => {
                      const prereq = skills.find(s => s.id === prereqId);
                      if (!prereq) return null;
                      
                      return (
                        <svg
                          key={`${skill.id}-${prereqId}`}
                          className="absolute left-1/2 -top-12 -translate-x-1/2 w-px h-12"
                        >
                          <line
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="48"
                            stroke={`var(--${color}-500)`}
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />
                          <ChevronUp
                            className={`w-4 h-4 absolute -top-2 left-1/2 -translate-x-1/2 text-${color}-500`}
                          />
                        </svg>
                      );
                    })}

                    {/* Skill Node */}
                    <button
                      onClick={() => setSelectedSkill(selectedSkill === skill.id ? null : skill.id)}
                      className={`w-full p-4 rounded-lg border-2 ${getNodeColor(skill.status)} 
                        transition-all duration-300 hover:shadow-md relative
                        ${selectedSkill === skill.id ? 'ring-2 ring-blue-400' : ''}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        {getStatusIcon(skill.status)}
                      </div>
                      
                      {skill.status !== 'locked' && (
                        <div className="w-full bg-white/50 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-${color}-500`}
                            style={{ width: `${skill.progress}%` }}
                          />
                        </div>
                      )}
                    </button>

                    {/* Skill Details Tooltip */}
                    {selectedSkill === skill.id && (
                      <div className="absolute z-10 w-72 bg-white rounded-lg shadow-xl p-4 mt-2 
                        border border-gray-200 transform -translate-x-1/4 left-1/2">
                        <h4 className="font-medium text-gray-900 mb-2">{skill.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{skill.description}</p>
                        
                        {skill.recentActivities && skill.recentActivities.length > 0 && (
                          <div className="mb-3">
                            <h5 className="text-sm font-medium text-gray-900 mb-1">
                              Recent Activities
                            </h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {skill.recentActivities.map((activity, i) => (
                                <li key={i} className="flex items-center space-x-2">
                                  <Check className="w-3 h-3 text-green-500" />
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {skill.nextSteps && skill.nextSteps.length > 0 && (
                          <div>
                            <h5 className="text-sm font-medium text-gray-900 mb-1">
                              Next Steps
                            </h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {skill.nextSteps.map((step, i) => (
                                <li key={i} className="flex items-center space-x-2">
                                  <ChevronUp className="w-3 h-3" />
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}