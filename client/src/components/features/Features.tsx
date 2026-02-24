import { FeatureCard } from '../../types/landing.types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface FeaturesProps {
  title: string;
  subtitle: string;
  cards: FeatureCard[];
}

const iconColors = [
  'bg-gradient-to-br from-orange-400 to-orange-500',
  'bg-gradient-to-br from-red-400 to-red-500',
  'bg-gradient-to-br from-blue-400 to-blue-500',
  'bg-gradient-to-br from-purple-400 to-purple-500',
  'bg-gradient-to-br from-green-400 to-green-500',
  'bg-gradient-to-br from-cyan-400 to-cyan-500',
];

const borderColors = [
  'hover:border-orange-400',
  'hover:border-red-400',
  'hover:border-blue-400',
  'hover:border-purple-400',
  'hover:border-green-400',
  'hover:border-cyan-400',
];

const FeatureCardItem = ({ 
  card, 
  index 
}: { 
  card: FeatureCard; 
  index: number;
}) => {
  const cardRef = useIntersectionObserver();

  return (
    <div
      ref={cardRef}
      className={`
        animate-on-scroll
        bg-white rounded-2xl p-8 
        border-2 border-gray-100
        shadow-sm hover:shadow-xl
        transition-all duration-300 ease-out
        hover:-translate-y-2
        ${borderColors[index % borderColors.length]}
        cursor-pointer
        group
      `}
      style={{ transitionDelay: `10ms` }}
    >
      {/* Icono con fondo */}
      <div className={`
        w-14 h-14 rounded-xl 
        ${iconColors[index % iconColors.length]}
        flex items-center justify-center
        mb-6
        text-white text-2xl
        group-hover:scale-110
        transition-transform duration-300
      `}>
        <i className={`ri-${card.icon}-line text-3xl text-white`}></i>
      </div>

      {/* Título */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {card.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 leading-relaxed">
        {card.desc}
      </p>
    </div>
  );
};

export const Features = ({ title, subtitle, cards }: FeaturesProps) => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards && cards.length > 0 ? (
            cards.map((card, index) => (
              <FeatureCardItem 
                key={index}
                card={card}
                index={index}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No hay características disponibles
            </p>
          )}
        </div>
      </div>
    </section>
  );
};