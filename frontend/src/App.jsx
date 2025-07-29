import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Mentors from './components/Mentors';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import PaymentPlans from './components/Plans/PaymentPlans';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import SocialPalette from './components/SocialPalette';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/plans" element={<PaymentPlans />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
          <SocialPalette />
          <Footer />

        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
