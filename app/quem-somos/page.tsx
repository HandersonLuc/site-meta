import { QuemSomosView } from "@/components/sections/QuemSomosView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos | Meta Consultoria",
  description:
    "Conheça a história, valores e propósito da Meta Consultoria, empresa júnior da UFF que conecta conhecimento acadêmico e soluções reais.",
  keywords: [
    "Meta Consultoria",
    "Empresa Júnior",
    "UFF",
    "Gestão de Negócios",
    "Consultoria",
    "Engenharia",
  ],
  openGraph: {
    title: "Quem Somos | Meta Consultoria",
    description: "Conheça a história e os valores da Meta Consultoria.",
    url: "https://metaconsultoria.com/quem-somos",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/servicos/gnc/gestaodenegocios-1.webp",
        width: 1200,
        height: 630,
        alt: "Equipe Meta Consultoria",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quem Somos | Meta Consultoria",
    description: "Conheça a história e os valores da Meta Consultoria.",
    images: ["/media/servicos/gnc/gestaodenegocios-1.webp"],
  },
};

export default function QuemSomosPage() {
  return <QuemSomosView />;
}
