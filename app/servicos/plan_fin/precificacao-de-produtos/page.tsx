import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precificação de Produtos | Meta Consultoria",
  description:
    "Serviço de Precificação de Produtos da Meta Consultoria: análise de custos, mercado e percepção de valor para definir preços competitivos e rentáveis.",
  keywords: [
    "Meta Consultoria",
    "Precificação de Produtos",
    "Planejamento Financeiro",
    "Consultoria Empresarial",
    "UFF",
    "Preço Estratégico",
    "Competitividade",
    "Rentabilidade",
    "Posicionamento de Mercado",
  ],
  openGraph: {
    title: "Precificação de Produtos | Meta Consultoria",
    description:
      "Conheça o serviço de Precificação de Produtos da Meta Consultoria: preços assertivos que equilibram custo, valor percebido e lucratividade.",
    url: "https://metaconsultoria.com/servicos/plan_fin/precificacao-de-produtos",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/plan_fin/precificacao-de-produtos.webp", // 🔹 imagem representativa do serviço
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Precificação de Produtos",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precificação de Produtos | Meta Consultoria",
    description:
      "Maximize seus lucros com preços estratégicos e competitivos através do serviço de Precificação de Produtos da Meta Consultoria.",
    images: ["/media/servicos/plan_fin/precificacao-de-produtos.webp"],
  },
};


export default function PrecificacaoDeProdutosPage() {
  return (
    <>
      <ServiceHeader
        title="Precificação de Produtos"
        description="Definir o valor de venda de um item com base nas condições do mercado."
      />
      <ServiceIntro
        title="Precificação Estratégica: maximize seus lucros com preços assertivos"
        paragraphs={[
            "Definir o preço ideal é um dos maiores desafios de qualquer negócio.",
            "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, desenvolve um método de Precificação Estratégica que une análise financeira, percepção de valor e posicionamento de mercado para garantir preços competitivos e rentáveis.",
            "Com base em dados e indicadores, ajudamos empresas a equilibrar custo, valor percebido e lucratividade, eliminando decisões baseadas em achismos e fortalecendo a sustentabilidade financeira do negócio."
          ]}
      />
      <section className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8 py-16 bg-[#EFFAFF] [box-shadow:0_0_0_100vmax_#EFFAFF] [clip-path:inset(0_-100vmax)]">
        <div className="flex-1">
          <DefinitionSection
            title="O que é Precificação Estratégica?"
            paragraphs={[
                "A precificação estratégica é o processo de definir o preço ideal de produtos ou serviços considerando não apenas os custos, mas também o valor percebido pelo cliente e o posicionamento da marca.",
                "Uma boa política de preços impacta diretamente na rentabilidade, na competitividade e na imagem da empresa no mercado.",
                "A Meta Consultoria aplica métodos técnicos e analíticos de precificação para determinar valores equilibrados e estratégicos, garantindo lucro sustentável e atração de clientes."
              ]}
          />
        </div>
        
        <div className="flex-1">
          <FormularioServico
            variant="highlight"
            coordenacao="plan_fin"
            servicoInicial="Precificação de Produtos"
          />
        </div>
      </section>
      
      <ServiceSteps
        title="Como funciona nosso serviço ?"
        intro="Nosso processo de Precificação de Produtos e Serviços é totalmente personalizado e combina análise financeira, estratégica e mercadológica:"
        steps={[
            {
              "number": 1,
              "description": "Levantamento dos custos fixos, variáveis e margens atuais."
            },
            {
              "number": 2,
              "description": "Comparação de preços e posicionamento de players similares."
            },
            {
              "number": 3,
              "description": "Entendimento da percepção do cliente e diferenciais competitivos."
            },
            {
              "number": 4,
              "description": "Aplicação de métodos quantitativos para definir margens equilibradas e sustentáveis."
            },
            {
              "number": 5,
              "description": "Avaliação de impacto de preços em volume de vendas, receita e lucro."
            },
            {
              "number": 6,
              "description": "Planilha interativa e relatório técnico com recomendações estratégicas."
            }
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            variant="compact"
            coordenacao="plan_fin"
            servicoInicial="Precificação de Produtos"
          />
        </div>
      </section>
      <RelatedServices
        services={[
            {
              "title": "FP&A",
              "description": "Transforme dados financeiros em decisões estratégicas. Estruturamos projeções, análises de desempenho e cenários futuros para orientar o crescimento sustentável da sua empresa com foco em rentabilidade e eficiência.",
              "href": "/servicos/plan_fin/fp-a"
            },
            {
              "title": "Estudo de Viabilidade",
              "description": "Descubra se sua ideia é financeiramente viável antes de investir. Analisamos custos, receitas, riscos e retorno esperado para embasar decisões com segurança e maximizar as chances de sucesso do seu projeto.",
              "href": "/servicos/plan_fin/estudo-de-viabilidade"
            }
          ]}
      />
    </>
  );
}

