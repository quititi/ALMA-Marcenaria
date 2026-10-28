import { motion } from 'motion/react';
import { Phone, Calendar, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../data';

export default function CtaFinal() {
  return (
    <section id="ctafinal" className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/10 right-1/4 w-[300px] h-[300px] bg-amber-400 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Call Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 font-semibold">
            Atendimento prioritário hoje
          </span>
        </motion.div>

        {/* Persuasive copy */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight max-w-4xl"
        >
          Pronto para Transformar seu Espaço no <br />
          <span className="font-semibold text-amber-400">Ambiente Planejado dos seus Sonhos?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sans text-gray-300 mt-6 text-base sm:text-lg leading-relaxed max-w-2xl font-light"
        >
          Fale diretamente com um de nossos especialistas parceiros. Agendamos a elaboração de uma apresentação digital 3D sob medida para o seu espaço e fornecemos um orçamento completo sem nenhum compromisso.
        </motion.p>

        {/* Fast Action Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md"
        >
          {/* Main WhatsApp Lead */}
          <a
            href={getWhatsAppLink('Olá! Desejo receber informações prioritárias para iniciar um projeto de móveis planejados sob medida. Gostaria de solicitar o meu orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-sm font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-2xl shadow-amber-600/30 cursor-pointer"
          >
            <Phone size={16} />
            Chamar no WhatsApp
          </a>

          {/* Quick contact alternative helper link */}
          <a
            href={getWhatsAppLink('Olá! Gostaria de falar com o atendimento para tirar dúvidas de como funciona o agendamento de projetos 3D.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-sm font-sans text-sm font-semibold tracking-wider transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            <Calendar size={16} className="text-amber-400" />
            Agendar Reunião 3D
          </a>
        </motion.div>

        {/* Quick assurance markers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-400 text-xs font-mono font-medium max-w-3xl border-t border-white/10 pt-10"
        >
          <div className="flex flex-col items-center">
            <span className="text-amber-400 font-bold text-base mb-1">✓</span>
            <span>Orçamento Sem Compromisso</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-amber-400 font-bold text-base mb-1">✓</span>
            <span>Projeto 3D Detalhado</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-amber-400 font-bold text-base mb-1">✓</span>
            <span>Atendimento Personalizado</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-amber-400 font-bold text-base mb-1">✓</span>
            <span>Instalação Limpa e Segura</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
