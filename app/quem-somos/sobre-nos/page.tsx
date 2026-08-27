import { SobreNosView } from "@/components/sections/SobreNosView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | Meta Consultoria",
  description:
    "Conheça a história, valores e trajetória de quase 30 anos da Meta Consultoria, Empresa Júnior de Engenharia e Gestão da UFF.",
  keywords: [
    "Meta Consultoria",
    "Sobre Nós",
    "Quem Somos",
    "Empresa Júnior",
    "UFF",
    "História",
    "Valores",
  ],
  openGraph: {
    title: "Sobre Nós | Meta Consultoria",
    description:
      "Conheça a trajetória da Meta Consultoria, conectando conhecimento acadêmico a soluções empresariais reais.",
    url: "https://metaconsultoria.com/quem-somos/sobre-nos",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/quem-somos/equipe-meta.jpg",
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
    title: "Sobre Nós | Meta Consultoria",
    description:
      "Conheça a história e os valores da Meta Consultoria, Empresa Júnior da UFF.",
    images: ["/quem-somos/equipe-meta.jpg"],
  },
};

export default function SobreNosPage() {
  return <SobreNosView />;
}
