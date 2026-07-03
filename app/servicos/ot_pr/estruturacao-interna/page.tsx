import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";

export default function EstruturacaoInternaPage() {
  return (
    <>
      <ServiceHeader
        title="Estruturação Interna"
        description="Alinhamento entre as células, facilitando a tomada de decisão e o alcance dos objetivos estratégicos."
      />
      <ServiceIntro
        title="Estruturação Interna: clareza, eficiência e crescimento sustentável"
        paragraphs={[
            "Quando a empresa cresce sem estrutura, surgem sobrecargas, confusões e falhas de comunicação.",
            "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, oferece o serviço de Estruturação Interna, projetado para organizar equipes, definir responsabilidades e alinhar pessoas à estratégia empresarial.",
            "Com metodologia baseada em gestão organizacional e análise de processos, a Meta constrói uma estrutura sólida, eficiente e preparada para o crescimento."
          ]}
      />
      <DefinitionSection
        title="O que é Estruturação Interna?"
        paragraphs={[
            "A estruturação interna é o processo de organizar a base operacional e hierárquica da empresa, definindo com clareza funções, cargos, responsabilidades e fluxos de comunicação.",
            "Ela garante que todos saibam quem faz o quê, como e por quê, eliminando conflitos, sobreposições e desperdícios.",
            "Na Meta, o serviço de Estruturação Interna combina análise organizacional, mapeamento de funções e modelagem de cargos, sempre alinhado à estratégia e à cultura da empresa."
          ]}
      />
      <ServiceSteps
        title="Como a Meta Consultoria atua"
        intro="Nosso processo é colaborativo, estratégico e feito sob medida para cada negócio:"
        steps={[
            {
              "number": 1,
              "description": "Identificação de sobrecargas, lacunas e pontos críticos na estrutura atual."
            },
            {
              "number": 2,
              "description": "Análise do fluxo de trabalho, cargos e interdependências."
            },
            {
              "number": 3,
              "description": "Estruturação hierárquica clara e alinhada aos objetivos estratégicos."
            },
            {
              "number": 4,
              "description": "Modelos sustentáveis, justos e motivadores para a equipe."
            },
            {
              "number": 5,
              "description": "Acompanhamento e suporte durante a transição para a nova estrutura."
            }
          ]}
      />
      <RelatedServices
        services={[
          {
            title: "Mapeamento de Processos",
            description: "Visualize e entenda como sua empresa funciona. Identificamos, organizamos e analisamos cada etapa dos seus processos para eliminar gargalos, padronizar operações e aumentar a eficiência do seu negócio.",
            href: "/servicos/ot_pr/mapeamento-de-processos",
          },
          {
            title: "Pesquisa de Clima",
            description: "Identifique pontos fortes e áreas de melhoria para promover um ambiente alinhado aos valores da empresa, transformando percepções dos colaboradores em ações estratégicas.",
            href: "/servicos/ot_pr/pesquisa-de-clima",
          },
        ]}
      />
    </>
  );
}
