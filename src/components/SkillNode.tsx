import React from 'react';
import { Lock, CheckCircle, Clock } from 'lucide-react';
import { CircularProgress } from './CircularProgress';
import { Skill } from '../types/skills';

interface SkillNodeProps {
  skill: Skill;
  onClick: (skill: Skill) => void;
  allSkills: Skill[];
}

export function SkillNode({ skill, onClick, allSkills }: SkillNodeProps) {
  const getStatusIcon = () => {
    switch (skill.status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500 absolute" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500 absolute" />;
      case 'locked':
        return <Lock className="w-5 h-5 text-gray-400 absolute" />;
    }
  };

  const getStatusColor = () => {
    switch (skill.status) {
      case 'completed':
        return 'border-green-500 bg-green-50';
      case 'in-progress':
        return 'border-blue-500 bg-blue-50';
      case 'locked':
        return 'border-gray-300 bg-gray-50';
    }
  };

  const getProgressColor = () => {
    switch (skill.status) {
      case 'completed':
        return 'text-green-500';
      case 'in-progress':
        return 'text-blue-500';
      default:
        return 'text-gray-300';
    }
  };

  const prerequisiteSkills = skill.prerequisites.map(preReqId => 
    allSkills.find(s => s.id === preReqId)
  ).filter((s): s is Skill => s !== undefined);

  return (
    <div className="relative inline-block group">
      <button
        onClick={() => skill.status !== 'locked' && onClick(skill)}
        className={`
          w-48 h-24 rounded-lg border-2 ${getStatusColor()}
          flex flex-col items-center justify-center gap-2
          transition-all duration-200 relative
          ${skill.status !== 'locked' ? 'hover:shadow-lg hover:-translate-y-1' : 'cursor-not-allowed'}
        `}
      >
        <div className="relative flex items-center justify-center">
          <CircularProgress 
            progress={skill.progress} 
            className={getProgressColor()}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {getStatusIcon()}
          </div>
        </div>
        <span className="font-medium text-gray-800">{skill.name}</span>
      </button>

      <div className="hidden group-hover:block absolute z-10 w-64 p-4 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 -translate-x-8">
        <h3 className="font-semibold text-gray-800 mb-2">{skill.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{skill.description}</p>
        
        {skill.status !== 'locked' && (
          <div className="space-y-2">
            <div className="text-sm text-gray-600">Proficiency</div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${skill.progress}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 text-right">
              {skill.progress}% Complete
            </div>
            <div className="text-sm text-indigo-600 font-medium">
              XP: {skill.xp}
            </div>
          </div>
        )}

        {skill.status === 'locked' && (
          <div className="space-y-3">
            <div className="text-sm font-medium text-gray-700">Required Skills:</div>
            <div className="space-y-2">
              {prerequisiteSkills.map(preReq => (
                <div 
                  key={preReq.id} 
                  className="flex items-center gap-2 text-sm"
                >
                  {preReq.status === 'completed' ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Clock className="w-4 h-4 text-blue-500" />
                  )}
                  <span>{preReq.name}</span>
                  <span className="text-gray-500">({preReq.progress}%)</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}