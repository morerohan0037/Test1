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
    { name: 'Sign Up', to: '/signup' },
    { name: 'Dashboard', to: '/dashboard' },
  ];

  return (
    <nav className="w-full z-50 bg-gray-900/60 backdrop-blur-md border-b border-white/10 shadow-md fixed">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <BookOpen className="h-8 w-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              InsightIQ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className={`text-sm font-medium px-2 py-1 transition-all duration-300 rounded-md ${
                  location.pathname === item.to
                    ? 'text-white bg-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                } ${
                  item.name === 'Sign Up'
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 px-4 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 shadow-md shadow-purple-600/20 text-white'
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
            className="md:hidden text-white/80 hover:text-white transition duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3 pb-4 px-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium px-4 py-2 rounded-md transition-all duration-300 ${
                    location.pathname === item.to
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  } ${
                    item.name === 'Sign Up'
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-center rounded-lg text-white hover:from-purple-700 hover:to-cyan-700 shadow-md shadow-purple-600/25'
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
