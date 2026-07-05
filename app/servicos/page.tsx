import { coordinations } from "@/constants/services";
import { Session } from "@/components/ui/section";
import {AreaAction} from "@/components/sections/AreaAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Meta Consultoria",
  description:
    "Conheça todas as soluções da Meta Consultoria em gestão de negócios, otimização de processos, planejamento financeiro, construção e energia, tecnologia e desenvolvimento de produtos.",
  keywords: [
    "Meta Consultoria",
    "Serviços",
    "Consultoria Empresarial",
    "Gestão de Negócios",
    "Otimização de Processos",
    "Planejamento Financeiro",
    "Construção e Energia",
    "Tecnologia",
    "Desenvolvimento de Máquinas",
  ],
  openGraph: {
    title: "Serviços | Meta Consultoria",
    description:
      "Explore as áreas de atuação da Meta Consultoria e descubra como podemos impulsionar o seu negócio.",
    url: "https://metaconsultoria.com/servicos",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/meta/meta-logo.webp", // 🔹 imagem institucional ou banner de serviços
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Serviços",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviços | Meta Consultoria",
    description:
      "Conheça todas as soluções da Meta Consultoria em gestão, processos, tecnologia e muito mais.",
    images: ["/media/meta/meta-logo.webp"],
  },
};

export default function TodosServ() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <section className="relative bg-linear-to-b from-[#0D3A5C] to-[#090E28] text-white py-32 text-start">
        <div className="container mx-auto px-4">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-md px-4 py-1 text-sm mb-4">
            Soluções para você e para o seu negócio
          </div>
          <h1 className="text-5xl font-bold">Serviços</h1>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <span className="text-white text-2xl animate-bounce">↓</span>
        </div>
      </section>

      <section className="bg-white text-[#090E28] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#007BFF] inline-block">
            Áreas de atuação
          </h2>
          <AreaAction currentCoordSlug="" />
          {/* 🔹 Renderiza cada coordenação com seus serviços */}
          {coordinations.map((coord) => (
            <div key={coord.slug} className="mb-16 text-start">
              <div className="space-y-6">
                {coord.services.map((service) => (
                  <Session
                    key={service.slug}
                    title={service.title}
                    description={service.description}
                    href={`/servicos/${service.slug}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
