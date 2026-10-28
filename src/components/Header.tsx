import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id) as HTMLElement | null;
    if (element) {
      if ((window as any).lenisInstance) {
        (window as any).lenisInstance.scrollTo(element, {
          offset: -85,
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          immediate: false
        });
      } else {
        const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              if ((window as any).lenisInstance) {
                (window as any).lenisInstance.scrollTo(0, { duration: 1.4 });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center text-left group cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
            aria-label="Ir para o topo"
          >
            <Logo scale={0.5} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScrollTo('beneficios')}
              className={`font-sans text-sm font-medium transition-colors hover:text-amber-500 cursor-pointer ${
                scrolled ? 'text-gray-600' : 'text-gray-200'
              }`}
            >
              Diferenciais
            </button>
            <button
              onClick={() => handleScrollTo('galeria')}
              className={`font-sans text-sm font-medium transition-colors hover:text-amber-500 cursor-pointer ${
                scrolled ? 'text-gray-600' : 'text-gray-200'
              }`}
            >
              Projetos
            </button>
            <button
              onClick={() => handleScrollTo('sobre')}
              className={`font-sans text-sm font-medium transition-colors hover:text-amber-500 cursor-pointer ${
                scrolled ? 'text-gray-600' : 'text-gray-200'
              }`}
            >
              A Empresa
            </button>
            <button
              onClick={() => handleScrollTo('solucoes')}
              className={`font-sans text-sm font-medium transition-colors hover:text-amber-500 cursor-pointer ${
                scrolled ? 'text-gray-600' : 'text-gray-200'
              }`}
            >
              Soluções
            </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                scrolled
                  ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/10'
                  : 'bg-white text-gray-900 hover:bg-amber-500 hover:text-white shadow-lg'
              }`}
            >
              <Phone size={14} />
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                scrolled || isOpen ? 'text-gray-950' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 bg-white transition-all duration-300 ease-in-out border-b border-gray-100 ${
          isOpen ? 'top-[70px] opacity-100 pointer-events-auto h-auto py-6' : 'top-[-200px] opacity-0 pointer-events-none h-0'
        }`}
      >
        <div className="px-4 space-y-3 flex flex-col">
          <button
            onClick={() => handleScrollTo('beneficios')}
            className="text-left py-2 text-base font-semibold text-gray-800 border-b border-gray-50 hover:text-amber-600"
          >
            Diferenciais
          </button>
          <button
            onClick={() => handleScrollTo('galeria')}
            className="text-left py-2 text-base font-semibold text-gray-800 border-b border-gray-50 hover:text-amber-600"
          >
            Projetos
          </button>
          <button
            onClick={() => handleScrollTo('sobre')}
            className="text-left py-2 text-base font-semibold text-gray-800 border-b border-gray-50 hover:text-amber-600"
          >
            A Empresa
          </button>
          <button
            onClick={() => handleScrollTo('solucoes')}
            className="text-left py-2 text-base font-semibold text-gray-800 border-b border-gray-50 hover:text-amber-600"
          >
            Soluções
          </button>
          <div className="pt-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-sm font-sans text-sm font-bold tracking-wider uppercase transition-colors"
            >
              <Phone size={16} />
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
