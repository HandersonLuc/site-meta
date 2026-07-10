import { OtherServices } from "@/components/sections/OtherServices";
import { Session } from "@/components/ui/section"; // novo componente reutilizável
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otimização de Processos | Meta Consultoria",
  description:
    "Descubra as soluções da Meta Consultoria em Otimização de Processos: mapeamento de processos, pesquisa de clima, estruturação interna, gestão de estoque, estudo de tempo e simulação de processos.",
  keywords: [
    "Meta Consultoria",
    "Otimização de Processos",
    "Mapeamento de Processos",
    "Pesquisa de Clima",
    "Estruturação Interna",
    "Gestão de Estoque",
    "Estudo de Tempo",
    "Simulação de Processos",
    "Consultoria Empresarial",
    "UFF",
  ],
  openGraph: {
    title: "Otimização de Processos | Meta Consultoria",
    description:
      "Conheça os serviços de Otimização de Processos da Meta Consultoria e aumente a eficiência da sua empresa.",
    url: "https://metaconsultoria.com/servicos/ot_pr",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/ot_pr/otimizacao-processos.webp", // 🔹 imagem representativa da coordenação
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Otimização de Processos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Otimização de Processos | Meta Consultoria",
    description:
      "Explore os serviços de Otimização de Processos da Meta Consultoria: mapeamento, pesquisa de clima, estruturação interna e mais.",
    images: ["/media/servicos/ot_pr/otimizacao-processos.webp"],
  },
};

export default function ot_pr(){
    return(
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <section className="bg-[#090E28] text-white py-16 text-start">
                <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold">Otimização de Processos</h1>
                </div>
            </section>
            <Session
                title="Mapeamento de processos"
                description="
                    Visualize e entenda como sua empresa funciona. Identificamos, organizamos e analisamos cada etapa dos seus processos para eliminar gargalos, padronizar operações e aumentar a eficiência do seu negócio
                    "
                href="/servicos/ot_pr/mapeamento-de-processos"
            />
            <Session
                title="Pesquisa de clima"
                description="
                    Organize sua empresa para crescer com solidez. Reestruturamos funções, fluxos e responsabilidades para aumentar a eficiência operacional, melhorar a comunicação e garantir uma base sólida para a tomada de decisões.                "
                href="/servicos/ot_pr/pesquisa-de-clima"
            />
            <Session
                title="Estruturação interna"
                description="Organize sua empresa para crescer com solidez. Reestruturamos funções, fluxos e responsabilidades para aumentar a eficiência operacional, melhorar a comunicação e garantir uma base sólida para a tomada de decisões."
                href="/servicos/ot_pr/estruturacao-interna"
            />
            <Session
                title="Gestão de Estoque"
                description="
                    Gerencie os recursos necessários para o funcionamento de uma organização. Compreendemos o fluxo de produtos no seu estoque e como minimizar situações que possam deixar de atender às demandas da organização.
                "
                href="/servicos/ot_pr/gestao-de-estoque"
            />
            <Session
                title="Estudo de Tempo"
                description="
                Solucione desafios na organização física do espaço de trabalho. Buscamos definir, ou redefinir, o arranjo físico de uma instalação, tendo por objetivo ter um espaço mais eficiente.
                "                
                href="/servicos/ot_pr/estudo-de-tempo"
            />
            <Session
                title="Simulação de Processos"
                description="Reproduza virtualmente o funcionamento de atividades, fluxos de trabalho ou operações internas de uma empresa."
                href="/servicos/ot_pr/simulacao-de-processos"
            />
            <OtherServices currentCoordSlug="ot_pr" />
        </div>
    )
}
