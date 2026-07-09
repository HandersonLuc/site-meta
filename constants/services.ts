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
  image: string;
  services: Service[];
}

// 🔹 Gestão de Negócios
const gestaoNegocios: Coordination = {
  name: "Gestão de Negócios",
  slug: "gnc",
  image: "/media/icones coordenacoes/gestao_de_negocios.webp",
  services: [
    {
      slug: "gnc/analise-de-mercado",
      title: "Análise de Mercado",
      description: "Entenda seu público e valide ideias com base em dados. Identificamos oportunidades, mapeamos concorrentes e fornecemos insights estratégicos para decisões mais assertivas no seu nicho de atuação.",
    },
    {
      slug: "gnc/posicionamento-de-marca",
      title: "Posicionamento de Marca",
      description: "Fortaleça sua presença online e conquiste relevância no ambiente digital. Definimos estratégias personalizadas para destacar sua marca, atrair o público certo e gerar autoridade no seu mercado.",
    },
    {
      slug: "gnc/planejamento-estrategico",
      title: "Planejamento Estratégico",
      description: "Defina o rumo do seu negócio com clareza e foco. Analisamos o ambiente interno e externo da sua organização para identificar forças, fraquezas e oportunidades, traçando metas e ações alinhadas à sua visão de futuro.",
    },
  ],
};

// 🔹 Otimização de Processos
const otimizacaoProcessos: Coordination = {
  name: "Otimização de Processos",
  slug: "ot_pr",
  image: "/media/icones coordenacoes/otimizaca_de_processos.webp",
  services: [
    { slug: "ot_pr/mapeamento-de-processos", title: "Mapeamento de Processos", description: "Visualize e entenda como sua empresa funciona. Identificamos, organizamos e analisamos cada etapa dos seus processos para eliminar gargalos, padronizar operações e aumentar a eficiência do seu negócio" },
    { slug: "ot_pr/pesquisa-de-clima", title: "Pesquisa de Clima", description: "Organize sua empresa para crescer com solidez. Reestruturamos funções, fluxos e responsabilidades para aumentar a eficiência operacional, melhorar a comunicação e garantir uma base sólida para a tomada de decisões." },
    { slug: "ot_pr/estruturacao-interna", title: "Estruturação Interna", description: "Organize sua empresa para crescer com solidez. Reestruturamos funções, fluxos e responsabilidades para aumentar a eficiência operacional, melhorar a comunicação e garantir uma base sólida para a tomada de decisões." },
    { slug: "ot_pr/gestao-de-estoque", title: "Gestão de Estoque", description: "Gerencie os recursos necessários para o funcionamento de uma organização. Compreendemos o fluxo de produtos no seu estoque e como minimizar situações que possam deixar de atender às demandas da organização." },
    { slug: "ot_pr/estudo-de-tempo", title: "Estudo de Tempo", description: "Solucione desafios na organização física do espaço de trabalho. Buscamos definir, ou redefinir, o arranjo físico de uma instalação, tendo por objetivo ter um espaço mais eficiente." },
    { slug: "ot_pr/simulacao-de-processos", title: "Simulação de Processos", description: "Reproduza virtualmente o funcionamento de atividades, fluxos de trabalho ou operações internas de uma empresa." },
  ],
};

// 🔹 Planejamento Financeiro
const planejamentoFinanceiro: Coordination = {
  name: "Planejamento Financeiro",
  slug: "plan_fin",
  image: "/media/icones coordenacoes/planejamento_financeiro.webp",
  services: [
    { slug: "plan_fin/fp-a", title: "FP&A", description: "Transforme dados financeiros em decisões estratégicas. Estruturamos projeções, análises de desempenho e cenários futuros para orientar o crescimento sustentável da sua empresa com foco em rentabilidade e eficiência." },
    { slug: "plan_fin/estudo-de-viabilidade", title: "Estudo de Viabilidade", description: "Descubra se sua ideia é financeiramente viável antes de investir. Analisamos custos, receitas, riscos e retorno esperado para embasar decisões com segurança e maximizar as chances de sucesso do seu projeto."},
    { slug: "plan_fin/precificacao-de-produtos", title: "Precificação de Produtos", description: "Defina o preço certo para o seu produto e maximize seus resultados. Analisamos custos, mercado, concorrência e percepção de valor para estruturar um preço estratégico que garanta competitividade, rentabilidade e posicionamento adequado."},
  ],
};

