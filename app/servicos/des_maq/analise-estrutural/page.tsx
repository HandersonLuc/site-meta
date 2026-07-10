import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Análise Estrutural | Meta Consultoria",
  description:
    "Serviço de Análise Estrutural da Meta Consultoria: cálculos e simulações para avaliar resistência, estabilidade e durabilidade de estruturas e componentes mecânicos.",
  keywords: [
    "Meta Consultoria",
    "Análise Estrutural",
    "Desenvolvimento de Máquinas",
    "Engenharia Mecânica",
    "Simulação Computacional",
    "Elementos Finitos",
    "Resistência de Materiais",
    "Consultoria Empresarial",
    "UFF",
  ],
  openGraph: {
    title: "Análise Estrutural | Meta Consultoria",
    description:
      "Conheça o serviço de Análise Estrutural da Meta Consultoria: segurança, eficiência e confiabilidade para seus projetos.",
    url: "https://metaconsultoria.com/servicos/des_maq/analise-estrutural",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/des_maq/analise-estrutural.webp", // 🔹 imagem representativa do serviço
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Análise Estrutural",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Análise Estrutural | Meta Consultoria",
    description:
      "Projetos mais seguros e eficientes com o serviço de Análise Estrutural da Meta Consultoria.",
    images: ["/media/servicos/des_maq/analise-estrutural.webp"],
  },
};


export default function AnaliseEstruturalPage() {
  return (
    <>
      <ServiceHeader
        title="Análise Estrutural"
        description="Processo essencial para prevenir falhas, otimizar materiais e assegurar a qualidade"
      />
      <ServiceIntro
        title="Análise Estrutural: segurança, eficiência e confiabilidade para o seu projeto"
        paragraphs={[
            "Ter dúvidas sobre a resistência e durabilidade de um produto pode gerar retrabalho, falhas e prejuízos.",
            "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, oferece o serviço de Análise Estrutural, que utiliza métodos de cálculo e simulação computacional para avaliar o desempenho e a segurança de componentes mecânicos e estruturas antes da produção.",
            "Nosso objetivo é identificar pontos críticos, reduzir riscos e garantir projetos mais seguros, eficientes e econômicos."
          ]}
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <DefinitionSection
              inline
              title="O que é a Análise Estrutural?"
              paragraphs={[
                "A Análise Estrutural é o estudo que verifica como uma estrutura ou componente se comporta quando submetido a forças, cargas e deformações.",
                "Ela permite prever tensões, deslocamentos, vibrações e falhas potenciais, garantindo resistência, estabilidade e durabilidade.",
                "Na Meta Consultoria, aplicamos métodos analíticos e ferramentas de simulação por elementos finitos para validar o projeto antes da fabricação, evitando quebras, desperdícios e custos adicionais."
              ]}
            />
          </div>

          <div className="flex-1">
            <FormularioServico
              className="!bg-transparent !p-0 !shadow-none !rounded-none [&_form]:space-y-5 [&_h2]:text-3xl [&_input]:h-11 [&_select]:h-11 [&_select]:text-base [&_textarea]:min-h-[88px]"
              subtitulo=""
              coordenacao="des_maq"
              servicoInicial="Análise Estrutural"
            />
          </div>
        </div>
      </section>
      <ServiceSteps
        title="Como funciona nosso serviço ?"
        intro="Nosso processo combina engenharia mecânica avançada, softwares de análise e validação técnica:"
        steps={[
            {
              "number": 1,
              "description": "Identificação de forças aplicadas, condições de contorno e materiais utilizados."
            },
            {
              "number": 2,
              "description": "Desenvolvimento de geometria detalhada para simulação precisa."
            },
            {
              "number": 3,
              "description": "Configuração das condições reais de uso."
            },
            {
              "number": 4,
              "description": "Análise de tensões, deformações, deslocamentos e fatores de segurança."
            },
            {
              "number": 5,
              "description": "Entrega de resultados com gráficos, imagens e recomendações de otimização."
            }
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="des_maq"
            servicoInicial="Análise Estrutural"
          />
        </div>
      </section>
      <RelatedServices
        services={[
          {
            title: "Estudo de Materiais",
            description: "Escolha os materiais certos para o seu projeto com base em desempenho, custo e aplicação, garantindo eficiência, durabilidade e qualidade na solução.",
            href: "/servicos/des_maq/estudo-de-materiais",
          },
          {
            title: "Manuais Técnicos",
            description: "Profissionalize a documentação do equipamento com manuais de operação, manutenção e catálogos de peças, garantindo segurança, eficiência operacional e conformidade técnica.",
            href: "/servicos/des_maq/manuais-tecnicos",
          },
        ]}
      />
    </>
  );
}
