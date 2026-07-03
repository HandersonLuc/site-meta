import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";

export default function InstalacoesEletricasPage() {
  return (
    <>
      <ServiceHeader
        title="Instalações Elétricas"
        description="Uso estratégico da energia para obter o melhor resultado com menor consumo"
      />
      <ServiceIntro
        title="Instalações Elétricas: segurança, eficiência e confiabilidade para seu projeto"
        paragraphs={[
            "Problemas elétricos podem gerar riscos, prejuízos e interrupções em qualquer edificação.",
            "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, oferece o serviço de Instalações Elétricas com foco em segurança, eficiência energética e conformidade técnica.",
            "Com projetos detalhados e baseados nas normas da ABNT e regulamentos da concessionária, garantimos sistemas elétricos otimizados, duradouros e seguros, tanto em edificações residenciais quanto comerciais e industriais."
          ]}
      />
      <DefinitionSection
        title="O que são Instalações Elétricas?"
        paragraphs={[
            "As instalações elétricas compreendem todo o planejamento, dimensionamento e execução das redes de energia em uma edificação, incluindo quadros, circuitos, cabos, tomadas, iluminação e aterramento.",
            "Um projeto bem elaborado garante distribuição adequada da carga, prevenção de falhas e economia de energia, além de prolongar a vida útil dos equipamentos elétricos.",
            "Na Meta Consultoria, cada projeto é desenvolvido de forma personalizada, seguindo normas técnicas de segurança e desempenho."
          ]}
      />
      <ServiceSteps
        title="Como a Meta Consultoria atua"
        intro="Nosso processo técnico é completo e estruturado para garantir eficiência, segurança e economia:"
        steps={[
            {
              "number": 1,
              "description": "Análise da edificação, equipamentos e demanda de carga."
            },
            {
              "number": 2,
              "description": "Cálculo de circuitos, disjuntores, condutores e quadros."
            },
            {
              "number": 3,
              "description": "Análise para reduzir consumo e custos operacionais."
            },
            {
              "number": 4,
              "description": "Integração com projetos arquitetônico, hidráulico e fotovoltaico."
            },
            {
              "number": 5,
              "description": "Documentação técnica pronta para execução e aprovação junto à concessionária."
            }
          ]}
      />
      <RelatedServices
        services={[
          {
            title: "Projeto Arquitetônico",
            description: "Transforme ideias em espaços funcionais e esteticamente marcantes, equilibrando técnica, criatividade, viabilidade e atendimento às normas urbanísticas.",
            href: "/servicos/constr_energ/projeto-arquitetonico",
          },
          {
            title: "Instalações Hidrossanitárias",
            description: "Desenvolvemos soluções completas para água, esgoto e drenagem, priorizando dimensionamento correto, eficiência, sustentabilidade, segurança e durabilidade.",
            href: "/servicos/constr_energ/instalacoes-hidrossanitarias",
          },
        ]}
      />
    </>
  );
}
