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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.8v-2.9h2.8V9.4c0-2.8 1.6-4.4 4.2-4.4 1.2 0 2.5.2 2.5.2v2.7h-1.4c-1.4 0-1.8.9-1.8 1.8v2.2h3.1l-.5 2.9h-2.6v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.5v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.2 2.4 4.2 5.4v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z"/>
                </svg>
              </a>

              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M20.5 3.5A11.8 11.8 0 0 0 12 .5C5.6.5.5 5.6.5 12c0 2.1.6 4.2 1.7 6L.5 23.5 6.2 22c1.8 1 3.8 1.5 5.8 1.5h.1c6.4 0 11.5-5.1 11.5-11.5 0-3.1-1.2-6-3.1-8.5zM12 21.3c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.4.9.9-3.3-.2-.4A9.3 9.3 0 1 1 12 21.3zm5.1-7c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.3 2.4 3.7 5.9 5.1.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/>
                </svg>
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
