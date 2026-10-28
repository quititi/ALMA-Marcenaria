import { useEffect, useRef } from 'react';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import image as ES module for correct production bundle paths
import aboutDraftImg from '../assets/images/about_draft_1780047106592.png';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stats = [
    { value: '12+', label: 'Anos de Tradição' },
    { value: '1.2k+', label: 'Ambientes Entregues' },
    { value: '100%', label: 'Clientes Satisfeitos' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slide-in and fade-in for left collage container
      gsap.fromTo('.gsap-about-image-container',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-about-image-container',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Staggered fadeUp list for right content elements
      gsap.fromTo('.gsap-about-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-about-text-container',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="sobre" className="py-24 bg-gray-50 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Block: Creative Collage with Trust Rating Badge */}
          <div className="gsap-about-image-container opacity-0 w-full lg:w-1/2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="overflow-hidden rounded-sm shadow-xl aspect-4/3 bg-gray-200">
                <img
                  src={aboutDraftImg}
                  alt="Arquiteto desenhando projeto sob medida"
                  className="w-full h-full object-cover object-center filter grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating review badge */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-gray-900 text-white p-6 shadow-2xl rounded-sm flex flex-col items-center justify-center max-w-[200px] border border-amber-500/20">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="font-display text-2xl font-bold">4.9/5.0</span>
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest text-center mt-1">
                  Avaliação no Google
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: Pure Persuasive copy */}
          <div className="gsap-about-text-container w-full lg:w-1/2 flex flex-col items-start">
            <span className="gsap-about-item opacity-0 font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-600 block mb-3 text-left">
              Foco no Detalhe, Compromisso no Prazo
            </span>
            <h2 className="gsap-about-item opacity-0 font-display text-3xl sm:text-4xl font-light tracking-tight text-gray-900 text-left leading-tight">
              A Arte de Criar Móveis Planejados com <span className="font-semibold text-amber-600">Simetria e Perfeição</span>
            </h2>
            <p className="gsap-about-item opacity-0 font-sans text-gray-600 mt-6 leading-relaxed font-light text-left">
              Nossa marcenaria é especializada em traduzir ideias em mobiliário de altísima qualidade. Atuamos de forma consultiva, trabalhando lado a lado com clientes residenciais, empresas e arquitetos associados de renome para entregar móveis sob medida verdadeiramente funcionais.
            </p>
            <p className="gsap-about-item opacity-0 font-sans text-gray-600 mt-4 leading-relaxed font-light text-left">
              Buscamos a harmonia espacial eliminando cantos ociosos, focando em sistemas tecnológicos de amortecimento e materiais de excelência estrutural. Do layout 3D inicial até a montagem limpa e organizada no seu imóvel, nosso foco é superar suas expectativas.
            </p>

            {/* Quick bullet values */}
            <div className="gsap-about-item opacity-0 mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle size={18} className="text-amber-600 shrink-0" />
                <span className="font-sans text-sm font-medium text-gray-800">Compromisso com prazos firmados e entrega limpa</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={18} className="text-amber-600 shrink-0" />
                <span className="font-sans text-sm font-medium text-gray-800">Assistência técnica e excelente garantia pós-venda</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={18} className="text-amber-600 shrink-0" />
                <span className="font-sans text-sm font-medium text-gray-800">Engenharia interna que otimiza espaços complexos</span>
              </div>
            </div>

            {/* Stats count numbers */}
            <div className="gsap-about-item opacity-0 grid grid-cols-3 gap-6 mt-12 w-full pt-8 border-t border-gray-200">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col text-left">
                  <span className="font-display text-3xl font-bold text-gray-900">{stat.value}</span>
                  <span className="font-sans text-xs text-gray-500 mt-1 font-light leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* In-place Lead button */}
            <div className="gsap-about-item opacity-0 mt-10">
              <a
                href={getWhatsAppLink('Olá! Li sobre a história e os valores da marcenaria e gostaria de agendar uma reunião on-line para conversar sobre o meu projeto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gray-900 hover:bg-amber-600 text-white rounded-sm font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                Falar de Meu Projeto
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
