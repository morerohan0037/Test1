import { User } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://insight-iq-backend.onrender.com/api/v1";

const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await axios.get(`${baseUrl}/mentors`);
        if (res.data.success) {
          const formatted = res.data.data.map((mentor) => {
            const expertise = mentor.additionalDetails?.areaOfExpertise?.[0];
            return {
              id: mentor._id,
              name: mentor.fullName,
              accountType: mentor.accountType || "Mentor",
              image: mentor.additionalDetails?.image || "",
              techName: expertise?.tech_name || "Not specified",
              tags: expertise?.tags?.map((tag) => tag.tag_name) || [],
              description:
                mentor.additionalDetails?.description ||
                `Hi! I'm ${mentor.fullName}, here to help you grow!`,
            };
          });
          setMentors(formatted);
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch mentors.");
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
          <p className="text-white text-lg font-medium">Loading mentors...</p>
          <p className="text-white/60 text-sm mt-2">Please wait while we fetch our amazing mentors</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Something went wrong</h3>
          <p className="text-red-400 text-lg mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black py-12 px-4 pt-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl mb-6">
          <User className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-5xl font-bold text-white mb-4">Our Mentors</h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
          Learn from experienced mentors across various fields of expertise. Connect with industry professionals who are passionate about sharing their knowledge and helping you succeed.
        </p>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="group bg-white/8 border border-white/15 backdrop-blur-sm rounded-2xl p-7 hover:bg-white/12 hover:border-white/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
          >
            {/* Profile Section */}
            <div className="flex items-center gap-5 mb-6">
              {mentor.image ? (
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-cyan-400/60 group-hover:border-cyan-400 transition-colors duration-300"
                />
              ) : (
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center border-2 border-cyan-400/60 group-hover:border-cyan-400 transition-colors duration-300">
                  <User className="text-white w-7 h-7" />
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-white text-xl font-semibold mb-1 group-hover:text-cyan-100 transition-colors duration-300">
                  {mentor.name}
                </h3>
                <span className="inline-block px-3 py-1 text-sm font-medium text-cyan-300 bg-cyan-500/20 rounded-full border border-cyan-400/30">
                  {mentor.accountType}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {mentor.description}
              </p>
            </div>

            {/* Expertise Section */}
            <div className="mb-5 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm font-semibold text-purple-300">Expertise</span>
              </div>
              <p className="text-white font-medium">{mentor.techName}</p>
            </div>

            {/* Skills Tags */}
            {mentor.tags.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm font-medium text-cyan-300">Skills</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mentor.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-2 rounded-lg bg-purple-500/20 text-white/90 border border-purple-400/30 hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Connect Button */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group-hover:scale-[1.02]">
                Connect with {mentor.name.split(' ')[0]}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Call to Action */}
      <div className="text-center mt-16">
        <div className="max-w-xl mx-auto mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to start your journey?</h3>
          <p className="text-white/70">Connect with our mentors and accelerate your learning today</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Browse All Mentors
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105">
            Become a Mentor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mentors;