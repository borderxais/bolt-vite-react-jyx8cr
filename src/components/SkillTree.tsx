import React from 'react';
import { Skill } from '../types/skills';
import { SkillNode } from './SkillNode';
import Xarrow, { Xwrapper } from 'react-xarrows';

interface SkillTreeProps {
  skills: Skill[];
  onSkillClick: (skill: Skill) => void;
}

export function SkillTree({ skills, onSkillClick }: SkillTreeProps) {
  const levels = groupSkillsByLevel(skills);

  return (
    <div className="w-full relative">
      <div className="sticky top-0 left-0 w-full h-full">
        <Xwrapper>
          <div className="min-w-fit p-8">
            <div className="flex flex-col gap-40">
              {levels.map((levelSkills, levelIndex) => (
                <div key={levelIndex} className="flex justify-center gap-16">
                  {levelSkills.map((skill) => (
                    <div key={skill.id} id={skill.id} className="group">
                      <SkillNode
                        skill={skill}
                        onClick={onSkillClick}
                        allSkills={skills}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {skills.map(skill =>
              skill.prerequisites.map(preReqId => (
                <Xarrow
                  key={`${preReqId}-${skill.id}`}
                  start={preReqId}
                  end={skill.id}
                  color="#94a3b8"
                  strokeWidth={2}
                  path="straight"
                  startAnchor="bottom"
                  endAnchor="top"
                  zIndex={0}
                />
              ))
            )}
          </div>
        </Xwrapper>
      </div>
    </div>
  );
}

function groupSkillsByLevel(skills: Skill[]): Skill[][] {
  const levels: Skill[][] = [];
  const assigned = new Set<string>();

  const assignLevel = (skill: Skill, level: number) => {
    if (assigned.has(skill.id)) return;
    
    if (!levels[level]) {
      levels[level] = [];
    }
    
    levels[level].push(skill);
    assigned.add(skill.id);
    
    const dependentSkills = skills.filter(s => 
      s.prerequisites.includes(skill.id)
    );
    
    dependentSkills.forEach(s => assignLevel(s, level + 1));
  };

  const rootSkills = skills.filter(s => s.prerequisites.length === 0);
  rootSkills.forEach(s => assignLevel(s, 0));

  return levels;
}