import ContentPage from '../../components/ContentPage';

function Security() {
  return (
    <ContentPage title="Sécurité">
      <div className="content-section">
        <h2>Votre Sécurité est Notre Priorité</h2>
        <p>
          Varoty utilise les dernières technologies de sécurité pour protéger vos données et 
          votre vie privée.
        </p>
      </div>

      <div className="content-section">
        <h2>Mesures de Sécurité</h2>
        <ul>
          <li><strong>Chiffrement SSL/TLS:</strong> Toutes les connexions sont chiffrées</li>
          <li><strong>Authentification à Deux Facteurs:</strong> Protégez votre compte avec 2FA</li>
          <li><strong>Hachage des Mots de Passe:</strong> Vos mots de passe ne sont jamais stockés en clair</li>
          <li><strong>Audits Réguliers:</strong> Nous testons régulièrement notre sécurité</li>
          <li><strong>Conformité:</strong> Nous respectons GDPR, CCPA et autres régulations</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Signaler une Vulnérabilité</h2>
        <p>
          Si vous trouvez une vulnérabilité de sécurité, veuillez la signaler à 
          <a href="mailto:lady34366@gmail.com"> lady34366@gmail.com</a> plutôt qu'en public.
        </p>
      </div>

      <div className="content-section">
        <h2>Meilleures Pratiques</h2>
        <ul>
          <li>Utilisez un mot de passe fort et unique</li>
          <li>Activez la double authentification</li>
          <li>Ne partagez jamais votre mot de passe</li>
          <li>Consultez régulièrement l'activité de votre compte</li>
          <li>Signalez tout accès suspect immédiatement</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Certification de Sécurité</h2>
        <p>
          Varoty est certifié ISO 27001 pour la gestion de la sécurité de l'information. 
          Nous effectuons également des audits de sécurité réguliers par des tiers.
        </p>
      </div>
    </ContentPage>
  );
}

export default Security;
