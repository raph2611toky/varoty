import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/terms" className="footer-link">Terms</a>
          <a href="/privacy" className="footer-link">Privacy</a>
          <a href="/docs" className="footer-link">Docs</a>
          <a href="/support" className="footer-link">Support</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-copyright">
          © 2026 Varoty, Inc.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
