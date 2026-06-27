
import { Session } from "@/components/ui/section"; // novo componente reutilizável


export default function plan_fin(){
    return(
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <section className="bg-black text-white py-16 text-start">
                            <div className="container mx-auto px-4">
                            <h1 className="text-5xl font-bold">Planejamento Financeiro</h1>
                            </div>
                        </section>
                        <Session
                            title="FP&A"
                            description="Transforme dados financeiros em decisões estratégicas. Estruturamos projeções, análises de desempenho e cenários futuros para orientar o crescimento sustentável da sua empresa com foco em rentabilidade e eficiência."
                            href=""
                        />
                        <Session
                            title="Estudo de Viabilidade"
                            description="Descubra se sua ideia é financeiramente viável antes de investir. Analisamos custos, receitas, riscos e retorno esperado para embasar decisões com segurança e maximizar as chances de sucesso do seu projeto."
                            href=""
                        />
                        <Session
                            title="Precificação de Produtos"
                            description="Defina o preço certo para o seu produto e maximize seus resultados. Analisamos custos, mercado, concorrência e percepção de valor para estruturar um preço estratégico que garanta competitividade, rentabilidade e posicionamento adequado."
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