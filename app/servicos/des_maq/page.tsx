import React from "react";
import { Session } from "@/components/ui/section"; // novo componente reutilizável


export default function Des_maq(){
    return(
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <section className="bg-black text-white py-16 text-start">
                <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold">Desenvolvimento de Máquinas</h1>
                </div>
            </section>
            <Session
                title="Desenho Mecânico"
                description="Realizamos desenhos mecânicos técnicos completos, seguindo normas e padrões de engenharia, para garantir clareza no projeto, confiabilidade na fabricação e redução de falhas no processo produtivo."
                href="/servicos/des_maq/desenho-mecanico"
            />
            <Session
            title="Estudo de materiais"
            description="Escolha os materiais certos para o seu projeto com base em desempenho, custo e aplicação. Analisamos propriedades técnicas, resistência e viabilidade para garantir eficiência, durabilidade e qualidade na sua solução."
            href="/servicos/des_maq/estudo-de-materiais"
            />
            <Session
                title="Prototipagem 3D"
                description="Dê vida às suas ideias com agilidade e precisão. Desenvolvemos protótipos físicos em impressão 3D, ideais para validação de projetos, testes funcionais e visualização de produtos antes da produção final."
                href="/servicos/des_maq/prototipagem-3d"
            />
            <Session
            title="Analise Estrutural"
            description="Avaliamos cargas, materiais e condições de uso para verificar a resistência e estabilidade de estruturas. Nossa análise identifica riscos, otimiza recursos e assegura conformidade com normas técnicas, oferecendo decisões seguras e projetos mais duradouros."
            href="/servicos/des_maq/analise-estrutural"
            />
            <Session
            title="Manuais Técnicos"
            description="Profissionalize a documentação do seu equipamento com manuais de operação, manutenção e catálogos de peças. Desenvolvemos documentos técnicos em conformidade com as normas vigentes para garantir a segurança do usuário, a eficiência operacional e a longevidade da sua solução."
            href="/servicos/des_maq/manuais-tecnicos"
            />
            <section>
                <p  className='justify-center text-center text-gray-600 leading-relaxed py-12'>
                    Aqui fica o espaço para outros serviços
                </p>
            </section>
        </div>
    )
}
