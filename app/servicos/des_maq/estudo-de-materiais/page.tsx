import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estudo de Materiais | Meta Consultoria",
  description:
    "Serviço de Estudo de Materiais da Meta Consultoria: análise técnica e econômica para selecionar materiais ideais em projetos, garantindo eficiência, durabilidade e sustentabilidade.",
  keywords: [
    "Meta Consultoria",
    "Estudo de Materiais",
    "Desenvolvimento de Máquinas",
    "Engenharia de Materiais",
    "Seleção de Materiais",
    "Eficiência Produtiva",
    "Durabilidade",
    "Sustentabilidade",
    "Consultoria Empresarial",
    "UFF",
  ],
  openGraph: {
    title: "Estudo de Materiais | Meta Consultoria",
    description:
      "Conheça o serviço de Estudo de Materiais da Meta Consultoria: qualidade, eficiência e sustentabilidade para seus projetos.",
    url: "https://metaconsultoria.com/servicos/des_maq/estudo-de-materiais",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/des_maq/estudo-de-materiais.webp", // 🔹 imagem representativa do serviço
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Estudo de Materiais",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudo de Materiais | Meta Consultoria",
    description:
      "Selecione os materiais ideais para seus projetos com o serviço de Estudo de Materiais da Meta Consultoria.",
    images: ["/media/servicos/des_maq/estudo-de-materiais.webp"],
  },
};


export default function EstudoDeMateriaisPage() {
  return (
    <>
      <ServiceHeader
        title="Estudo de Materiais"
        description="Entender o desempenho e aplicações dos diferentes tipos de materiais"
      />
      <ServiceIntro
        title="Estudo de Materiais: escolha o material certo e garanta qualidade e eficiência"
        paragraphs={[
            "Selecionar o material ideal é uma das etapas mais importantes do desenvolvimento de qualquer produto.",
            "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, oferece o Estudo de Materiais, um serviço técnico que avalia propriedades, custo-benefício, durabilidade e aplicabilidade para garantir qualidade e eficiência na fabricação.",
            "Nosso objetivo é ajudar empresas e empreendedores a tomar decisões seguras e econômicas, considerando aspectos técnicos, ambientais e produtivos."
          ]}
      />
      <section className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <DefinitionSection
            title="O que é o Estudo de Materiais?"
            paragraphs={[
                "O Estudo de Materiais consiste na análise técnica e econômica dos materiais que podem ser utilizados em um produto, estrutura ou componente.",
                "Através de critérios como resistência, peso, custo, disponibilidade, impacto ambiental e facilidade de fabricação, é possível definir a melhor opção para o seu projeto.",
                "Na Meta Consultoria, unimos engenharia de materiais e análise produtiva para entregar recomendações assertivas, comparativas e sustentáveis."
              ]}
          />
        </div>        
        <div className="flex-1">
          <FormularioServico
            coordenacao="des_maq"
            servicoInicial="Estudo de Materiais"
          />
        </div>
      </section>

      <ServiceSteps
        title="Como funciona nosso serviço ?"
        intro="Nosso processo é técnico, comparativo e orientado a resultados, utilizando metodologia de engenharia e ferramentas de análise de desempenho:"
        steps={[
            {
              "number": 1,
              "description": "Compreensão do funcionamento, ambiente e exigências mecânicas, térmicas ou químicas."
            },
            {
              "number": 2,
              "description": "Triagem inicial com base em propriedades, disponibilidade e custo."
            },
            {
              "number": 3,
              "description": "Estudo de resistência, densidade, corrosão, rigidez, entre outros critérios."
            },
            {
              "number": 4,
              "description": "Consideração do impacto ambiental e viabilidade econômica."
            },
            {
              "number": 5,
              "description": "Entrega de documento completo com comparações, gráficos e justificativas para escolha do material ideal."
            }
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="des_maq"
            servicoInicial="Estudo de Materiais"
          />
        </div>
      </section>
      <RelatedServices
        services={[
          {
            title: "Análise Estrutural",
            description: "Avaliamos cargas, materiais e condições de uso para verificar resistência e estabilidade, identificar riscos, otimizar recursos e apoiar decisões técnicas mais seguras.",
            href: "/servicos/des_maq/analise-estrutural",
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
