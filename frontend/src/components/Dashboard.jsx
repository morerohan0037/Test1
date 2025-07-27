import React from 'react';
import { format } from 'date-fns';
import {
  User,
  Mail,
  UserCheck,
  Calendar,
  Clock,
  BookOpen,
  ChevronRight,
  Star
} from 'lucide-react';

const Dashboard = () => {
  const studentData = {
    name: 'jnnoi',
    email: 'kjnkjn',
    mentor: {
      name: 'jnkjno',
      email: 'jnknom'
    },
    sessionsCount: 69,
    lastSession: {
      date: new Date('2024-01-15'),
      duration: 60
    },
    nextSession: {
      date: new Date('2024-01-22'),
      duration: 60
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-15">
      {/* Background Elements */}
      <div
        className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-50`}
      ></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Student Dashboard
              </h1>
              <p className="text-gray-300 mt-1">Welcome back, {studentData.name}</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center space-x-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Active Learning</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>{studentData.sessionsCount} Sessions Completed</span>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card
            title="Profile"
            icon={<User className="w-6 h-6 text-white" />}
            gradientFrom="blue-500"
            gradientTo="blue-600"
            content={[
              [<User className="w-4 h-4 text-gray-300" />, studentData.name],
              [<Mail className="w-4 h-4 text-gray-300" />, studentData.email]
            ]}
          />

          {/* Mentor Card */}
          <Card
            title="Assigned Mentor"
            icon={<UserCheck className="w-6 h-6 text-white" />}
            gradientFrom="purple-500"
            gradientTo="purple-600"
            content={[
              [<User className="w-4 h-4 text-gray-300" />, studentData.mentor.name],
              [<Mail className="w-4 h-4 text-gray-300" />, studentData.mentor.email]
            ]}
          />

          {/* Sessions Summary Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">{studentData.sessionsCount}</div>
                  <div className="text-sm text-gray-300">Sessions</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Learning Progress</h3>
              <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full w-3/4 animate-pulse"></div>
              </div>
              <p className="text-gray-300 text-sm">Excellent progress!</p>
            </div>
          </div>

          {/* Last Session */}
          <Card
            title="Last Session"
            icon={<Clock className="w-6 h-6 text-white" />}
            gradientFrom="orange-500"
            gradientTo="orange-600"
            content={[
              [<Calendar className="w-4 h-4 text-gray-300" />, format(studentData.lastSession.date, 'PPP')],
              [<Clock className="w-4 h-4 text-gray-300" />, `${studentData.lastSession.duration} minutes`]
            ]}
          />

          {/* Next Session */}
          <div className="group relative md:col-span-1 lg:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                  <span className="text-cyan-300 text-sm font-medium">Upcoming</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Next Session</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-300" />
                  <span className="text-gray-200 text-sm">
                    {format(studentData.nextSession.date, 'PPP')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-gray-300" />
                  <span className="text-gray-200">{studentData.nextSession.duration} minutes</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-gray-300 text-sm">Ready to continue learning?</span>
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Join Session
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Card component
const Card = ({ title, icon, gradientFrom, gradientTo, content }) => (
  <div className="group relative">
    <div className={`absolute inset-0 bg-gradient-to-r from-${gradientFrom}/20 to-${gradientTo}/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className={`w-12 h-12 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} rounded-xl flex items-center justify-center shadow-lg`}>
          {icon}
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="space-y-4">
        {content.map(([icon, text], idx) => (
          <div className="flex items-center space-x-3" key={idx}>
            {icon}
            <span className="text-gray-200 text-sm">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Dashboard;
