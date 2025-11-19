// Tidak perlu mengimpor ikon dari lucide-react lagi karena akan diganti dengan placeholder logo/gambar
// import { Building2, Briefcase, Award, Star } from 'lucide-react';

const clients = [
  // DIUBAH: Item pertama ditambahkan 'name' untuk konsistensi data
  { name: 'Client 1', image: '/client/logo politeknik kesehatan banten.png' },
  { name: 'Client 2', image: '/client/kazehq logo.jpeg' },
  { name: 'Client 3', image: '/client/folkanic fest.jpeg' },
  { name: 'Client 4', image: '/client/kunkarima logo.jpg' },
  { name: 'Client 5', image: '/client/politeknik industri petrokimia banten logo.jpg' },
  { name: 'Client 6', image: '/client/ponpes logo.jpg' },
];

// Data Statistik yang terlihat di gambar - COPY DITINGKATKAN
const statistics = [
  { count: '50+', label: 'Proyek Sukses' },
  { count: '50+', label: 'Klien Terlayani' },
  { count: '98%', label: 'Tingkat Kepuasan' }
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-black text-xs font-semibold uppercase tracking-widest mb-3">
            PALANGGAN KAMI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Klien & Mitra Kami
          </h2>
          <p className="text-gray-600 font-light text-base md:text-lg max-w-lg mx-auto">
            Kami bangga telah berkolaborasi dan dipercaya oleh berbagai perusahaan dan institusi terkemuka untuk menyukseskan acara-acara penting mereka.
          </p>
        </div>
        {/* End Header Section */}

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              // Gaya kotak logo
              className="aspect-square flex items-center justify-center p-6 border border-gray-200 transition-all duration-300 hover:border-black"
            >
              <img
                src={client.image}
                alt={client.name}
                // Menerapkan hover:grayscale untuk efek hitam-putih saat kursor diarahkan.
                className="max-h-full max-w-full object-contain filter grayscale-0 hover:grayscale transition-all duration-300"
              />
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
              {/* Label deskriptif BARU */}
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