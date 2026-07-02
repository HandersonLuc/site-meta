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
          "No mundo cada vez mais conectado, estar presente nas plataformas digitais não é mais opcional, é essencial. O Posicionamento Digital é o que define como sua marca é percebida no ambiente online e como se diferencia entre os concorrentes.",
          "A Meta Consultoria, Empresa Júnior de Engenharia e Gestão de Negócios da UFF, oferece soluções estratégicas e personalizadas que unem análise de mercado, branding e marketing digital para fortalecer a identidade da sua marca e ampliar sua presença online com resultados concretos.",
        ]}
      />
      <DefinitionSection
        title="O que é Posicionamento de Marca?"
        paragraphs={[
          "O Posicionamento Digital é o conjunto de ações e estratégias que definem como sua empresa se apresenta, comunica e é lembrada pelo público na internet.", 
          "Mais do que estar nas redes sociais, é sobre construir uma presença digital consistente, que reflita seus valores e desperte confiança nos clientes.", 
          "Um posicionamento sólido aumenta a autoridade da marca, melhora a percepção de valor e gera mais oportunidades de negócio de forma orgânica e sustentável."]}
      />
      <ServiceSteps
        title="Como funciona nosso serviço?"
        intro="Na Meta Consultoria, o processo é estruturado e baseado em dados, garantindo que cada decisão tenha impacto direto nos resultados da sua empresa:"
        steps={[
          { number: 1, description: "Avaliamos seus canais online, identidade visual, desempenho e reputação digital." },
          { number: 2, description: "Compreendemos quem é seu cliente ideal e como se comunicar de forma assertiva." },
          { number: 3, description: "Identificamos os meios mais eficazes — como site, redes sociais e Google — para fortalecer sua marca." },
          { number: 4, description: "Desenvolvemos o tom de voz, estética e storytelling alinhados à essência do seu negócio." },
          { number: 5, description: "Implementamos um plano prático com metas claras, mensurando resultados continuamente." },
        ]}
      />

      <RelatedServices
        services={[
          {
            title: "Análise de Mercado",
            description: "Entenda seu público e valide ideias com base em dados. Identificamos oportunidades, mapeamos concorrentes e fornecemos insights estratégicos para decisões mais assertivas no seu nicho de atuação.",
            href: "/servicos/gnc/analise-de-mercado",
          },
          {
            title: "Planejamento Estratégico",
            description: "Defina o rumo do seu negócio com clareza e foco. Analisamos o ambiente interno e externo da sua organização para identificar forças, fraquezas e oportunidades, traçando metas e ações alinhadas à sua visão de futuro.",
            href: "/servicos/gnc/planejamento-estrategico",
          },
        ]}
      />
    </>
  );
}
