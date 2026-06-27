
import { Session } from "@/components/ui/section"; // novo componente reutilizável


export default function ot_pr(){
    return(
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <section className="bg-black text-white py-16 text-start">
                <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold">Otimização de Processos</h1>
                </div>
            </section>
            <Session
                title="Mapeamento de processos"
                description="
                    Visualize e entenda como sua empresa funciona. Identificamos, organizamos e analisamos cada etapa dos seus processos para eliminar gargalos, padronizar operações e aumentar a eficiência do seu negócio
                    "
                href=""
            />
            <Session
                title="Pesquisa de clima"
                description="
                    Organize sua empresa para crescer com solidez. Reestruturamos funções, fluxos e responsabilidades para aumentar a eficiência operacional, melhorar a comunicação e garantir uma base sólida para a tomada de decisões.                "
                href=""
            />
            <Session
                title="Estruturação interna"
                description="Organize sua empresa para crescer com solidez. Reestruturamos funções, fluxos e responsabilidades para aumentar a eficiência operacional, melhorar a comunicação e garantir uma base sólida para a tomada de decisões."
                href=""
            />
            <Session
                title="Gestão de Estoque"
                description="
                    Gerencie os recursos necessários para o funcionamento de uma organização. Compreendemos o fluxo de produtos no seu estoque e como minimizar situações que possam deixar de atender às demandas da organização.
                "
                href=""
            />
            <Session
                title="Estudo de Tempo"
                description="
                Solucione desafios na organização física do espaço de trabalho. Buscamos definir, ou redefinir, o arranjo físico de uma instalação, tendo por objetivo ter um espaço mais eficiente.
                "                
                href=""
            />
            <Session
                title="Simulação de Processos"
                description="Reproduza virtualmente o funcionamento de atividades, fluxos de trabalho ou operações internas de uma empresa."
                href=""
            />
            <section>
                <p  className='justify-center text-center text-gray-600 leading-relaxed py-12'>
                    Aqui fica o espaço para outros serviços
                </p>
            </section>
        </div>
    )
}