import ContentPage from '../../components/ContentPage';

function Blog() {
  return (
    <ContentPage title="Blog">
      <div className="content-section">
        <h2>Bienvenue sur le Blog de Varoty</h2>
        <p>
          Découvrez les dernières actualités, tutoriels et insights sur l'IA et Varoty.
        </p>
      </div>

      <div className="content-grid">
        <div className="content-box">
          <h3>Premiers Pas avec Varoty</h3>
          <p>Apprenez comment créer votre compte et commencer à utiliser Varoty en quelques minutes.</p>
        </div>
        <div className="content-box">
          <h3>Guide Complet des Modèles IA</h3>
          <p>Explorez chaque modèle disponible et trouvez celui qui correspond le mieux à vos besoins.</p>
        </div>
        <div className="content-box">
          <h3>Optimiser vos Requêtes IA</h3>
          <p>Découvrez les meilleures pratiques pour obtenir les meilleurs résultats de vos requêtes.</p>
        </div>
        <div className="content-box">
          <h3>Cas d'Usage Réels</h3>
          <p>Explorez comment les entreprises utilisent Varoty pour améliorer leur productivité.</p>
        </div>
      </div>

      <div className="content-section">
        <h2>Rester Informé</h2>
        <p>
          Abonnez-vous à notre newsletter pour recevoir les derniers articles et mises à jour 
          directement dans votre inbox.
        </p>
      </div>
    </ContentPage>
  );
}

export default Blog;
