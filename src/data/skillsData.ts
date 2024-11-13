import { Skill } from '../types/skills';

export const skillsData: Skill[] = [
  // STEM Skills - Mathematics Track
  {
    id: 'arithmetic',
    name: 'Arithmetic',
    category: 'STEM',
    description: 'Basic operations: addition, subtraction, multiplication, division',
    status: 'completed',
    prerequisites: [],
    progress: 100,
    xp: 100
  },
  {
    id: 'fractions-decimals',
    name: 'Fractions & Decimals',
    category: 'STEM',
    description: 'Working with fractions and decimal numbers',
    status: 'completed',
    prerequisites: ['arithmetic'],
    progress: 100,
    xp: 100
  },
  {
    id: 'pre-algebra',
    name: 'Pre-Algebra',
    category: 'STEM',
    description: 'Introduction to variables and equations',
    status: 'completed',
    prerequisites: ['fractions-decimals'],
    progress: 100,
    xp: 100
  },
  {
    id: 'algebra-1',
    name: 'Algebra I',
    category: 'STEM',
    description: 'Linear equations and inequalities',
    status: 'in-progress',
    prerequisites: ['pre-algebra'],
    progress: 75,
    xp: 75
  },
  {
    id: 'geometry-basics',
    name: 'Geometry Basics',
    category: 'STEM',
    description: 'Basic geometric concepts and shapes',
    status: 'in-progress',
    prerequisites: ['pre-algebra'],
    progress: 60,
    xp: 60
  },
  {
    id: 'algebra-2',
    name: 'Algebra II',
    category: 'STEM',
    description: 'Advanced algebraic concepts',
    status: 'locked',
    prerequisites: ['algebra-1'],
    progress: 0,
    xp: 0
  },
  // Language Skills
  {
    id: 'phonics',
    name: 'Phonics',
    category: 'Language',
    description: 'Understanding letter-sound relationships',
    status: 'completed',
    prerequisites: [],
    progress: 100,
    xp: 100
  },
  {
    id: 'vocabulary-basics',
    name: 'Basic Vocabulary',
    category: 'Language',
    description: 'Essential vocabulary development',
    status: 'completed',
    prerequisites: ['phonics'],
    progress: 100,
    xp: 100
  },
  {
    id: 'grammar-basics',
    name: 'Basic Grammar',
    category: 'Language',
    description: 'Fundamental grammar rules and usage',
    status: 'completed',
    prerequisites: ['vocabulary-basics'],
    progress: 100,
    xp: 100
  },
  // Arts Skills
  {
    id: 'color-basics',
    name: 'Color Basics',
    category: 'Arts',
    description: 'Understanding primary colors and mixing',
    status: 'completed',
    prerequisites: [],
    progress: 100,
    xp: 100
  },
  {
    id: 'drawing-basics',
    name: 'Drawing Basics',
    category: 'Arts',
    description: 'Basic drawing techniques and skills',
    status: 'completed',
    prerequisites: ['color-basics'],
    progress: 100,
    xp: 100
  },
  // Sports Skills
  {
    id: 'motor-skills',
    name: 'Motor Skills',
    category: 'Sports',
    description: 'Basic movement and coordination',
    status: 'completed',
    prerequisites: [],
    progress: 100,
    xp: 100
  },
  {
    id: 'fitness-basics',
    name: 'Fitness Basics',
    category: 'Sports',
    description: 'Basic exercises and fitness concepts',
    status: 'completed',
    prerequisites: ['motor-skills'],
    progress: 100,
    xp: 100
  },
  // SEL Skills
  {
    id: 'emotional-awareness',
    name: 'Emotional Awareness',
    category: 'SEL',
    description: 'Recognizing and understanding emotions',
    status: 'completed',
    prerequisites: [],
    progress: 100,
    xp: 100
  },
  {
    id: 'self-regulation',
    name: 'Self-Regulation',
    category: 'SEL',
    description: 'Managing emotions and behavior',
    status: 'completed',
    prerequisites: ['emotional-awareness'],
    progress: 100,
    xp: 100
  }
];