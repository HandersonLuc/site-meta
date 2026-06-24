"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ChevronUp } from "lucide-react";

export function Footer() {
  const exploreLinks = [
  { name: "Home page", href: "/" },
  { name: "Quem somos", href: "/quem-somos" },
  { name: "Serviços", href: "/servicos" },
  { name: "Parcerias", href: "" },
  { name: "Insights", href: "" },
  { name: "Contato", href: "/contato" },
  ]

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="flex flex-row items-baseline text-center mb-16 justify-between">
          <div>
            <img
              src="/logo-meta.svg"
              alt="Meta Consultoria"
              className="h-10 mb-6"
            /> 
          </div>
          <div>
            <h4 className="font-semibold mb-4">Mídias Sociais</h4>
            <div className="flex gap-4 mb-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="p-2 bg-white text-black rounded-full hover:bg-[#2AD8FF] hover:text-white transition-all"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo + Produtos */}
          <div className="lg:col-span-4">
            
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Gestão e Criação de Negócios",
                "Otimização de Processos",
                "Planejamento Financeiro",
                "Construção e Energia",
                "Desenvolvimento de Máquinas",
                "Tecnologia",
              ].map((item) => (
                <li key={item} className="hover:text-[#2AD8FF] transition-colors">
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.name} className="hover:text-[#2AD8FF] transition-colors">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Endereço */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold mb-4">Endereço</h4>
            <p className="text-sm leading-relaxed">
              R. Passo da Pátria, 156<br />
              Sala 217, Bloco E<br />
              São Domingos, Niterói – RJ<br />
              <span className="block mt-2">CNPJ: 00.498.057/0001-62</span>
            </p>
          </div>

          {/* Conteúdo */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold mb-2">Conteúdo</h4>
            <p className="text-sm mb-3">
              Cadastre-se e receba nossos conteúdos
            </p>
            <input
              type="email"
              placeholder="Digite o seu e-mail"
              className="w-full rounded-md px-3 py-2 text-black text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-6 text-sm text-gray-300">
          <p>
            Copyright {new Date().getFullYear()} Meta Consultoria | Todos os
            Direitos Reservados
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-white text-black rounded-full hover:bg-[#2AD8FF] hover:text-white transition-all"
            aria-label="Voltar ao topo"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
