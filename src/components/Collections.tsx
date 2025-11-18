import { Tent, Umbrella, Armchair, Sparkles } from 'lucide-react';

const collections = [
  {
    icon: Tent,
    title: 'Marquee Tent',
    description: 'Elegant structures for any occasion'
  },
  {
    icon: Umbrella,
    title: 'Canopy',
    description: 'Versatile outdoor coverage solutions'
  },
  {
    icon: Armchair,
    title: 'Furnitures',
    description: 'Premium seating and table arrangements'
  },
  {
    icon: Sparkles,
    title: 'Accessories',
    description: 'Complete your event with perfect details'
  }
];

export default function Collections() {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4 tracking-tight">
            Our Collections
          </h2>
          <p className="text-gray-600 font-light text-lg">
            Explore our comprehensive range of premium event equipment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black transition-transform duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              </div>

              <div className="relative h-full flex flex-col items-center justify-center p-8 text-white">
                <div className="mb-6 p-4 border-2 border-white group-hover:bg-white transition-colors duration-300">
                  <collection.icon
                    size={40}
                    className="text-white group-hover:text-black transition-colors duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-3 tracking-tight transform group-hover:-translate-y-2 transition-transform duration-300">
                  {collection.title}
                </h3>

                <p className="text-gray-300 text-center font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {collection.description}
                </p>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
