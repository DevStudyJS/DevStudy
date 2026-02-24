import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface HeroProps {
  courses: string;
  lessons: string;
  students: string;
}

export const Hero = ({ courses, lessons, students }: HeroProps) => {
  const card1Ref = useIntersectionObserver();
  const card2Ref = useIntersectionObserver();
  const card3Ref = useIntersectionObserver();

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-600/80 via-blue-400 to-purple-600">
      
      {/*Fondo Geométrico */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Formas flotantes grandes */}
        <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-orange-400/30 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-[20%] right-[10%] w-24 h-24 bg-yellow-300/30 rounded-full blur-xl animate-float-medium"></div>
        <div className="absolute bottom-[15%] left-[15%] w-40 h-40 bg-pink-400/30 rounded-full blur-xl animate-float-fast"></div>
        <div className="absolute bottom-[25%] right-[20%] w-28 h-28 bg-indigo-300/30 rounded-full blur-xl animate-float-slow"></div>

        {/* Hexágono */}
        <div className="absolute top-[15%] left-[12%] w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 opacity-80 animate-float-medium rotate-12"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
        </div>

        {/* Rombo/Diamante */}
        <div className="absolute top-[25%] right-[8%] w-24 h-24 bg-gradient-to-br from-orange-300 to-yellow-400 opacity-70 animate-float-slow rotate-45"></div>

        {/* Círculos pequeños */}
        <div className="absolute top-[8%] right-[25%] w-6 h-6 bg-orange-300/60 rounded-full animate-pulse"></div>
        <div className="absolute top-[35%] left-[8%] w-4 h-4 bg-yellow-200/60 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-[30%] right-[35%] w-12 h-12 bg-pink-300/60 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-[10%] left-[25%] w-10 h-10 bg-indigo-300/60 rounded-full animate-pulse delay-700"></div>

        {/* Triángulos */}
        <div className="absolute top-[40%] right-[15%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[26px] border-b-blue-300/50 animate-float-medium"></div>
        <div className="absolute bottom-[35%] left-[30%] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-yellow-300/50 animate-float-fast rotate-180"></div>

        {/* Cuadrados con patrón de puntos */}
        <div className="absolute bottom-[8%] right-[8%] w-20 h-20 bg-gradient-to-br from-blue-400/40 to-purple-400/40 animate-float-slow">
          <div className="w-full h-full opacity-50" 
            style={{ 
              backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', 
              backgroundSize: '8px 8px' 
            }}>
          </div>
        </div>

        {/* Formas orgánicas grandes (blobs) */}
        <div className="absolute top-[5%] right-[15%] w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-[5%] left-[5%] w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute top-[45%] left-[50%] w-96 h-96 bg-pink-200/15 rounded-full blur-3xl animate-float-fast"></div>

        {/* Líneas decorativas */}
        <svg className="absolute top-[30%] left-[20%] w-32 h-32 opacity-20 animate-spin-slow" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5"/>
        </svg>

        <svg className="absolute bottom-[20%] right-[25%] w-24 h-24 opacity-15 animate-spin-slow" viewBox="0 0 100 100" style={{ animationDirection: 'reverse' }}>
          <polygon points="50,5 95,75 5,75" stroke="white" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        {/* Título Principal con Animación Float */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-float-title drop-shadow-lg">
          Prepárate para el{' '} <br></br>
          <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Bachillerato
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          Aprende las bases para el examen <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
          <b>ECOEMS</b></span> de forma divertida con nuestra plataforma de gamificación educativa. 
          Explora islas temáticas, completa desafíos y alcanza tus metas.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <span>🚀</span>
              Comenzar Aventura
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
            <span>ⓘ</span>
            Ver Cómo Funciona
          </button>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          {/* Card 1 */}
          <div ref={card1Ref} className="animate-on-scroll bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-6 min-w-[180px] hover:bg-white/15 hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-yellow-300 mb-2">{courses}</div>
            <div className="text-white/80 text-sm font-medium">Cursos Actuales</div>
          </div>

          {/* Card 2 */}
          <div ref={card2Ref} className="animate-on-scroll bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-6 min-w-[180px] hover:bg-white/15 hover:scale-105 transition-all duration-300" style={{ transitionDelay: '100ms' }}>
            <div className="text-4xl font-bold text-orange-300 mb-2">{lessons}+</div>
            <div className="text-white/80 text-sm font-medium">Lecciones Interactivas</div>
          </div>

          {/* Card 3 */}
          <div ref={card3Ref} className="animate-on-scroll bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-6 min-w-[180px] hover:bg-white/15 hover:scale-105 transition-all duration-300" style={{ transitionDelay: '200ms' }}>
            <div className="text-4xl font-bold text-red-400 mb-2">{students}+</div>
            <div className="text-white/80 text-sm font-medium">Estudiantes Activos</div>
          </div>

        </div>
      </div>

      {/* ===== DEGRADADO INFERIOR PARA TRANSICIÓN SUAVE ===== */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
    </header>
  );
};