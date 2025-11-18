import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Collections', 'Projects', 'Clients', 'Contact'];

  return (
    <header className="fixed w-full top-0 z-50">
      <div className={`bg-black text-white py-2 transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center gap-6 text-sm">
          <a href="mailto:info@eventequipment.com" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Mail size={14} />
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Phone size={14} />
          </a>
        </div>
      </div>

      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-2xl tracking-tight">
              EVENT<span className="text-gray-400">PRO</span>
            </div>

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

            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter size={18} />
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

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
