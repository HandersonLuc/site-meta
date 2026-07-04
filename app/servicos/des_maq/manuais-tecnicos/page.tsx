import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";

export default function ManuaisTecnicosPage() {
  return (
    <>
      <ServiceHeader
        title="Manuais Técnicos"
        description="Elaboração de documentos técnicos para garantir a operação segura, montagem precisa e manutenção eficiente."
      />
      <ServiceIntro
        title="Manuais Técnicos: documentação para operação, segurança e manutenção do seu produto"
        paragraphs={[
            "Você possui um equipamento que chegou sem documentação ou precisa profissionalizar a entrega do seu produto para o consumidor final?",
            "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, oferece o serviço de Manuais Técnicos, que utiliza redação técnica especializada e normas de segurança para garantir que seu produto seja operado, montado e mantido de forma correta e segura.",
            "Nosso objetivo é eliminar a falta de padronização, reduzir chamados de assistência e profissionalizar a entrega final de um produto, garantindo conformidade técnica e total autonomia para o usuário."
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="des_maq"
            servicoInicial="Manuais Técnicos"
          />
        </div>
      </section>
      <DefinitionSection
        title="O que é um Manual Técnico?"
        paragraphs={[
            "O Manual Técnico traduz a complexidade de sistemas em orientações práticas e seguras.",
            "Ele reúne instruções de operação, montagem e manutenção, além de protocolos de segurança essenciais para mitigar riscos.",
            "Esse documento garante a durabilidade do equipamento e a conformidade técnica com as normas vigentes do setor."
          ]}
      />
      <ServiceSteps
        title="Como funciona nosso serviço ?"
        intro="Nosso processo é técnico, normativo e orientado a resultados, utilizando metodologia de engenharia e padrões de redação técnica e segurança:"
        steps={[
            {
              "number": 1,
              "description": "Estudo detalhado do funcionamento, componentes e finalidade do produto ou máquina."
            },
            {
              "number": 2,
              "description": "Pesquisa de normas técnicas vigentes e regulamentações específicas para garantir segurança e conformidade legal."
            },
            {
              "number": 3,
              "description": "Elaboração da lista técnica de materiais e componentes para facilitar a identificação e futura reposição."
            },
            {
              "number": 4,
              "description": "Criação do passo a passo para montagem, instalação e operação correta do equipamento de forma didática."
            },
            {
              "number": 5,
              "description": "Definição de rotinas preventivas e procedimentos corretivos para casos de falhas ou mau funcionamento."
            }
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="des_maq"
            servicoInicial="Manuais Técnicos"
          />
        </div>
      </section>
      <RelatedServices
        services={[
          {
            title: "Estudo de Materiais",
            description: "Escolha os materiais certos para o seu projeto com base em desempenho, custo e aplicação, garantindo eficiência, durabilidade e qualidade na solução.",
            href: "/servicos/des_maq/estudo-de-materiais",
          },
          {
            title: "Análise Estrutural",
            description: "Avaliamos cargas, materiais e condições de uso para verificar resistência e estabilidade, identificar riscos, otimizar recursos e apoiar decisões técnicas mais seguras.",
            href: "/servicos/des_maq/analise-estrutural",
          },
        ]}
      />
    </>
  );
}
