import { Star, MessageCircle, Calendar, User } from "lucide-react";
import { useState, useEffect } from "react";

const Mentors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mentors = [
    {
      id: 1,
      name: "Rupesh Singh",
      expertise: "Full Stack Developer",
      rating: 4.9,
      reviews: 128,
      sessions: 450,
      image: "",
      tags: ["React", "Node.js", "Full Stack"],
      description: "Senior developer with 8+ years experience in modern web technologies",
    },
    {
      id: 2,
      name: "Nitish Kumar",
      expertise: "Machine Learning Engineer",
      rating: 4.8,
      reviews: 95,
      sessions: 300,
      image: "",
      tags: ["Python", "TensorFlow", "AI"],
      description: "ML expert specializing in deep learning and neural networks",
    },
    {
      id: 3,
      name: "hjvhjvjhblkj",
      expertise: "UI/UX Design Lead",
      rating: 4.7,
      reviews: 110,
      sessions: 350,
      image: "",
      tags: ["Figma", "Sketch", "Adobe XD"],
      description: "Design lead with expertise in user-centered design principles",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div 
          className="absolute top-1/4 left-1/6 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl"
          style={{
            animation: 'float 8s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/6 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl"
          style={{
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        ></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '25px 25px'
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div 
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Meet Our Expert Mentors
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4">
            Learn from industry professionals who are passionate about helping you succeed in your career journey
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {mentors.map((mentor, index) => (
            <div
              key={mentor.id}
              className={`group transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
              onMouseEnter={() => setHoveredCard(mentor.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 h-full flex flex-col transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                
                {/* Mentor Profile */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="relative">
                    {mentor.image ? (
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full object-cover border-2 border-cyan-400 transition-all duration-300 group-hover:border-purple-400"
                      />
                    ) : (
                      <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center border-2 border-cyan-400 transition-all duration-300 group-hover:border-purple-400">
                        <User className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                    )}
                    
                  </div>
                  
                  <div className="ml-3 sm:ml-4 flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                      {mentor.name}
                    </h3>
                    <p className="text-cyan-400 text-sm sm:text-base font-medium">{mentor.expertise}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                  {mentor.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    <span className="ml-1 text-white text-xs sm:text-sm font-medium">{mentor.rating}</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="text-xs sm:text-sm">{mentor.reviews} reviews</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="text-xs sm:text-sm">{mentor.sessions}+ sessions</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 flex-grow">
                  {mentor.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/70 border border-white/10 transition-all duration-300 ${
                        hoveredCard === mentor.id 
                          ? 'bg-white/20 border-white/30 text-white' 
                          : ''
                      }`}
                      style={{
                        transitionDelay: `${tagIndex * 50}ms`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full py-2.5 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium text-sm sm:text-base transition-all duration-300 hover:from-purple-700 hover:to-cyan-700 hover:scale-105 active:scale-95 transform hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-transparent">
                  <span className="relative z-10">Book Session</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={`text-center mt-8 sm:mt-12 lg:mt-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-white/60 text-xs sm:text-sm mb-4">
            Can't find the right mentor? 
            <button className="text-purple-400 hover:text-purple-300 underline ml-1 transition-colors duration-200">
              Browse all mentors
            </button>
          </p>
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl sm:rounded-2xl text-white font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105">
            View All Mentors
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
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

        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
          }
          50% { 
            opacity: 0.5; 
          }
        }

        /* Enhanced focus states for accessibility */
        button:focus-visible {
          outline: 2px solid rgba(139, 92, 246, 0.8);
          outline-offset: 2px;
        }

        /* Custom scrollbar */
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

        /* Smooth transitions for all interactive elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default Mentors;