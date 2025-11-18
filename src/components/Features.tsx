import { Award, DollarSign, MapPin, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Top Notch Quality',
    description: 'Premium equipment maintained to the highest standards for flawless events.'
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising on quality or service excellence.'
  },
  {
    icon: MapPin,
    title: 'Free Site Visit',
    description: 'Complimentary consultation and site assessment for perfect event planning.'
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Experienced specialists dedicated to making your event unforgettable.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4 tracking-tight">
            Why Choose Us
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
