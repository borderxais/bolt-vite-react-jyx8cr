export interface Skill {
  category: string;
  level: number;
  progress: number;
}

export interface CognitiveStrength {
  title: string;
  description: string;
  examples: string[];
}

export interface CognitiveProfile {
  strengths: CognitiveStrength[];
  learningStyle: string;
  careerPaths: string[];
}

export interface CareerProjection {
  field: string;
  matchScore: number;
  strengths: string[];
  recommendations: string[];
}

export interface LearningFocus {
  area: string;
  goals: string[];
  progress: number;
}

export interface LearningPath {
  currentFocus: LearningFocus[];
  nextMilestones: string[];
}

export interface Extracurricular {
  name: string;
  role: string;
  achievements: string[];
}

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  avatar: string;
  lastActive: string;
  skills?: Skill[];
  cognitiveProfile?: CognitiveProfile;
  careerProjections?: CareerProjection[];
  learningPath?: LearningPath;
  extracurriculars?: Extracurricular[];
}