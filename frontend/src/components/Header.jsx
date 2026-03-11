import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import '../styles/Header.css';

function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo-link">
            <span className="logo-text">Varoty</span>
          </Link>
          <nav className="nav">
            <a href="#features" className="nav-link">Fonctionnalités</a>
            <a href="#demo" className="nav-link">Démo</a>
            <a href="#testimonials" className="nav-link">Témoignages</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
        <div className="header-right">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {isDark ? '☀️' : '🌙'}
          </button>
          <Link to="/login" className="signin-link">Connexion</Link>
          <Link to="/signup" className="signup-btn">Inscription</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
