import { Session } from "@/components/ui/section"; // novo componente reutilizável
import { OtherServices} from "@/components/sections/OtherServices";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planejamento Financeiro | Meta Consultoria",
  description:
    "Conheça as soluções da Meta Consultoria em Planejamento Financeiro: FP&A, estudo de viabilidade e precificação de produtos para decisões estratégicas e crescimento sustentável.",
  keywords: [
    "Meta Consultoria",
    "Planejamento Financeiro",
    "FP&A",
    "Estudo de Viabilidade",
    "Precificação de Produtos",
    "Consultoria Empresarial",
    "UFF",
    "Gestão Financeira",
  ],
  openGraph: {
    title: "Planejamento Financeiro | Meta Consultoria",
    description:
      "Descubra como a Meta Consultoria pode apoiar sua empresa com FP&A, estudo de viabilidade e precificação estratégica de produtos.",
    url: "https://metaconsultoria.com/servicos/plan_fin",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/plan_fin/planejamento-financeiro.webp", // 🔹 imagem representativa da coordenação
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Planejamento Financeiro",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planejamento Financeiro | Meta Consultoria",
    description:
      "Explore os serviços de Planejamento Financeiro da Meta Consultoria: FP&A, estudo de viabilidade e precificação de produtos.",
    images: ["/media/servicos/plan_fin/planejamento-financeiro.webp"],
  },
};


export default function plan_fin(){
    return(
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <section className="bg-[#090E28] text-white py-16 text-start">
                <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold">Planejamento Financeiro</h1>
                </div>
            </section>
            <Session
                title="FP&A"
                description="Transforme dados financeiros em decisões estratégicas. Estruturamos projeções, análises de desempenho e cenários futuros para orientar o crescimento sustentável da sua empresa com foco em rentabilidade e eficiência."
                href="/servicos/plan_fin/fp-a"
            />
            <Session
                title="Estudo de Viabilidade"
                description="Descubra se sua ideia é financeiramente viável antes de investir. Analisamos custos, receitas, riscos e retorno esperado para embasar decisões com segurança e maximizar as chances de sucesso do seu projeto."
                href="/servicos/plan_fin/estudo-de-viabilidade"
            />
            <Session
                title="Precificação de Produtos"
                description="Defina o preço certo para o seu produto e maximize seus resultados. Analisamos custos, mercado, concorrência e percepção de valor para estruturar um preço estratégico que garanta competitividade, rentabilidade e posicionamento adequado."
                href="/servicos/plan_fin/precificacao-de-produtos"
            />
            <OtherServices currentCoordSlug="plan_fin" />
        </div>
    )
}
