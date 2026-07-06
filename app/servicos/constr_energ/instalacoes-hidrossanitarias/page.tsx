import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instalações Hidrossanitárias | Meta Consultoria",
  description:
    "Serviço de Instalações Hidrossanitárias da Meta Consultoria: projetos completos de água, esgoto e drenagem, com foco em eficiência, segurança e conformidade técnica.",
  keywords: [
    "Meta Consultoria",
    "Instalações Hidrossanitárias",
    "Construção e Energia",
    "Projetos Hidráulicos",
    "Água e Esgoto",
    "Drenagem",
    "Eficiência Hídrica",
    "Consultoria Empresarial",
    "UFF",
    "ABNT",
  ],
  openGraph: {
    title: "Instalações Hidrossanitárias | Meta Consultoria",
    description:
      "Conheça o serviço de Instalações Hidrossanitárias da Meta Consultoria: eficiência, segurança e durabilidade para sua obra.",
    url: "https://metaconsultoria.com/servicos/constr_energ/instalacoes-hidrossanitarias",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/constr_energ/instalacoes-hidrossanitarias.webp", // 🔹 imagem representativa do serviço
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Instalações Hidrossanitárias",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instalações Hidrossanitárias | Meta Consultoria",
    description:
      "Projetos hidrossanitários completos e personalizados, garantindo eficiência, segurança e conformidade técnica.",
    images: ["/media/servicos/constr_energ/instalacoes-hidrossanitarias.webp"],
  },
};


export default function InstalacoesHidrossanitariasPage() {
  return (
    <>
      <ServiceHeader
        title="Instalações Hidrossanitárias"
        description="Componentes técnicos integrados a uma edificação executadas de acordo com as necessidades do projeto"
      />
      <ServiceIntro
        title="Instalações Hidrossanitárias: eficiência, segurança e durabilidade para sua obra"
        paragraphs={[
            "Problemas hidráulicos podem comprometer toda uma construção.",
            "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, oferece o Projeto de Instalações Hidrossanitárias, que garante abastecimento eficiente, drenagem adequada e segurança estrutural para edificações residenciais, comerciais e industriais.",
            "Com planejamento técnico e softwares de engenharia, a Meta cria sistemas otimizados de água, esgoto e drenagem, reduzindo custos e evitando retrabalhos futuros."
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="constr_energ"
            servicoInicial="Instalações Hidrossanitárias"
          />
        </div>
      </section>
      <DefinitionSection
        title="O que são Instalações Hidrossanitárias?"
        paragraphs={[
            "As instalações hidrossanitárias envolvem o planejamento, dimensionamento e execução das redes de água fria, quente, esgoto e drenagem pluvial.",
            "Elas asseguram o funcionamento correto do sistema hidráulico, evitando vazamentos, entupimentos e infiltrações que podem causar danos estruturais e desperdício de recursos.",
            "Na Meta Consultoria, desenvolvemos projetos hidrossanitários completos, conforme as normas da ABNT, garantindo segurança, eficiência e durabilidade."
          ]}
      />
      <ServiceSteps
        title="Como a Meta Consultoria atua"
        intro="Nosso processo é técnico, detalhado e 100% personalizado para cada tipo de obra:"
        steps={[
            {
              "number": 1,
              "description": "Estudo das características do terreno e da edificação."
            },
            {
              "number": 2,
              "description": "Cálculo de diâmetros, pressões e vazões conforme normas."
            },
            {
              "number": 3,
              "description": "Planejamento de reservatórios, colunas, ramais e saídas de esgoto."
            },
            {
              "number": 4,
              "description": "Projeto executivo completo em 2D e 3D."
            },
            {
              "number": 5,
              "description": "Integração com os projetos elétrico e estrutural."
            },
            {
              "number": 6,
              "description": "Documentação completa para execução segura e eficiente."
            }
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="constr_energ"
            servicoInicial="Instalações Hidrossanitárias"
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
            title: "Instalações Elétricas",
            description: "Desenvolvemos projetos elétricos completos, garantindo segurança, conformidade com normas técnicas, eficiência energética, confiabilidade e economia.",
            href: "/servicos/constr_energ/instalacoes-eletricas",
          },
        ]}
      />
    </>
  );
}
