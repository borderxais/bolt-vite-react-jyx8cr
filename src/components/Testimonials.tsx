import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Victoria has transformed how I manage my children's education. It's like having a personal education consultant available 24/7. The AI-driven insights have helped us make informed decisions about my daughter's academic journey.",
      author: "Sarah M., Mother of two",
      role: "Parent"
    },
    {
      quote: "The personalized recommendations have helped us find the perfect balance between academics and extracurriculars. My son's confidence has grown tremendously since we started using this platform.",
      author: "David L., Father of three",
      role: "Parent & Education Advocate"
    },
    {
      quote: "Finally, a tool that understands the complexities of modern parenting and education. Victoria's insights into my children's learning styles have been invaluable.",
      author: "Michelle K., Parent",
      role: "Tech Executive"
    },
    {
      quote: "The skill development tracking is incredibly detailed. It's amazing to see how Victoria identifies patterns in my child's learning that I hadn't noticed before.",
      author: "James R., Father of two",
      role: "Education Professional"
    },
    {
      quote: "As an educator and parent, I'm impressed by how Victoria combines academic insights with emotional intelligence. It's truly a holistic approach to child development.",
      author: "Dr. Emily Chen",
      role: "Educational Psychologist & Parent"
    },
    {
      quote: "The college admission guidance has been exceptional. Victoria helped us map out a clear path and identify opportunities we would have missed otherwise.",
      author: "Robert & Lisa Thompson",
      role: "Parents of High School Student"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by Parents Worldwide
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="text-gray-900 font-medium">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}