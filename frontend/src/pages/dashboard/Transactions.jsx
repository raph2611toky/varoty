import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import '../../styles/DashboardTransactions.css';

function Transactions() {
  const [filterStatus, setFilterStatus] = useState('all');

  const transactions = [
    {
      id: 'TRX001',
      date: '15 Mars 2026',
      description: 'Paiement Abonnement Premium',
      amount: '19.99€',
      method: 'mVola',
      status: 'validé',
      reference: '+261 32 12 34 56'
    },
    {
      id: 'TRX002',
      date: '15 Février 2026',
      description: 'Paiement Abonnement Premium',
      amount: '19.99€',
      method: 'Orange Money',
      status: 'validé',
      reference: '+261 32 34 56 78'
    },
    {
      id: 'TRX003',
      date: '10 Février 2026',
      description: 'Recharge de Crédit',
      amount: '50€',
      method: 'Airtel Money',
      status: 'en attente',
      reference: '+261 32 56 78 90'
    },
    {
      id: 'TRX004',
      date: '5 Février 2026',
      description: 'Paiement Abonnement Premium',
      amount: '19.99€',
      method: 'mVola',
      status: 'validé',
      reference: '+261 32 12 34 56'
    },
    {
      id: 'TRX005',
      date: '28 Janvier 2026',
      description: 'Upgrade vers Premium',
      amount: '49.99€',
      method: 'Orange Money',
      status: 'rejeté',
      reference: 'Erreur de paiement'
    },
    {
      id: 'TRX006',
      date: '15 Janvier 2026',
      description: 'Paiement Abonnement Gratuit',
      amount: '0€',
      method: 'Gratuit',
      status: 'validé',
      reference: 'Plan Gratuit'
    },
    {
      id: 'TRX007',
      date: '5 Janvier 2026',
      description: 'Recharge de Crédit',
      amount: '100€',
      method: 'Airtel Money',
      status: 'validé',
      reference: '+261 32 34 56 78'
    },
    {
      id: 'TRX008',
      date: '1 Janvier 2026',
      description: 'Paiement Abonnement Premium',
      amount: '19.99€',
      method: 'mVola',
      status: 'en attente',
      reference: '+261 32 12 34 56'
    }
  ];

  const paymentMethods = [
    { id: 'mvola', name: 'mVola', icon: '📱', color: '#FF6B00' },
    { id: 'orange', name: 'Orange Money', icon: '🟠', color: '#FF8C00' },
    { id: 'airtel', name: 'Airtel Money', icon: '🔴', color: '#E41C13' }
  ];

  const filteredTransactions = filterStatus === 'all' 
    ? transactions 
    : transactions.filter(t => t.status === filterStatus);

  const getStatusBadge = (status) => {
    const statusMap = {
      'validé': 'valid',
      'en attente': 'pending',
      'rejeté': 'rejected'
    };
    return statusMap[status] || status;
  };

  const stats = {
    total: transactions.reduce((sum, t) => {
      const amount = parseFloat(t.amount);
      return isNaN(amount) ? sum : sum + amount;
    }, 0),
    validées: transactions.filter(t => t.status === 'validé').length,
    enAttente: transactions.filter(t => t.status === 'en attente').length,
    rejetées: transactions.filter(t => t.status === 'rejeté').length
  };

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>Mes Transactions</h1>
        <p>Historique des paiements et transactions</p>
      </div>

      {/* Stats Cards */}
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Total Dépensé</h2>
          <div className="dashboard-value">{stats.total.toFixed(2)}€</div>
          <p>Tous les paiements</p>
        </div>
        <div className="dashboard-card">
          <h2>Transactions Validées</h2>
          <div className="dashboard-value">{stats.validées}</div>
          <p>Paiements approuvés</p>
        </div>
        <div className="dashboard-card">
          <h2>En Attente</h2>
          <div className="dashboard-value">{stats.enAttente}</div>
          <p>En cours de traitement</p>
        </div>
        <div className="dashboard-card">
          <h2>Rejetées</h2>
          <div className="dashboard-value">{stats.rejetées}</div>
          <p>Transactions échouées</p>
        </div>
      </div>

      {/* Payment Methods Info */}
      <div className="payment-methods-section">
        <h2>Modes de Paiement Disponibles</h2>
        <div className="payment-methods">
          {paymentMethods.map(method => (
            <div key={method.id} className="payment-method-card">
              <div className="method-icon" style={{ background: method.color }}>
                {method.icon}
              </div>
              <h3>{method.name}</h3>
              <p>Paiement sécurisé et instantané</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filter-group">
          <button
            className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
            onClick={() => setFilterStatus('all')}
          >
            Tous ({transactions.length})
          </button>
          <button
            className={`filter-btn ${filterStatus === 'validé' ? 'active' : ''}`}
            onClick={() => setFilterStatus('validé')}
          >
            Validées ({stats.validées})
          </button>
          <button
            className={`filter-btn ${filterStatus === 'en attente' ? 'active' : ''}`}
            onClick={() => setFilterStatus('en attente')}
          >
            En Attente ({stats.enAttente})
          </button>
          <button
            className={`filter-btn ${filterStatus === 'rejeté' ? 'active' : ''}`}
            onClick={() => setFilterStatus('rejeté')}
          >
            Rejetées ({stats.rejetées})
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>ID Transactions</th>
            <th>Date</th>
            <th>Description</th>
            <th>Montant</th>
            <th>Méthode</th>
            <th>Référence</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td className="transaction-id">{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td className="amount">{transaction.amount}</td>
              <td>
                <div className="method-badge">
                  {transaction.method}
                </div>
              </td>
              <td className="reference">{transaction.reference}</td>
              <td>
                <span className={`status-badge ${getStatusBadge(transaction.status)}`}>
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredTransactions.length === 0 && (
        <div className="empty-state">
          <p>Aucune transaction trouvée</p>
        </div>
      )}

      {/* Support */}
      <div className="support-section">
        <h2>Problème avec une transaction?</h2>
        <p>
          Si vous avez des questions sur vos paiements, 
          <a href="mailto:lady34366@gmail.com"> contactez-nous</a> et nous vous aiderons.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default Transactions;
