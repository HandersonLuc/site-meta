import { Mail, Clock } from "lucide-react";
import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { GoogleMapEmbed } from "@/components/common/GoogleMapEmbed";

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
                href="/quem-somos"
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
            <div className="bg-white rounded-2xl p-6 shadow-[0_12px_50px_rgba(0,0,0,0.4)] transition-all duration-300">
              <p className="text-gray-700 font-medium max-w-[60%]">
                Torne-se o protagonista do seu futuro
              </p>
              <img src="/logo-meta.png" alt="Meta Consultoria" className="h-16 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL: SEDE */}
      <section className="py-20 bg-[#0B0E2C] text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-start">
          {/* Coluna esquerda */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Conheça Nossa <span className="text-[#2AD8FF]">Sede</span>
            </h2>
            <h3 className="text-xl font-semibold mb-2">Meta Consultoria</h3>
            <p className="text-gray-300 mb-4">
              R. Passo da Pátria, 156 <br />
              Sala 217, Bloco E <br />
              São Domingos, Niterói - RJ, 24210-240
            </p>

            <h4 className="font-semibold mb-2">Horário de funcionamento</h4>
            <p className="text-gray-300 mb-4">
              Segunda – Sexta: 09:00h – 18:00h <br />
              Sábados e Domingos: Fechado <br />
              Feriados: Fechado
            </p>

            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <FaWhatsapp className="text-[#2AD8FF]" /> +55 21 99976-5705
              </p>
              <p className="flex items-center gap-3">
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
