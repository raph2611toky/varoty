import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

// Main Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Footer Pages
import About from './pages/footer/About';
import Blog from './pages/footer/Blog';
import Careers from './pages/footer/Careers';
import Press from './pages/footer/Press';
import Terms from './pages/footer/Terms';
import Privacy from './pages/footer/Privacy';
import Cookies from './pages/footer/Cookies';
import Security from './pages/footer/Security';
import FAQ from './pages/footer/FAQ';
import Help from './pages/footer/Help';
import Status from './pages/footer/Status';

// Dashboard Pages
import Profile from './pages/dashboard/Profile';
import Plan from './pages/dashboard/Plan';
import Transactions from './pages/dashboard/Transactions';

function AppContent() {
  const { isDark } = useTheme();

  useEffect(() => {
    // Initialize theme on app load
  }, []);

  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Footer Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/press" element={<Press />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/security" element={<Security />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/help" element={<Help />} />
      <Route path="/status" element={<Status />} />

      {/* Dashboard Pages */}
      <Route path="/dashboard/profile" element={<Profile />} />
      <Route path="/dashboard/plan" element={<Plan />} />
      <Route path="/dashboard/transactions" element={<Transactions />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
