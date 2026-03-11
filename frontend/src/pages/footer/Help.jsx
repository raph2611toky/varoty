import ContentPage from '../../components/ContentPage';

function Help() {
  return (
    <ContentPage title="Centre d'Aide">
      <div className="content-section">
        <h2>Besoin d'Aide?</h2>
        <p>
          Bienvenue au centre d'aide de Varoty. Explorez les ressources ci-dessous ou 
          contactez-nous directement.
        </p>
      </div>

      <div className="content-grid">
        <div className="content-box">
          <h3>Guides de Démarrage</h3>
          <p>Apprenez les bases pour créer un compte et utiliser Varoty en quelques minutes.</p>
        </div>
        <div className="content-box">
          <h3>Tutoriels Vidéo</h3>
          <p>Regardez nos tutoriels vidéo pour maîtriser Varoty rapidement.</p>
        </div>
        <div className="content-box">
          <h3>Documentation API</h3>
          <p>Explorez notre documentation complète pour les développeurs.</p>
        </div>
        <div className="content-box">
          <h3>Troubleshooting</h3>
          <p>Trouvez des solutions aux problèmes courants et erreurs.</p>
        </div>
      </div>

      <div className="content-section">
        <h2>Articles Populaires</h2>
        <ul>
          <li>Comment changer mon mot de passe?</li>
          <li>Comment activer la double authentification?</li>
          <li>Comment utiliser mon crédit?</li>
          <li>Comment configurer mon intégration API?</li>
          <li>Comment exporter mes données?</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Contacter le Support</h2>
        <p>
          Si vous ne trouvez pas votre réponse, veuillez contacter notre équipe support à 
          <a href="mailto:lady34366@gmail.com"> lady34366@gmail.com</a>.
        </p>
      </div>
    </ContentPage>
  );
}

export default Help;
