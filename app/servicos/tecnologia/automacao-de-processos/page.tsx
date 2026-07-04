import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";

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
      <DefinitionSection
        title="O que é Automação de Processos?"
        paragraphs={[
          "A automação de processos consiste em substituir atividades manuais e repetitivas por sistemas automáticos e integrados, controlados por softwares ou dispositivos físicos.",
          "Essas soluções conectam diferentes áreas e equipamentos, proporcionando eficiência, padronização e precisão nas operações.",
          "Na Meta, aplicamos automação em ambientes administrativos, digitais, físicos e industriais, utilizando tecnologias sob medida para cada necessidade."
        ]}
      />
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
