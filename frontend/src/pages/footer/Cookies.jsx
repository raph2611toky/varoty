import ContentPage from '../../components/ContentPage';

function Cookies() {
  return (
    <ContentPage title="Politique de Cookies">
      <div className="content-section">
        <h2>Qu'est-ce qu'un Cookie?</h2>
        <p>
          Un cookie est un petit fichier texte stocké sur votre appareil. Les cookies nous aident 
          à reconnaître votre navigateur et à mémoriser vos préférences.
        </p>
      </div>

      <div className="content-section">
        <h2>Types de Cookies que Nous Utilisons</h2>
        <ul>
          <li><strong>Cookies essentiels:</strong> Nécessaires pour le fonctionnement du site</li>
          <li><strong>Cookies de performance:</strong> Nous aident à analyser l'utilisation</li>
          <li><strong>Cookies de préférences:</strong> Mémorisent vos choix (thème, langue)</li>
          <li><strong>Cookies de marketing:</strong> Utilisés pour les publicités ciblées</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Contrôler les Cookies</h2>
        <p>
          Vous pouvez contrôler les cookies via les paramètres de votre navigateur. 
          Vous pouvez bloquer les cookies ou recevoir une notification lors du dépôt d'un cookie.
        </p>
      </div>

      <div className="content-section">
        <h2>Tiers Traceurs</h2>
        <p>
          Nous utilisons Google Analytics pour analyser l'utilisation. Google peut placer 
          des cookies sur votre navigateur. Vous pouvez désactiver cela via les paramètres de Google.
        </p>
      </div>

      <div className="content-section">
        <h2>Nous Contacter</h2>
        <p>
          Pour toute question sur les cookies, 
          <a href="mailto:lady34366@gmail.com"> lady34366@gmail.com</a>.
        </p>
      </div>
    </ContentPage>
  );
}

export default Cookies;
