import React, { useState } from 'react';
import { Check, Star, GraduationCap, Brain, Zap, BookOpen } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function Pricing() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'basic',
      name: 'Basic Academic',
      price: 99,
      description: 'Focus on core academic subjects',
      features: [
        'Personalized academic learning path',
        'Core subject progress tracking',
        'Basic AI recommendations',
        'Parent dashboard access',
        'School subject optimization',
        'Email support'
      ],
      icon: BookOpen,
      color: 'blue'
    },
    {
      id: 'pro',
      name: 'Pro Growth',
      price: 199,
      description: 'Comprehensive academic & extracurricular development',
      features: [
        'Everything in Basic, plus:',
        'Extracurricular activity planning',
        'Advanced skill analytics',
        'Priority AI assistance',
        'Monthly progress reports',
        'Expert consultation (2hrs/month)',
        'Direct chat support',
        'Sports & Arts tracking'
      ],
      icon: Zap,
      color: 'purple',
      popular: true
    },
    {
      id: 'college',
      name: 'College Prep',
      price: 399,
      description: 'Complete high school & college preparation',
      features: [
        'Everything in Pro, plus:',
        'College admission strategy',
        'SAT/ACT prep guidance',
        'College application review',
        'Weekly expert consultations',
        'Career path planning',
        'Leadership development',
        '24/7 priority support'
      ],
      icon: GraduationCap,
      color: 'indigo'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleGetStarted = (planId: string) => {
    // Open email client with pre-filled subject
    const subject = encodeURIComponent(`Interest in ${plans.find(p => p.id === planId)?.name} Plan`);
    const body = encodeURIComponent(`Hi Victory AI team,\n\nI'm interested in the ${plans.find(p => p.id === planId)?.name} plan.`);
    window.location.href = `mailto:info@victoryai.org?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Educational Journey
          </h1>
          <p className="text-xl text-gray-600">
            Invest in your child's future with our personalized AI-powered education platform
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.id;
            
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500' : ''
                } ${isSelected ? 'transform scale-105' : ''}`}
                onClick={() => handlePlanSelect(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className={`w-12 h-12 rounded-lg bg-${plan.color}-100 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-${plan.color}-600`} />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/month per child</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className={`w-5 h-5 text-${plan.color}-500 mr-3 mt-0.5`} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGetStarted(plan.id);
                    }}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                      isSelected
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : plan.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Can I switch plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                q: "Is there a family discount?",
                a: "Yes! Families with multiple children receive a 15% discount for each additional child."
              },
              {
                q: "What's included in expert consultations?",
                a: "Expert consultations include one-on-one sessions with education specialists who provide personalized guidance and strategy."
              },
              {
                q: "Is there a commitment period?",
                a: "No, all plans are month-to-month with no long-term commitment required. You can cancel anytime."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of parents who are transforming their children's education
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              <Star className="w-5 h-5" />
              <span>Start Free Trial</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}