// galuhwikri/clickcreative/ClickCreative-6dcf166e0dfcaaf82360a8a473d65912e5e1780a/src/components/Features.tsx
import { Award, DollarSign, MapPin, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Kualitas Peralatan Premium',
    description: 'Peralatan audio, lighting, dan stage terawat yang dijaga dengan standar tertinggi untuk menjamin kesuksesan event tanpa cela.'
  },
  {
    icon: DollarSign,
    title: 'Harga Kompetitif Terbaik',
    description: 'Tarif yang transparan dan bersaing, dirancang agar Anda mendapatkan solusi event production terbaik tanpa mengorbankan kualitas dan layanan profesional.'
  },
  {
    icon: MapPin,
    title: 'Gratis Survei Lokasi & Konsultasi',
    description: 'Konsultasi komplementer dan penilaian lokasi acara oleh tim ahli kami untuk perencanaan event yang sempurna, mulai dari flow hingga teknis..'
  },
  {
    icon: Users,
    title: 'Tim Produksi Berpengalaman',
    description: 'Spesialis teknis dan kru terlatih yang berdedikasi untuk memastikan seluruh aspek produksi event Anda berjalan lancar dari awal hingga akhir.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4 tracking-tight">
            Mengapa Memilih Kami
          </h2>
          {/* Diperluas sedikit untuk efek yang lebih dramatis */}
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              // Dibuat lebih interaktif: shadow, slight translateY on hover, faster transition
              className="group bg-white p-8 border border-gray-200 transition-all duration-500 hover:border-black hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="mb-6 inline-block p-4 border border-black group-hover:bg-black transition-colors duration-300">
                <feature.icon
                  size={32}
                  className="text-black group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}