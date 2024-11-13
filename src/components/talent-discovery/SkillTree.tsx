import React, { useState, useCallback, useMemo } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType
} from 'reactflow';
import { motion, AnimatePresence } from 'framer-motion';
import { Sword, Shield, Zap, Brain, Star } from 'lucide-react';
import 'reactflow/dist/style.css';

interface Skill {
  id: string;
  title: string;
  description: string;
  points: number;
  maxPoints: number;
  unlocked: boolean;
  requires: string[];
  position: { x: number; y: number };
  specialization: 'arms' | 'fury' | 'protection';
  icon: React.ElementType;
}

const skillData: Skill[] = [
  {
    id: 'arms-1',
    title: 'Basic Combat',
    description: 'Master the fundamentals of combat techniques',
    points: 2,
    maxPoints: 5,
    unlocked: true,
    requires: [],
    position: { x: 250, y: 50 },
    specialization: 'arms',
    icon: Sword
  },
  {
    id: 'arms-2',
    title: 'Advanced Strikes',
    description: 'Learn powerful striking combinations',
    points: 1,
    maxPoints: 3,
    unlocked: false,
    requires: ['arms-1'],
    position: { x: 250, y: 150 },
    specialization: 'arms',
    icon: Sword
  },
  {
    id: 'fury-1',
    title: 'Rage Management',
    description: 'Control and channel your inner fury',
    points: 3,
    maxPoints: 5,
    unlocked: true,
    requires: [],
    position: { x: 250, y: 50 },
    specialization: 'fury',
    icon: Zap
  },
  {
    id: 'protection-1',
    title: 'Shield Mastery',
    description: 'Master defensive techniques with shields',
    points: 2,
    maxPoints: 5,
    unlocked: true,
    requires: [],
    position: { x: 250, y: 50 },
    specialization: 'protection',
    icon: Shield
  }
];

const SkillNode = ({ data }: { data: any }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-4 rounded-lg ${
        data.unlocked
          ? 'bg-yellow-400 text-gray-900'
          : 'bg-gray-700 text-gray-400'
      }`}
    >
      <data.icon className="w-6 h-6 mb-2" />
      <div className="text-sm font-medium">{data.title}</div>
      <div className="text-xs mt-1">{`${data.points}/${data.maxPoints}`}</div>
    </motion.div>
  );
};

const nodeTypes = {
  skillNode: SkillNode
};

export function SkillTree() {
  const [selectedSpec, setSelectedSpec] = useState<'arms' | 'fury' | 'protection'>('arms');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Create nodes from skill data
  const initialNodes = useMemo(() => 
    skillData
      .filter(skill => skill.specialization === selectedSpec)
      .map(skill => ({
        id: skill.id,
        type: 'skillNode',
        position: skill.position,
        data: {
          ...skill,
          onMouseEnter: () => setHoveredNode(skill.id),
          onMouseLeave: () => setHoveredNode(null)
        }
      })),
    [selectedSpec]
  );

  // Create edges from skill requirements
  const initialEdges = useMemo(() => {
    const edges: any[] = [];
    skillData
      .filter(skill => skill.specialization === selectedSpec)
      .forEach(skill => {
        skill.requires.forEach(reqId => {
          edges.push({
            id: `${reqId}-${skill.id}`,
            source: reqId,
            target: skill.id,
            type: 'smoothstep',
            animated: true,
            style: { stroke: skill.unlocked ? '#FCD34D' : '#374151' },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: skill.unlocked ? '#FCD34D' : '#374151'
            }
          });
        });
      });
    return edges;
  }, [selectedSpec]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => {
    setEdges(eds => [...eds, params]);
  }, []);

  const specs = [
    { id: 'arms', label: 'Arms', icon: Sword, color: 'red' },
    { id: 'fury', label: 'Fury', icon: Zap, color: 'yellow' },
    { id: 'protection', label: 'Protection', icon: Shield, color: 'blue' }
  ];

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
      {/* Specialization Selector */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex space-x-4">
          {specs.map(spec => (
            <button
              key={spec.id}
              onClick={() => setSelectedSpec(spec.id as typeof selectedSpec)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                selectedSpec === spec.id
                  ? `bg-${spec.color}-900 text-${spec.color}-400`
                  : 'hover:bg-gray-800 text-gray-400'
              }`}
            >
              <spec.icon className="w-5 h-5" />
              <span>{spec.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Skill Tree */}
      <div className="h-[600px] relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap
            nodeColor={n => (n.data.unlocked ? '#FCD34D' : '#374151')}
            maskColor="rgba(0, 0, 0, 0.2)"
          />
        </ReactFlow>

        {/* Tooltip */}
        <AnimatePresence>
          {hoveredNode && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50"
              style={{
                left: nodes.find(n => n.id === hoveredNode)?.position.x,
                top: nodes.find(n => n.id === hoveredNode)?.position.y + 100
              }}
            >
              <h4 className="font-medium mb-2">
                {skillData.find(s => s.id === hoveredNode)?.title}
              </h4>
              <p className="text-sm text-gray-300">
                {skillData.find(s => s.id === hoveredNode)?.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}