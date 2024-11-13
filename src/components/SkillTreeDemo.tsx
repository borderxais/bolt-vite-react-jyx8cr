import React, { useState } from 'react';
import { Brain, Target, Book, Star, Zap, Award, Crown } from 'lucide-react';

interface SkillNode {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  unlocked: boolean;
  connections: string[];
  position: { x: number; y: number };
}

export function SkillTreeDemo() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const skills: SkillNode[] = [
    {
      id: 'core',
      icon: Brain,
      title: 'Core Learning',
      description: 'Foundation of all skills',
      unlocked: true,
      connections: ['math', 'science', 'language'],
      position: { x: 50, y: 50 }
    },
    {
      id: 'math',
      icon: Target,
      title: 'Mathematics',
      description: 'Advanced mathematical concepts',
      unlocked: true,
      connections: ['analytics', 'programming'],
      position: { x: 30, y: 30 }
    },
    {
      id: 'science',
      icon: Zap,
      title: 'Science',
      description: 'Scientific principles and methods',
      unlocked: true,
      connections: ['research', 'analytics'],
      position: { x: 50, y: 30 }
    },
    {
      id: 'language',
      icon: Book,
      title: 'Language Arts',
      description: 'Communication and writing',
      unlocked: true,
      connections: ['leadership', 'research'],
      position: { x: 70, y: 30 }
    },
    {
      id: 'analytics',
      icon: Star,
      title: 'Analytics',
      description: 'Data analysis and interpretation',
      unlocked: false,
      connections: ['mastery'],
      position: { x: 40, y: 15 }
    },
    {
      id: 'programming',
      icon: Target,
      title: 'Programming',
      description: 'Coding and software development',
      unlocked: false,
      connections: ['mastery'],
      position: { x: 30, y: 15 }
    },
    {
      id: 'research',
      icon: Award,
      title: 'Research',
      description: 'Advanced research methodologies',
      unlocked: false,
      connections: ['mastery'],
      position: { x: 60, y: 15 }
    },
    {
      id: 'leadership',
      icon: Crown,
      title: 'Leadership',
      description: 'Team management and guidance',
      unlocked: false,
      connections: ['mastery'],
      position: { x: 70, y: 15 }
    },
    {
      id: 'mastery',
      icon: Crown,
      title: 'Complete Mastery',
      description: 'Achievement of full potential',
      unlocked: false,
      connections: [],
      position: { x: 50, y: 5 }
    }
  ];

  const drawConnection = (from: SkillNode, to: SkillNode) => {
    const startX = from.position.x;
    const startY = from.position.y;
    const endX = to.position.x;
    const endY = to.position.y;

    return (
      <line
        key={`${from.id}-${to.id}`}
        x1={`${startX}%`}
        y1={`${startY}%`}
        x2={`${endX}%`}
        y2={`${endY}%`}
        stroke={from.unlocked && to.unlocked ? '#FCD34D' : '#374151'}
        strokeWidth="2"
        className="transition-all duration-300"
      />
    );
  };

  return (
    <div className="w-full h-[600px] bg-gray-900 rounded-3xl overflow-hidden relative p-8">
      <div className="absolute top-8 left-8 flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
          <Brain className="w-6 h-6 text-gray-900" />
        </div>
        <div>
          <h3 className="text-yellow-400 font-medium">SKILL PROGRESSION</h3>
          <div className="flex items-center space-x-2 text-gray-400">
            <span>22/58</span>
            <span className="text-sm">SYNCHRONIZED</span>
          </div>
        </div>
      </div>

      <svg className="w-full h-full">
        {/* Draw connections */}
        {skills.map(skill =>
          skill.connections.map(targetId => {
            const targetSkill = skills.find(s => s.id === targetId);
            if (targetSkill) {
              return drawConnection(skill, targetSkill);
            }
            return null;
          })
        )}

        {/* Draw nodes */}
        {skills.map(skill => {
          const Icon = skill.icon;
          return (
            <g
              key={skill.id}
              transform={`translate(${skill.position.x}%, ${skill.position.y}%)`}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredNode(skill.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <circle
                r="24"
                fill={skill.unlocked ? '#FCD34D' : '#374151'}
                className="transition-all duration-300"
              />
              <foreignObject
                x="-12"
                y="-12"
                width="24"
                height="24"
                className="pointer-events-none"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Icon className={`w-4 h-4 ${skill.unlocked ? 'text-gray-900' : 'text-gray-400'}`} />
                </div>
              </foreignObject>

              {hoveredNode === skill.id && (
                <foreignObject
                  x="-100"
                  y="30"
                  width="200"
                  height="80"
                  className="pointer-events-none"
                >
                  <div className="bg-gray-800 rounded-lg p-3 text-center">
                    <h4 className="text-yellow-400 font-medium">{skill.title}</h4>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                </foreignObject>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}