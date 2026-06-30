export interface ServiceDifferential {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  heroSubtitle?: string;
  videoSrc?: string;
  imageSrc?: string;
  introSubtitle?: string;
  introDescription?: string;
  methodology?: string[];
  differentials?: ServiceDifferential[];
  lastModified?: string;
}

export interface Coordination {
  name: string;   // Nome da coordenação
  slug: string;   // Ex: "gnc", "ot_pr"
  services: Service[];
}

// 🔹 Gestão de Negócios
const gestaoNegocios: Coordination = {
  name: "Gestão de Negócios",
  slug: "gnc",
  services: [
    {
      slug: "gnc/analise-de-mercado",
      title: "Análise de Mercado",
      description: "Entenda seu público e valide ideias com base em dados...",
    },
    {
      slug: "gnc/posicionamento-de-marca",
      title: "Posicionamento de Marca",
      description: "Fortaleça sua presença online e conquiste relevância...",
    },
    {
      slug: "gnc/planejamento-estrategico",
      title: "Planejamento Estratégico",
      description: "Defina o rumo do seu negócio com clareza e foco...",
    },
  ],
};

// 🔹 Otimização de Processos
const otimizacaoProcessos: Coordination = {
  name: "Otimização de Processos",
  slug: "ot_pr",
  services: [
    { slug: "ot_pr/mapeamento-de-processos", title: "Mapeamento de Processos", description: "Visualize e entenda como sua empresa funciona..." },
    { slug: "ot_pr/pesquisa-de-clima", title: "Pesquisa de Clima", description: "Organize sua empresa para crescer com solidez..." },
    { slug: "ot_pr/estruturacao-interna", title: "Estruturação Interna", description: "Reestruturamos funções e fluxos para eficiência..." },
    { slug: "ot_pr/gestao-de-estoque", title: "Gestão de Estoque", description: "Gerencie os recursos necessários para o funcionamento..." },
    { slug: "ot_pr/estudo-de-tempo", title: "Estudo de Tempo", description: "Defina ou redefina o arranjo físico de uma instalação..." },
    { slug: "ot_pr/simulacao-de-processos", title: "Simulação de Processos", description: "Reproduza virtualmente o funcionamento de atividades..." },
  ],
};

// 🔹 Planejamento Financeiro
const planejamentoFinanceiro: Coordination = {
  name: "Planejamento Financeiro",
  slug: "plan_fin",
  services: [
    { slug: "plan_fin/fp-a", title: "FP&A", description: "Transforme dados financeiros em decisões estratégicas..." },
    { slug: "plan_fin/estudo-de-viabilidade", title: "Estudo de Viabilidade", description: "Descubra se sua ideia é financeiramente viável..." },
    { slug: "plan_fin/precificacao-de-produtos", title: "Precificação de Produtos", description: "Defina o preço certo para o seu produto..." },
  ],
};

// 🔹 Construção e Energia
const construcaoEnergia: Coordination = {
  name: "Construção e Energia",
  slug: "constr_energ",
  services: [
    { slug: "constr_energ/projeto-arquitetonico", title: "Projeto Arquitetônico", description: "Transforme ideias em espaços funcionais..." },
    { slug: "constr_energ/instalacoes-hidrossanitarias", title: "Instalações Hidrossanitárias", description: "Soluções completas em instalações hidrossanitárias..." },
    { slug: "constr_energ/regularizacao-de-imoveis", title: "Regularização de Imóveis", description: "Garanta a conformidade legal do seu patrimônio..." },
    { slug: "constr_energ/orcamento-de-obras", title: "Orçamento de Obras", description: "Orçamento analítico com materiais e mão de obra..." },
    { slug: "constr_energ/vistoria-hidrossanitaria-predial", title: "Vistoria Hidrossanitária Predial", description: "Inspeções técnicas para identificar falhas..." },
    { slug: "constr_energ/estudo-de-luminotecnica", title: "Estudo de Luminotécnica", description: "Projetos luminotécnicos que consideram normas..." },
    { slug: "constr_energ/instalacoes-eletricas", title: "Instalações Elétricas", description: "Projetos elétricos completos para obras..." },
  ],
};

// 🔹 Desenvolvimento de Máquinas
const desenvolvimentoMaquinas: Coordination = {
  name: "Desenvolvimento de Máquinas",
  slug: "des_maq",
  services: [
    { slug: "des_maq/desenho-mecanico", title: "Desenho Mecânico", description: "Desenhos técnicos completos conforme normas..." },
    { slug: "des_maq/estudo-de-materiais", title: "Estudo de Materiais", description: "Escolha os materiais certos para o seu projeto..." },
    { slug: "des_maq/prototipagem-3d", title: "Prototipagem 3D", description: "Prototipagem física em impressão 3D..." },
    { slug: "des_maq/analise-estrutural", title: "Análise Estrutural", description: "Verificação da resistência e estabilidade..." },
    { slug: "des_maq/manuais-tecnicos", title: "Manuais Técnicos", description: "Documentação técnica de operação e manutenção..." },
  ],
};

// 🔹 Tecnologia
const tecnologia: Coordination = {
  name: "Tecnologia",
  slug: "tecnologia",
  services: [
    { slug: "tecnologia/desenvolvimento-de-site", title: "Desenvolvimento de Site", description: "Sites responsivos e otimizados para SEO..." },
    { slug: "tecnologia/desenvolvimento-de-aplicativos", title: "Desenvolvimento de Aplicativos", description: "Aplicativos personalizados para Android e iOS..." },
    { slug: "tecnologia/automacao-de-processos", title: "Automação de Processos", description: "Soluções de automação que integram tecnologia e gestão..." },
    { slug: "tecnologia/otimizacao-de-sites-seo", title: "Otimização de Sites (SEO)", description: "Estratégias avançadas de SEO para ranqueamento..." },
  ],
};

// Exporta todas as coordenações
export const coordinations: Coordination[] = [
  gestaoNegocios,
  otimizacaoProcessos,
  planejamentoFinanceiro,
  construcaoEnergia,
  desenvolvimentoMaquinas,
  tecnologia,
];
