import { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';
import { BENEFITS } from '../data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Helper to render dynamic Lucide icons cleanly
const DynamicIcon = ({ name, className, size = 24 }: { name: string; className?: string; size?: number }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
};

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Elegant stagger reveal using GSAP and registered ScrollTrigger
    const ctx = gsap.context(() => {
      gsap.fromTo('.gsap-benefit-card', 
        {
          opacity: 0,
          y: 45
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-benefits-grid',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="beneficios" className="py-24 bg-gray-50 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-600 block mb-3">
            Por que Escolher Nossa Marcenaria?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight text-gray-900">
            Diferenciais que Criam <span className="font-semibold text-amber-600 border-b border-amber-500/20">Ambientes Extraordinários</span>
          </h2>
          <p className="font-sans text-gray-600 mt-4 leading-relaxed font-light">
            Não criamos apenas armários. Projetamos conveniência diária, durabilidade incomparável e beleza que se integra com a arquitetura do seu imóvel.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="gsap-benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="gsap-benefit-card opacity-0 bg-white p-8 rounded-sm border border-gray-100 shadow-sm shadow-gray-200/40 hover:shadow-lg hover:shadow-gray-200/60 transition-all duration-300 flex flex-col items-start text-left hover:-translate-y-1.5"
            >
              {/* Icon Container with Amber Tint */}
              <div className="p-3 bg-amber-50 rounded-sm text-amber-600 mb-6 transition-colors duration-300">
                <DynamicIcon name={benefit.iconName} size={24} />
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Local SEO & Assurance Marker */}
        <div className="mt-16 text-center">
          <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
            Móveis planejados de alto padrão sob medida para Cozinhas, Dormitórios, Closets e Ambientes Corporativos.
          </p>
        </div>

      </div>
    </section>
  );
}
