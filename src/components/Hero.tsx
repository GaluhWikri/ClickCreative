import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl animate-fade-in">
          <h1
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
            style={{
              opacity: 1 - scrollY / 500,
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            YOUR EVENT<br />
            <span className="text-gray-300">EQUIPMENT SOLUTION</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide"
            style={{
              opacity: 1 - scrollY / 400,
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            Premium Quality. Professional Service. Unforgettable Events.
          </p>

          <button
            className="group border-2 border-white text-white px-10 py-4 hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest font-light inline-flex items-center gap-3"
            style={{
              opacity: 1 - scrollY / 300,
            }}
          >
            EXPLORE COLLECTION
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
