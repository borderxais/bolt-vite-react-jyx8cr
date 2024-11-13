import { ChildProfile } from '../types';

export const mockProfiles: ChildProfile[] = [
  {
    id: '1',
    name: 'Emma',
    age: 8,
    avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
    lastActive: '2 days ago',
    skills: [
      { category: 'Mathematics', level: 3, progress: 85 },
      { category: 'Arts', level: 4, progress: 92 },
      { category: 'Science', level: 3, progress: 78 },
      { category: 'Music', level: 4, progress: 88 }
    ],
    cognitiveProfile: {
      strengths: [
        {
          title: 'Strong Artistic Expression',
          description: 'Shows exceptional creativity and artistic talent',
          examples: ['Advanced drawing skills', 'Musical composition ability']
        },
        {
          title: 'Pattern Recognition',
          description: 'Excellent at identifying patterns and relationships',
          examples: ['Quick grasp of mathematical sequences', 'Musical pattern recognition']
        }
      ],
      learningStyle: 'Visual-Spatial',
      careerPaths: ['Creative Arts', 'Music Education', 'Architecture']
    }
  },
  {
    id: '2',
    name: 'Lucas',
    age: 12,
    avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
    lastActive: '5 hours ago',
    skills: [
      { category: 'Mathematics', level: 4, progress: 95 },
      { category: 'Programming', level: 3, progress: 82 },
      { category: 'Science', level: 4, progress: 90 },
      { category: 'Language', level: 3, progress: 75 }
    ],
    cognitiveProfile: {
      strengths: [
        {
          title: 'Analytical Thinking',
          description: 'Exceptional ability in logical reasoning and problem-solving',
          examples: ['Advanced mathematics performance', 'Complex problem decomposition']
        },
        {
          title: 'Scientific Curiosity',
          description: 'Strong drive to understand how things work',
          examples: ['Independent research projects', 'Scientific experimentation']
        }
      ],
      learningStyle: 'Logical-Mathematical',
      careerPaths: ['Computer Science', 'Engineering', 'Scientific Research']
    }
  },
  {
    id: '3',
    name: 'Sophia',
    age: 10,
    avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
    lastActive: 'Just now',
    skills: [
      { category: 'Language', level: 4, progress: 94 },
      { category: 'Leadership', level: 3, progress: 88 },
      { category: 'Social Studies', level: 4, progress: 91 },
      { category: 'Communication', level: 4, progress: 93 }
    ],
    cognitiveProfile: {
      strengths: [
        {
          title: 'Verbal Intelligence',
          description: 'Outstanding linguistic abilities and communication skills',
          examples: ['Advanced vocabulary usage', 'Persuasive speaking abilities']
        },
        {
          title: 'Social Intelligence',
          description: 'Natural leadership and interpersonal abilities',
          examples: ['Effective team collaboration', 'Emotional awareness']
        },
        {
          title: 'Cultural Awareness',
          description: 'Strong understanding of different perspectives and cultures',
          examples: ['Global mindset', 'Cross-cultural communication']
        }
      ],
      learningStyle: 'Verbal-Linguistic',
      careerPaths: ['International Relations', 'Journalism', 'Education']
    },
    careerProjections: [
      {
        field: 'International Relations',
        matchScore: 95,
        strengths: [
          'Strong communication skills',
          'Cultural awareness',
          'Leadership potential'
        ],
        recommendations: [
          'Join Model United Nations',
          'Learn additional languages',
          'Participate in cultural exchange programs'
        ]
      },
      {
        field: 'Journalism',
        matchScore: 92,
        strengths: [
          'Excellent writing abilities',
          'Critical thinking',
          'Research skills'
        ],
        recommendations: [
          'Start a school newspaper',
          'Take creative writing workshops',
          'Practice investigative reporting'
        ]
      }
    ],
    learningPath: {
      currentFocus: [
        {
          area: 'Public Speaking',
          goals: ['Lead class presentations', 'Join debate club'],
          progress: 85
        },
        {
          area: 'Writing',
          goals: ['Write feature articles', 'Create storytelling portfolio'],
          progress: 90
        }
      ],
      nextMilestones: [
        'International youth leadership conference',
        'Language immersion program',
        'Student council presidency'
      ]
    },
    extracurriculars: [
      {
        name: 'Debate Club',
        role: 'Team Captain',
        achievements: ['Regional Championship Finalist', 'Best Speaker Award']
      },
      {
        name: 'School Newspaper',
        role: 'Junior Editor',
        achievements: ['Published 12 articles', 'Increased readership by 40%']
      }
    ]
  }
];