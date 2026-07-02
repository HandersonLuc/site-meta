import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import {RelatedServices} from "@/components/sections/services/RelatedServices";

export default function PlanejamentoEstrategico() {
  return (
    <>
      <ServiceHeader
        title="Planejamento Estratégico"
        description="Construa o futuro da sua empresa com um Planejamento Estratégico eficaz. A Meta Consultoria transforma objetivos em resultados reais."
      />
      <ServiceIntro
        title="Planejamento Estratégico para transformar metas em resultados"
        paragraphs={[
          "O Planejamento Estratégico é um dos pilares da atuação da Meta Consultoria, empresa júnior da Universidade Federal Fluminense (UFF), com mais de 30 anos de experiência em engenharia e gestão de negócios.",
          "Com base em metodologias consolidadas e adaptadas à realidade de cada cliente, a Meta ajuda empresas a definir metas claras, alinhar recursos e direcionar esforços para o crescimento sustentável. Nosso objetivo é transformar objetivos em resultados, com uma abordagem prática, analítica e orientada a dados.",
        ]}
      />
      <DefinitionSection
        title="O que é Planejamento Estratégico?"
        paragraphs={[
          "O planejamento estratégico empresarial é o processo que direciona o futuro da organização, transformando sonhos e propósitos em ações concretas.", 
          "Ele orienta a tomada de decisão, ajuda a priorizar investimentos e garante que todos os setores da empresa estejam alinhados à missão, visão e valores corporativos.", 
          "Mais do que um documento, o planejamento estratégico é um mapa para o sucesso, essencial para quem busca crescimento estruturado e duradouro no mercado."]
        }
      />
      <ServiceSteps
        title="Como funciona nosso serviço?"
        intro="A Meta desenvolve projetos de Planejamento Estratégico personalizados, em parceria direta com o cliente, seguindo uma metodologia completa e colaborativa:"
        steps={[
          { number: 1, description: "Análise do ambiente interno e externo, forças, fraquezas, oportunidades e ameaças." },
          { number: 2, description: "Estabelecimento de metas claras e mensuráveis (KPIs)" },
          { number: 3, description: "Desenvolvimento de estratégias práticas, com prazos e responsáveis definidos." },
          { number: 4, description: "Monitoramento dos resultados alcançados e análise de desempenho." },
          { number: 5, description: "Ajustes estratégicos para manter a empresa no rumo certo." },
        ]}
      />

      <RelatedServices
        services={[
          {
            title: "Análise de Mercado",
            description: "Entenda seu público e valide ideias com base em dados...",
            href: "/servicos/gnc/analise-de-mercado",
          },
          {
            title: "Planejamento Estratégico",
            description: "Defina o rumo do seu negócio com clareza e foco...",
            href: "/servicos/gnc/planejamento-estrategico",
          },
        ]}
      />
    </>
  );
}
