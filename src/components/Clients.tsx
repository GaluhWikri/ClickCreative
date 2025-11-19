// Tidak perlu mengimpor ikon dari lucide-react lagi karena akan diganti dengan placeholder logo/gambar
// import { Building2, Briefcase, Award, Star } from 'lucide-react';

const clients = [
  { name: 'C1' }, // Placeholder untuk Logo Client 1
  { name: 'C2' }, // Placeholder untuk Logo Client 2
  { name: 'C3' }, // Placeholder untuk Logo Client 3
  { name: 'C4' }, // Placeholder untuk Logo Client 4
  { name: 'C5' }, // Placeholder untuk Logo Client 5
  { name: 'C6' }  // Placeholder untuk Logo Client 6
];

// Data Statistik yang terlihat di gambar
const statistics = [
  { count: '50+', label: 'Corporate Events' },
  { count: '50+', label: 'Wedding Celebrations' },
  { count: '98%', label: 'Client Retention Rate' }
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-black text-xs font-semibold uppercase tracking-widest mb-3">
            OUR PARTNERS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Dipercaya Oleh Industri
          </h2>
          <p className="text-gray-600 font-light text-base md:text-lg max-w-lg mx-auto">
            telah dipercaya oleh para industri dan klien terbaik untuk menyelenggarakan momen terpenting mereka
          </p>
        </div>
        {/* End Header Section */}

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              // Gaya kotak logo sesuai gambar
              className="aspect-square flex items-center justify-center p-6 border border-gray-200 transition-all duration-300"
            >
              {/* Ini adalah placeholder teks, idealnya diganti dengan tag <img> logo klien */}
              <span className="text-2xl font-semibold text-gray-300">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Separator Horizontal Rule */}
        <hr className="my-16 border-gray-200 max-w-5xl mx-auto" />

        {/* Statistics Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          {statistics.map((stat, index) => (
            <div key={index} className="p-4">
              {/* Angka statistik yang besar */}
              <p className="text-4xl md:text-5xl font-extrabold text-black mb-1">
                {stat.count}
              </p>
              {/* Label deskriptif */}
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        {/* End Statistics Section */}

      </div>
    </section>
  );
}