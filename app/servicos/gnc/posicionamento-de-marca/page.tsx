import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import {RelatedServices} from "@/components/sections/services/RelatedServices";

export default function PosicionamentoDeMarcaPage() {
  return (
    <>
      <ServiceHeader
        title="Posicionamento de Marca"
        description="Fortaleça sua marca no ambiente digital. A Meta Consultoria desenvolve estratégias de posicionamento digital para destacar sua empresa no mercado."
      />
      <ServiceIntro
        title="Posicionamento Digital para empresas que querem se destacar online"
        paragraphs={[
          "No mundo cada vez mais conectado, estar presente nas plataformas digitais não é mais opcional...",
          "A Meta Consultoria oferece soluções estratégicas e personalizadas...",
        ]}
      />
      <DefinitionSection
        title="O que é Posicionamento de Marca?"
        paragraphs={["O Posicionamento Digital é o conjunto de ações e estratégias que definem como sua empresa se apresenta, comunica e é lembrada pelo público na internet. Mais do que estar nas redes sociais, é sobre construir uma presença digital consistente, que reflita seus valores e desperte confiança nos clientes. Um posicionamento sólido aumenta a autoridade da marca, melhora a percepção de valor e gera mais oportunidades de negócio de forma orgânica e sustentável."]}
      />
      <ServiceSteps
        title="Como funciona nosso serviço?"
        intro="Na Meta Consultoria, o processo é estruturado e baseado em dados..."
        steps={[
          { number: 1, description: "Avaliamos seus canais online, identidade visual..." },
          { number: 2, description: "Compreendemos quem é seu cliente ideal..." },
          { number: 3, description: "Identificamos os meios mais eficazes..." },
          { number: 4, description: "Desenvolvemos o tom de voz e estética..." },
          { number: 5, description: "Implementamos um plano prático com metas claras..." },
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
