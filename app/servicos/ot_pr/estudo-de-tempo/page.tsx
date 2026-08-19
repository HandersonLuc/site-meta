import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estudo de Tempo | Meta Consultoria",
  description: "",
  keywords: [],
  openGraph: {
    title: "Estudo de Tempo | Meta Consultoria",
    description: "",
    url: "https://metaconsultoria.com/servicos/ot_pr/estudo-de-tempo",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/ot_pr/estudo-de-tempo.webp", // 🔹 imagem representativa do serviço
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Estudo de Tempo",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudo de Tempo | Meta Consultoria",
    description: "",
    images: ["/media/servicos/ot_pr/estudo-de-tempo.webp"],
  },
};

export default function EstudoDeTempoPage() {
  return (
    <>
      <ServiceHeader
        title="Estudo de Tempo"
        description="Otimizar o fluxo de trabalho, reduzir desperdícios e melhorar a eficiência operacional."
      />
      <ServiceIntro
        title="Estudo de Tempos: eficiência, produtividade e controle total sobre o processo"
        paragraphs={[
          "Se sua empresa sofre com tarefas mal distribuídas, perdas de tempo e gargalos operacionais, é hora de agir estrategicamente.",
          "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, oferece o serviço de Estudo de Tempos, projetado para analisar, medir e otimizar o desempenho das atividades produtivas.",
          "Por meio de um diagnóstico técnico e detalhado, identificamos ineficiências, desperdícios e oportunidades de melhoria, ajudando sua empresa a reduzir custos, aumentar a produtividade e alcançar excelência operacional.",
        ]}
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <DefinitionSection
              inline
              title="O que é Estudo de Tempo?"
              paragraphs={[
                "O Estudo de Tempos e Movimentos é uma metodologia da Engenharia de Produção que tem como objetivo medir o tempo gasto em cada atividade, identificando gargalos, desperdícios e atrasos.",
                "Com base nesses dados, é possível redistribuir tarefas, padronizar processos e aumentar o rendimento operacional.",
                "Na Meta Consultoria, o Estudo de Tempos é realizado com técnicas de cronometragem, observação direta e análise de fluxos produtivos, resultando em um plano de ação claro e orientado à eficiência.",
              ]}
            />
          </div>

          <div className="flex-1">
            <FormularioServico
              className="!bg-transparent !p-0 !shadow-none !rounded-none [&_form]:space-y-5 [&_h2]:text-3xl [&_input]:h-11 [&_select]:h-11 [&_select]:text-base [&_textarea]:min-h-[88px]"
              subtitulo=""
              coordenacao="ot_pr"
              servicoInicial="Estruturação Interna"
            />
          </div>
        </div>
      </section>
      <ServiceSteps
        title="Como a Meta Consultoria atua"
        intro="Nosso processo é técnico, personalizado e orientado a resultados reais, combinando engenharia, análise de dados e gestão operacional:"
        steps={[
          {
            number: 1,
            description:
              "Mapeamento das atividades e das etapas do fluxo de trabalho.",
          },
          {
            number: 2,
            description:
              "Medição precisa dos tempos e movimentos de cada tarefa.",
          },
          {
            number: 3,
            description:
              "Identificação de gargalos, desperdícios e ociosidades.",
          },
          {
            number: 4,
            description:
              "Otimização da carga de trabalho e padronização dos processos.",
          },
          {
            number: 5,
            description:
              "Acompanhamento e suporte durante a transição para a nova estrutura.",
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
