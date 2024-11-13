import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Target, LineChart, Store, Calendar, GraduationCap, BookOpen } from 'lucide-react';

export function Features() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Talent Discovery",
      description: "Uncover your child's unique abilities and potential through advanced AI assessment and continuous monitoring",
      path: "/features/talent-discovery",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80"
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      title: "Personalized Learning Path",
      description: "Create a tailored educational journey that adapts to your child's learning style and pace",
      path: "/features/personalized-learning",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Progress Tracking",
      description: "Monitor achievements and growth with real-time insights and detailed performance analytics",
      path: "/features/progress-tracking",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      icon: <Store className="w-8 h-8 text-blue-600" />,
      title: "Education Marketplace",
      description: "Connect with top-rated tutors, programs, and schools tailored to your child's interests and goals",
      path: "/features/expert-coordination",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Curriculum Optimization",
      description: "Balance academics and extracurriculars with AI-powered schedule optimization",
      path: "/features/curriculum-optimization",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "College Admission",
      description: "Navigate the college admission journey with expert guidance and strategic planning",
      path: "/features/talent-development",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Holistic Education Management System for Parents
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Cutting-edge AI technology meets educational expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
              onClick={() => navigate(feature.path)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}