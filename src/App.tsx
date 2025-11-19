// src/App.tsx
import { useState } from 'react'; 
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
import AboutDetails from './components/AboutDetails'; 
import { useSmoothScroll, useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  // State untuk mengontrol tampilan halaman. Default: 'landing'.
  const [currentView, setCurrentView] = useState('landing'); 
  
  useSmoothScroll();
  useScrollAnimation();

  // Fungsi untuk beralih ke halaman detail
  const handleShowDetails = () => {
    setCurrentView('aboutDetails');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fungsi untuk kembali ke halaman utama
  const handleBackToLanding = () => {
    // 1. Ubah state kembali ke 'landing'
    setCurrentView('landing');
    
    // 2. Scroll paksa ke atas setelah render selesai (penting!)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Bersihkan hash di URL
      if (window.location.hash) {
        window.location.replace(window.location.pathname);
      }
    }, 10);
  };

  const landingPageContent = (
    <>
      <Hero />
      <Features />
      {/* Meneruskan handler klik ke komponen About */}
      <About onDetailClick={handleShowDetails} />
      <Collections />
      <Stats />
      <Clients />
      <Gallery />
    </>
  );

  return (
    // PENTING: Key prop memaksa seluruh tree di dalamnya dirender ulang saat 'currentView' berubah
    <div key={currentView} className="min-h-screen bg-white"> 
      <CustomCursor />
      
      {/* Header hanya ditampilkan jika di halaman landing */}
      {currentView === 'landing' && <Header />} 
      
      <main>
        {currentView === 'landing' ? (
          // Render halaman landing
          landingPageContent
        ) : (
          // Render halaman detail
          <AboutDetails onBack={handleBackToLanding} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;