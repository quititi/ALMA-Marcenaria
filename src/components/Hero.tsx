import { useEffect, useRef, useState } from 'react';
import { Phone, ArrowRight, Sparkles, Compass, LayoutGrid } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getWhatsAppLink } from '../data';

// Import assets as ESM modules so Vite bundles them correctly in production
import kitchenImg from '../assets/images/kitchen_cabinetry_1780000992301.png';
import bedroomImg from '../assets/images/bedroom_wardrobe_1780047074064.png';
import bathroomImg from '../assets/images/bathroom_cabinet_1780047058343.png';
import livingImg from '../assets/images/hallway_panel_1780047089687.png';

// Register GSAP ScrollTrigger plugin safely
gsap.registerPlugin(ScrollTrigger);

const INTERACTIVE_COLUMNS = [
  {
    num: '01',
    title: 'Cozinhas',
    subtitle: 'COZINHA GOURMET INTEGRADA',
    description: 'Bancadas em pedra esculpida, gavetamento invisível e painéis de iluminação lineares por sensores.',
    image: kitchenImg,
  },
  {
    num: '02',
    title: 'Dormitórios',
    subtitle: 'DORMITÓRIOS & CLOSETS',
    description: 'Armários planejados com portas reflecta bronze, cabideiros em LED acrílico e gavetas aveludadas.',
    image: bedroomImg,
  },
  {
    num: '03',
    title: 'Banheiros',
    subtitle: 'LINHA SANITÁRIA SLIM',
    description: 'Gabinete suspenso resistente à umidade, corrediças com toque inteligente e espelheiras slim.',
    image: bathroomImg,
  },
  {
    num: '04',
    title: 'Sala de estar',
    subtitle: 'Sala de Estar RIPADO',
    description: 'Painéis ripados de alta absorção acústica e racks suspensos que valorizam a arquitetura.',
    image: livingImg,
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftOverlayRef = useRef<HTMLDivElement>(null);
  const columnsContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);

  // Auto-play mobile background carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMobileSlide((prev) => (prev + 1) % INTERACTIVE_COLUMNS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Scroll monitor to fade out bottom indicator
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Kinetic Hero Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Step 1: Slide-out the sophisticated intro curtain panels
      tl.to('.gsap-curtain-panel', {
        yPercent: (index) => (index % 2 === 0 ? -100 : 100),
        duration: 1.3,
        stagger: 0.1,
        ease: 'power4.inOut',
        onComplete: () => {
          setIsIntroActive(false);
        }
      });

      // Step 2: Fade & Scale down interactive columns for epic landing
      tl.fromTo('.gsap-hero-column',
        { opacity: 0, scale: 1.15 },
        { opacity: 1, scale: 1, duration: 1.4, stagger: 0.08, ease: 'power3.out' },
        '-=1.0'
      );

      // Step 3: Animate Left Copy Overlay elements elegantly
      tl.fromTo('.gsap-hero-text-item',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1.0, stagger: 0.1, ease: 'power3.out' },
        '-=0.9'
      );
      
      // Step 4: Staggered reveal of badge counters
      tl.fromTo('.gsap-hero-badge-item',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power2.out' },
        '-=0.75'
      );

      // Step 5: Multi-directional Scroll-driven Parallax Columns
      // Even columns translate slightly down, Odd columns translate slightly up on scroll
      gsap.fromTo('.gsap-col-parallax-even',
        { y: '0px' },
        {
          y: '80px',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

      gsap.fromTo('.gsap-col-parallax-odd',
        { y: '0px' },
        {
          y: '-80px',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('galeria');
    if (gallerySection) {
      if ((window as any).lenisInstance) {
        (window as any).lenisInstance.scrollTo(gallerySection, {
          offset: -85,
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          immediate: false
        });
      } else {
        const topOffset = gallerySection.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-gray-950 select-none"
    >
      {/* Cinematic Curtains Preloader */}
      {isIntroActive && (
        <div className="absolute inset-0 z-50 flex pointer-events-none">
          {[0, 1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="gsap-curtain-panel flex-1 h-full bg-gray-950 border-x border-white/5 flex items-center justify-center transform"
            >
              <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
            </div>
          ))}
        </div>
      )}

      {/* Massive Layered Watermark Brand Text Behind Interactive Grid */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1] overflow-hidden select-none">
        <span className="font-display text-[16vw] font-black uppercase tracking-tighter text-white/[0.02] leading-none whitespace-nowrap">
          ALMA DESIGN
        </span>
      </div>

      {/* Mobile-only Full-screen Background Carousel */}
      <div className="absolute inset-0 w-full h-full lg:hidden z-[1] overflow-hidden">
        {INTERACTIVE_COLUMNS.map((col, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-[1000ms] ease-in-out ${
              currentMobileSlide === idx 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={col.image}
              alt={`Galeria de ${col.title}`}
              className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.01] saturate-[1.05]"
              referrerPolicy="no-referrer"
            />
            {/* Soft dark vignette underlay to ensure content remains readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/70" />
          </div>
        ))}
      </div>

      {/* Interactive 4-Column Cinematic Parallax Grid */}
      <div
        ref={columnsContainerRef}
        className="absolute inset-y-0 right-0 w-full lg:w-[60%] h-full hidden lg:flex flex-row z-[2] overflow-hidden"
      >
        {INTERACTIVE_COLUMNS.map((col, idx) => {
          const isEven = idx % 2 === 0;
          const isSelected = hoveredIndex === idx;
          const hasSelectedAColumn = hoveredIndex !== null;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`gsap-hero-column relative h-[120%] -top-[10%] overflow-hidden cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end pb-24 ${
                isEven ? 'gsap-col-parallax-even' : 'gsap-col-parallax-odd'
              } ${
                hasSelectedAColumn
                  ? isSelected
                    ? 'flex-[2.8] w-[45%]'
                    : 'flex-[0.4] w-[15%]'
                  : 'flex-grow w-1/4'
              }`}
            >
              {/* Media Container with smooth hover zoom scale */}
              <div className="absolute inset-0 z-0">
                <img
                  src={col.image}
                  alt={`Marcenaria de alto padrão para ${col.title}`}
                  className={`w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-out filter contrast-[1.02] ${
                    isSelected ? 'scale-110 brightness-[0.85]' : 'brightness-[0.6]'
                  }`}
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient vignette mask to accommodate readable text overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-r from-gray-950/50 to-transparent transition-opacity duration-700 ${isSelected ? 'opacity-80' : 'opacity-20'}`} />
              </div>

              {/* ROTATED COLUMN TITLE: Visible only when columns shrink down */}
              <div
                className={`absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-all duration-500 ${
                  isSelected ? 'opacity-0 scale-90 translate-y-10' : 'opacity-100 scale-100'
                }`}
              >
                <span className="font-display text-sm md:text-base font-bold tracking-[0.25em] whitespace-nowrap uppercase text-white/50 -rotate-90 origin-center">
                  {col.title}
                </span>
              </div>

              {/* EXPANDED PANEL CARD: Renders dynamically on hover/taps */}
              <div
                className={`relative z-10 px-6 md:px-12 transition-all duration-500 flex flex-col items-start text-left ${
                  isSelected 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12 pointer-events-none'
                }`}
              >
                {/* Sub-item Title */}
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight uppercase leading-tight">
                  {col.title}
                </h3>
              </div>

              {/* Visual Divider borders running between the columns */}
              <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/10 z-20 pointer-events-none h-full" />
            </div>
          );
        })}
      </div>

      {/* Floating Left Copy Vignette Overlay: Guards CTA & conversion text always readable */}
      <div
        ref={leftOverlayRef}
        className="absolute top-0 left-0 h-full w-full lg:w-[42%] bg-white/[0.02] lg:bg-white/[0.06] backdrop-blur-[3px] lg:backdrop-blur-2xl border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between p-6 sm:p-12 z-20 pointer-events-none"
      >
        {/* Subtle decorative space header spacer */}
        <div className="hidden lg:block h-6" />

        {/* Main conversion text content column */}
        <div className="max-w-md my-auto flex flex-col space-y-6 lg:space-y-8 pt-16 lg:pt-0">
          
          {/* Tagline branding with gold accent */}
          <div className="gsap-hero-text-item inline-flex items-center gap-2 opacity-0">
            <span className="h-[2px] w-6 sm:w-8 bg-amber-500 rounded" />
            <span className="font-mono text-[9px] sm:text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
              ALMA Marcenaria • Alto Padrão
            </span>
          </div>

          {/* Main Title displaying business value */}
          <h1
            className="gsap-hero-text-item font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.12] opacity-0"
          >
            Móveis Planejados com 
            <span className="font-semibold text-amber-400"> Funcionalidade</span>, Estilo e <span className="font-semibold px-1.5 py-0.5 bg-amber-600/10 border-b border-amber-500/40">Alma</span>
          </h1>

          {/* Luxury corporate & residential subtitle */}
          <p
            className="gsap-hero-text-item font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light opacity-0"
          >
            Seu ambiente planejado com inteligência e personalidade sob medida. Marcenaria residencial de alta usabilidade e mobiliário corporativo imponente, desenvolvidos milimetricamente para otimizar e valorizar o seu espaço.
          </p>

          {/* Mobile-only Carousel Indicator Dots with slide names */}
          <div className="gsap-hero-text-item flex lg:hidden items-center gap-2 py-1 pointer-events-auto opacity-0">
            {INTERACTIVE_COLUMNS.map((col, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentMobileSlide(idx)}
                className="flex items-center gap-1.5 group focus:outline-none cursor-pointer py-1"
                aria-label={`Ver slide ${col.title}`}
              >
                <span className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentMobileSlide === idx ? 'w-6 bg-amber-500' : 'w-2 bg-white/30 hover:bg-white/50'
                }`} />
                <span className={`font-mono text-[9px] font-bold uppercase tracking-wider transition-all duration-500 overflow-hidden text-amber-400 ${
                  currentMobileSlide === idx ? 'max-w-[100px] opacity-100 ml-0.5' : 'max-w-0 opacity-0 pointer-events-none'
                }`}>
                  {col.title}
                </span>
              </button>
            ))}
          </div>

          {/* Navigation Action CTA buttons with manual click-thru enabled */}
          <div
            className="gsap-hero-text-item pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 opacity-0 pointer-events-auto"
          >
            {/* Primary Conversion Button */}
            <a
              href={getWhatsAppLink('Olá! Gostaria de falar com um especialista e solicitar um orçamento de móveis planejados sob medida.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-sm font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-600/25 cursor-pointer text-center whitespace-nowrap"
            >
              <Phone size={14} className="group-hover:animate-bounce shrink-0" />
              Solicitar Orçamento Grátis
            </a>

            {/* Secondary scroll-down Button */}
            <button
              onClick={scrollToGallery}
              className="group flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-sm font-sans text-xs font-semibold tracking-wider transition-all duration-300 backdrop-blur-sm cursor-pointer whitespace-nowrap"
            >
              Ver Portfólio
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Staggered dynamic trust indicators */}
          <div
            className="pt-8 grid grid-cols-3 gap-3 border-t border-white/10 max-w-sm"
          >
            <div className="gsap-hero-badge-item flex flex-col opacity-0">
              <span className="font-display text-xl lg:text-2xl font-semibold text-white">100%</span>
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-gray-400">Sob Medida</span>
            </div>
            <div className="gsap-hero-badge-item flex flex-col opacity-0">
              <span className="font-display text-xl lg:text-2xl font-semibold text-white">Projetos</span>
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-gray-400">Residencial & Corporativo</span>
            </div>
            <div className="gsap-hero-badge-item flex flex-col opacity-0">
              <span className="font-display text-xl lg:text-2xl font-semibold text-white">Premium</span>
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-gray-400">Pós-venda Ativo</span>
            </div>
          </div>

        </div>

        {/* Space spacing */}
        <div className="hidden lg:block h-6" />
      </div>

      {/* Elegant scroll indicator centered at the bottom */}
      <button
        onClick={scrollToGallery}
        aria-label="Rolar para explorar"
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 transition-all duration-700 select-none z-35 cursor-pointer focus:outline-none ${
          hasScrolled ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-amber-500/80">Rolar para explorar</span>
        <div className="w-[18px] h-[30px] border border-white/20 rounded-full flex justify-center p-[3px]">
          <div className="w-1 h-1.5 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
}
