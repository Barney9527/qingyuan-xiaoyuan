import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Navbar />
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
