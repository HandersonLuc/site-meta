import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";

export default function AnaliseDeMercadoPage() {
  return (
    <>
      <ServiceHeader
        title="Pesquisa e Análise de Mercado"
        description="Análise e mapeamento de tendências e comportamentos de mercado."
      />
      <ServiceIntro
        title="Sua empresa conhece de verdade o seu mercado?"
        paragraphs={[
          "Com a Análise de Mercado, você identifica oportunidades, entende seu público e toma decisões mais assertivas.",
          "A Meta Consultoria estrutura pesquisas e interpreta dados para reduzir incertezas e apoiar estratégias comerciais, de marketing e de expansão."
        ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="gnc"
            servicoInicial="Análise de Mercado"
          />
        </div>
      </section>
      <DefinitionSection
        title="A Meta oferece uma Análise de Mercado estratégica que:"
        paragraphs={[
          "Reduz incertezas ao orientar decisões com base em dados reais.",
          "Mapeia com precisão seu público, concorrentes e fornecedores.",
          "Fornece uma base sólida para ações de marketing e estudos de viabilidade."
        ]}
      />
      <ServiceSteps
        title="Como funciona?"
        intro="Na Meta Consultoria, seguimos uma metodologia estruturada e baseada em dados para garantir que sua empresa tome decisões estratégicas com segurança:"
        steps={[
          {
            number: 1,
            description: "Realizamos um diagnóstico completo do negócio para entender contexto, desafios e definir o espaço amostral da pesquisa.",
          },
          {
            number: 2,
            description: "Desenvolvemos uma metodologia sob medida e conduzimos o levantamento de informações qualitativas e quantitativas.",
          },
          {
            number: 3,
            description: "Cruzamos os dados levantados para identificar padrões, comportamentos e insights estratégicos para a tomada de decisão.",
          }
        ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="gnc"
            servicoInicial="Análise de Mercado"
          />
        </div>
      </section>
      <RelatedServices
        services={[
          {
            title: "Posicionamento de Marca",
            description: "Fortaleça sua presença online e conquiste relevância no ambiente digital. Definimos estratégias personalizadas para destacar sua marca, atrair o público certo e gerar autoridade no seu mercado.",
            href: "/servicos/gnc/posicionamento-de-marca",
          },
          {
            title: "Planejamento Estratégico",
            description: "Defina o rumo do seu negócio com clareza e foco. Analisamos o ambiente interno e externo da sua organização para identificar forças, fraquezas e oportunidades, traçando metas e ações alinhadas à sua visão de futuro.",
            href: "/servicos/gnc/planejamento-estrategico",
          }
        ]}
      />
    </>
  );
}
