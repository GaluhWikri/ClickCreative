import { ArrowRight } from 'lucide-react';

// URL placeholder untuk gambar di folder public Anda
const ABOUT_IMAGE_URL = '/image/click.png'; 
// GANTI DENGAN PATH AKTUAL FILE ANDA, misalnya: '/assets/about-us.webp'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm tracking-widest text-gray-500 font-light">TENTANG KAMI</span>
              <div className="w-12 h-0.5 bg-black mt-2"></div>
            </div>

            <h2 className="text-5xl font-bold text-black leading-tight tracking-tight">
              CLICK CREATIVE
              PRODUCTION
            </h2>

            <p className="text-gray-700 leading-relaxed font-light text-lg">
              Berdiri sejak tahun 2022, Click Creative Production hadir sebagai
              penyedia jasa rental sound system, lighting, multicam, dan live
              streaming yang profesional dan terpercaya. Kami fokus mendukung
              kebutuhan event, baik skala kecil, menengah, maupun besar mulai
              dari wedding, konser, corporate gathering, hingga seminar hybrid.
            </p>

            <p className="text-gray-700 leading-relaxed font-light text-lg">
              Dengan tim yang berpengalaman dan peralatan berkualitas, Click
              Creative Production menjadi mitra ideal bagi berbagai kebutuhan
              acara seperti seminar, konser, wedding, gathering, hingga acara
              hybrid yang memadukan offline dan online.
            </p>

            <button className="group mt-4 border-2 border-black text-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-widest font-light inline-flex items-center gap-3">
            Selengkapnya              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            {/* START: MODIFIKASI UNTUK MENGGUNAKAN GAMBAR DARI PUBLIC FOLDER */}
            <div 
              className="aspect-[4/5] relative overflow-hidden border-4 border-white shadow-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${ABOUT_IMAGE_URL})` }} // Menggunakan path gambar dari folder public
            >
              {/* Tambahkan overlay gelap di atas gambar untuk kontras teks jika diperlukan */}
              <div className="absolute inset-0 bg-black/30"></div> 
              
            </div>
            {/* END: MODIFIKASI */}

            {/* Kotak dekoratif di sudut (tidak berubah) */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}