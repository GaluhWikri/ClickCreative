import { ArrowRight } from 'lucide-react';

const collections = [
  {
    image: 'https://images.unsplash.com/photo-1756978303719-57095d8bd250?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Livestream',
    description: 'Solusi live streaming profesional untuk menjangkau audiens di mana pun.'
  },
  {
    image: 'https://images.unsplash.com/photo-1550520115-e9b95e845e4c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sound System',
    description: 'Peralatan audio premium untuk kualitas suara terbaik di setiap acara.'
  },
  {
    image: 'https://images.unsplash.com/photo-1647542507295-e779c3f062e0',
    title: 'Lighting',
    description: 'Tata cahaya artistik & profesional untuk menciptakan suasana yang berkesan'
  },
  {
    image: 'https://images.pexels.com/photos/4577179/pexels-photo-4577179.jpeg',
    title: 'Accessories',
    description: 'Aksesoris pelengkap event untuk sentuhan akhir yang sempurna.'
  }
];

export default function Collections() {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section (Sama seperti sebelumnya) */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-black text-xs font-semibold uppercase tracking-widest mb-3">
            KOLEKSI KAMI
          </div>
          <h2 className="text-5xl font-bold text-black mb-4 tracking-tight">
            Perlengkapan Acara Kami
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
            Jelajahi rangkaian lengkap peralatan berkualitas tinggi kami yang dirancang untuk memeriahkan acara Anda.
          </p>
        </div>
        {/* End Header Section */}

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden bg-black cursor-pointer"
            >
              {/* Image and Zoom Effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${collection.image})` }}
              >
                {/* Dark Overlay (Darker on hover, similar to the original image's contrast) */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500"></div>
              </div>

              {/* Text Content (Selalu ada di bawah) */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white z-10">

                {/* Judul */}
                <h3 className="text-xl font-bold mb-1 tracking-tight">
                  {collection.title}
                </h3>

                {/* Deskripsi */}
                <p className="text-gray-300 text-sm font-light mb-4">
                  {collection.description}
                </p>

                {/* 'View Collection' Link dengan Animasi */}
                <div className="flex items-center text-sm font-semibold mt-2">
                  <span className="inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    View Collection
                    {/* Ikon Panah */}
                    <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End Collections Grid */}
      </div>
    </section>
  );
}