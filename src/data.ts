import { Project, Benefit, SegmentInfo, Testimonial } from './types';

// Import image assets as ES modules so Vite can bundle them securely for production
import kitchenImg from './assets/images/kitchen_cabinetry_1780000992301.png';
import heroImg from './assets/images/hero_interior_1780000967736.png';
import closetImg from './assets/images/closet_wardrobe_1780001013319.png';
import corporateImg from './assets/images/corporate_office_1780001030869.png';
import bedroomImg from './assets/images/bedroom_wardrobe_1780047074064.png';
import bathroomImg from './assets/images/bathroom_cabinet_1780047058343.png';
import hallwayImg from './assets/images/hallway_panel_1780047089687.png';

export const WHATSAPP_NUMBER = '5527988051977'; // Configurable placeholder Brazilian phone number
export const WHATSAPP_DEFAULT_MESSAGE = 'Olá! Gostaria de falar com um especialista e solicitar um orçamento de móveis planejados sob medida para o meu espaço.';

// Dynamically construct a personalized WhatsApp URL
export function getWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const BENEFITS: Benefit[] = [
  {
    id: 'b1',
    title: 'Projeto 100% Personalizado',
    description: 'Ambientes planejados desenhados exclusivamente para o seu estilo de vida, integrando ergonomia, simetria e estética refinada.',
    iconName: 'Compass'
  },
  {
    id: 'b2',
    title: 'Otimização Inteligente de Espaço',
    description: 'Aproveitamento milimétrico de cada canto, criando soluções inteligentes de armazenamento para residências compactas ou amplas corporações.',
    iconName: 'Maximize'
  },
  {
    id: 'b3',
    title: 'Acabamento de Alto Padrão',
    description: 'Foco nos mínimos detalhes. Alinhamento perfeito de portas, gavetamento suave com amortecimento premium e ferragens de tecnologia avançada.',
    iconName: 'Sparkles'
  },
  {
    id: 'b4',
    title: 'Atendimento Consultivo',
    description: 'Acompanhamento dedicado do projeto à montagem, com consultores especialistas prontos para traduzir suas necessidades em móveis sob medida.',
    iconName: 'UserCheck'
  },
  {
    id: 'b5',
    title: 'Soluções Corporativas e Residenciais',
    description: 'Flexibilidade completa em marcenaria sob medida para residências acolhedoras e mobiliário corporativo funcional de alta performance.',
    iconName: 'Home'
  },
  {
    id: 'b6',
    title: 'Ambientes Funcionais e Elegantes',
    description: 'Casamento perfeito entre beleza e funcionalidade. Projetos planejados modernos que valorizam seu imóvel e tornam o dia a dia mais prático.',
    iconName: 'Layout'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Cozinha Planejada Moderna Integrada',
    category: 'Cozinhas',
    categorySlug: 'cozinhas',
    image: kitchenImg,
    description: 'Cozinha planejada de alto padrão que mescla tons grafite fosco e detalhes em madeira de carvalho natural. Conta com iluminação linear em LED sob as prateleiras e bancada em mármore esculpido para alta funcionalidade gastronômica.'
  },
  {
    id: 'p2',
    title: 'Living Room com Painel de TV Acústico',
    category: 'Salas',
    categorySlug: 'salas',
    image: heroImg,
    description: 'Painel planejado moderno para sala de estar, confeccionado com revestimento arquitetônico ripado de alto padrão, prateleiras flutuantes minimalistas e iluminação embutida para criar um ambiente acolhedor e tecnológico.'
  },
  {
    id: 'p3',
    title: 'Closet Planejado e Organizado de Alto Padrão',
    category: 'Closets',
    categorySlug: 'closets',
    image: closetImg,
    description: 'Closet sob medida com cabideiros embutidos, iluminação quente em LED nas divisórias, nichos dedicados para calçados e gavetas com trilhos telescópicos invisíveis e amortecimento inteligente de impacto.'
  },
  {
    id: 'p4',
    title: 'Escritório Executivo de Presidência',
    category: 'Corporativo',
    categorySlug: 'corporativo',
    image: corporateImg,
    description: 'Mesa corporativa sob medida com acabamento em lâmina de madeira nobre e painel ripado de nogueira ao fundo. Infraestrutura de conectividade embutida de forma oculta para manter a elegância do ambiente.'
  },
  {
    id: 'p5',
    title: 'Dormitório Planejado com Cabeceira Estofada',
    category: 'Dormitórios',
    categorySlug: 'dormitorios',
    image: bedroomImg,
    description: 'Quarto de casal com armários planejados com espelhos bronze, portas de correr suaves e cabeceira estofada sob medida integrada com criados-mudos flutuantes.'
  },
  {
    id: 'p6',
    title: 'Banheiro Sob Medida com Gabinete Suspenso',
    category: 'Banheiros',
    categorySlug: 'banheiros',
    image: bathroomImg,
    description: 'Armário planejado para banheiro com nichos de ventilação, acabamento com resistência à umidade, corrediças de abertura total por toque e espelheira clean.'
  },
  {
    id: 'p7',
    title: 'Painel Ripado Integrado para Hall de Entrada',
    category: 'Salas',
    categorySlug: 'salas',
    image: hallwayImg,
    description: 'Divisão sutil de ambientes e painel de madeira integrado para hall de entrada residenciais, conectando beleza e privacidade de forma fluida.'
  }
];

