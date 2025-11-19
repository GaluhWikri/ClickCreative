import { useState, useEffect } from 'react';
// Import icon yang hilang
import { Menu, X, Mail, Phone, Instagram, Facebook , } from 'lucide-react'; 

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Tentukan kapan status 'isScrolled' berubah.
    // Jika scrollY > 40px (tinggi top bar), maka isScrolled = true.
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Collections', 'Projects', 'Clients', 'Contact'];

  return (
    <header className="fixed w-full top-0 z-50">
      
      {/* START: BILAH INFORMASI ATAS (TOP BAR) */}
      <div
        // Menggunakan transisi pada h-10 (height) dan opacity.
        // Ketika isScrolled, height menjadi h-0 dan opacity menjadi 0, sehingga Top Bar hilang tanpa meninggalkan 'gap'.
        className={`hidden md:block bg-white text-black-hidden transition-all duration-300 ease-in-out
          ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center text-xs">
          {/* Kontak Kiri */}
          <div className="flex gap-6">
            <a href="mailto:klik.creative.pro@gmail.com" className="flex items-center gap-1">
              <Mail size={14} />
              <span>klik.creative.pro@gmail.com</span>
            </a>
            <a href="tel:+6285793261313" className="flex items-center gap-1">
              <Phone size={14} />
              <span>+62 857-9326-1313</span>
            </a>
          </div>
          {/* Info Kanan */}
          <span>SOLUSI PERALATAN EVENT TERPERCAYA ANDA</span>
        </div>
      </div>
      {/* END: BILAH INFORMASI ATAS */}

      {/* NAVIGASI UTAMA (MAIN NAV) */}
      <nav 
        // Menggunakan isScrolled untuk mengatur padding vertikal, menciptakan efek 'menyusut'
        className={`shadow-lg transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black py-8' : 'bg-black py-4'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/icon/logo.png"
                alt="ClickCreative Logo"
                className="h-8 w-8 object-contain rounded-full"
              />
              <div className="text-white font-bold text-2xl tracking-tight">
                CLICK<span className="text-gray-400">CREATIVE</span>
              </div>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-gray-300 transition-colors text-sm font-light tracking-wide"
                >
                  {item.toUpperCase()}
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook size={18} />
              </a>
            </div>

            {/* Tombol Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Menu Mobile */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white hover:text-gray-300 transition-colors py-2 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.toUpperCase()}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}