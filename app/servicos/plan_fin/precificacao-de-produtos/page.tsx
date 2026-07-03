import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";

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
      <DefinitionSection
        title="O que é Precificação Estratégica?"
        paragraphs={[
            "A precificação estratégica é o processo de definir o preço ideal de produtos ou serviços considerando não apenas os custos, mas também o valor percebido pelo cliente e o posicionamento da marca.",
            "Uma boa política de preços impacta diretamente na rentabilidade, na competitividade e na imagem da empresa no mercado.",
            "A Meta Consultoria aplica métodos técnicos e analíticos de precificação para determinar valores equilibrados e estratégicos, garantindo lucro sustentável e atração de clientes."
          ]}
      />
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
