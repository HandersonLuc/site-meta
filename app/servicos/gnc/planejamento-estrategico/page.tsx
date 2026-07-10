import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import {RelatedServices} from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planejamento Estratégico | Meta Consultoria",
  description:
    "Serviço de Planejamento Estratégico da Meta Consultoria: definição de metas, análise de ambiente e desenvolvimento de estratégias práticas para crescimento sustentável.",
  keywords: [
    "Meta Consultoria",
    "Planejamento Estratégico",
    "Gestão de Negócios",
    "Consultoria Empresarial",
    "UFF",
    "Definição de Metas",
    "Estratégia Empresarial",
    "KPIs",
    "Crescimento Sustentável",
  ],
  openGraph: {
    title: "Planejamento Estratégico | Meta Consultoria",
    description:
      "Conheça o serviço de Planejamento Estratégico da Meta Consultoria: transforme objetivos em resultados reais com metodologias práticas e orientadas a dados.",
    url: "https://metaconsultoria.com/servicos/gnc/planejamento-estrategico",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/gnc/planejamento-estrategico.webp", // 🔹 imagem representativa do serviço
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Planejamento Estratégico",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planejamento Estratégico | Meta Consultoria",
    description:
      "Defina o rumo do seu negócio com clareza e foco através do Planejamento Estratégico da Meta Consultoria.",
    images: ["/media/servicos/gnc/planejamento-estrategico.webp"],
  },
};


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
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <DefinitionSection
              inline
              title="O que é Planejamento Estratégico?"
              paragraphs={[
                "O planejamento estratégico empresarial é o processo que direciona o futuro da organização, transformando sonhos e propósitos em ações concretas.", 
                "Ele orienta a tomada de decisão, ajuda a priorizar investimentos e garante que todos os setores da empresa estejam alinhados à missão, visão e valores corporativos.", 
                "Mais do que um documento, o planejamento estratégico é um mapa para o sucesso, essencial para quem busca crescimento estruturado e duradouro no mercado."]
              }
            />
          </div>

          <div className="flex-1">
            <FormularioServico
              className="!bg-transparent !p-0 !shadow-none !rounded-none [&_form]:space-y-5 [&_h2]:text-3xl [&_input]:h-11 [&_select]:h-11 [&_select]:text-base [&_textarea]:min-h-[88px]"
              subtitulo=""
              coordenacao="gnc"
              servicoInicial="Planejamento Estratégico"
            />
          </div>
        </div>
      </section>
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

      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="gnc"
            servicoInicial="Planejamento Estratégico"
          />
        </div>
      </section>

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
