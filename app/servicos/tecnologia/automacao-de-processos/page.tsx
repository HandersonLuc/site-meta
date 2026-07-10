import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automação de Processos | Meta Consultoria",
  description:
    "Serviço de Automação de Processos da Meta Consultoria: soluções digitais e sistemas embarcados para eliminar tarefas repetitivas, reduzir custos e aumentar a produtividade.",
  keywords: [
    "Meta Consultoria",
    "Automação de Processos",
    "Tecnologia",
    "Arduino",
    "Sistemas Embarcados",
    "Eficiência Operacional",
    "Consultoria Empresarial",
    "UFF",
    "Produtividade",
    "Inovação Digital",
  ],
  openGraph: {
    title: "Automação de Processos | Meta Consultoria",
    description:
      "Conheça o serviço de Automação de Processos da Meta Consultoria: eficiência, precisão e inovação para transformar sua operação.",
    url: "https://metaconsultoria.com/servicos/tecnologia/automacao-de-processos",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/tecnologia/automacao-de-processos.webp", // 🔹 imagem representativa do serviço
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Automação de Processos",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automação de Processos | Meta Consultoria",
    description:
      "Digitalize sua operação e aumente a produtividade com o serviço de Automação de Processos da Meta Consultoria.",
    images: ["/media/servicos/tecnologia/automacao-de-processos.webp"],
  },
};


export default function AutomacaoDeProcessosPage() {
  return (
    <>
      <ServiceHeader
        title="Automação de Processos"
        description="Uso de softwares para executar atividades operacionais de forma automática"
      />
      <ServiceIntro
        title="Automação de Processos: eficiência, precisão e inovação para o seu negócio"
        paragraphs={[
          "A Automação de Processos da Meta Consultoria combina engenharia, tecnologia e gestão para tornar operações mais rápidas, seguras e eficientes.",
          "Utilizando softwares personalizados e sistemas embarcados com Arduino, desenvolvemos soluções que reduzem tarefas manuais, diminuem custos operacionais e aumentam a produtividade da sua empresa.",
          "Mais do que tecnologia, entregamos inteligência aplicada à rotina do seu negócio."
        ]}
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <DefinitionSection
              inline
              title="O que é Automação de Processos?"
              paragraphs={[
              "A automação de processos consiste em substituir atividades manuais e repetitivas por sistemas automáticos e integrados, controlados por softwares ou dispositivos físicos.",
              "Essas soluções conectam diferentes áreas e equipamentos, proporcionando eficiência, padronização e precisão nas operações.",
              "Na Meta, aplicamos automação em ambientes administrativos, digitais, físicos e industriais, utilizando tecnologias sob medida para cada necessidade."
            ]}
            />
          </div>

          <div className="flex-1">
            <FormularioServico
              className="!bg-transparent !p-0 !shadow-none !rounded-none [&_form]:space-y-5 [&_h2]:text-3xl [&_input]:h-11 [&_select]:h-11 [&_select]:text-base [&_textarea]:min-h-[88px]"
              coordenacao="tecnologia"
            servicoInicial="Automação"
            titulo="Digitalize sua operação e economize tempo com soluções tecnológicas sob medida!"
            subtitulo="Criamos sites, aplicativos e automações inteligentes que otimizam fluxos e aumentam produtividade. Garanta uma consultoria gratuita de tecnologia aplicada ao seu negócio."
            />
          </div>
        </div>
      </section>
      <ServiceSteps
        title="Como funciona nosso serviço ?"
        intro="Nosso processo de automação é estruturado, técnico e orientado a resultados, unindo análise de processos, programação e engenharia aplicada:"
        steps={[
          {
            number: 1,
            description: "Identificação de gargalos, desperdícios e tarefas repetitivas.",
          },
          {
            number: 2,
            description: "Escolha entre automação via software, Arduino ou integração híbrida.",
          },
          {
            number: 3,
            description: "Criação de rotinas automatizadas, sistemas de controle ou protótipos físicos.",
          },
          {
            number: 4,
            description: "Validação prática e ajustes de desempenho.",
          },
          {
            number: 5,
            description: "Entrega de manuais e capacitação para operação e manutenção.",
          }
        ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="tecnologia"
            servicoInicial="Automação"
            titulo="Digitalize sua operação e economize tempo com soluções tecnológicas sob medida!"
            subtitulo="Criamos sites, aplicativos e automações inteligentes que otimizam fluxos e aumentam produtividade. Garanta uma consultoria gratuita de tecnologia aplicada ao seu negócio."
          />
        </div>
      </section>
      <RelatedServices
        services={[
          {
            title: "Desenvolvimento de Site",
            description: "Construa sua presença digital com profissionalismo e performance. Criamos sites responsivos, rápidos e alinhados à identidade da sua marca, focando em usabilidade, conversão e otimização para mecanismos de busca (SEO).",
            href: "/servicos/tecnologia/desenvolvimento-de-site",
          },
          {
            title: "Otimização de Sites (SEO)",
            description: "Transforme seu site em uma poderosa ferramenta de atração e vendas. Aplicamos estratégias avançadas de SEO para colocar sua empresa no topo dos mecanismos de busca, aumentando o tráfego orgânico, a autoridade da marca e a geração constante de leads qualificados.",
            href: "/servicos/tecnologia/direcionamento_estrategico",
          }
        ]}
      />
    </>
  );
}
