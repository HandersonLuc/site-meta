import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestão de Estoque | Meta Consultoria",
  description:
    "Otimize seu estoque para evitar perdas e maximizar resultados. Estruturação de processos, controle de fluxo e giro de produtos com eficiência operacional.",
  keywords: [
    "Meta Consultoria",
    "Gestão de Estoque",
    "Otimização de Processos",
    "Engenharia de Produção",
    "Controle de Entradas e Saídas",
    "UFF",
    "Giro de Estoque",
  ],
  openGraph: {
    title: "Gestão de Estoque | Meta Consultoria",
    description:
      "Controle, organize e otimize seu estoque com inteligência e metodologia de Engenharia de Produção.",
    url: "https://metaconsultoria.com/servicos/ot_pr/gestao-de-estoque",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/ot_pr/gestao-de-estoque.webp",
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Gestão de Estoque",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestão de Estoque | Meta Consultoria",
    description:
      "Gerencie recursos e minimize gargalos com a Gestão de Estoque da Meta Consultoria.",
    images: ["/media/servicos/ot_pr/gestao-de-estoque.webp"],
  },
};

export default function GestaoDeEstoquePage() {
  return (
    <>
      <ServiceHeader
        title="Gestão de Estoque"
        description="Garantir o equilíbrio entre a disponibilidade e a demanda contribuindo para a eficiência operacional"
      />
      <ServiceIntro
        title="Gestão de Estoque: reduza perdas, aumente a eficiência e lucre mais."
        paragraphs={[
          "Manter o equilíbrio entre produtos disponíveis e capital de giro é essencial para qualquer empresa.",
          "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, oferece o serviço de Gestão de Estoque, desenvolvido para organizar, otimizar e automatizar o controle de materiais, produtos e insumos.",
          "Com metodologia analítica e ferramentas de engenharia, garantimos estoques enxutos, previsíveis e lucrativos, eliminando desperdícios e fortalecendo o fluxo operacional.",
        ]}
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <DefinitionSection
              inline
              title="O que é Gestão de Estoque?"
              paragraphs={[
                "A Gestão de Estoque é o conjunto de práticas e processos que visam controlar entradas, saídas e níveis ideais de produtos, equilibrando demanda, custo e disponibilidade.",
                "Ela permite evitar excessos, reduzir rupturas e otimizar o capital investido, assegurando que sua empresa tenha o produto certo, na hora certa, pelo custo certo.",
                "Na Meta, aplicamos métodos quantitativos e indicadores de desempenho (KPIs) para garantir um controle eficiente, confiável e automatizado.",
              ]}
            />
          </div>

          <div className="flex-1">
            <FormularioServico
              className="bg-transparent! p-0! shadow-none! rounded-none! [&_form]:space-y-5 [&_h2]:text-3xl [&_input]:h-11 [&_select]:h-11 [&_select]:text-base [&_textarea]:min-h-22"
              subtitulo=""
              coordenacao="ot_pr"
              servicoInicial="Estruturação Interna"
            />
          </div>
        </div>
      </section>
      <ServiceSteps
        title="Como a Meta Consultoria atua"
        intro="Nosso processo é estruturado para oferecer visibilidade, precisão e controle total sobre o estoque:"
        steps={[
          {
            number: 1,
            description:
              "Mapeamento do estoque atual e identificação de gargalos operacionais.",
          },
          {
            number: 2,
            description:
              "Levantamento completo de produtos, códigos, categorias e volumes.",
          },
          {
            number: 3,
            description: "Classificação de itens por importância e demanda.",
          },
          {
            number: 4,
            description: "Acompanhamento de giro, cobertura e rupturas.",
          },
          {
            number: 5,
            description:
              "Definição de políticas de compra e reposição estratégica.",
          },
          {
            number: 6,
            description:
              "Capacitação para manter o sistema eficaz a longo prazo.",
          },
        ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="ot_pr"
            servicoInicial="Estruturação Interna"
          />
        </div>
      </section>
      <RelatedServices
        services={[
          {
            title: "Mapeamento de Processos",
            description:
              "Visualize e entenda como sua empresa funciona. Identificamos, organizamos e analisamos cada etapa dos seus processos para eliminar gargalos, padronizar operações e aumentar a eficiência do seu negócio.",
            href: "/servicos/ot_pr/mapeamento-de-processos",
          },
          {
            title: "Pesquisa de Clima",
            description:
              "Identifique pontos fortes e áreas de melhoria para promover um ambiente alinhado aos valores da empresa, transformando percepções dos colaboradores em ações estratégicas.",
            href: "/servicos/ot_pr/pesquisa-de-clima",
          },
        ]}
      />
    </>
  );
}
