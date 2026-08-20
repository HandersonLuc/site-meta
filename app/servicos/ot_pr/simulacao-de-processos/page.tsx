import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulação de Processos | Meta Consultoria",
  description:
    "Antecipe cenários e tome decisões seguras. Reprodução virtual de fluxos operacionais para testar melhorias e reduzir riscos antes da implementação.",
  keywords: [
    "Meta Consultoria",
    "Simulação de Processos",
    "Engenharia de Produção",
    "Otimização de Processos",
    "Mapeamento de Cenários",
    "UFF",
  ],
  openGraph: {
    title: "Simulação de Processos | Meta Consultoria",
    description:
      "Teste hipóteses e otimize a operação sem paralisar sua produção.",
    url: "https://metaconsultoria.com/servicos/ot_pr/simulacao-de-processos",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/ot_pr/simulacao-de-processos.webp",
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Simulação de Processos",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulação de Processos | Meta Consultoria",
    description:
      "Antecipe gargalos e otimize layouts e fluxos com simulação computacional.",
    images: ["/media/servicos/ot_pr/simulacao-de-processos.webp"],
  },
};

export default function SimulacaoDeProcessosPage() {
  return (
    <>
      <ServiceHeader
        title="Simulação de Processos"
        description="Analisar e otimizar processos antes de sua aplicação prática, permitindo reduzir custos."
      />
      <ServiceIntro
        title="Simulação de Processos: decisões seguras e eficiência antes da execução real"
        paragraphs={[
          "Mudar processos sem uma análise prévia pode gerar riscos, custos desnecessários e retrabalhos.",
          "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, oferece o serviço de Simulação de Processos, uma ferramenta que permite testar e validar cenários operacionais antes da aplicação prática.",
          "Com o uso de modelagem computacional e técnicas de engenharia de produção, a Meta ajuda empresas a planejar melhorias com segurança, reduzir riscos e otimizar recursos.",
        ]}
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <DefinitionSection
              inline
              title="O que é Simulação de Processos?"
              paragraphs={[
                "A Simulação de Processos é uma metodologia que utiliza modelos virtuais e ferramentas computacionais para reproduzir o funcionamento de um processo real.",
                "Com ela, é possível testar diferentes cenários e estratégias, prever resultados e identificar gargalos e impactos antes da implementação prática.",
                "Na Meta Consultoria, aplicamos a simulação em processos industriais, logísticos, administrativos e de serviços, garantindo decisões embasadas e seguras.",
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
        intro="Nosso processo é estruturado para oferecer análises técnicas e resultados confiáveis, combinando engenharia, dados e tecnologia:"
        steps={[
          {
            number: 1,
            description:
              "Mapeamento completo das atividades, recursos e fluxos.",
          },
          {
            number: 2,
            description:
              "Criação de um modelo virtual realista e parametrizado.",
          },
          {
            number: 3,
            description:
              "Execução de simulações em ambiente controlado, avaliando possíveis mudanças e seus impactos.",
          },
          {
            number: 4,
            description:
              "Medição de indicadores de desempenho (tempo, custo, fila, capacidade, produtividade etc.).",
          },
          {
            number: 5,
            description:
              "Elaboração de relatório técnico com propostas de otimização e plano de implementação.",
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
