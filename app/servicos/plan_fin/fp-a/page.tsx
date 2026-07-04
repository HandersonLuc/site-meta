import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";

export default function FpAPage() {
  return (
    <>
      <ServiceHeader
        title="Planejamento e Análise Financeira"
        description="Domine as finanças da sua empresa com FP&A. A Meta Consultoria estrutura o planejamento financeiro e análise de resultados para decisões estratégicas."
      />
      <ServiceIntro
        title="Planejamento e Análise Financeira para decisões mais inteligentes"
        paragraphs={[
            "O serviço de FP&A (Financial Planning & Analysis) da Meta Consultoria oferece uma visão completa e estratégica sobre a saúde financeira da sua empresa.",
            "Combinando engenharia, administração e análise de dados, nossos consultores estruturam planejamentos financeiros sólidos e modelos de desempenho, auxiliando gestores a decidir com segurança, prever cenários e otimizar recursos.",
            "Mais do que controlar números, o FP&A da Meta é sobre transformar dados em estratégia e estratégia em resultado."
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="plan_fin"
            servicoInicial="FP&A"
          />
        </div>
      </section>
      <DefinitionSection
        title="O que é FP&A (Planejamento e Análise Financeira)?"
        paragraphs={[
            "O FP&A é uma metodologia voltada para planejar, monitorar e analisar o desempenho financeiro das empresas.",
            "Através de indicadores, relatórios e projeções, é possível avaliar a rentabilidade, controlar o orçamento e antecipar riscos, garantindo decisões assertivas.",
            "Na prática, o FP&A se torna o coração da gestão estratégica, conectando o planejamento financeiro ao operacional e oferecendo previsibilidade e estabilidade para o futuro do negócio."
          ]}
      />
      <ServiceSteps
        title="Como funciona nosso serviço ?"
        intro="A Meta aplica um processo estruturado e adaptado à realidade de cada empresa:"
        steps={[
            {
              "number": 1,
              "description": "Análise do fluxo de caixa, receitas, despesas e margens de lucro."
            },
            {
              "number": 2,
              "description": "Projeção de receitas, custos e investimentos com base em dados históricos e metas de crescimento."
            },
            {
              "number": 3,
              "description": "Estruturação de dashboards e relatórios dinâmicos para acompanhamento contínuo."
            },
            {
              "number": 4,
              "description": "Simulações financeiras que permitem antecipar desafios e oportunidades."
            },
            {
              "number": 5,
              "description": "Comparação entre planejado e realizado, com planos de ação para correção de rota."
            }
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="plan_fin"
            servicoInicial="FP&A"
          />
        </div>
      </section>
      <RelatedServices
        services={[
            {
              "title": "Precificação de Produtos",
              "description": "Defina o preço certo para o seu produto e maximize seus resultados. Analisamos custos, mercado, concorrência e percepção de valor para estruturar um preço estratégico que garanta competitividade, rentabilidade e posicionamento adequado.",
              "href": "/servicos/plan_fin/precificacao-de-produtos"
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
