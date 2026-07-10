import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plano de Viabilidade Econômica | Meta Consultoria",
  description:
    "Serviço de Plano de Viabilidade Econômica da Meta Consultoria: análise de custos, receitas, riscos e rentabilidade para validar projetos e investimentos com segurança.",
  keywords: [
    "Meta Consultoria",
    "Plano de Viabilidade Econômica",
    "Estudo de Viabilidade",
    "Planejamento Financeiro",
    "Consultoria Empresarial",
    "UFF",
    "Análise Financeira",
    "Retorno sobre Investimento",
    "VPL",
    "TIR",
    "Payback",
  ],
  openGraph: {
    title: "Plano de Viabilidade Econômica | Meta Consultoria",
    description:
      "Conheça o serviço de Plano de Viabilidade Econômica da Meta Consultoria: transforme ideias em investimentos seguros e sustentáveis.",
    url: "https://metaconsultoria.com/servicos/plan_fin/estudo-de-viabilidade",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/plan_fin/estudo-de-viabilidade.webp", // 🔹 imagem representativa do serviço
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Plano de Viabilidade Econômica",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plano de Viabilidade Econômica | Meta Consultoria",
    description:
      "Valide o potencial financeiro do seu projeto com o Plano de Viabilidade Econômica da Meta Consultoria.",
    images: ["/media/servicos/plan_fin/estudo-de-viabilidade.webp"],
  },
};


export default function EstudoDeViabilidadePage() {
  return (
    <>
      <ServiceHeader
        title="Plano de Viabilidade Econômica"
        description="Avalie se o negócio tem potencial para gerar retorno financeiro suficiente para sua execução."
      />
      <ServiceIntro
        title="Plano de Viabilidade Econômica: transforme sua ideia em um investimento seguro"
        paragraphs={[
            "Você tem uma boa ideia, mas ainda não sabe se ela é realmente lucrativa?",
            "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, desenvolve o Plano de Viabilidade Econômica para validar o potencial financeiro de projetos e negócios, ajudando empreendedores e empresas a tomar decisões seguras e estratégicas.",
            "Nosso objetivo é traduzir ideias em números reais, analisando custos, receitas, riscos e rentabilidade, para garantir que cada investimento tenha sustentabilidade e retorno comprovado."
          ]}
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <DefinitionSection
              inline
              title="O que é um Plano de Viabilidade Econômica?"
              paragraphs={[
                "O Plano de Viabilidade Econômica é uma análise detalhada que avalia se uma ideia de negócio, projeto ou investimento é financeiramente viável.",
                "Ele considera todas as variáveis econômicas, desde o investimento inicial até as despesas operacionais e projeções de receita, para determinar se o retorno compensa o risco.",
                "Mais do que um estudo financeiro, o PVE é uma ferramenta estratégica para empreendedores, gestores e investidores que buscam clareza, previsibilidade e segurança antes de executar um projeto."
              ]}
            />
          </div>

          <div className="flex-1">
            <FormularioServico
              className="!bg-transparent !p-0 !shadow-none !rounded-none [&_form]:space-y-5 [&_h2]:text-3xl [&_input]:h-11 [&_select]:h-11 [&_select]:text-base [&_textarea]:min-h-[88px]"
              subtitulo=""
              coordenacao="plan_fin"
              servicoInicial="Estudo de Viabilidade"
            />
          </div>
        </div>
      </section>
      <ServiceSteps
        title="Como a Meta Consultoria atua ?"
        intro="A Meta estrutura o Plano de Viabilidade Econômica em etapas estratégicas que combinam análise técnica, engenharia de custos e gestão financeira:"
        steps={[
            {
              "number": 1,
              "description": "Levantamento de dados sobre o projeto, mercado e objetivos do cliente."
            },
            {
              "number": 2,
              "description": "Cálculo detalhado do investimento inicial, custos fixos e variáveis."
            },
            {
              "number": 3,
              "description": "Projeções pessimista, realista e otimista para decisões mais seguras."
            },
            {
              "number": 4,
              "description": "Cálculo de métricas como VPL, TIR, Índice de Lucratividade e Payback."
            },
            {
              "number": 5,
              "description": "Avaliação dos impactos de mudanças em custos e receitas."
            },
            {
              "number": 6,
              "description": "Entrega de insights e direcionamentos para tomada de decisão."
            }
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="plan_fin"
            servicoInicial="Estudo de Viabilidade"
          />
        </div>
      </section>
      <RelatedServices
        services={[
            {
              "title": "Precificação de Produtos",
              "description": "Defina o preço certo para o seu produto e maximize seus resultados. Analisamos custos, mercado, concorrência e percepção de valor para estruturar um preço estratégico que garanta competitividade, rentabilidade e posicionamento adequado.",
              "href": "/servicos/plan_fin/precificacao-de-produtos"
            },
            {
              "title": "FP&A",
              "description": "Transforme dados financeiros em decisões estratégicas. Estruturamos projeções, análises de desempenho e cenários futuros para orientar o crescimento sustentável da sua empresa com foco em rentabilidade e eficiência.",
              "href": "/servicos/plan_fin/fp-a"
            }
          ]}
      />
    </>
  );
}
