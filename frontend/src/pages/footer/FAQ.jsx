import ContentPage from '../../components/ContentPage';

function FAQ() {
  return (
    <ContentPage title="Questions Fréquemment Posées">
      <div className="content-section">
        <h2>Compte & Inscription</h2>
        <h3>Qu'est-ce que Varoty?</h3>
        <p>
          Varoty est une plateforme qui vous donne accès à plusieurs modèles d'IA (comme GPT, Claude, etc.) 
          via une interface unique et simple.
        </p>
        <h3>Comment créer un compte?</h3>
        <p>
          Cliquez sur "Inscription", remplissez votre email, et créez un mot de passe sécurisé. 
          Confirmez votre email et c'est prêt!
        </p>
        <h3>Puis-je utiliser Varoty gratuitement?</h3>
        <p>
          Oui, nous proposons un plan gratuit avec des limites. Pour un accès illimité, 
          choisissez l'un de nos plans payants.
        </p>
      </div>

      <div className="content-section">
        <h2>Paiement & Facturation</h2>
        <h3>Quels modes de paiement acceptez-vous?</h3>
        <p>
          Nous acceptons les cartes de crédit, les portefeuilles numériques, et les services mobiles 
          (mVola, Orange Money, Airtel Money).
        </p>
        <h3>Puis-je annuler mon abonnement?</h3>
        <p>
          Oui, vous pouvez annuler votre abonnement à tout moment. Aucun frais d'annulation.
        </p>
        <h3>Quand serai-je facturé?</h3>
        <p>
          Vous êtes facturisé au moment du paiement, puis automatiquement chaque mois/année selon votre plan.
        </p>
      </div>

      <div className="content-section">
        <h2>Utilisation & Modèles</h2>
        <h3>Combien de requêtes puis-je faire?</h3>
        <p>
          Cela dépend de votre plan. Le plan gratuit offre 100 requêtes/jour. Premium offre l'illimité.
        </p>
        <h3>Quels modèles IA avez-vous?</h3>
        <p>
          Nous intégrons les derniers modèles: GPT-4, Claude, Perplexity, et d'autres. 
          Consultez notre page "Démo" pour une liste complète.
        </p>
        <h3>Puis-je exporter mes données?</h3>
        <p>
          Oui, vous pouvez exporter votre historique depuis votre dashboard.
        </p>
      </div>

      <div className="content-section">
        <h2>Support & Technique</h2>
        <h3>Comment contacter le support?</h3>
        <p>
          Vous pouvez nous envoyer un email à <a href="mailto:lady34366@gmail.com">lady34366@gmail.com</a> 
          ou utiliser le formulaire de contact sur le site.
        </p>
        <h3>Quel est le temps de réponse?</h3>
        <p>
          Nous répondons généralement en moins de 24 heures. Les clients Premium reçoivent 
          un support prioritaire.
        </p>
        <h3>Le service est-il disponible 24/7?</h3>
        <p>
          Oui, Varoty fonctionne 24/7. Nous pouvons avoir une maintenance occasionnelle.
        </p>
      </div>

      <div className="content-section">
        <h2>Vous n'avez pas trouvé votre réponse?</h2>
        <p>
          <a href="mailto:lady34366@gmail.com">Nous contacter</a> - Nous sommes heureux de vous aider!
        </p>
      </div>
    </ContentPage>
  );
}

export default FAQ;
