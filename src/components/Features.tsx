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
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl"
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
