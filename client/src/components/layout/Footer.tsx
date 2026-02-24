export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        
        {/* Sección Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Columna 1: Logo y Descripción */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl shadow-lg">
                🌱
              </div>
              <span className="text-xl font-bold">DevStudy</span>
            </div>

            {/* Descripción */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              
              Plataforma de gamificación educativa desarrollada por estudiantes de 
              Matemáticas Aplicadas y Computación de la UNAM para preparar a alumnos 
              de secundaria para el ingreso al bachillerato.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Características
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Iniciar Sesión
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-gray-400 text-lg mt-0.5"></i>
                <span className="text-gray-400 text-sm">Facultad de Estudios Superiores Acatlán, México</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-mail-line text-gray-400 text-lg mt-0.5"></i>
                <a href="mailto:contacto@devstudy.com" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  devstudy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea Divisoria */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} DevStudy. Todos los derechos reservados.
            </p>

            {/* Links Legales */}
            <div className="flex gap-6 text-sm">
              <a href="/privacidad" className="text-gray-500 hover:text-white transition-colors duration-300">
                Privacidad
              </a>
              <a href="/terminos" className="text-gray-500 hover:text-white transition-colors duration-300">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};