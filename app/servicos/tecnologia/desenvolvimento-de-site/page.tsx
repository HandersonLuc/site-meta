import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desenvolvimento de Site | Meta Consultoria",
  description:
    "Serviço de Desenvolvimento de Sites da Meta Consultoria: design moderno, performance técnica e SEO para aumentar visibilidade, tráfego orgânico e conversões.",
  keywords: [
    "Meta Consultoria",
    "Desenvolvimento de Site",
    "Tecnologia",
    "SEO",
    "Presença Digital",
    "Consultoria Empresarial",
    "UFF",
    "Performance Web",
    "Sites Responsivos",
    "Marketing Digital",
  ],
  openGraph: {
    title: "Desenvolvimento de Site | Meta Consultoria",
    description:
      "Conheça o serviço de Desenvolvimento de Sites da Meta Consultoria: sites rápidos, responsivos e otimizados para SEO, prontos para gerar resultados.",
    url: "https://metaconsultoria.com/servicos/tecnologia/desenvolvimento-de-site",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/tecnologia/desenvolvimento-de-site.webp", // 🔹 imagem representativa do serviço
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Desenvolvimento de Site",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desenvolvimento de Site | Meta Consultoria",
    description:
      "Impulsione sua presença digital com sites otimizados para SEO e performance da Meta Consultoria.",
    images: ["/media/servicos/tecnologia/desenvolvimento-de-site.webp"],
  },
};


export default function DesenvolvimentoDeSitePage() {
  return (
    <>
      <ServiceHeader
        title="Desenvolvimento de Site"
        description="Desenvolvimento web que une design, performance e resultados para o seu negócio"
      />
      <ServiceIntro
        title="Desenvolvimento de Sites com SEO para impulsionar sua presença digital"
        paragraphs={[
          "Seu negócio precisa estar visível, profissional e bem posicionado no Google.",
          "A Meta Consultoria oferece o serviço de Desenvolvimento de Sites com foco em SEO, unindo design moderno, desempenho técnico e otimização para mecanismos de busca.",
          "O resultado é um site rápido, estratégico e adaptado ao seu público, pronto para atrair visitantes e gerar conversões reais."
        ]}
      />
      <section className="bg-[#EFFAFF] py-16">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <DefinitionSection
              title="O que é um Site com SEO?"
              paragraphs={[
                "Um site com SEO é aquele estruturado para ser encontrado e bem ranqueado nos buscadores, especialmente no Google.",
                "Além de bonito, o site é planejado tecnicamente, desde o código até os textos, para aumentar o tráfego orgânico e atrair clientes de forma contínua.",
                "O serviço da Meta vai além do design: aplicamos estratégias de SEO on-page e técnico, garantindo velocidade, responsividade e conteúdo otimizado."
              ]}
            />
          </div>
          <div className="flex-1">
            <FormularioServico
              variant="highlight"
              coordenacao="tecnologia"
              servicoInicial="Site"
            />
          </div>
        </div>
      </section>
      
      <ServiceSteps
        title="Como funciona nosso serviço ?"
        intro="Nosso processo de Desenvolvimento de Sites com foco em SEO é completo, estratégico e personalizado:"
        steps={[
          {
            number: 1,
            description: "Análise da marca, público-alvo e concorrência.",
          },
          {
            number: 2,
            description: "Organização das páginas com base em SEO e experiência do usuário.",
          },
          {
            number: 3,
            description: "Criação de site moderno, leve e adaptável a qualquer dispositivo.",
          },
          {
            number: 4,
            description: "Otimização de tags, meta descriptions, headings, URLs e carregamento.",
          },
          {
            number: 5,
            description: "Configuração de Google Analytics, Search Console e Pixel Meta.",
          },
          {
            number: 6,
            description: "Treinamento para atualização de conteúdo e acompanhamento de desempenho.",
          }
        ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            variant="compact"
            coordenacao="tecnologia"
            servicoInicial="Site"
          />
        </div>
      </section>
      <RelatedServices
        services={[
          {
            title: "Automação de Processos",
            description: "Desenvolvemos soluções de automação de processos que integram tecnologia e gestão para eliminar tarefas repetitivas, reduzir erros e aumentar a produtividade.",
            href: "/servicos/tecnologia/automacao-de-processos",
          },
          {
            title: "Direcionamento Estratégico Digital(SEO)",
            description: "Transforme seu site em uma poderosa ferramenta de atração e vendas. Aplicamos estratégias avançadas de SEO para colocar sua empresa no topo dos mecanismos de busca, aumentando o tráfego orgânico, a autoridade da marca e a geração constante de leads qualificados.",
            href: "/servicos/tecnologia/direcionamento_estrategico",
          }
        ]}
      />
    </>
  );
}

