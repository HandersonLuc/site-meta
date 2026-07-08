import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import {RelatedServices} from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posicionamento de Marca | Meta Consultoria",
  description:
    "Serviço de Posicionamento de Marca da Meta Consultoria: estratégias digitais para fortalecer identidade, aumentar autoridade e destacar sua empresa no mercado.",
  keywords: [
    "Meta Consultoria",
    "Posicionamento de Marca",
    "Gestão de Negócios",
    "Branding",
    "Marketing Digital",
    "Consultoria Empresarial",
    "UFF",
    "Identidade Visual",
    "Autoridade Digital",
    "Presença Online",
  ],
  openGraph: {
    title: "Posicionamento de Marca | Meta Consultoria",
    description:
      "Conheça o serviço de Posicionamento de Marca da Meta Consultoria: fortaleça sua identidade digital e conquiste relevância no mercado.",
    url: "https://metaconsultoria.com/servicos/gnc/posicionamento-de-marca",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/gnc/posicionamento-de-marca.webp", // 🔹 imagem representativa do serviço
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Posicionamento de Marca",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Posicionamento de Marca | Meta Consultoria",
    description:
      "Fortaleça sua presença digital com o serviço de Posicionamento de Marca da Meta Consultoria.",
    images: ["/media/servicos/gnc/posicionamento-de-marca.webp"],
  },
};


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
      <section className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <DefinitionSection
            title="O que é Posicionamento de Marca?"
            paragraphs={[
              "O Posicionamento Digital é o conjunto de ações e estratégias que definem como sua empresa se apresenta, comunica e é lembrada pelo público na internet.",
              "Mais do que estar nas redes sociais, é sobre construir uma presença digital consistente, que reflita seus valores e desperte confiança nos clientes.",
              "Um posicionamento sólido aumenta a autoridade da marca, melhora a percepção de valor e gera mais oportunidades de negócio de forma orgânica e sustentável."]}
          />
        </div>
        <div className="flex-1">
          <FormularioServico
            coordenacao="gnc"
            servicoInicial="Posicionamento de Marca"
          />
        </div>        
      </section>

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
