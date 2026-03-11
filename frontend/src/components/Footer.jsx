import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-section">
            <h3>Varoty</h3>
            <p>Votre plateforme d'accès simplifié aux meilleurs modèles d'IA.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                f
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                in
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="social-link">
                W
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Produit</h4>
            <ul>
              <li><a href="#features">Fonctionnalités</a></li>
              <li><a href="#pricing">Tarification</a></li>
              <li><a href="#demo">Démo</a></li>
              <li><a href="#docs">Documentation</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Entreprise</h4>
            <ul>
              <li><a href="/about">À propos</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Carrières</a></li>
              <li><a href="/press">Presse</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Légal</h4>
            <ul>
              <li><a href="/terms">Conditions d'utilisation</a></li>
              <li><a href="/privacy">Politique de confidentialité</a></li>
              <li><a href="/cookies">Cookies</a></li>
              <li><a href="/security">Sécurité</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Contactez-nous</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/help">Aide</a></li>
              <li><a href="/status">État du service</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 Varoty, Inc. Tous droits réservés.
          </div>
          <div className="footer-bottom-links">
            <a href="/terms">Conditions</a>
            <a href="/privacy">Confidentialité</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
