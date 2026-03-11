import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/DashboardLayout.css';

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="dashboard-page">
      <Header />

      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-header">
            <h2>Dashboard</h2>
            <button 
              className="sidebar-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
          </div>

          <nav className="sidebar-nav">
            <Link 
              to="/dashboard/profile" 
              className={`nav-item ${isActive('/dashboard/profile') ? 'active' : ''}`}
            >
              <span className="nav-icon">👤</span>
              <span className="nav-text">Mon Profil</span>
            </Link>
            <Link 
              to="/dashboard/plan" 
              className={`nav-item ${isActive('/dashboard/plan') ? 'active' : ''}`}
            >
              <span className="nav-icon">💳</span>
              <span className="nav-text">Mon Plan</span>
            </Link>
            <Link 
              to="/dashboard/transactions" 
              className={`nav-item ${isActive('/dashboard/transactions') ? 'active' : ''}`}
            >
              <span className="nav-icon">💰</span>
              <span className="nav-text">Transactions</span>
            </Link>
            <Link 
              to="/dashboard/settings" 
              className={`nav-item ${isActive('/dashboard/settings') ? 'active' : ''}`}
            >
              <span className="nav-icon">⚙️</span>
              <span className="nav-text">Paramètres</span>
            </Link>
            <Link 
              to="/" 
              className="nav-item logout"
            >
              <span className="nav-icon">🚪</span>
              <span className="nav-text">Déconnexion</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default DashboardLayout;
