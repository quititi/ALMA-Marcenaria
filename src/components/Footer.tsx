import { getWhatsAppLink } from '../data';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-400 font-sans border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col items-start">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center text-left mb-4 group cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              aria-label="Ir para o topo"
            >
              <Logo scale={0.48} />
            </button>
            <p className="text-xs text-gray-400 font-light leading-relaxed mt-2">
              Transformando espaços há mais de uma década com excelência técnica, materiais estruturais modernos e sofisticação decorativa sob medida.
            </p>
          </div>

          {/* Quick links Col */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-display text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Explore o Site
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <button onClick={() => handleScrollTo('beneficios')} className="text-left text-gray-400 hover:text-amber-400 transition-colors cursor-pointer">
                Nossos Diferenciais
              </button>
              <button onClick={() => handleScrollTo('galeria')} className="text-left text-gray-400 hover:text-amber-400 transition-colors cursor-pointer">
                Nossos Projetos
              </button>
              <button onClick={() => handleScrollTo('sobre')} className="text-left text-gray-400 hover:text-amber-400 transition-colors cursor-pointer">
                Sobre a Marcenaria
              </button>
              <button onClick={() => handleScrollTo('solucoes')} className="text-left text-gray-400 hover:text-amber-400 transition-colors cursor-pointer">
                Divisões de Móveis
              </button>
            </div>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col items-start text-left text-xs">
            <h4 className="font-display text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Atendimento Local
            </h4>
            <p className="mb-2 text-gray-300 font-medium">ALMA Marcenaria Sob Medida</p>
            <p className="mb-1 text-gray-400 font-light">Av. das Nações Unidas, 12551</p>
            <p className="mb-3 text-gray-400 font-light">Pinheiros, São Paulo - SP</p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-bold hover:underline"
            >
              Clique para chamar no WhatsApp
            </a>
          </div>

          {/* Structured Schedule Hours for Organic Local SEO ranking */}
          <div className="flex flex-col items-start text-left text-xs">
            <h4 className="font-display text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Horário de Funcionamento
            </h4>
            <div className="space-y-1.5 font-light">
              <div className="flex justify-between w-48 border-b border-white/5 pb-1">
                <span>Segunda a Sexta:</span>
                <span className="text-gray-200">08h às 18h</span>
              </div>
              <div className="flex justify-between w-48 border-b border-white/5 pb-1">
                <span>Sábado:</span>
                <span className="text-gray-200">08h às 13h</span>
              </div>
              <div className="flex justify-between w-48 text-amber-500 font-medium pt-1">
                <span>Domingo:</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>

        </div>

        {/* Local SEO Keyword cloud blocks, hidden beautifully for crawler access, avoiding clutter */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <p className="text-[10px] text-gray-600 font-mono text-left leading-relaxed">
            Área de Cobertura de Projetos: móveis planejados, móveis sob medida, marcenaria planejada, cozinha planejada, guarda-roupa planejado, closet planejado, móveis para escritório, móveis corporativos, marcenaria residencial, móveis planejados para empresas, móveis para cozinha, móveis para banheiro, móveis planejados modernos, móveis personalizados, projetos planejados, marcenaria sob medida em Pinheiros, Jardins, Brooklin, Berrini, Paulista e Grande São Paulo.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-gray-500">
          <p>
            &copy; {currentYear} Marcenaria de Móveis Planejados Sob Medida. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
