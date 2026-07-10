import { FormularioServico } from "@/components/forms/serviceForm";
import { DefinitionSection } from "@/components/sections/services/DefinitionSection";
import { ServiceHeader } from "@/components/sections/services/HeroSection";
import { ServiceIntro } from "@/components/sections/services/IntroSection";
import { ServiceSteps } from "@/components/sections/services/ProcessSteps";
import { RelatedServices } from "@/components/sections/services/RelatedServices";

export default function ProjetoArquitetonicoPage() {
  return (
    <>
      <ServiceHeader
        title="Projeto Arquitetônico"
        description="Representação técnica e criativa do seu projeto."
      />
      <ServiceIntro
        title="Projeto Arquitetônico: planejamento inteligente, economia e estética alinhados"
        paragraphs={[
            "Construir sem planejamento é um risco alto.",
            "A Meta Consultoria, empresa júnior de Engenharia e Gestão de Negócios da UFF, desenvolve Projetos Arquitetônicos estratégicos que unem funcionalidade, estética e eficiência para garantir execução segura, econômica e bem planejada.",
            "Cada projeto é pensado para otimizar espaços, reduzir custos e eliminar retrabalhos, apresentando um modelo 3D realista que permite visualizar o resultado final antes mesmo de iniciar a obra."
          ]}
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <DefinitionSection
              inline
              title="O que é um Projeto Arquitetônico?"
              paragraphs={[
                "O Projeto Arquitetônico é o documento técnico que define o planejamento completo de uma edificação, desde a distribuição de ambientes até a organização estética e funcional dos espaços.",
                "Ele serve como base para a execução da obra, o cálculo estrutural, as instalações elétricas e hidrossanitárias, além de ser essencial para aprovação em órgãos públicos.",
                "Na Meta Consultoria, criamos projetos personalizados e detalhados, com o equilíbrio ideal entre beleza, conforto, eficiência e viabilidade construtiva."
              ]}
            />
          </div>

          <div className="flex-1">
            <FormularioServico
              className="!bg-transparent !p-0 !shadow-none !rounded-none [&_form]:space-y-5 [&_h2]:text-3xl [&_input]:h-11 [&_select]:h-11 [&_select]:text-base [&_textarea]:min-h-[88px]"
              subtitulo=""
              coordenacao="constr_energ"
              servicoInicial="Projeto Arquitetônico"
            />
          </div>
        </div>
      </section>
      <ServiceSteps
        title="Como a Meta Consultoria atua"
        intro="Nosso processo é técnico, detalhado e colaborativo, garantindo segurança, clareza e excelência em cada etapa:"
        steps={[
            {
              "number": 1,
              "description": "Entendimento das preferências, usos e restrições do cliente."
            },
            {
              "number": 2,
              "description": "Definição de fluxos, dimensões e aproveitamento inteligente dos espaços."
            },
            {
              "number": 3,
              "description": "Criação das plantas, cortes e elevações, além de maquete eletrônica realista."
            },
            {
              "number": 4,
              "description": "Integração do projeto arquitetônico com elétrica, hidráulica e estrutural."
            },
            {
              "number": 5,
              "description": "Envio completo dos arquivos e acompanhamento em eventuais ajustes para aprovação."
            }
          ]}
      />
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            coordenacao="constr_energ"
            servicoInicial="Projeto Arquitetônico"
          />
        </div>
      </section>
      <RelatedServices
        services={[
          {
            title: "Instalações Hidrossanitárias",
            description: "Desenvolvemos soluções completas para água, esgoto e drenagem, priorizando dimensionamento correto, eficiência, sustentabilidade, segurança e durabilidade.",
            href: "/servicos/constr_energ/instalacoes-hidrossanitarias",
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
