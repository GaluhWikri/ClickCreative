import { ArrowRight } from 'lucide-react';

// URL placeholder untuk gambar latar belakang. Ganti dengan URL gambar Anda.
const BACKGROUND_IMAGE_URL = 'https://images.unsplash.com/photo-1683466076402-1fa1df417675?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Latar Belakang Gambar dengan Overlay Gelap */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
      >
        {/* Overlay Gelap untuk Kontras Teks */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Konten Teks dan CTA */}
      <div className="relative z-10 h-full flex items-center">
        {/* Container untuk membatasi lebar (max-w-7xl) dan memberi padding horizontal */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl">

            {/* Judul Utama */}
            <h1 className="text-6xl md:text-7xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              SOLUSI PERALATAN<br />
              EVENT ANDA
            </h1>

            {/* Subteks */}
            <p className="text-xl text-white mb-8 font-light tracking-wide max-w-lg">
                SoundSystem, LiveStream, Lighting, dan aksesoris event berkualitas premium untuk pengalaman tak terlupakan.
            </p>

            {/* Tombol Aksi (CTA) */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Tombol 1: Explore Collections (Putih, Teks Hitam) */}
              <button
                className="group bg-white text-black px-8 py-3 transition-all duration-300 text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-3 hover:bg-gray-200"
              >
                Explore Collections
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              {/* Tombol 2: Contact Us (Transparan, Border Putih) */}
              <a
                href="https://wa.me/6285793261313" // Menggunakan format internasional (62 untuk Indonesia)
                target="_blank" // Agar terbuka di tab baru (opsional)
                rel="noopener noreferrer" // Praktik keamanan yang baik saat menggunakan target="_blank"
                className="border border-white text-white px-8 py-3 transition-colors duration-300 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}