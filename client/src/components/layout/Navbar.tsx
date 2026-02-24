import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Características', href: '#features' },
    { name: 'Cómo Funciona', href: '#how-it-works' },
    { name: 'Testimonios', href: '#testimonials' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-[70px]">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
              🌱
            </div>
            <span className="text-2xl font-bold text-primary">DevStudy</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center ml-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-gray-700 hover:text-primary font-medium transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            
            {/* Botón de Login */}
            <li>
              {isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <span className="text-primary font-semibold">
                    Hola, {user?.name?.split(' ')[0] || 'Estudiante'}
                  </span>
                  <button 
                    onClick={logout} 
                    className="bg-red-500 text-white px-5 py-2.5 rounded-lg hover:bg-red-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-all duration-300 font-medium shadow-md hover:shadow-lg inline-block"
                >
                  Iniciar Sesión
                </Link>
              )}
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú de navegación"
            aria-expanded={isOpen}
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - SIN overlay separado */}
      <div 
        className={`md:hidden fixed top-[70px] left-0 w-full bg-white z-40 shadow-lg transition-all duration-300 origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col py-6 px-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }
                }}
                className="block text-gray-700 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
          
          {/* Mobile Login Button */}
          <li className="pt-4 border-t border-gray-200">
            {isAuthenticated ? (
              <div className="space-y-3">
                <p className="text-primary font-semibold px-4">
                  Hola, {user?.name?.split(' ')[0] || 'Estudiante'}
                </p>
                <button 
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }} 
                  className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 font-medium shadow-md"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <Link 
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-primary text-white text-center px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 font-medium shadow-md"
              >
                Iniciar Sesión
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};