import { Instagram } from 'lucide-react';

const galleryItems = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 }
];

export default function Gallery() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram size={32} className="text-black" />
            <span className="text-2xl font-light tracking-widest text-black">@EVENTPRO</span>
          </div>
          <h2 className="text-5xl font-bold text-black mb-4 tracking-tight">
            Follow Our Journey
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden border-2 border-black cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-black transition-transform duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram size={32} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors font-light tracking-wide"
          >
            <Instagram size={20} />
            <span>View More on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