// 🔹 Construção e Energia
const construcaoEnergia: Coordination = {
  name: "Construção e Energia",
  slug: "constr_energ",
  image: "/media/icones coordenacoes/contrucao_e_energia.webp",
  services: [
    { slug: "constr_energ/projeto-arquitetonico", title: "Projeto Arquitetônico", description: "Transforme ideias em espaços funcionais e esteticamente marcantes. Desenvolvemos projetos personalizados que equilibram técnica, criatividade e viabilidade, atendendo às necessidades do cliente e às normas urbanísticas."},
    { slug: "constr_energ/instalacoes-hidrossanitarias", title: "Instalações Hidrossanitárias", description:"Desenvolvemos soluções completas em instalações hidrossanitárias, garantindo o correto dimensionamento de água fria, água quente, esgoto e drenagem. Nossos projetos seguem normas técnicas e priorizam eficiência, sustentabilidade e economia, assegurando conforto, segurança e durabilidade para sua obra."},
    { slug: "constr_energ/regularizacao-de-imoveis", title: "Regularização de Imóveis", description: "Garanta a conformidade legal do seu patrimônio com agilidade e precisão. Atuamos na análise urbanística e na elaboração de projetos técnicos para aprovação junto aos órgãos competentes. Essencial para evitar multas, valorizar o bem e permitir vendas ou comercialização dentro da lei." },
    { slug: "constr_energ/orcamento-de-obras", title: "Orçamento de Obras", description: "Elaboramos um orçamento de obras analítico, que inclui materiais, mão de obra, prazos e etapas do projeto. Nosso objetivo é garantir previsibilidade financeira, evitar surpresas e otimizar recursos, permitindo que você construa com segurança, eficiência e economia."},
    { slug: "constr_energ/vistoria-hidrossanitaria-predial", title: "Vistoria Hidrossanitária Predial", description: "Elimine o desconforto e os riscos causados por falhas nos sistemas de água e esgoto. Realizamos inspeções técnicas especializadas para identificar vazamentos, mau cheiro e obstruções, garantindo a saúde da edificação e o bem-estar dos usuários, além de evitar prejuízos com manutenções de emergência."},
    { slug: "constr_energ/estudo-de-luminotecnica", title: "Estudo de Luminotécnica", description: "Realizamos projetos luminotécnicos que consideram normas técnicas, eficiência energética e estética do ambiente. Nosso objetivo é garantir a iluminação ideal para cada espaço, unindo conforto visual, segurança e valorização arquitetônica, além de reduzir custos de energia com soluções sustentáveis." },
    { slug: "constr_energ/instalacoes-eletricas", title: "Instalações Elétricas", description: "Desenvolvemos projetos elétricos completos para obras residenciais, comerciais e industriais, garantindo segurança, conformidade com normas técnicas e eficiência energética. Nossas soluções incluem dimensionamento de circuitos, distribuição de cargas e sistemas de proteção, assegurando confiabilidade, economia e durabilidade para sua instalação."},
  ],
};

// 🔹 Desenvolvimento de Máquinas
const desenvolvimentoMaquinas: Coordination = {
  name: "Desenvolvimento de Máquinas",
  slug: "des_maq",
  image: "/media/icones coordenacoes/desenvolvimento_de_maquina.webp",
  services: [
    { slug: "des_maq/desenho-mecanico", title: "Desenho Mecânico", description: "Realizamos desenhos mecânicos técnicos completos, seguindo normas e padrões de engenharia, para garantir clareza no projeto, confiabilidade na fabricação e redução de falhas no processo produtivo." },
    { slug: "des_maq/estudo-de-materiais", title: "Estudo de Materiais", description: "Escolha os materiais certos para o seu projeto com base em desempenho, custo e aplicação. Analisamos propriedades técnicas, resistência e viabilidade para garantir eficiência, durabilidade e qualidade na sua solução." },
    { slug: "des_maq/prototipagem-3d", title: "Prototipagem 3D", description: "Dê vida às suas ideias com agilidade e precisão. Desenvolvemos protótipos físicos em impressão 3D, ideais para validação de projetos, testes funcionais e visualização de produtos antes da produção final." },
    { slug: "des_maq/analise-estrutural", title: "Análise Estrutural", description: "Avaliamos cargas, materiais e condições de uso para verificar a resistência e estabilidade de estruturas. Nossa análise identifica riscos, otimiza recursos e assegura conformidade com normas técnicas, oferecendo decisões seguras e projetos mais duradouros." },
    { slug: "des_maq/manuais-tecnicos", title: "Manuais Técnicos", description: "Profissionalize a documentação do seu equipamento com manuais de operação, manutenção e catálogos de peças. Desenvolvemos documentos técnicos em conformidade com as normas vigentes para garantir a segurança do usuário, a eficiência operacional e a longevidade da sua solução." },
  ],
};

// 🔹 Tecnologia
const tecnologia: Coordination = {
  name: "Tecnologia",
  slug: "tecnologia",
  image: "/media/icones coordenacoes/tecnologia.webp",
  services: [
    { slug: "tecnologia/desenvolvimento-de-site", title: "Desenvolvimento de Site", description: "Construa sua presença digital com profissionalismo e performance. Criamos sites responsivos, rápidos e alinhados à identidade da sua marca, focando em usabilidade, conversão e otimização para mecanismos de busca (SEO)." },
    { slug: "tecnologia/desenvolvimento-de-aplicativos", title: "Desenvolvimento de Aplicativos", description: "Criamos aplicativos personalizados para Android e iOS, focados em usabilidade, performance e inovação. Nosso processo envolve análise de requisitos, design intuitivo e programação robusta, garantindo soluções digitais que aumentam a eficiência, melhoram a experiência do usuário e fortalecem a presença da sua marca no mercado." },
    { slug: "tecnologia/automacao-de-processos", title: "Automação de Processos", description: "Desenvolvemos soluções de automação de processos que integram tecnologia e gestão para eliminar tarefas repetitivas, reduzir erros e aumentar a produtividade. Nossos projetos mapeiam fluxos de trabalho, identificam gargalos e aplicam ferramentas digitais que otimizam tempo e recursos, garantindo mais agilidade e competitividade para sua empresa." },
    { slug: "tecnologia/direcionamento_estrategico", title: "Otimização de Sites (SEO)", description: "Transforme seu site em uma poderosa ferramenta de atração e vendas. Aplicamos estratégias avançadas de SEO para colocar sua empresa no topo dos mecanismos de busca, aumentando o tráfego orgânico, a autoridade da marca e a geração constante de leads qualificados." },
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
