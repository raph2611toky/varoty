import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import '../../styles/DashboardProfile.css';

function Profile() {
  const [profile, setProfile] = useState({
    name: 'Jean Dupont',
    email: 'jean@example.com',
    phone: '+33 6 12 34 56 78',
    country: 'France',
    joinDate: '15 Janvier 2026'
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfile(formData);
    setEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setEditing(false);
  };

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>Mon Profil</h1>
        <p>Gérez vos informations personnelles</p>
      </div>

      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header-card">
          <div className="profile-avatar">
            {profile.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="profile-header-info">
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
          </div>
          {!editing && (
            <button className="edit-btn" onClick={() => setEditing(true)}>
              Modifier
            </button>
          )}
        </div>

        {/* Profile Form */}
        <div className="profile-form-card">
          <h3>Informations Personnelles</h3>
          
          <div className="form-group">
            <label>Nom Complet</label>
            <input
              type="text"
              name="name"
              value={editing ? formData.name : profile.name}
              onChange={handleChange}
              disabled={!editing}
              className={editing ? '' : 'disabled'}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={editing ? formData.email : profile.email}
              onChange={handleChange}
              disabled={!editing}
              className={editing ? '' : 'disabled'}
            />
          </div>

          <div className="form-group">
            <label>Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={editing ? formData.phone : profile.phone}
              onChange={handleChange}
              disabled={!editing}
              className={editing ? '' : 'disabled'}
            />
          </div>

          <div className="form-group">
            <label>Pays</label>
            <input
              type="text"
              name="country"
              value={editing ? formData.country : profile.country}
              onChange={handleChange}
              disabled={!editing}
              className={editing ? '' : 'disabled'}
            />
          </div>

          <div className="form-group">
            <label>Date d'Inscription</label>
            <input
              type="text"
              value={profile.joinDate}
              disabled={true}
              className="disabled"
            />
          </div>

          {editing && (
            <div className="form-actions">
              <button className="btn-save" onClick={handleSave}>
                Enregistrer
              </button>
              <button className="btn-cancel" onClick={handleCancel}>
                Annuler
              </button>
            </div>
          )}
        </div>

        {/* Account Settings */}
        <div className="settings-card">
          <h3>Sécurité du Compte</h3>
          
          <div className="setting-item">
            <div className="setting-info">
              <h4>Mot de passe</h4>
              <p>Changez votre mot de passe régulièrement</p>
            </div>
            <button className="btn-secondary">Modifier</button>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h4>Double Authentification</h4>
              <p>Activez 2FA pour plus de sécurité</p>
            </div>
            <button className="btn-secondary">Configurer</button>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h4>Sessions Actives</h4>
              <p>Gérez vos connexions actives</p>
            </div>
            <button className="btn-secondary">Afficher</button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="danger-card">
          <h3>Zone de Danger</h3>
          <div className="danger-item">
            <div className="danger-info">
              <h4>Supprimer le compte</h4>
              <p>Supprimez définitivement votre compte et toutes vos données</p>
            </div>
            <button className="btn-danger">Supprimer</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
