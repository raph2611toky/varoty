import DashboardLayout from '../../components/DashboardLayout';
import '../../styles/DashboardPlan.css';

function Plan() {
  const currentPlan = 'premium';
  const plans = [
    {
      id: 'free',
      name: 'Gratuit',
      price: '0€',
      period: '/mois',
      description: 'Idéal pour découvrir',
      features: [
        '100 requêtes/jour',
        'Modèles de base',
        'Support email',
        'Historique 7 jours',
        'Pas de API'
      ],
      action: 'Plan actuel'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '19.99€',
      period: '/mois',
      description: 'Le plus populaire',
      features: [
        'Requêtes illimitées',
        'Tous les modèles',
        'Support prioritaire 24/7',
        'Historique illimité',
        'Accès API',
        'Analyses avancées'
      ],
      action: 'Plan actuel',
      badge: 'Populaire'
    },
    {
      id: 'enterprise',
      name: 'Entreprise',
      price: '49.99€',
      period: '/mois+',
      description: 'Pour les équipes',
      features: [
        'Tout de Premium',
        'Comptes multi-utilisateurs',
        'Support dédié',
        'SLA garanti',
        'Formation personnalisée',
        'Intégrations sur mesure'
      ],
      action: 'Contacter les ventes'
    }
  ];

  const billingInfo = {
    nextBillingDate: '15 Avril 2026',
    method: 'Carte de crédit (****1234)',
    amount: '19.99€'
  };

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>Mon Plan</h1>
        <p>Gérez votre plan et tarification</p>
      </div>

      {/* Current Plan Info */}
      <div className="current-plan-card">
        <h2>Plan Actuel</h2>
        <div className="current-plan-content">
          <div>
            <h3>Premium</h3>
            <p className="plan-price">19.99€ <span>/mois</span></p>
            <p className="plan-description">Plan complet avec accès à tous les modèles</p>
            <div className="plan-stats">
              <div className="stat">
                <div className="stat-label">Requêtes ce mois</div>
                <div className="stat-value">2,543 / Illimitées</div>
              </div>
              <div className="stat">
                <div className="stat-label">Prochain renouvellement</div>
                <div className="stat-value">{billingInfo.nextBillingDate}</div>
              </div>
            </div>
          </div>
          <div className="plan-actions">
            <button className="btn-change">Changer de Plan</button>
            <button className="btn-cancel-sub">Annuler l'abonnement</button>
          </div>
        </div>
      </div>

      {/* Billing Information */}
      <div className="billing-card">
        <h2>Informations de Facturation</h2>
        <div className="billing-info">
          <div className="billing-item">
            <span className="label">Prochain paiement</span>
            <span className="value">{billingInfo.amount}</span>
          </div>
          <div className="billing-item">
            <span className="label">Date du prochain renouvellement</span>
            <span className="value">{billingInfo.nextBillingDate}</span>
          </div>
          <div className="billing-item">
            <span className="label">Méthode de paiement</span>
            <span className="value">{billingInfo.method}</span>
          </div>
        </div>
        <button className="btn-update-payment">Mettre à jour le paiement</button>
      </div>

      {/* Available Plans */}
      <div className="available-plans">
        <h2>Autres Plans Disponibles</h2>
        <div className="plans-grid">
          {plans.map(plan => (
            <div key={plan.id} className={`plan-card ${plan.id === currentPlan ? 'active' : ''}`}>
              {plan.badge && <div className="badge">{plan.badge}</div>}
              <h3>{plan.name}</h3>
              <div className="plan-price-large">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="description">{plan.description}</p>
              
              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`plan-action-btn ${plan.id === currentPlan ? 'current' : ''}`}>
                {plan.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Stats */}
      <div className="usage-stats">
        <h2>Utilisation du Mois</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Requêtes Utilisées</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: '70%' }}></div>
            </div>
            <p>2,543 requêtes utilisées</p>
          </div>
          <div className="stat-card">
            <h4>Modèles Utilisés</h4>
            <div className="model-list">
              <div className="model-item">
                <span>GPT-4</span>
                <span>45%</span>
              </div>
              <div className="model-item">
                <span>Claude</span>
                <span>35%</span>
              </div>
              <div className="model-item">
                <span>Autres</span>
                <span>20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Plan;
