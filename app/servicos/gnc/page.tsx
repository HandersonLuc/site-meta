import { Session } from "@/components/ui/section"; // novo componente reutilizável


export default function ges_neg(){
    return(
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <section className="bg-black text-white py-16 text-start">
                <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold">Gestão de Negócios</h1>
                </div>
            </section>
            <Session
                title="Análise de Mercado"
                description="Entenda seu público e valide ideias com base em dados. Identificamos oportunidades, mapeamos concorrentes e fornecemos insights estratégicos para decisões mais assertivas no seu nicho de atuação."
                href="/servicos/gnc/analise-de-mercado"
            />
            <Session
                title="Posicionamento de Marca"
                description="Fortaleça sua presença online e conquiste relevância no ambiente digital. Definimos estratégias personalizadas para destacar sua marca, atrair o público certo e gerar autoridade no seu mercado."                
                href="/servicos/gnc/posicionamento-de-marca"
            />
            <Session
                title="Planejamento Estratégico"
                description="Defina o rumo do seu negócio com clareza e foco. Analisamos o ambiente interno e externo da sua organização para identificar forças, fraquezas e oportunidades, traçando metas e ações alinhadas à sua visão de futuro."
                href="/servicos/gnc/planejamento-estrategico"
            />
            <section>
                <p  className='justify-center text-center text-gray-600 leading-relaxed py-12'>
                    Aqui fica o espaço para outros serviços
                </p>
            </section>
        </div>
    )
}