export const SEGMENTS: SegmentInfo[] = [
  {
    id: 's1',
    type: 'residencial',
    title: 'Sua Casa, Seu Santuário',
    subtitle: 'Marcenaria Residencial de Alto Padrão',
    description: 'Desenvolvemos projetos residenciais completos que transformam espaços comuns em refúgios de puro conforto e sofisticação. Planejamos cada compartimento sob medida, unindo a sua identidade ao máximo bem-estar de sua família.',
    items: [
      'Cozinhas Planejadas Gourmet preparadas para recepções',
      'Dormitórios Planejados com closets sofisticados sob medida',
      'Banheiros organizados com marcenaria resistente à umidade',
      'Salas de Estar modernas com painéis ripados contemporâneos',
      'Áreas Gourmet integradas e funcionais'
    ],
    image: heroImg
  },
  {
    id: 's2',
    type: 'corporativo',
    title: 'Estética que Inspira Negócios',
    subtitle: 'Móveis Corporativos e Ambientes Comerciais',
    description: 'A primeira impressão é a que fica. Projetamos interiores corporativos focados em produtividade, ergonomia e fixação positiva de marca. Marcenaria planejada robusta e imponente para transmitir solidez e inovação aos seus clientes e colaboradores.',
    items: [
      'Escritórios Planejados integrativos e salas de reunião modernas',
      'Móveis Corporativos ergonômicos e duráveis',
      'Recepções corporativas impactantes e balcões planejados',
      'Salas de atendimento personalizadas e dinâmicas',
      'Mobiliário para áreas de coworking e convivência'
    ],
    image: corporateImg
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ana Letícia Silva',
    role: 'Proprietária Residencial',
    location: 'Pinheiros, São Paulo - SP',
    text: 'A experiência de planejar a cozinha com a marcenaria foi impecável. O projeto aproveitou cada centímetro do meu apartamento de forma inteligente, e o acabamento dos armários é simplesmente perfeito. A porta corre com uma suavidade incrível.',
    stars: 5
  },
  {
    id: 't2',
    name: 'Roberto Andrade',
    role: 'Diretor Geral - Andrade Advogados',
    location: 'Berrini, São Paulo - SP',
    text: 'Contratamos a marcenaria para todo o mobiliário corporativo da nossa nova sede. O profissionalismo desde o desenho técnico em 3D até a entrega e ajuste final foi incomparável. Os escritórios e salas de reunião são muito imponentes.',
    stars: 5
  },
  {
    id: 't3',
    name: 'Juliana Mendes',
    role: 'Arquiteta de Interiores',
    location: 'Jardins, São Paulo - SP',
    text: 'Sempre indico esta equipe para meus clientes de alto padrão. Eles respeitam milimetricamente as especificações do projeto, a montagem é rápida, limpa e o atendimento personalizado pós-venda é de altíssimo nível. Recomendo de olhos fechados!',
    stars: 5
  }
];
