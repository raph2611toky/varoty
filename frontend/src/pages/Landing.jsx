import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Landing.css';

function Landing() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/signup';
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="landing">
      <Header />

      <main className="main-content">
        <section className="hero">
          <h1 className="hero-title">
            Avançons et grandissons ensemble pour un avenir meilleur
          </h1>
          <p className="hero-description">
            Varoty vous offre un accès simplifié aux meilleurs modèles d'IA comme Perplexity,
            Rita et bien d'autres. Profitez d'une plateforme flexible, sécurisée et adaptée à vos besoins.
          </p>
          <form className="hero-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Entrez votre email"
              className="hero-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="hero-btn">
              Sign up for Varoty
            </button>
          </form>
        </section>

        <section className="pricing">
          <h2 className="section-title">Choisissez votre plan</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3 className="plan-name">Basique</h3>
              <div className="plan-price">
                <span className="price">9.99€</span>
                <span className="period">/mois</span>
              </div>
              <ul className="plan-features">
                <li>Accès aux modèles standards</li>
                <li>100 requêtes par jour</li>
                <li>Support par email</li>
                <li>Historique 7 jours</li>
              </ul>
              <button className="plan-btn">Choisir Basique</button>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">Populaire</div>
              <h3 className="plan-name">Premium</h3>
              <div className="plan-price">
                <span className="price">19.99€</span>
                <span className="period">/mois</span>
              </div>
              <ul className="plan-features">
                <li>Accès à tous les modèles</li>
                <li>Requêtes illimitées</li>
                <li>Support prioritaire 24/7</li>
                <li>Historique illimité</li>
                <li>API access</li>
                <li>Analyses avancées</li>
              </ul>
              <button className="plan-btn primary">Choisir Premium</button>
            </div>

            <div className="pricing-card">
              <h3 className="plan-name">Entreprise</h3>
              <div className="plan-price">
                <span className="price">49.99€</span>
                <span className="period">/mois</span>
              </div>
              <ul className="plan-features">
                <li>Tout de Premium</li>
                <li>Comptes multi-utilisateurs</li>
                <li>Support dédié</li>
                <li>SLA garanti</li>
                <li>Formation personnalisée</li>
                <li>Intégrations sur mesure</li>
              </ul>
              <button className="plan-btn">Contacter les ventes</button>
            </div>
          </div>
        </section>

        <section className="services">
          <h2 className="section-title">Pourquoi choisir Varoty?</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔒</div>
              <h3>Paiement sécurisé</h3>
              <p>Transactions en toute sécurité et en anonymat complet. Vos données sont protégées.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Accès instantané</h3>
              <p>Commencez immédiatement après votre inscription. Aucune attente, aucune configuration complexe.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Flexible et adapté</h3>
              <p>Des plans qui s'adaptent à vos besoins. Changez ou annulez à tout moment.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💎</div>
              <h3>Qualité premium</h3>
              <p>Accédez aux meilleurs modèles d'IA du marché avec une qualité de service exceptionnelle.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌍</div>
              <h3>Disponible partout</h3>
              <p>Utilisez Varoty depuis n'importe où dans le monde, à tout moment.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Analyses détaillées</h3>
              <p>Suivez votre utilisation et optimisez vos performances avec nos outils d'analyse.</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2 className="section-title">Contactez-nous</h2>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-row">
              <input type="text" placeholder="Nom" className="form-input" required />
              <input type="email" placeholder="Email" className="form-input" required />
            </div>
            <input type="text" placeholder="Sujet" className="form-input" required />
            <textarea placeholder="Votre message" className="form-textarea" rows="6" required></textarea>
            <button type="submit" className="contact-btn">Envoyer le message</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Landing;
