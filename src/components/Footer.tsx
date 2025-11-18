import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">
              EVENT<span className="text-gray-400">PRO</span>
            </h3>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Your trusted partner for premium event equipment and exceptional service since 2004.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Collections', 'Projects', 'Clients', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">OTHER PAGES</h4>
            <ul className="space-y-3">
              {['Gallery', 'Testimonials', 'FAQ', 'Blog', 'Careers', 'Terms'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">CONTACT INFO</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gray-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 font-light">
                  123 Event Street, Business District, City 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gray-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors font-light">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gray-400 flex-shrink-0" />
                <a href="mailto:info@eventpro.com" className="text-gray-400 hover:text-white transition-colors font-light">
                  info@eventpro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm font-light tracking-wide">
            &copy; {new Date().getFullYear()} EventPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
