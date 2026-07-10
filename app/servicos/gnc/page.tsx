import { Session } from "@/components/ui/section"; // novo componente reutilizável
import { OtherServices} from "@/components/sections/OtherServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestão de Negócios | Meta Consultoria",
  description:
    "Descubra as soluções da Meta Consultoria em Gestão de Negócios: análise de mercado, posicionamento de marca e planejamento estratégico para impulsionar sua empresa.",
  keywords: [
    "Meta Consultoria",
    "Gestão de Negócios",
    "Análise de Mercado",
    "Posicionamento de Marca",
    "Planejamento Estratégico",
    "Consultoria Empresarial",
    "UFF",
  ],
  openGraph: {
    title: "Gestão de Negócios | Meta Consultoria",
    description:
      "Conheça os serviços de Gestão de Negócios da Meta Consultoria e fortaleça sua empresa com estratégias inteligentes.",
    url: "https://metaconsultoria.com/servicos/gnc",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/gnc/gestaodenegocios-1.webp", // 🔹 imagem institucional da coordenação
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Gestão de Negócios",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestão de Negócios | Meta Consultoria",
    description:
      "Explore os serviços de Gestão de Negócios da Meta Consultoria: análise de mercado, posicionamento de marca e planejamento estratégico.",
    images: ["/media/servicos/gnc/gestaodenegocios-1.webp"],
  },
};


export default function ges_neg(){
    return(
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <section className="bg-[#090E28] text-white py-16 text-start">
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
            <OtherServices currentCoordSlug="gnc" />
        </div>
    )
}
