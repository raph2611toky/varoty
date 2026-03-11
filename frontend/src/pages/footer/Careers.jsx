import ContentPage from '../../components/ContentPage';

function Careers() {
  return (
    <ContentPage title="Carrières">
      <div className="content-section">
        <h2>Rejoignez l'Équipe Varoty</h2>
        <p>
          Nous cherchons des talents passionnés pour nous aider à révolutionner l'accès à l'IA. 
          Si vous êtes un développeur, designer, ou product manager talentueux, nous aimerions 
          vous rencontrer.
        </p>
      </div>

      <div className="content-section">
        <h2>Postes Disponibles</h2>
        <ul>
          <li><strong>Développeur Full-Stack:</strong> Rejoignez notre équipe backend et frontend</li>
          <li><strong>Ingénieur DevOps:</strong> Aidez-nous à scaler notre infrastructure</li>
          <li><strong>Product Manager:</strong> Façonnez l'avenir de Varoty</li>
          <li><strong>Community Manager:</strong> Construisez notre communauté mondiale</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Pourquoi Varoty</h2>
        <p>
          Nous offrons une équipe dynamique, une technologie de pointe, des avantages compétitifs 
          et l'opportunité de travailler sur un produit qui change la vie des gens.
        </p>
      </div>

      <div className="content-section">
        <h2>Candidater</h2>
        <p>
          Intéressé? Envoyez votre CV à <a href="mailto:lady34366@gmail.com">lady34366@gmail.com</a> 
          avec "Candidature" dans l'objet.
        </p>
      </div>
    </ContentPage>
  );
}

export default Careers;
