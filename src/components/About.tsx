import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm tracking-widest text-gray-500 font-light">ABOUT US</span>
              <div className="w-12 h-0.5 bg-black mt-2"></div>
            </div>

            <h2 className="text-5xl font-bold text-black leading-tight tracking-tight">
              Crafting Perfect Events Since 2004
            </h2>

            <p className="text-gray-700 leading-relaxed font-light text-lg">
              We are a premier event equipment provider specializing in high-quality marquee tents, canopies, furniture, and accessories. With two decades of experience, we've perfected the art of transforming spaces into extraordinary venues.
            </p>

            <p className="text-gray-700 leading-relaxed font-light text-lg">
              Our commitment to excellence, attention to detail, and professional service have made us the trusted choice for events ranging from intimate gatherings to large-scale celebrations.
            </p>

            <button className="group mt-4 border-2 border-black text-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-widest font-light inline-flex items-center gap-3">
              READ MORE
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-black relative overflow-hidden border-4 border-white shadow-2xl">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-sm font-light tracking-wide">
                  Premium equipment for unforgettable moments
                </p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
