import { useEffect, useRef } from 'react';
import { Check, ArrowRight, Home, Building } from 'lucide-react';
import { SEGMENTS, getWhatsAppLink } from '../data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Segments() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header scroll reveal
      gsap.fromTo('.gsap-segments-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-segments-header',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Slide-in residential from left and corporate from right
      gsap.fromTo('.gsap-segment-card-0',
        { opacity: 0, x: -45 },
        {
          opacity: 1,
          x: 0,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-segments-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.gsap-segment-card-1',
        { opacity: 0, x: 45 },
        {
          opacity: 1,
          x: 0,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-segments-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Cascade testimonials stagger with GSAP trigger
      gsap.fromTo('.gsap-testimonial-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-testimonials-grid',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="solucoes" className="py-24 bg-white overflow-hidden border-t border-gray-100" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="gsap-segments-header opacity-0 text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-600 block mb-3">
            Atendimento Especializado
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight text-gray-900">
            Soluções Feitas para <span className="font-semibold text-amber-600">Cada Detalhe da sua Vida</span>
          </h2>
          <p className="font-sans text-gray-600 mt-4 leading-relaxed font-light">
            Seja para criar o aconchego ideal em seu lar ou projetar a imponência produtiva de seu escritório comercial. Separamos nossa marcenaria em divisões altamente técnicas para lhe atender com excelência.
          </p>
        </div>

        {/* Side-by-side Split Bento Layout */}
        <div className="gsap-segments-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
          
          {SEGMENTS.map((seg, idx) => {
            const isResidencial = seg.type === 'residencial';
            
            return (
              <div
                key={seg.id}
                className={`gsap-segment-card-${idx} opacity-0 flex flex-col justify-between p-8 sm:p-12 rounded-sm border transition-all duration-300 relative ${
                  isResidencial
                    ? 'bg-amber-50/30 border-amber-100/70 hover:border-amber-200'
                    : 'bg-slate-50/40 border-slate-100/70 hover:border-slate-200'
                }`}
              >
                {/* Visual Icon Header */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-4 rounded-sm ${
                      isResidencial ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {isResidencial ? <Home size={28} /> : <Building size={28} />}
                    </div>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                      Divisão {isResidencial ? 'Residencial' : 'Corporativa'}
                    </span>
                  </div>

                  {/* Header Titles */}
                  <h3 className="font-display text-2xl font-bold text-gray-950 tracking-tight leading-snug">
                    {seg.title}
                  </h3>
                  <h4 className="font-sans text-sm font-semibold text-amber-600 mt-1 uppercase tracking-wider">
                    {seg.subtitle}
                  </h4>
                  <p className="font-sans text-sm text-gray-600 mt-5 leading-relaxed font-light">
                    {seg.description}
                  </p>

                  {/* Bullet Lists */}
                  <div className="mt-8 space-y-3">
                    {seg.items.map((item, keyIdx) => (
                      <div key={keyIdx} className="flex items-start gap-3">
                        <span className={`p-0.5 rounded-full shrink-0 mt-1 ${
                          isResidencial ? 'bg-amber-600/10 text-amber-600' : 'bg-amber-600/10 text-amber-600'
                        }`}>
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span className="font-sans text-sm text-gray-700 font-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-CTA Button linking dynamically to WhatsApp */}
                <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                    Projetos em 3D Integrados
                  </span>
                  
                  <a
                    href={getWhatsAppLink(`Olá! Gostaria de conversar com um projetista técnico e obter mais informações e orçamento para móveis planejados de divisão ${isResidencial ? 'Residencial' : 'Corporativa'}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                      isResidencial
                        ? 'bg-amber-600 hover:bg-amber-700 text-white'
                        : 'bg-gray-900 hover:bg-amber-600 text-white'
                    }`}
                  >
                    Falar com especialista
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

              </div>
            );
          })}

        </div>

        {/* Interactive Testimonials Carousel block inside to seal corporate and residential social proof */}
        <div className="mt-28 border-t border-gray-100 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-600 block mb-3">
              Depoimentos Reais
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-gray-900">
              O que Dizem Nossos <span className="font-semibold text-amber-600">Clientes e Parceiros</span>
            </h3>
          </div>

          <div className="gsap-testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SEGMENTS.map((_, i) => {
              // Standard testimonials render
              const test = [
                {
                  name: 'Ana Letícia Silva',
                  role: 'Cozinha & Closet Planejados',
                  text: 'A experiência de planejar a cozinha com eles foi impecável. O projeto aproveitou cada centímetro do meu apartamento de forma inteligente, e o acabamento dos armários é simplesmente perfeito.',
                },
                {
                  name: 'Dr. Roberto Andrade',
                  role: 'Diretor Geral - Andrade Advogados',
                  text: 'Contratamos a marcenaria para todo o mobiliário corporativo da nossa nova sede. O profissionalismo desde o desenho técnico em 3D até a entrega final foi incomparável. Ambientes imponentes.',
                },
                {
                  name: 'Juliana Mendes',
                  role: 'Arquiteta de Interiores',
                  text: 'Sempre indico esta equipe para meus clientes. Eles respeitam milimetricamente as especificações do projeto, a montagem é rápida, limpa e o atendimento personalizado pós-venda é excelente.',
                }
              ][i];

              return (
                <div key={i} className="gsap-testimonial-card opacity-0 bg-gray-50/80 p-8 rounded-sm border border-gray-100/50 flex flex-col justify-between">
                  <p className="font-sans text-sm text-gray-600 italic leading-relaxed font-light">
                    "{test.text}"
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center justify-between">
                    <div>
                      <h5 className="font-display text-sm font-semibold text-gray-900">{test.name}</h5>
                      <span className="font-sans text-xs text-amber-600 font-medium">{test.role}</span>
                    </div>
                    {/* Stars render */}
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, s) => (
                        <span key={s} className="text-[10px]">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
