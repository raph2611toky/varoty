import ContentPage from '../../components/ContentPage';
import '../styles/Status.css';

function Status() {
  return (
    <ContentPage title="État du Service">
      <div className="content-section">
        <h2>État du Système</h2>
        <p>Suivi en temps réel de la disponibilité de Varoty.</p>
      </div>

      <div className="status-container">
        <div className="status-item operational">
          <div className="status-indicator"></div>
          <div className="status-info">
            <h3>API Varoty</h3>
            <p>Tous les systèmes opérationnels</p>
          </div>
          <div className="status-time">À jour</div>
        </div>

        <div className="status-item operational">
          <div className="status-indicator"></div>
          <div className="status-info">
            <h3>Web App</h3>
            <p>Plateforme web fonctionnelle</p>
          </div>
          <div className="status-time">À jour</div>
        </div>

        <div className="status-item operational">
          <div className="status-indicator"></div>
          <div className="status-info">
            <h3>Paiements</h3>
            <p>Système de paiement actif</p>
          </div>
          <div className="status-time">À jour</div>
        </div>

        <div className="status-item operational">
          <div className="status-indicator"></div>
          <div className="status-info">
            <h3>Support</h3>
            <p>Équipe support disponible</p>
          </div>
          <div className="status-time">À jour</div>
        </div>
      </div>

      <div className="content-section">
        <h2>Incidents Récents</h2>
        <p>
          Aucun incident critique détecté. Dernière maintenance programmée: 
          <strong> 15 Mars 2026 02:00-03:00 UTC</strong>
        </p>
      </div>

      <div className="content-section">
        <h2>Graphique de Disponibilité (30 jours)</h2>
        <div className="uptime-stats">
          <div className="stat-box">
            <div className="stat-value">99.98%</div>
            <div className="stat-label">Disponibilité ce mois</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">99.99%</div>
            <div className="stat-label">Disponibilité annuelle</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">0 min</div>
            <div className="stat-label">Temps d'arrêt non planifié</div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Rester Informé</h2>
        <p>
          S'abonner à nos mises à jour pour être notifié en cas de problème. 
          Consultez nos <a href="/blog">derniers articles</a> pour plus d'informations.
        </p>
      </div>
    </ContentPage>
  );
}

export default Status;
