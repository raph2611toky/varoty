import ContentPage from '../../components/ContentPage';

function Terms() {
  return (
    <ContentPage title="Conditions d'Utilisation">
      <div className="content-section">
        <h2>1. Acceptation des Conditions</h2>
        <p>
          En accédant et en utilisant Varoty, vous acceptez d'être lié par ces conditions d'utilisation. 
          Si vous n'acceptez pas l'une ou l'autre de ces conditions, veuillez ne pas utiliser ce service.
        </p>
      </div>

      <div className="content-section">
        <h2>2. Utilisation Licite</h2>
        <p>
          Vous acceptez d'utiliser Varoty uniquement de manière légale et en conformité avec 
          toutes les lois et réglementations applicables. Vous ne pouvez pas :
        </p>
        <ul>
          <li>Transmettre des contenus dangereux, offensants ou illégaux</li>
          <li>Tenter de contourner les mécanismes de sécurité</li>
          <li>Accéder à d'autres comptes sans autorisation</li>
          <li>Revendre ou redistribuer le service sans permission</li>
          <li>Utiliser le service pour du spam ou du harcèlement</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>3. Compte Utilisateur</h2>
        <p>
          Vous êtes responsable de maintenir la confidentialité de votre compte et mot de passe. 
          Vous acceptez la responsabilité de toutes les activités qui se produisent sous votre compte. 
          Vous acceptez de notifier immédiatement Varoty de tout accès non autorisé.
        </p>
      </div>

      <div className="content-section">
        <h2>4. Propriété Intellectuelle</h2>
        <p>
          Le service Varoty et tous ses contenus (design, textes, graphiques, images) sont la propriété 
          de Varoty ou de ses fournisseurs. Vous ne pouvez pas reproduire, distribuer ou transmettre 
          ces contenus sans autorisation écrite.
        </p>
      </div>

      <div className="content-section">
        <h2>5. Limitation de Responsabilité</h2>
        <p>
          Varoty n'est pas responsable des dommages directs, indirects, accidentels ou consécutifs 
          résultant de votre utilisation ou incapacité à utiliser le service. Notre responsabilité 
          est limitée au montant que vous avez payé pour le service.
        </p>
      </div>

      <div className="content-section">
        <h2>6. Modification du Service</h2>
        <p>
          Varoty se réserve le droit de modifier ou d'interrompre le service à tout moment, 
          avec ou sans préavis. Nous ne serons pas responsables envers vous pour toute modification 
          ou interruption du service.
        </p>
      </div>

      <div className="content-section">
        <h2>7. Résiliation</h2>
        <p>
          Varoty peut résilier votre compte à tout moment si vous violez ces conditions ou si 
          vous engagez dans des activités contraires à la loi. Vous pouvez résilier votre compte 
          à tout moment en nous contactant.
        </p>
      </div>

      <div className="content-section">
        <h2>8. Contacter Varoty</h2>
        <p>
          Pour toute question concernant ces conditions, veuillez nous contacter à 
          <a href="mailto:lady34366@gmail.com"> lady34366@gmail.com</a>.
        </p>
      </div>
    </ContentPage>
  );
}

export default Terms;
