import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";

export default function DesenvolvimentoDeSitePage() {
  return (
    <>
      <ServiceHeader
        title="Desenvolvimento de Site"
        description="Desenvolvimento web que une design, performance e resultados para o seu negócio"
      />
      <ServiceIntro
        title="Desenvolvimento de Sites com SEO para impulsionar sua presença digital"
        paragraphs={[
          "Seu negócio precisa estar visível, profissional e bem posicionado no Google.",
          "A Meta Consultoria oferece o serviço de Desenvolvimento de Sites com foco em SEO, unindo design moderno, desempenho técnico e otimização para mecanismos de busca.",
          "O resultado é um site rápido, estratégico e adaptado ao seu público, pronto para atrair visitantes e gerar conversões reais."
        ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="tecnologia"
            servicoInicial="Site"
            titulo="Digitalize sua operação e economize tempo com soluções tecnológicas sob medida!"
            subtitulo="Criamos sites, aplicativos e automações inteligentes que otimizam fluxos e aumentam produtividade. Garanta uma consultoria gratuita de tecnologia aplicada ao seu negócio."
          />
        </div>
      </section>
      <DefinitionSection
        title="O que é um Site com SEO?"
        paragraphs={[
          "Um site com SEO é aquele estruturado para ser encontrado e bem ranqueado nos buscadores, especialmente no Google.",
          "Além de bonito, o site é planejado tecnicamente, desde o código até os textos, para aumentar o tráfego orgânico e atrair clientes de forma contínua.",
          "O serviço da Meta vai além do design: aplicamos estratégias de SEO on-page e técnico, garantindo velocidade, responsividade e conteúdo otimizado."
        ]}
      />
      <ServiceSteps
        title="Como funciona nosso serviço ?"
        intro="Nosso processo de Desenvolvimento de Sites com foco em SEO é completo, estratégico e personalizado:"
        steps={[
          {
            number: 1,
            description: "Análise da marca, público-alvo e concorrência.",
          },
          {
            number: 2,
            description: "Organização das páginas com base em SEO e experiência do usuário.",
          },
          {
            number: 3,
            description: "Criação de site moderno, leve e adaptável a qualquer dispositivo.",
          },
          {
            number: 4,
            description: "Otimização de tags, meta descriptions, headings, URLs e carregamento.",
          },
          {
            number: 5,
            description: "Configuração de Google Analytics, Search Console e Pixel Meta.",
          },
          {
            number: 6,
            description: "Treinamento para atualização de conteúdo e acompanhamento de desempenho.",
          }
        ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="tecnologia"
            servicoInicial="Site"
            titulo="Digitalize sua operação e economize tempo com soluções tecnológicas sob medida!"
            subtitulo="Criamos sites, aplicativos e automações inteligentes que otimizam fluxos e aumentam produtividade. Garanta uma consultoria gratuita de tecnologia aplicada ao seu negócio."
          />
        </div>
      </section>
      <RelatedServices
        services={[
          {
            title: "Automação de Processos",
            description: "Desenvolvemos soluções de automação de processos que integram tecnologia e gestão para eliminar tarefas repetitivas, reduzir erros e aumentar a produtividade.",
            href: "/servicos/tecnologia/automacao-de-processos",
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
