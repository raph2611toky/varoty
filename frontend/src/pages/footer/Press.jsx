import ContentPage from '../../components/ContentPage';

function Press() {
  return (
    <ContentPage title="Centre Presse">
      <div className="content-section">
        <h2>Ressources Médias</h2>
        <p>
          Découvrez les dernières informations sur Varoty, nos annonces et nos couvertures médias.
        </p>
      </div>

      <div className="content-section">
        <h2>Communiqués de Presse</h2>
        <ul>
          <li><strong>Janvier 2026:</strong> Varoty atteint 100k utilisateurs actifs</li>
          <li><strong>Décembre 2025:</strong> Lancement de la V2 avec support multi-modèles</li>
          <li><strong>Novembre 2025:</strong> Financement de série A annoncé</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Mentions dans les Médias</h2>
        <ul>
          <li>TechCrunch: "Varoty simplifie l'accès à l'IA"</li>
          <li>Forbes: "5 startups à surveiller en 2026"</li>
          <li>Wired: "La plateforme IA qui change tout"</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Contact Presse</h2>
        <p>
          Pour les demandes médias et interviews, contactez 
          <a href="mailto:lady34366@gmail.com"> lady34366@gmail.com</a>.
        </p>
      </div>
    </ContentPage>
  );
}

export default Press;
