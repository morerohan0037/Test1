import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', to: '/' },
    { name: 'Mentors', to: '/mentors' },
    { name: 'Plans', to: '/plans' },
    { name: 'Login', to: '/login' },
    { name: 'Sign Up', to: '/signup' }
  ];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg bg-gray-900/60 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold"
          >
            <BookOpen className="h-8 w-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              InsightIQ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className={`text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.to
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                } ${
                  item.name === 'Sign Up'
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 px-4 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 hover:shadow-lg hover:shadow-purple-500/25'
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/70 hover:text-white transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 pb-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.to
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  } ${
                    item.name === 'Sign Up'
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 px-4 py-2 rounded-lg text-center hover:from-purple-700 hover:to-cyan-700 hover:shadow-lg hover:shadow-purple-500/25'
                      : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
