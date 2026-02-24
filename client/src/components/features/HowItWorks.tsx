import { StepItem } from '../../types/landing.types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface HowItWorksProps {
  title: string;
  subtitle: string;
  items: StepItem[];
}

// Iconos para cada paso (Remix Icons)
const stepIcons = [
  'user-add-line',
  'map-pin-line',
  'book-open-line',
  'trophy-line',
];

export const HowItWorks = ({ title, subtitle, items }: HowItWorksProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50" id="how-it-works">
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

        {/* Grid de Pasos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <StepCard 
                key={index}
                item={item}
                index={index}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No hay pasos disponibles
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ 
  item, 
  index 
}: { 
  item: StepItem; 
  index: number;
}) => {
  const cardRef = useIntersectionObserver();

  return (
    <div
      ref={cardRef}
      className={`
        animate-on-scroll
        bg-white rounded-2xl p-8 
        border border-gray-100
        shadow-lg shadow-purple-100/50
        hover:shadow-xl hover:shadow-purple-200/50
        transition-all duration-300 ease-out
        hover:-translate-y-2
        cursor-pointer
        group
      `}
      style={{ transitionDelay: `100ms` }}
    >
      {/* Número del paso */}
      <div className="text-6xl font-bold text-blue-100 mb-4 group-hover:text-blue-200 transition-colors duration-300">
        {item.step}
      </div>

      {/* Icono */}
      <div className={`
        w-14 h-14 rounded-xl 
        bg-gradient-to-br from-blue-500 to-purple-500
        flex items-center justify-center
        mb-6
        text-white text-2xl
        group-hover:scale-110
        transition-transform duration-300
        shadow-lg
      `}>
        <i className={`ri-${stepIcons[index]} text-3xl text-white`}></i>
      </div>

      {/* Título */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {item.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 leading-relaxed text-sm">
        {item.desc}
      </p>
    </div>
  );
};