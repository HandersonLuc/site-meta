import React from "react";
import { Session } from "@/components/ui/section"; // novo componente reutilizável


export default function Const_ener(){
    return(
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <section className="bg-black text-white py-16 text-start">
                <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold">Construção e Energia</h1>
                </div>
            </section>
            <Session
                title="Projeto Arquitetônico"
                description="Transforme ideias em espaços funcionais e esteticamente marcantes. Desenvolvemos projetos personalizados que equilibram técnica, criatividade e viabilidade, atendendo às necessidades do cliente e às normas urbanísticas."
                href="/servicos/constr_energ/projeto-arquitetonico"
            />
            <Session
            title="Projeto de Instalação Hidrossanitárias"
            description="Desenvolvemos soluções completas em instalações hidrossanitárias, garantindo o correto dimensionamento de água fria, água quente, esgoto e drenagem. Nossos projetos seguem normas técnicas e priorizam eficiência, sustentabilidade e economia, assegurando conforto, segurança e durabilidade para sua obra."
            href="/servicos/constr_energ/instalacoes-hidrossanitarias"
            />
            <Session
                title="Regularização de Imovéis"
                description="Garanta a conformidade legal do seu patrimônio com agilidade e precisão. Atuamos na análise urbanística e na elaboração de projetos técnicos para aprovação junto aos órgãos competentes. Essencial para evitar multas, valorizar o bem e permitir vendas ou comercialização dentro da lei."
                href="/servicos/constr_energ/regularizacao-de-imoveis"
            />
            <Session
            title="Orçamento de Obras"
            description="Elaboramos um orçamento de obras analítico, que inclui materiais, mão de obra, prazos e etapas do projeto. Nosso objetivo é garantir previsibilidade financeira, evitar surpresas e otimizar recursos, permitindo que você construa com segurança, eficiência e economia."
            href="/servicos/constr_energ/orcamento-de-obras"
            />
            <Session
            title="Vistoria Hidrossanitária Predial"
            description="Elimine o desconforto e os riscos causados por falhas nos sistemas de água e esgoto. Realizamos inspeções técnicas especializadas para identificar vazamentos, mau cheiro e obstruções, garantindo a saúde da edificação e o bem-estar dos usuários, além de evitar prejuízos com manutenções de emergência."
            href="/servicos/constr_energ/vistoria-hidrossanitaria-predial"
            />
            <Session
                title="Estudo de luminotécnica"
                description="Realizamos projetos luminotécnicos que consideram normas técnicas, eficiência energética e estética do ambiente. Nosso objetivo é garantir a iluminação ideal para cada espaço, unindo conforto visual, segurança e valorização arquitetônica, além de reduzir custos de energia com soluções sustentáveis."
                href="/servicos/constr_energ/estudo-de-luminotecnica"
            />
            <Session
            title="Instalações Elétricas"
            description="Desenvolvemos projetos elétricos completos para obras residenciais, comerciais e industriais, garantindo segurança, conformidade com normas técnicas e eficiência energética. Nossas soluções incluem dimensionamento de circuitos, distribuição de cargas e sistemas de proteção, assegurando confiabilidade, economia e durabilidade para sua instalação."
            href="/servicos/constr_energ/instalacoes-eletricas"
            />
            <section>
                <p  className='justify-center text-center text-gray-600 leading-relaxed py-12'>
                    Aqui fica o espaço para outros serviços
                </p>
            </section>
        </div>
    )
}
