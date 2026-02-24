import { Review } from '../../types/landing.types';
import { useEffect, useState, useRef } from 'react';

interface TestimonialsProps {
  title: string;
  subtitle: string;
  reviews: Review[];
}

export const Testimonials = ({ title, subtitle, reviews }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = 350; // Ancho aproximado de cada card + gap

  // Auto-scroll infinito
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  // Scroll suave cuando cambia el índice
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  // Duplicar testimonios para efecto infinito
  const extendedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50" id="testimonials">
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

        {/* Container con scroll */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradientes laterales para efecto fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Track de testimonios */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory'
            }}
          >
            {extendedReviews.map((review, index) => (
              <TestimonialCard 
                key={`${index}-${review.name}`}
                review={review}
                index={index % reviews.length}
              />
            ))}
          </div>

          {/* Indicadores de navegación */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  review,  
}: { 
  review: Review; 
  index: number;
}) => {
  return (
    <div
      className={`
        flex-shrink-0
        w-[320px] md:w-[350px]
        bg-white rounded-2xl p-8 
        border border-gray-100
        shadow-lg shadow-purple-100/50
        hover:shadow-xl hover:shadow-purple-200/50
        transition-all duration-300 ease-out
        cursor-pointer
        scroll-snap-align-start
      `}
      style={{ transitionDelay: `50ms` }}
    >
      {/* Avatar y Nombre */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl font-bold">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{review.name}</h4>
          <p className="text-sm text-gray-500">{review.role}</p>
        </div>
      </div>

      {/* Estrellas */}
      <div className="flex gap-1 mb-4">
        {[...Array(review.stars)].map((_, i) => (
          <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
        ))}
      </div>

      {/* Texto del testimonio */}
      <p className="text-gray-600 leading-relaxed italic">
        "{review.text}"
      </p>
    </div>
  );
};