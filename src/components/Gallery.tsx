import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Phone, Check } from 'lucide-react';
import { PROJECTS, getWhatsAppLink } from '../data';
import { Project } from '../types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant scrolling reveal for the gallery header block
      gsap.fromTo('.gsap-gallery-header',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-gallery-header',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Staggered categories fade-in list
      gsap.fromTo('.gsap-gallery-filter',
        { opacity: 0, scale: 0.9, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-gallery-filters-container',
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Category tags (combining all relevant slugs requested by the user)
  const categories = [
    { id: 'todos', label: 'Todos Projetos' },
    { id: 'cozinhas', label: 'Cozinhas' },
    { id: 'dormitorios', label: 'Dormitórios' },
    { id: 'closets', label: 'Closets' },
    { id: 'salas', label: 'Salas e Painéis' },
    { id: 'banheiros', label: 'Banheiros' },
    { id: 'corporativo', label: 'Corporativo' }
  ];

  // Filtering logic
  const filteredProjects = selectedCategory === 'todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.categorySlug === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 18 }
    }
  };

  return (
    <section id="galeria" className="py-24 bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="gsap-gallery-header opacity-0 text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-600 block mb-3">
            Inspirar e Escolher
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight text-gray-900">
            Portfólio de <span className="font-semibold text-amber-600 border-b border-amber-500/20">Projetos Executados</span>
          </h2>
          <p className="font-sans text-gray-600 mt-4 leading-relaxed font-light">
            Navegue por nossa galeria de projetos planejados contemporâneos. Toque em qualquer imagem para abrir em alta definição e conferir os detalhes milimétricos dos acabamentos.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gsap-gallery-filters-container flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`gsap-gallery-filter opacity-0 px-5 py-2.5 rounded-sm font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/15'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                layout
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                onClick={() => setSelectedProject(project)}
                className="group relative h-96 bg-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer rounded-sm border border-gray-100"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover Overlay - immediately semi-visible on mobile and fully reveals on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/45 to-transparent md:opacity-0 md:group-hover:opacity-100 opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Minimalist category badge on top/right */}
                <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-mono font-bold uppercase tracking-wider text-gray-800 rounded-sm">
                  {project.category}
                </span>

                {/* Cover info panel - immediately visible on mobile, animated hover reveal on desktop */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col md:translate-y-4 md:group-hover:translate-y-0 md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-all duration-400 ease-out">
                  <h3 className="font-display text-base md:text-lg font-semibold text-white tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[11px] md:text-xs text-amber-400 mt-1.5 md:mt-2 font-medium flex items-center gap-1">
                    <Search size={12} /> Clique para ver detalhes
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Project Modal Viewer */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl flex flex-col lg:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Clean standalone close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-30 p-2.5 bg-white/95 shadow-md text-gray-800 hover:text-gray-900 hover:bg-white rounded-full transition-all cursor-pointer focus:outline-none"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>

                {/* Project Media */}
                <div className="lg:w-3/5 h-64 lg:h-[450px] bg-gray-100 relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Project Info Panel */}
                <div className="lg:w-2/5 p-8 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-amber-600 block mb-2">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-gray-900 tracking-tight leading-snug mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed font-light mb-6">
                      {selectedProject.description}
                    </p>

                    {/* Premium attributes list */}
                    <div className="space-y-3 border-t border-gray-100 pt-5">
                      <div className="flex items-center gap-2 text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
                        <Check size={14} className="text-amber-600" /> Projeto 100% Personalizado
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
                        <Check size={14} className="text-amber-600" /> Corrediças invisíveis com amortecimento
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
                        <Check size={14} className="text-amber-600" /> Consultoria especializada de projeto
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp dynamic consultation link */}
                  <div className="pt-8">
                    <a
                      href={getWhatsAppLink(`Olá! Vi o projeto "${selectedProject.title}" na galeria do seu site e gostaria de solicitar um orçamento para móveis planejados similares.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white rounded-sm font-sans text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                    >
                      <Phone size={14} className="group-hover:animate-bounce" />
                      Pedir Orçamento Parecido
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
