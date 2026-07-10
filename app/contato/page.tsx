import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { GoogleMapEmbed } from "@/components/common/GoogleMapEmbed";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Meta Consultoria",
  description:
    "Entre em contato com a Meta Consultoria. Fale com nossa equipe, conheça nossa sede em Niterói e siga nossas redes sociais.",
  keywords: [
    "Meta Consultoria",
    "Contato",
    "Consultoria Empresarial",
    "Niterói",
    "UFF",
    "Telefone",
    "Email",
    "WhatsApp",
    "Endereço",
  ],
  openGraph: {
    title: "Contato | Meta Consultoria",
    description:
      "Fale com a Meta Consultoria e descubra como podemos ajudar seu negócio. Conheça nossa sede em Niterói e siga nossas redes sociais.",
    url: "https://metaconsultoria.com/contato",
    siteName: "Meta Consultoria",
    images: [
      {
        url: "/media/meta/meta-logo.webp", // 🔹 imagem institucional
        width: 1200,
        height: 630,
        alt: "Meta Consultoria - Contato",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato | Meta Consultoria",
    description:
      "Entre em contato com a Meta Consultoria. Fale com nossa equipe, conheça nossa sede e siga nossas redes sociais.",
    images: ["/media/meta/meta-logo.webp"],
  },
};


export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* HEADER */}
      <section className="bg-[#0B0E2C] text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <span className="inline-block bg-[#2AD8FF] text-[#0B0E2C] text-sm font-medium px-6 py-2 rounded-full">
              Fale conosco
            </span>
          </div>
          <h1 className="text-5xl font-bold">Contato</h1>
        </div>
      </section>

      {/* FORMULÁRIO E BLOCOS */}
      <section className="py-24 container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* COLUNA ESQUERDA: FORMULÁRIO */}
          <div>
            <ContactForm />
          </div>

          {/* COLUNA DIREITA: BLOCOS DE AÇÃO */}
          <div className="flex flex-col gap-6">
            {/* Bloco 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_12px_50px_rgba(0,0,0,0.4)] transition-all duration-300">
              <p className="text-gray-700 mb-4">
                Conheça nossa <span className="font-semibold">história</span>
              </p>
              <Link
                href="/quem-somos/sobre-nos"
                className="inline-block bg-[#2AD8FF] text-white font-medium px-6 py-2 rounded-full hover:opacity-90 transition-all"
              >
                Quem somos →
              </Link>
            </div>

            {/* Bloco 2 */}
            <div className="bg-[#0B0E2C] text-white rounded-2xl p-6 shadow-[0_12px_50px_rgba(0,0,0,0.4)] transition-all duration-300">
              <p className="font-semibold mb-4">Siga nossas Mídias Sociais</p>
              <div className="flex gap-6 text-2xl">
                <a href="https://instagram.com/metaconsultoria" target="_blank">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com/company/metaconsultoria" target="_blank">
                  <FaLinkedin />
                </a>
                <a href="https://youtube.com/@metaconsultoria" target="_blank">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Bloco 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_12px_50px_rgba(0,0,0,0.15)] flex flex-col sm:flex-row items-center justify-between transition-all duration-300 hover:scale-[1.02]">
              <p className="text-[#131936] font-semibold text-lg leading-snug sm:max-w-[50%] text-center sm:text-left">
                Torne-se o protagonista<br />do seu futuro
              </p>
              <Image
                src="/media/meta/Meta-Logo.webp"
                alt="Meta Consultoria"
                width={100}
                height={100}
                className="h-20 w-auto mt-4 sm:mt-0 sm:ml-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL: SEDE */}
      <section className="py-20 bg-[#090E28] text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-start">
          {/* Coluna esquerda */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Conheça Nossa <span className="text-[#2AD8FF]">Sede</span>
            </h2>
            <h3 className="text-2xl font-semibold mb-2">Meta Consultoria</h3>
            <p className="text-gray-300 mb-4 text-lg">
              R. Passo da Pátria, 156 <br />
              Sala 217, Bloco E <br />
              São Domingos, Niterói - RJ, 24210-240
            </p>

            <h4 className="font-semibold mb-2 text-xl">Horário de funcionamento</h4>
            <p className="text-gray-300 mb-4 text-lg">
              Segunda – Sexta: 09:00h – 18:00h <br />
              Sábados e Domingos: Fechado <br />
              Feriados: Fechado
            </p>

            <div className="space-y-3">
              <p className="flex items-center gap-3 text-lg">
                <FaWhatsapp className="text-[#2AD8FF]" /> +55 21 99976-5705
              </p>
              <p className="flex items-center gap-3 text-lg">
                <Mail className="text-[#2AD8FF]" /> contato@metaconsultoria.com
              </p>
            </div>
          </div>

          {/* Coluna direita: Mapa */}
          <div className="rounded-2xl overflow-hidden shadow-lg w-full h-[400px]">
            <GoogleMapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2372760216513!2d-43.1313848!3d-22.904617500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817e79f0ef45%3A0x165db13c16f3d18f!2sR.%20Passo%20da%20P%C3%A1tria%2C%20156%20-%20Boa%20Viagem%2C%20Niter%C3%B3i%20-%20RJ%2C%2024210-240!5e0!3m2!1spt-BR!2sbr!4v1782504862703!5m2!1spt-BR!2sbr"/>
          </div>
        </div>
      </section>
    </div>
  );
}
