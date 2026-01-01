import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

