"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { MobileMenu } from "@/components/layout/MobileMenu";

export const navLinks = [
  { name: "Home page", href: "/" },
  { name: "Quem somos", href: "/quem-somos" },
  { name: "Serviços", href: "/servicos" },
  { name: "Parcerias", href: "" },
  { name: "Insights", href: "" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    // espera 300ms antes de fechar
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 300);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-border/40 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-center px-6">
        <nav className="hidden md:flex items-center gap-10 text-12px font-medium relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const isDropdown = link.name === "Quem somos" || link.name === "Serviços";

            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={`relative py-1 transition-colors duration-300 ${
                    isActive ? "text-[#2AD8FF]" : "text-white hover:text-[#2AD8FF]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#2AD8FF] rounded-full" />
                  )}
                </Link>

                {isDropdown && openMenu === link.name && (
                  <div
                    className="absolute left-0 mt-2 w-56 bg-[#F5F7FA] shadow-lg rounded-md"
                    onMouseEnter={() => handleMouseEnter(link.name)} // mantém aberto se entrar no submenu
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.name === "Quem somos" && (
                      <>
                        <Link href="/quem-somos/sobre-nos" className="block px-4 py-2 text-[#007BFF] hover:bg-gray-200">
                          Sobre nós
                        </Link>
                        <Link href="/quem-somos/setta" className="block px-4 py-2 text-[#007BFF] hover:bg-gray-200">
                          SETTA
                        </Link>
                        <Link href="/contato" className="block px-4 py-2 text-[#007BFF] hover:bg-gray-200">
                          Contato
                        </Link>
                        <Link href="/politica-de-privacidade" className="block px-4 py-2 text-[#007BFF] hover:bg-gray-200">
                          Política de Privacidade
                        </Link>
                      </>
                    )}

                    {link.name === "Serviços" && (
                      <>
                        <Link href="/servicos/gestao" className="block px-4 py-2 text-[#007BFF] hover:bg-gray-200">
                          Gestão e Criação de Negócios
                        </Link>
                        <Link href="/servicos/processos" className="block px-4 py-2 text-[#007BFF] hover:bg-gray-200">
                          Otimização de Processos
                        </Link>
                        <Link href="/servicos/financeiro" className="block px-4 py-2 text-[#007BFF] hover:bg-gray-200">
                          Planejamento Financeiro
                        </Link>
                        <Link href="/servicos/maquinas" className="block px-4 py-2 text-[#007BFF] hover:bg-gray-200">
                          Desenvolvimento de Máquinas
                        </Link>
                        <Link href="/servicos/energia" className="block px-4 py-2 text-[#007BFF] hover:bg-gray-200">
                          Construção e Energia
                        </Link>
                        <Link href="/servicos/tecnologia" className="block px-4 py-2 text-[#007BFF] hover:bg-gray-200">
                          Tecnologia
                        </Link>
                        <Link href="/servicos" className="block px-4 py-2 text-[#007BFF] hover:bg-gray-200">
                          Todos os serviços
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
}
