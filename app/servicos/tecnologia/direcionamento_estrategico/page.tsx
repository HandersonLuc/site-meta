import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otimização de Sites (SEO) | Meta Consultoria",
  description:
    "Serviço de SEO da Meta Consultoria: aumente tráfego orgânico, posições no Google e conversões com otimização técnica, conteúdo estratégico e performance digital.",
  keywords: [
    "Meta Consultoria",
    "SEO",
    "Otimização de Sites",
    "Tecnologia",
    "Tráfego Orgânico",
    "Google",
    "Conversão Digital",
    "Consultoria Empresarial",
    "UFF",
    "Marketing Digital",
  ],
  openGraph: {
    title: "Otimização de Sites (SEO) | Meta Consultoria",
    description:
      "Conheça o serviço de SEO da Meta Consultoria: estratégias técnicas e de conteúdo para colocar seu site no topo do Google e gerar mais leads.",
    url: "https://metaconsultoria.com/servicos/tecnologia/direcionamento_estrategico",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/tecnologia/seo.webp", // 🔹 imagem representativa do serviço
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - SEO",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Otimização de Sites (SEO) | Meta Consultoria",
    description:
      "Transforme seu site em uma máquina de tráfego orgânico e conversão com o serviço de SEO da Meta Consultoria.",
    images: ["/media/servicos/tecnologia/seo.webp"],
  },
};


export default function OtimizacaoDeSitesSeoPage() {
  return (
    <>
      <ServiceHeader
        title="Otimização de Sites (SEO)"
        description="Aumente tráfego orgânico, posições no Google e conversões com SEO técnico, on-page e conteúdo."
      />
      <ServiceIntro
        title="Transforme seu site em uma máquina de tráfego orgânico, autoridade e geração de leads"
        paragraphs={[
          "Se o seu site existe, mas não aparece no Google, não gera contatos e não converte, o problema geralmente é falta de uma estratégia de SEO completa.",
          "O SEO para Websites integra técnica, conteúdo, intenção de busca e conversão para transformar sua presença digital em um canal de crescimento orgânico."
        ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="tecnologia"
            servicoInicial="SEO"
            titulo="Aumente seu tráfego orgânico e gere mais leads com SEO para Websites!"
            subtitulo="Auditoria, otimização técnica, conteúdo e conversão para crescer no orgânico. Garanta um diagnóstico SEO gratuito do seu site."
          />
        </div>
      </section>
      <DefinitionSection
        title="Se você enfrenta problemas como:"
        paragraphs={[
          "Seu site tem poucas visitas vindas do Google ou depende de tráfego pago para gerar leads.",
          "Suas páginas não ranqueiam para palavras-chave importantes do seu mercado.",
          "O site é lento, tem erros de indexação ou perde performance no mobile.",
          "Você produz conteúdo, mas ele não traz resultados consistentes."
        ]}
      />
      <ServiceSteps
        title="A Meta apresenta o serviço de SEO para Websites, que:"
        intro="Unimos visão estratégica de negócio e conversão com execução técnica de SEO e performance para criar um plano completo de crescimento orgânico."
        steps={[
          {
            number: 1,
            description: "Diagnostica e corrige gargalos de SEO técnico e performance, incluindo Core Web Vitals.",
          },
          {
            number: 2,
            description: "Otimiza páginas estratégicas para ranqueamento e conversão.",
          },
          {
            number: 3,
            description: "Define palavras-chave por intenção de busca para atrair o público certo.",
          },
          {
            number: 4,
            description: "Estrutura conteúdo e autoridade para sustentar crescimento orgânico no longo prazo.",
          },
          {
            number: 5,
            description: "Acompanha indicadores e evolui o projeto com otimizações contínuas.",
          }
        ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="tecnologia"
            servicoInicial="SEO"
            titulo="Aumente seu tráfego orgânico e gere mais leads com SEO para Websites!"
            subtitulo="Auditoria, otimização técnica, conteúdo e conversão para crescer no orgânico. Garanta um diagnóstico SEO gratuito do seu site."
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
            title: "Automação de Processos",
            description: "Desenvolvemos soluções de automação de processos que integram tecnologia e gestão para eliminar tarefas repetitivas, reduzir erros e aumentar a produtividade.",
            href: "/servicos/tecnologia/automacao-de-processos",
          }
        ]}
      />
    </>
  );
}
