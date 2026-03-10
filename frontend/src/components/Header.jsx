import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo-link">
            <img src="/varoty.svg" alt="Varoty" className="logo" />
            <span className="logo-text">Varoty</span>
          </Link>
          <nav className="nav">
            <button className="nav-link">Modèles</button>
          </nav>
        </div>
        <div className="header-right">
          <Link to="/login" className="signin-link">Sign in</Link>
          <Link to="/signup" className="signup-btn">Sign up</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
