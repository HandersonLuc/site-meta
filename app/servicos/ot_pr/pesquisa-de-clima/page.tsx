import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesquisa de Clima Organizacional | Meta Consultoria",
  description:
    "Serviço de Pesquisa de Clima Organizacional da Meta Consultoria: identifique pontos fortes e áreas de melhoria para fortalecer a cultura corporativa, aumentar engajamento e produtividade.",
  keywords: [
    "Meta Consultoria",
    "Pesquisa de Clima Organizacional",
    "Otimização de Processos",
    "Gestão de Pessoas",
    "Engajamento",
    "Cultura Corporativa",
    "Satisfação dos Colaboradores",
    "Consultoria Empresarial",
    "UFF",
  ],
  openGraph: {
    title: "Pesquisa de Clima Organizacional | Meta Consultoria",
    description:
      "Conheça o serviço de Pesquisa de Clima Organizacional da Meta Consultoria: dados estratégicos para melhorar engajamento, reduzir rotatividade e fortalecer a cultura da empresa.",
    url: "https://metaconsultoria.com/servicos/ot_pr/pesquisa-de-clima",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/ot_pr/pesquisa-de-clima.webp", // 🔹 imagem representativa do serviço
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Pesquisa de Clima Organizacional",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pesquisa de Clima Organizacional | Meta Consultoria",
    description:
      "Entenda sua equipe e fortaleça sua cultura com a Pesquisa de Clima Organizacional da Meta Consultoria.",
    images: ["/media/servicos/ot_pr/pesquisa-de-clima.webp"],
  },
};

export default function PesquisaDeClimaPage() {
  return (
    <>
      <ServiceHeader
        title="Pesquisa de Clima Organizacional"
        description="Identifique pontos fortes e áreas de melhoria para promover um ambiente alinhado com os valores da empresa"
      />
      <ServiceIntro
        title="Pesquisa de Clima Organizacional: entenda sua equipe e fortaleça sua cultura"
        paragraphs={[
          "Um bom ambiente de trabalho é essencial para o sucesso de qualquer empresa.",
          "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, oferece o serviço de Pesquisa de Clima Organizacional, que mede a satisfação dos colaboradores, identifica pontos de melhoria e fortalece a cultura corporativa.",
          "Com uma abordagem estruturada e confidencial, a Meta coleta dados reais sobre a percepção da equipe e transforma resultados em planos de ação estratégicos para melhorar o engajamento, reduzir a rotatividade e aumentar a produtividade.",
        ]}
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <DefinitionSection
              inline
              title="O que é a Pesquisa de Clima Organizacional?"
              paragraphs={[
                "A Pesquisa de Clima Organizacional é uma ferramenta de gestão que analisa o nível de satisfação, motivação e alinhamento dos colaboradores com a empresa.",
                "Por meio de questionários, entrevistas e análises estatísticas, é possível compreender como as pessoas percebem o ambiente de trabalho, a liderança, a comunicação e os processos internos.",
                "Na Meta Consultoria, realizamos uma pesquisa completa e personalizada, transformando dados em insights estratégicos e ações concretas de melhoria.",
              ]}
            />
          </div>

          <div className="flex-1">
            <FormularioServico
              className="bg-transparent! p-0! shadow-none! rounded-none! [&_form]:space-y-5 [&_h2]:text-3xl [&_input]:h-11 [&_select]:h-11 [&_select]:text-base [&_textarea]:min-h-22"
              subtitulo=""
              coordenacao="ot_pr"
              servicoInicial="Pesquisa de Clima"
            />
          </div>
        </div>
      </section>
      <ServiceSteps
        title="Como funciona nosso serviço ?"
        intro="Nosso processo é técnico, humanizado e orientado a resultados, garantindo confidencialidade e credibilidade nas informações coletadas:"
        steps={[
          {
            number: 1,
            description:
              "Definição dos objetivos, público e formato do questionário.",
          },
          {
            number: 2,
            description:
              "Aplicação de formulários digitais e entrevistas sigilosas com os colaboradores.",
          },
          {
            number: 3,
            description:
              "Tratamento estatístico e categorização das respostas.",
          },
          {
            number: 4,
            description:
              "Compreensão profunda das fontes de insatisfação e engajamento.",
          },
          {
            number: 5,
            description:
              "Recomendações práticas para fortalecer a cultura e melhorar o clima organizacional.",
          },
        ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="ot_pr"
            servicoInicial="Pesquisa de Clima"
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
            title: "Estruturação Interna",
            description:
              "Organize sua empresa para crescer com solidez. Reestruturamos funções, fluxos e responsabilidades para aumentar a eficiência operacional, melhorar a comunicação e apoiar a tomada de decisões.",
            href: "/servicos/ot_pr/estruturacao-interna",
          },
        ]}
      />
    </>
  );
}
