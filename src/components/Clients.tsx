import { Building2, Briefcase, Award, Star } from 'lucide-react';

const clients = [
  { icon: Building2, name: 'Corporate Partner' },
  { icon: Briefcase, name: 'Business Solutions' },
  { icon: Award, name: 'Premium Events' },
  { icon: Star, name: 'Elite Services' },
  { icon: Building2, name: 'Global Ventures' },
  { icon: Briefcase, name: 'Pro Events Co' }
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4 tracking-tight">
            Trusted Partners
          </h2>
          <p className="text-gray-600 font-light text-lg">
            Proud to work with industry leaders
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 border border-gray-200 hover:border-black transition-all duration-300 group"
            >
              <client.icon
                size={48}
                className="text-gray-400 group-hover:text-black transition-colors duration-300 mb-3"
              />
              <span className="text-xs text-gray-500 group-hover:text-black transition-colors duration-300 text-center font-light">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
