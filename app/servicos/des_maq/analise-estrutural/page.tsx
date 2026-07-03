import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";

export default function AnaliseEstruturalPage() {
  return (
    <>
      <ServiceHeader
        title="Análise Estrutural"
        description="Processo essencial para prevenir falhas, otimizar materiais e assegurar a qualidade"
      />
      <ServiceIntro
        title="Análise Estrutural: segurança, eficiência e confiabilidade para o seu projeto"
        paragraphs={[
            "Ter dúvidas sobre a resistência e durabilidade de um produto pode gerar retrabalho, falhas e prejuízos.",
            "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, oferece o serviço de Análise Estrutural, que utiliza métodos de cálculo e simulação computacional para avaliar o desempenho e a segurança de componentes mecânicos e estruturas antes da produção.",
            "Nosso objetivo é identificar pontos críticos, reduzir riscos e garantir projetos mais seguros, eficientes e econômicos."
          ]}
      />
      <DefinitionSection
        title="O que é a Análise Estrutural?"
        paragraphs={[
            "A Análise Estrutural é o estudo que verifica como uma estrutura ou componente se comporta quando submetido a forças, cargas e deformações.",
            "Ela permite prever tensões, deslocamentos, vibrações e falhas potenciais, garantindo resistência, estabilidade e durabilidade.",
            "Na Meta Consultoria, aplicamos métodos analíticos e ferramentas de simulação por elementos finitos para validar o projeto antes da fabricação, evitando quebras, desperdícios e custos adicionais."
          ]}
      />
      <ServiceSteps
        title="Como funciona nosso serviço ?"
        intro="Nosso processo combina engenharia mecânica avançada, softwares de análise e validação técnica:"
        steps={[
            {
              "number": 1,
              "description": "Identificação de forças aplicadas, condições de contorno e materiais utilizados."
            },
            {
              "number": 2,
              "description": "Desenvolvimento de geometria detalhada para simulação precisa."
            },
            {
              "number": 3,
              "description": "Configuração das condições reais de uso."
            },
            {
              "number": 4,
              "description": "Análise de tensões, deformações, deslocamentos e fatores de segurança."
            },
            {
              "number": 5,
              "description": "Entrega de resultados com gráficos, imagens e recomendações de otimização."
            }
          ]}
      />
      <RelatedServices
        services={[
          {
            title: "Estudo de Materiais",
            description: "Escolha os materiais certos para o seu projeto com base em desempenho, custo e aplicação, garantindo eficiência, durabilidade e qualidade na solução.",
            href: "/servicos/des_maq/estudo-de-materiais",
          },
          {
            title: "Manuais Técnicos",
            description: "Profissionalize a documentação do equipamento com manuais de operação, manutenção e catálogos de peças, garantindo segurança, eficiência operacional e conformidade técnica.",
            href: "/servicos/des_maq/manuais-tecnicos",
          },
        ]}
      />
    </>
  );
}
