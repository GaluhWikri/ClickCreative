import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            {/* START: MODIFIKASI UNTUK LOGO */}
            <div className="flex items-center gap-2 mb-6"> {/* Menambahkan div flex untuk logo dan teks */}
              <img
                src="/icon/image-removebg-preview.png" // Ganti dengan path logo Anda
                alt="ClickCreative Logo"
                className="h-8 w-8 object-contain" // Ukuran logo di footer
              />
              <h3 className="text-2xl font-bold tracking-tight">
                CLICK<span className="text-gray-400">CREATIVE</span>
              </h3>
            </div>
            {/* END: MODIFIKASI UNTUK LOGO */}

            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Mitra tepercaya Anda untuk peralatan acara premium dan layanan luar biasa sejak 2004.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/clickcreativeproduction/" className="hover:text-gray-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Facebook size={20} />
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
                  Karawang barat, Jawa Barat, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://wa.me/6285793261313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-light"
                >
                  <Phone size={20} className="text-gray-400 flex-shrink-0" />
                  +62 (8579) 3261313
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gray-400 flex-shrink-0" />
                <a href="mailto:clickcreative@eventpro.com" className="text-gray-400 hover:text-white transition-colors font-light">
                  clickcreative@eventpro.com
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