// galuhwikri/clickcreative/ClickCreative-6dcf166e0dfcaaf82360a8a473d65912e5e1780a/src/components/Stats.tsx
const stats = [
  { number: '4', label: 'Pengalaman Bertahun' },
  { number: '100%', label: 'Klien yang Puas' },
  { number: '20+', label: 'Active Members' },
  { number: '10+', label: 'Projects Complete' }
];

export default function Stats() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background dibuat lebih solid/kontras */}
      <div className="absolute inset-0 bg-black">
        {/* Efek gradien ringan dihilangkan atau disederhanakan agar lebih bersih */}
        <div className="absolute inset-0 bg-black/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              // Hover effect: slight scale up and stronger border
              className="text-center p-8 border border-white/20 transition-all duration-300 hover:border-white hover:bg-white/10 transform hover:scale-[1.05]"
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