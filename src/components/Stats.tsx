const stats = [
  { number: '4', label: 'Pengalaman Bertahun' },
  { number: '100%', label: 'Klien yang Puas' },
  { number: '20+', label: 'Active Members' },
  { number: '10+', label: 'Projects Complete' }
];

export default function Stats() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 border border-white/20 hover:border-white/60 transition-all duration-300 hover:bg-white/5"
            >
              <div className="text-6xl font-bold text-white mb-4 tracking-tight">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm tracking-widest font-light uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
