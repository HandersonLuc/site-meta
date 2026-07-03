import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";

export default function MapeamentoDeProcessosPage() {
  return (
    <>
      <ServiceHeader
        title="Mapeamento e Otimização de Processos"
        description="Visualizar como as atividades são realizadas eliminando falhas e aumentando a eficiência"
      />
      <ServiceIntro
        title="Otimização de Processos: eficiência, clareza e padronização para sua empresa"
        paragraphs={[
            "Se a sua operação depende de pessoas específicas, tem processos desorganizados e sofre com retrabalho, a Meta Consultoria tem a solução.",
            "Nosso serviço de Otimização e Mapeamento de Processos ajuda sua empresa a visualizar, documentar e aperfeiçoar fluxos operacionais, garantindo maior eficiência e previsibilidade.",
            "Com base em ferramentas de engenharia e gestão de processos, a Meta cria modelos visuais e relatórios padronizados que facilitam a execução, o treinamento e o crescimento sustentável da sua empresa."
          ]}
      />
      <DefinitionSection
        title="O que é o Mapeamento e Otimização de Processos?"
        paragraphs={[
            "O Mapeamento de Processos é uma metodologia que documenta e analisa as atividades de uma empresa de forma visual e estratégica.",
            "Através de ferramentas como fluxogramas, diagramas BPMN e relatórios POP, é possível entender o funcionamento da operação, detectar falhas e propor melhorias concretas.",
            "A Otimização de Processos é a etapa seguinte, onde as melhorias identificadas são aplicadas para eliminar gargalos, reduzir custos e aumentar a produtividade."
          ]}
      />
      <ServiceSteps
        title="Como funciona nosso serviço ?"
        intro="Nosso processo é colaborativo, técnico e adaptado à realidade de cada empresa, unindo análise, visualização e padronização:"
        steps={[
            {
              "number": 1,
              "description": "Entrevistas e observações para compreender a rotina e os pontos críticos da operação."
            },
            {
              "number": 2,
              "description": "Criação de fluxogramas e diagramas visuais que representam as atividades existentes."
            },
            {
              "number": 3,
              "description": "Análise técnica de desperdícios, retrabalhos e fluxos ineficientes."
            },
            {
              "number": 4,
              "description": "Redesenho dos processos para maior eficiência e integração."
            },
            {
              "number": 5,
              "description": "Entrega de documentos claros que facilitam o treinamento e a padronização."
            }
          ]}
      />
      <RelatedServices
        services={[
          {
            title: "Pesquisa de Clima",
            description: "Identifique pontos fortes e áreas de melhoria para promover um ambiente alinhado aos valores da empresa, transformando percepções dos colaboradores em ações estratégicas.",
            href: "/servicos/ot_pr/pesquisa-de-clima",
          },
          {
            title: "Estruturação Interna",
            description: "Organize sua empresa para crescer com solidez. Reestruturamos funções, fluxos e responsabilidades para aumentar a eficiência operacional, melhorar a comunicação e apoiar a tomada de decisões.",
            href: "/servicos/ot_pr/estruturacao-interna",
          },
        ]}
      />
    </>
  );
}
