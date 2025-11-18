import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Collections from './components/Collections';
import Stats from './components/Stats';
import Clients from './components/Clients';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useSmoothScroll, useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  useSmoothScroll();
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Header />
      <Hero />
      <Features />
      <About />
      <Collections />
      <Stats />
      <Clients />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
