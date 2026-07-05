import { Session } from "@/components/ui/section"; // novo componente reutilizável
import { OtherServices} from "@/components/sections/OtherServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tecnologia | Meta Consultoria",
  description:
    "Conheça as soluções da Meta Consultoria em Tecnologia: desenvolvimento de sites e aplicativos, automação de processos e otimização de SEO para fortalecer sua presença digital.",
  keywords: [
    "Meta Consultoria",
    "Tecnologia",
    "Desenvolvimento de Sites",
    "Desenvolvimento de Aplicativos",
    "Automação de Processos",
    "SEO",
    "Consultoria Empresarial",
    "UFF",
    "Transformação Digital",
  ],
  openGraph: {
    title: "Tecnologia | Meta Consultoria",
    description:
      "Explore os serviços de Tecnologia da Meta Consultoria e impulsione sua empresa com soluções digitais inovadoras.",
    url: "https://metaconsultoria.com/servicos/tecnologia",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/tecnologia/tecnologia.webp", // 🔹 imagem representativa da coordenação
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Tecnologia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnologia | Meta Consultoria",
    description:
      "Descubra como a Meta Consultoria pode apoiar sua transformação digital com sites, aplicativos, automação e SEO.",
    images: ["/media/servicos/tecnologia/tecnologia.webp"],
  },
};


export default function CoordTec(){
    return(
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <section className="bg-[#090E28] text-white py-16 text-start">
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
                href="/servicos/tecnologia/direcionamento_estrategico"
            />
            <OtherServices currentCoordSlug="tecnologia" />
        </div>
    )
}
