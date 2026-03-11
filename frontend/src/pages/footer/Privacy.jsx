import ContentPage from '../../components/ContentPage';

function Privacy() {
  return (
    <ContentPage title="Politique de Confidentialité">
      <div className="content-section">
        <h2>1. Introduction</h2>
        <p>
          Varoty s'engage à protéger votre vie privée. Cette politique de confidentialité explique 
          comment nous collectons, utilisons et protégeons vos données personnelles.
        </p>
      </div>

      <div className="content-section">
        <h2>2. Données que Nous Collectons</h2>
        <p>
          Nous collectons les informations suivantes:
        </p>
        <ul>
          <li><strong>Informations de compte:</strong> Nom, email, mot de passe (hashé)</li>
          <li><strong>Informations de paiement:</strong> Informations de facturation (traitées de manière sécurisée)</li>
          <li><strong>Données d'utilisation:</strong> Pages visitées, temps d'accès, modèles utilisés</li>
          <li><strong>Informations techniques:</strong> Adresse IP, type de navigateur, appareil</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>3. Comment Nous Utilisons Vos Données</h2>
        <ul>
          <li>Fournir et améliorer notre service</li>
          <li>Traiter les paiements et les transactions</li>
          <li>Vous envoyer des mises à jour et des notifications</li>
          <li>Analyser l'utilisation du service pour améliorer les performances</li>
          <li>Respecter les obligations légales</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>4. Sécurité des Données</h2>
        <p>
          Nous utilisons le chiffrement SSL/TLS pour protéger vos données en transit. 
          Vos informations sensibles sont chiffrées et stockées de manière sécurisée. 
          Cependant, aucune transmission sur Internet n'est 100% sécurisée.
        </p>
      </div>

      <div className="content-section">
        <h2>5. Partage de Données</h2>
        <p>
          Nous ne vendons pas vos données personnelles. Nous pouvons partager vos données avec:
        </p>
        <ul>
          <li>Nos prestataires de services (paiement, hébergement)</li>
          <li>Les autorités légales si légalement requis</li>
          <li>Les partenaires avec votre consentement explicite</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>6. Durée de Conservation</h2>
        <p>
          Nous conservons vos données personnelles aussi longtemps que votre compte est actif. 
          Vous pouvez demander la suppression de vos données à tout moment en nous contactant.
        </p>
      </div>

      <div className="content-section">
        <h2>7. Droits des Utilisateurs</h2>
        <p>
          Vous avez le droit de:
        </p>
        <ul>
          <li>Accéder à vos données personnelles</li>
          <li>Corriger des informations inexactes</li>
          <li>Demander la suppression de vos données</li>
          <li>Retirer votre consentement</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>8. Cookies</h2>
        <p>
          Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez contrôler 
          les cookies via les paramètres de votre navigateur. Pour plus d'informations, 
          consultez notre <a href="/cookies">politique de cookies</a>.
        </p>
      </div>

      <div className="content-section">
        <h2>9. Nous Contacter</h2>
        <p>
          Pour toute question sur cette politique, contactez-nous à 
          <a href="mailto:lady34366@gmail.com"> lady34366@gmail.com</a>.
        </p>
      </div>
    </ContentPage>
  );
}

export default Privacy;
