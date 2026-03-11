import ContentPage from '../../components/ContentPage';

function About() {
  return (
    <ContentPage title="À propos de Varoty">
      <div className="content-section">
        <h2>Notre Mission</h2>
        <p>
          Chez Varoty, nous croyons que l'accès aux meilleures technologies d'IA ne devrait pas être 
          compliqué ni coûteux. Notre mission est de démocratiser l'accès aux modèles d'IA les plus 
          avancés en offrant une plateforme simple, sécurisée et abordable.
        </p>
      </div>

      <div className="content-section">
        <h2>Notre Vision</h2>
        <p>
          Nous envisageons un monde où chacun, du développeur freelance aux grandes entreprises, 
          peut accéder instantanément aux meilleurs outils d'IA pour amplifier sa productivité 
          et créativité sans friction technologique.
        </p>
      </div>

      <div className="content-section">
        <h2>Nos Valeurs</h2>
        <ul>
          <li><strong>Simplicité:</strong> Une interface intuitive et sans complications</li>
          <li><strong>Sécurité:</strong> Vos données sont chiffrées et protégées</li>
          <li><strong>Innovation:</strong> Nous intégrons les derniers modèles d'IA rapidement</li>
          <li><strong>Accessibilité:</strong> Des prix justes pour tous</li>
          <li><strong>Support:</strong> Une équipe prête à vous aider 24/7</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Notre Équipe</h2>
        <p>
          Varoty a été créée par une équipe de passionnés d'IA et d'entrepreneurs qui ont 
          reconnu le besoin d'une plateforme plus accessible. Nous travaillons chaque jour 
          pour améliorer votre expérience.
        </p>
      </div>

      <div className="content-section">
        <h2>Nous Contacter</h2>
        <p>
          Vous avez des questions? Contactez-nous à <a href="mailto:lady34366@gmail.com">lady34366@gmail.com</a> 
          ou visitez notre page de <a href="#contact">contact</a>.
        </p>
      </div>
    </ContentPage>
  );
}

export default About;
