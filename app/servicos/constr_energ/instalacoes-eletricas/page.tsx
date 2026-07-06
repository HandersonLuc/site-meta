import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instalações Elétricas | Meta Consultoria",
  description:
    "Serviço de Instalações Elétricas da Meta Consultoria: projetos seguros, eficientes e em conformidade com normas técnicas, para edificações residenciais, comerciais e industriais.",
  keywords: [
    "Meta Consultoria",
    "Instalações Elétricas",
    "Construção e Energia",
    "Projetos Elétricos",
    "Eficiência Energética",
    "Segurança Elétrica",
    "Consultoria Empresarial",
    "UFF",
    "ABNT",
  ],
  openGraph: {
    title: "Instalações Elétricas | Meta Consultoria",
    description:
      "Conheça o serviço de Instalações Elétricas da Meta Consultoria: segurança, eficiência e confiabilidade para seu projeto.",
    url: "https://metaconsultoria.com/servicos/constr_energ/instalacoes-eletricas",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/constr_energ/instalacoes-eletricas.webp", // 🔹 imagem representativa do serviço
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Instalações Elétricas",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instalações Elétricas | Meta Consultoria",
    description:
      "Projetos elétricos completos e seguros, com foco em eficiência energética e conformidade técnica.",
    images: ["/media/servicos/constr_energ/instalacoes-eletricas.webp"],
  },
};




export default function InstalacoesEletricasPage() {
  return (
    <>
      <ServiceHeader
        title="Instalações Elétricas"
        description="Uso estratégico da energia para obter o melhor resultado com menor consumo"
      />
      <ServiceIntro
        title="Instalações Elétricas: segurança, eficiência e confiabilidade para seu projeto"
        paragraphs={[
            "Problemas elétricos podem gerar riscos, prejuízos e interrupções em qualquer edificação.",
            "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, oferece o serviço de Instalações Elétricas com foco em segurança, eficiência energética e conformidade técnica.",
            "Com projetos detalhados e baseados nas normas da ABNT e regulamentos da concessionária, garantimos sistemas elétricos otimizados, duradouros e seguros, tanto em edificações residenciais quanto comerciais e industriais."
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="constr_energ"
            servicoInicial="Instalações Elétricas"
          />
        </div>
      </section>
      <DefinitionSection
        title="O que são Instalações Elétricas?"
        paragraphs={[
            "As instalações elétricas compreendem todo o planejamento, dimensionamento e execução das redes de energia em uma edificação, incluindo quadros, circuitos, cabos, tomadas, iluminação e aterramento.",
            "Um projeto bem elaborado garante distribuição adequada da carga, prevenção de falhas e economia de energia, além de prolongar a vida útil dos equipamentos elétricos.",
            "Na Meta Consultoria, cada projeto é desenvolvido de forma personalizada, seguindo normas técnicas de segurança e desempenho."
          ]}
      />
      <ServiceSteps
        title="Como a Meta Consultoria atua"
        intro="Nosso processo técnico é completo e estruturado para garantir eficiência, segurança e economia:"
        steps={[
            {
              "number": 1,
              "description": "Análise da edificação, equipamentos e demanda de carga."
            },
            {
              "number": 2,
              "description": "Cálculo de circuitos, disjuntores, condutores e quadros."
            },
            {
              "number": 3,
              "description": "Análise para reduzir consumo e custos operacionais."
            },
            {
              "number": 4,
              "description": "Integração com projetos arquitetônico, hidráulico e fotovoltaico."
            },
            {
              "number": 5,
              "description": "Documentação técnica pronta para execução e aprovação junto à concessionária."
            }
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="constr_energ"
            servicoInicial="Instalações Elétricas"
          />
        </div>
      </section>
      <RelatedServices
        services={[
          {
            title: "Projeto Arquitetônico",
            description: "Transforme ideias em espaços funcionais e esteticamente marcantes, equilibrando técnica, criatividade, viabilidade e atendimento às normas urbanísticas.",
            href: "/servicos/constr_energ/projeto-arquitetonico",
          },
          {
            title: "Instalações Hidrossanitárias",
            description: "Desenvolvemos soluções completas para água, esgoto e drenagem, priorizando dimensionamento correto, eficiência, sustentabilidade, segurança e durabilidade.",
            href: "/servicos/constr_energ/instalacoes-hidrossanitarias",
          },
        ]}
      />
    </>
  );
}
