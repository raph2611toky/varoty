import Header from './Header';
import Footer from './Footer';
import '../styles/ContentPage.css';

function ContentPage({ title, children, className = '' }) {
  return (
    <div className={`content-page ${className}`}>
      <Header />
      
      <main className="content-main">
        <div className="content-header">
          <h1 className="content-title">{title}</h1>
        </div>

        <div className="content-body">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContentPage;
