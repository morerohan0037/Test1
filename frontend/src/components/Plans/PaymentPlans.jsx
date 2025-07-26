import { Crown, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const PaymentPlans = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: '₹11111',
      features: ['1 Mentor Session/month', 'Email Support', 'Resource Library Access'],
    },
    {
      id: 2,
      name: 'Pro',
      price: '₹1111',
      features: ['4 Mentor Sessions/month', '24/7 Support', 'Resource Library Access', 'Group Sessions'],
      popular: true,
    },
    {
      id: 3,
      name: 'Premium',
      price: '₹1111',
      features: ['Unlimited Sessions', 'Priority Support', 'Resource Library Access', 'Private Group', 'Custom Learning Path'],
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating animated orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            animation: 'float 6s ease-in-out infinite, pulse 3s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            animation: 'float 8s ease-in-out infinite reverse, pulse 3s ease-in-out infinite 1s'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            animation: 'float 7s ease-in-out infinite, pulse 3s ease-in-out infinite 2s'
          }}
        ></div>
        
        {/* Responsive grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>

      <div className="relative z-10 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div 
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Choose Your Plan
          </h2>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-xl lg:max-w-2xl mx-auto px-4">
            Select the perfect mentorship plan that suits your learning goals and accelerate your growth
          </p>
        </div>

        {/* Plans Grid */}
        <div className="max-w-sm sm:max-w-2xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative ${
                  plan.popular ? 'sm:col-span-2 lg:col-span-1 lg:-translate-y-4' : ''
                } transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-0 right-0 flex justify-center z-20">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-lg">
                      <Crown size={14} className="sm:w-4 sm:h-4" /> 
                      <span className="hidden sm:inline">Most Popular</span>
                      <span className="sm:hidden">Popular</span>
                    </span>
                  </div>
                )}

                {/* Card */}
                <div 
                  className="relative group bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 p-4 sm:p-6 lg:p-8 h-full flex flex-col transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{
                    background: plan.popular 
                      ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)' 
                      : undefined
                  }}
                >
                  {/* Plan Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-3 sm:mb-4">
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      {plan.price}
                    </p>
                    <span className="text-xs sm:text-sm text-white/60">/month</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-6 sm:mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className={`flex items-start text-white/80 text-sm sm:text-base transition-all duration-300 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}
                        style={{
                          transitionDelay: `${(index * 200) + (idx * 100)}ms`
                        }}
                      >
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    className={`w-full py-2.5 sm:py-3 lg:py-4 px-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40'
                    }`}
                    onMouseEnter={(e) => {
                      if (!plan.popular) {
                        e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!plan.popular) {
                        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      }
                    }}
                  >
                    <span className="relative z-10">
                      {plan.popular ? 'Get Started Now' : 'Select Plan'}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div 
          className={`mt-8 sm:mt-12 lg:mt-16 text-center px-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
            All plans include access to our resource library and community forums.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Need a custom plan? 
            <button className="text-purple-400 hover:text-purple-300 underline ml-1 transition-colors duration-200">
              Contact us
            </button>
          </p>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom scrollbar for better mobile experience */
        ::-webkit-scrollbar {
          width: 4px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 2px;
        }
        
        /* Ensure proper touch targets on mobile */
        @media (max-width: 640px) {
          button {
            min-height: 44px;
          }
        }
        
        /* Improved focus states for accessibility */
        button:focus-visible {
          outline: 2px solid rgba(139, 92, 246, 0.8);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default PaymentPlans;