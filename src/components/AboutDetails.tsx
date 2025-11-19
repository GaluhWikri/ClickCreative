import { ChevronLeft } from 'lucide-react';

const advantages = [
  'Tim profesional dan berpengalaman di dunia event production yang siap menghadapi berbagai tantangan teknis.',
  'Peralatan modern & terawat yang memastikan kualitas audio visual maksimal.',
  'Harga kompetitif dengan kualitas premium yang tetap sesuai kebutuhan klien.',
  'Layanan fleksibel dan siap melayani berbagai skala acara, dari private event, konser, hingga corporate gathering.',
];

const vision = [
  'Menjadi vendor penyedia jasa event production terpercaya di Indonesia dengan mengutamakan kualitas, kreativitas, dan kepuasan klien.',
];

const mission = [
  'Menyediakan layanan event production dengan standar profesional.',
  'Menghadirkan kualitas audio dan visual terbaik melalui teknologi mutakhir.',
  'emberikan solusi kreatif dan fleksibel sesuai kebutuhan klien.',
  'Menciptakan kemitraan jangka panjang dengan klien berdasarkan kepercayaan dan hasil yang memuaskan.',
];

interface AboutDetailsProps {
  onBack: () => void;
}

export default function AboutDetails({ onBack }: AboutDetailsProps) {
  return (
    // FIX: Tambahkan 'animate-fade-in-up' agar section ini langsung terlihat
    <section id="about-details" className="min-h-screen py-24 bg-gray-50 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4">

        {/* Tombol Kembali (Back Button) */}
        <button
          onClick={onBack}
          className="group text-black mb-10 inline-flex items-center gap-2 transition-colors duration-300 hover:text-gray-600"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg font-semibold tracking-wide">Kembali ke Beranda</span>
        </button>

        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-block px-4 py-1 border border-black text-xs font-semibold uppercase tracking-widest mb-3">
            FILOSOFI
          </div>
          <h1 className="text-5xl font-bold text-black mb-4 tracking-tight">
            Keunggulan & Visi Misi Kami
          </h1>
          <p className="text-gray-600 font-light text-lg max-w-3xl">
            Dalam setiap acara, kami memahami bahwa detail teknis
            menentukan kesuksesan. Click Creative Production selalu
            berupaya memberikan lebih dari sekadar layanan, melainkan
            menghadirkan pengalaman yang berkesan. Oleh karena itu, Click
            Creative Production hadir dengan berbagai keunggulan, kami
            akan menjadi mitra yang siap diandalkan untuk setiap jenis
            event.
          </p>
        </div>

        {/* KEUNGGULAN KAMI */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-6 border-b pb-2 border-gray-300">
            KEUNGGULAN KAMI
          </h2>
          <ul className="space-y-4 list-disc list-inside text-gray-700 text-lg font-light pl-5">
            {advantages.map((advantage, index) => (
              <li key={index}>
                {advantage}
              </li>
            ))}
          </ul>
        </div>

        {/* VISI */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-6 border-b pb-2 border-gray-300">
            VISI
          </h2>
          <ul className="space-y-4 list-disc list-inside text-gray-700 text-lg font-light pl-5">
            {vision.map((v, index) => (
              <li key={index}>
                {v}
              </li>
            ))}
          </ul>
        </div>

        {/* MISI */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-6 border-b pb-2 border-gray-300">
            MISI
          </h2>
          <ul className="space-y-4 list-disc list-inside text-gray-700 text-lg font-light pl-5">
            {mission.map((m, index) => (
              <li key={index}>
                {m}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}