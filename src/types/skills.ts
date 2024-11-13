export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'locked' | 'in-progress' | 'completed';
  prerequisites: string[];
  progress: number;
  xp: number;
}