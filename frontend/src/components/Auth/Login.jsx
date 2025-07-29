import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { login, isLoading: authLoading, error: authError } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await login(formData);
            navigate(from, { replace: true });
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
    <>
            <style jsx>{`
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
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-1200 {
          animation-delay: 1200ms;
        }
        
        .animation-delay-1400 {
          animation-delay: 1400ms;
        }
        
        .animation-delay-1600 {
          animation-delay: 1600ms;
        }
        
        .animation-delay-1800 {
          animation-delay: 1800ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        
        .animation-delay-2200 {
          animation-delay: 2200ms;
        }
        
        .animation-delay-3000 {
          animation-delay: 3000ms;
        }
        
        .animation-delay-4000 {
          animation-delay: 4000ms;
        }
        
        .animation-delay-5000 {
          animation-delay: 5000ms;
        }
      `}</style>
            <div className="min-h-screen relative overflow-hidden flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8 pt-20">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                    <div className="absolute inset-0 bg-black/20"></div>
                    {/* Floating orbs */}
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
                    {/* Grid pattern */}
                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
                    {/* Animated particles */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce animation-delay-1000"></div>
                        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-bounce animation-delay-3000"></div>
                        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce animation-delay-5000"></div>
                        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-bounce animation-delay-2000"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
<div className="sm:mx-auto sm:w-full sm:max-w-md animate-fade-in-up">
  {/* Logo and Welcome Area Side-by-Side */}
  <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in-up">
    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 animate-float">
      <Lock className="w-8 h-8 text-white" />
    </div>
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1">
        Welcome back
      </h2>
      <p className="text-white/80 text-sm sm:text-base">
        Sign in to your account to continue
      </p>
    </div>
  </div>
</div>


                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md animate-fade-in-up animation-delay-600">
                        <div className="bg-white/10 backdrop-blur-xl py-8 px-4 shadow-2xl ring-1 ring-white/20 sm:rounded-3xl sm:px-10 border border-white/20 hover:bg-white/15 transition-all duration-500">
                            <div className="space-y-6">
                                {/* Email Field */}
                                <div className="space-y-2 animate-slide-in-left animation-delay-800">
                                    <label htmlFor="email" className="block text-sm font-semibold text-white/90">
                                        Email address
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300 group-focus-within:text-cyan-400">
                                            <Mail className="h-5 w-5 text-white/60" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            className="block w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 rounded-xl shadow-sm placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-white/20 transition-all duration-300 text-sm sm:text-base backdrop-blur-sm hover:bg-white/15"
                                            placeholder="Enter your email"
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="space-y-2 animate-slide-in-right animation-delay-1000">
                                    <label htmlFor="password" className="block text-sm font-semibold text-white/90">
                                        Password
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300 group-focus-within:text-cyan-400">
                                            <Lock className="h-5 w-5 text-white/60" />
                                        </div>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            required
                                            value={formData.password}
                                            className="block w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl shadow-sm placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-white/20 transition-all duration-300 text-sm sm:text-base backdrop-blur-sm hover:bg-white/15"
                                            placeholder="Enter your password"
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center group"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                                            ) : (
                                                <Eye className="h-5 w-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Remember & Forgot */}
                                <div className="flex items-center justify-between text-sm animate-fade-in animation-delay-1200">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-white/30 rounded bg-white/10 transition-all duration-300"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 text-white/80 hover:text-white transition-colors duration-300">
                                            Remember me
                                        </label>
                                    </div>
                                    <button
                                        type="button"
                                        className="text-cyan-400 hover:text-cyan-300 font-medium transition-all duration-300 hover:underline"
                                    >
                                        Forgot password?
                                    </button>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-2xl animate-slide-in-up animation-delay-1400"
                                    onClick={handleSubmit}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Signing in...
                                        </>
                                    ) : (
                                        'Sign in'
                                    )}
                                </button>

                                {/* Add error message display */}
                                {authError && (
                                    <div className="mt-4 text-red-400 text-sm text-center">
                                        {authError}
                                    </div>
                                )}
                            </div>

                            {/* Divider */}
                            <div className="mt-6 animate-fade-in animation-delay-1600">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-white/30" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-transparent text-white/70">Or continue with</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Login Buttons */}
                            <div className="mt-6 grid grid-cols-2 gap-3 animate-slide-in-up animation-delay-1800">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2.5 px-4 rounded-lg bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                    <span className="ml-2">Google</span>
                                </button>

                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2.5 px-4 rounded-lg bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    <span className="ml-2">Facebook</span>
                                </button>
                            </div>

                            {/* Sign Up Link */}
                            <div className="mt-6 text-center animate-fade-in animation-delay-2000">
                                <p className="text-sm text-white/70">
                                    Don't have an account?{' '}
                                    <button
                                        type="button"
                                        className="font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:underline"
                                    >
                                        Sign up for free
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center animate-fade-in animation-delay-2200">
                        <p className="text-xs text-white/50">
                            By signing in, you agree to our{' '}
                            <button className="underline hover:text-white/70 transition-colors duration-300">Terms of Service</button>
                            {' '}and{' '}
                            <button className="underline hover:text-white/70 transition-colors duration-300">Privacy Policy</button>
                        </p>
                    </div>
                </div>
            </div>
            </>
    );
};

export default Login;