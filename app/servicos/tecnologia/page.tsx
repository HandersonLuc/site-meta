import { Session } from "@/components/ui/section"; // novo componente reutilizável


export default function CoordTec(){
    return(
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <section className="bg-black text-white py-16 text-start">
                <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold">Tecnologia</h1>
                </div>
            </section>
            <Session
                title="Desenvolvimento de Site"
                description="Construa sua presença digital com profissionalismo e performance. Criamos sites responsivos, rápidos e alinhados à identidade da sua marca, focando em usabilidade, conversão e otimização para mecanismos de busca (SEO)."
                href="/servicos/tecnologia/desenvolvimento-de-site"
            />
            <Session
                title="Desenvolvimento de Aplicativos"
                description="Criamos aplicativos personalizados para Android e iOS, focados em usabilidade, performance e inovação. Nosso processo envolve análise de requisitos, design intuitivo e programação robusta, garantindo soluções digitais que aumentam a eficiência, melhoram a experiência do usuário e fortalecem a presença da sua marca no mercado."
                href="/servicos/tecnologia/desenvolvimento-de-aplicativos"
            />
            <Session
                title="Automação de Processos"
                description="Desenvolvemos soluções de automação de processos que integram tecnologia e gestão para eliminar tarefas repetitivas, reduzir erros e aumentar a produtividade. Nossos projetos mapeiam fluxos de trabalho, identificam gargalos e aplicam ferramentas digitais que otimizam tempo e recursos, garantindo mais agilidade e competitividade para sua empresa."
                href="/servicos/tecnologia/automacao-de-processos"
            />
            <Session
                title="Otimização de Sites (SEO)"
                description="Transforme seu site em uma poderosa ferramenta de atração e vendas. Aplicamos estratégias avançadas de SEO para colocar sua empresa no topo dos mecanismos de busca, aumentando o tráfego orgânico, a autoridade da marca e a geração constante de leads qualificados."
                href="/servicos/tecnologia/otimizacao-de-sites-seo"
            />
            <section>
                <p  className='justify-center text-center text-gray-600 leading-relaxed py-12'>
                    Aqui fica o espaço para outros serviços
                </p>
            </section>
        </div>
    )
}
