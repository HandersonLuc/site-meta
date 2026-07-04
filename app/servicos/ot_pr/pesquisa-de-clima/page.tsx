import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";

export default function PesquisaDeClimaPage() {
  return (
    <>
      <ServiceHeader
        title="Pesquisa de Clima Organizacional"
        description="Identifique pontos fortes e áreas de melhoria para promover um ambiente alinhado com os valores da empresa"
      />
      <ServiceIntro
        title="Pesquisa de Clima Organizacional: entenda sua equipe e fortaleça sua cultura"
        paragraphs={[
            "Um bom ambiente de trabalho é essencial para o sucesso de qualquer empresa.",
            "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, oferece o serviço de Pesquisa de Clima Organizacional, que mede a satisfação dos colaboradores, identifica pontos de melhoria e fortalece a cultura corporativa.",
            "Com uma abordagem estruturada e confidencial, a Meta coleta dados reais sobre a percepção da equipe e transforma resultados em planos de ação estratégicos para melhorar o engajamento, reduzir a rotatividade e aumentar a produtividade."
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="ot_pr"
            servicoInicial="Pesquisa de Clima"
          />
        </div>
      </section>
      <DefinitionSection
        title="O que é a Pesquisa de Clima Organizacional?"
        paragraphs={[
            "A Pesquisa de Clima Organizacional é uma ferramenta de gestão que analisa o nível de satisfação, motivação e alinhamento dos colaboradores com a empresa.",
            "Por meio de questionários, entrevistas e análises estatísticas, é possível compreender como as pessoas percebem o ambiente de trabalho, a liderança, a comunicação e os processos internos.",
            "Na Meta Consultoria, realizamos uma pesquisa completa e personalizada, transformando dados em insights estratégicos e ações concretas de melhoria."
          ]}
      />
      <ServiceSteps
        title="Como funciona nosso serviço ?"
        intro="Nosso processo é técnico, humanizado e orientado a resultados, garantindo confidencialidade e credibilidade nas informações coletadas:"
        steps={[
            {
              "number": 1,
              "description": "Definição dos objetivos, público e formato do questionário."
            },
            {
              "number": 2,
              "description": "Aplicação de formulários digitais e entrevistas sigilosas com os colaboradores."
            },
            {
              "number": 3,
              "description": "Tratamento estatístico e categorização das respostas."
            },
            {
              "number": 4,
              "description": "Compreensão profunda das fontes de insatisfação e engajamento."
            },
            {
              "number": 5,
              "description": "Recomendações práticas para fortalecer a cultura e melhorar o clima organizacional."
            }
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="ot_pr"
            servicoInicial="Pesquisa de Clima"
          />
        </div>
      </section>
      <RelatedServices
        services={[
          {
            title: "Mapeamento de Processos",
            description: "Visualize e entenda como sua empresa funciona. Identificamos, organizamos e analisamos cada etapa dos seus processos para eliminar gargalos, padronizar operações e aumentar a eficiência do seu negócio.",
            href: "/servicos/ot_pr/mapeamento-de-processos",
          },
          {
            title: "Estruturação Interna",
            description: "Organize sua empresa para crescer com solidez. Reestruturamos funções, fluxos e responsabilidades para aumentar a eficiência operacional, melhorar a comunicação e apoiar a tomada de decisões.",
            href: "/servicos/ot_pr/estruturacao-interna",
          },
        ]}
      />
    </>
  );
}
