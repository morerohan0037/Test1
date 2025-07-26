import { ArrowRight, Users, BookOpen, Award, Play, TrendingUp, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import Reviews from './Reviews';
import Mentors from './Mentors';
import logo from '/logo.png'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Stats counter animation
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % 3);
    }, 3000);

    // Mouse tracking for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stats = [
    { 
      icon: Users, 
      label: 'Active Students', 
      value: '5,000+',
      description: 'Learning and growing every day',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: BookOpen, 
      label: 'Expert Mentors', 
      value: '200+',
      description: 'Industry professionals ready to help',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Award, 
      label: 'Success Rate', 
      value: '95%',
      description: 'Students achieving their goals',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const features = [
    {
      title: "1-on-1 Mentorship",
      description: "Get personalized guidance from industry experts",
      icon: Users,
    },
    {
      title: "Flexible Scheduling", 
      description: "Book sessions that fit your busy lifestyle",
      icon: BookOpen,
    },
    {
      title: "Proven Results",
      description: "Join thousands who've accelerated their careers",
      icon: TrendingUp,
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Animations */}
      <div className="relative overflow-hidden min-h-screen flex items-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Enhanced Animated Orbs with Mouse Parallax */}
          <div 
            className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl"
            style={{
              top: `${20 + mousePosition.y * 0.02}%`,
              left: `${15 + mousePosition.x * 0.02}%`,
              animation: 'float 8s ease-in-out infinite, pulse 4s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute w-56 h-56 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl"
            style={{
              top: `${25 + mousePosition.y * -0.03}%`,
              right: `${20 + mousePosition.x * -0.02}%`,
              animation: 'float 10s ease-in-out infinite reverse, pulse 4s ease-in-out infinite 1s'
            }}
          ></div>
          <div 
            className="absolute w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl"
            style={{
              bottom: `${20 + mousePosition.y * 0.01}%`,
              left: `${30 + mousePosition.x * 0.015}%`,
              animation: 'float 12s ease-in-out infinite, pulse 4s ease-in-out infinite 2s'
            }}
          ></div>
          
          {/* Animated Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              animation: 'gridMove 20s linear infinite'
            }}
          ></div>
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatParticle ${5 + Math.random() * 10}s ease-in-out infinite ${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo Animation */}
            <div 
              className={`inline-flex items-center justify-center w-16 h-16 mb-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'
              }`}
            >
              <img src={logo} alt="Company Logo" className="w-10 h-10" />
            </div>

            <h1 
              className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <span className="block">Unlock Your Potential</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                with Expert Mentorship
              </span>
            </h1>
            
            <p 
              className={`text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Connect with industry-leading mentors and accelerate your learning journey. 
              Get personalized guidance, build real-world skills, and achieve your career goals faster.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm sm:text-base lg:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 text-white font-semibold text-sm sm:text-base lg:text-lg backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/40">
                <span className="flex items-center justify-center gap-2">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Watch Demo
                </span>
              </button>
            </div>

            {/* Feature Highlights */}
            <div 
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div 
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`group relative bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center border border-white/20 transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:scale-105 hover:shadow-2xl ${
                  currentStatIndex === index ? 'ring-2 ring-cyan-400/50 shadow-lg shadow-cyan-500/20' : ''
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl sm:rounded-3xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="relative inline-flex items-center justify-center mb-3 sm:mb-4">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    {currentStatIndex === index && (
                      <div className="absolute inset-0 bg-cyan-400/20 rounded-full animate-ping"></div>
                    )}
                  </div>
                  
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {stat.value}
                  </p>
                  <p className="text-white/90 font-medium text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">{stat.label}</p>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div 
            className={`mt-12 sm:mt-16 lg:mt-20 text-center transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-white/60 text-xs sm:text-sm mb-4">Trusted by professionals at</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60">
              {['Google', 'Microsoft', 'Apple', 'Netflix', 'Tesla'].map((company, index) => (
                <div 
                  key={company}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-white/5 rounded-lg text-white/80 text-xs sm:text-sm font-medium hover:bg-white/10 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <Reviews />

      {/* Mentors Section */}
      <Mentors />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-30px) rotate(180deg); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.4;
            transform: scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        @keyframes floatParticle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          50% { 
            transform: translateY(-100px) translateX(50px);
            opacity: 0.8;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #8b5cf6, #06b6d4);
          border-radius: 3px;
        }

        /* Enhanced focus states */
        button:focus-visible {
          outline: 2px solid rgba(139, 92, 246, 0.8);
          outline-offset: 2px;
        }

        /* Ensure proper touch targets */
        @media (max-width: 640px) {
          button {
            min-height: 44px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;