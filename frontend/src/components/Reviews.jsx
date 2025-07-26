import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "xyz",
      role: "student",
      image: "",
      rating: 4,
      review: "The mentorship program completely transformed my career. The personalized guidance and practical insights were invaluable.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "abc",
      role: "UX Designer",
      image: "",
      rating: 5,
      review: "Found amazing mentors who helped me master new skills and land my dream job. Highly recommended!",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "RohAn",
      role: "Data Scientist",
      image: "g",
      rating: 3,
      review: "The quality of mentorship exceeded my expectations. Great platform for serious learners.",
      date: "3 weeks ago"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            What Our Students Say
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Discover how mentorship has transformed careers and lives
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-white/20" />
              
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/80 mb-6 leading-relaxed">
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
                />
                <div className="ml-4">
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-cyan-400 text-sm">{review.role}</p>
                  <p className="text-white/50 text-xs mt-1">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:from-purple-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
