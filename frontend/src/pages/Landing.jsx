import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Landing.css';

function Landing() {
  const [email, setEmail] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [videoPlayButton, setVideoPlayButton] = useState(false);

  const heroRef = useScrollReveal(0.2);
  const featuresRef = useScrollReveal(0.2);
  const demoRef = useScrollReveal(0.2);
  const testimonialsRef = useScrollReveal(0.2);
  const contactRef = useScrollReveal(0.2);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/signup';
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="landing">
      <Header />

      {/* Blob background elements */}
      <div className="blob blob-1" style={{ width: '300px', height: '300px', top: '10%', left: '5%', background: 'var(--accent-light)' }}></div>
      <div className="blob blob-2" style={{ width: '250px', height: '250px', top: '50%', right: '10%', background: 'var(--accent-lighter)' }}></div>
      <div className="blob blob-3" style={{ width: '280px', height: '280px', bottom: '10%', left: '15%', background: 'var(--accent-blue-light)' }}></div>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero reveal" ref={heroRef}>
          <div className="hero-content">
            <h1 className="hero-title">
              Avançons et grandissons ensemble pour un avenir meilleur
            </h1>
            <p className="hero-description">
              Varoty vous offre un accès simplifié aux meilleurs modèles d'IA. Profitez d'une plateforme flexible, sécurisée et adaptée à vos besoins.
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
                Commencer maintenant
              </button>
            </form>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features reveal-stagger" ref={featuresRef}>
          <h2 className="section-title">Pourquoi choisir Varoty?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Paiement sécurisé</h3>
              <p>Transactions en toute sécurité et protégées. Vos données sont cryptées.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Accès instantané</h3>
              <p>Commencez immédiatement après votre inscription sans configuration complexe.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Flexible et adapté</h3>
              <p>Des plans qui s'adaptent à vos besoins. Changez ou annulez à tout moment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Qualité premium</h3>
              <p>Accédez aux meilleurs modèles d'IA avec une qualité de service exceptionnelle.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Disponible partout</h3>
              <p>Utilisez Varoty depuis n'importe où dans le monde, à tout moment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analyses détaillées</h3>
              <p>Suivez votre utilisation et optimisez vos performances avec nos outils.</p>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section id="demo" className="video-section reveal" ref={demoRef}>
          <h2 className="section-title">Découvrez Varoty en action</h2>
          <div className="video-container">
            <div className="video-wrapper">
              <video
                controls
                className="video-player"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%2360a5fa' width='800' height='450'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='48' fill='white' font-family='Arial'%3EVaroty Demo%3C/text%3E%3C/svg%3E"
              >
                <source src="/demo.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            </div>
            <div className="video-info">
              <h3>Comment utiliser Varoty</h3>
              <p>Regardez notre tutoriel complet pour découvrir comment accéder aux meilleurs modèles d'IA en quelques clics. Varoty simplifie votre flux de travail et vous permet de vous concentrer sur ce qui compte vraiment.</p>
              <ul className="benefits-list">
                <li>Accès instantané à plusieurs modèles d'IA</li>
                <li>Interface utilisateur intuitive et fluide</li>
                <li>Gestion efficace de vos requêtes</li>
                <li>Historique complet et synchronisé</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials reveal-stagger" ref={testimonialsRef}>
          <h2 className="section-title">Ce que disent nos utilisateurs</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"Varoty a transformé ma façon de travailler avec l'IA. C'est tellement simple et efficace!"</p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div>
                  <p className="author-name">Jean Dupont</p>
                  <p className="author-role">Développeur freelance</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"La meilleure plateforme que j'ai utilisée. Le support est excellent et très réactif."</p>
              <div className="testimonial-author">
                <div className="author-avatar">MC</div>
                <div>
                  <p className="author-name">Marie Chen</p>
                  <p className="author-role">Chef de projet tech</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"Je recommande Varoty à tous mes collègues. C'est un game changer pour notre équipe."</p>
              <div className="testimonial-author">
                <div className="author-avatar">PL</div>
                <div>
                  <p className="author-name">Pierre Leclerc</p>
                  <p className="author-role">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact reveal" ref={contactRef}>
          <h2 className="section-title">Entrez en contact</h2>
          <div className="contact-wrapper">
            {/* Contact Info - Left */}
            <div className="contact-info">
              <h3>Nous sommes là pour vous aider</h3>
              <p>Une question? Nous répondons généralement en moins de 24 heures.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:contact@varoty.com">contact@varoty.com</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Adresse</h4>
                    <p>123 Rue de la Tech<br />75001 Paris, France</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">⏰</span>
                  <div>
                    <h4>Heures d'ouverture</h4>
                    <p>Lun-Ven: 9h-18h CET<br />Réponses rapides 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right */}
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  className="form-input"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  className="form-input"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Sujet"
                  className="form-input"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Votre message"
                  className="form-textarea"
                  rows="5"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-btn">Envoyer le message</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Landing;
