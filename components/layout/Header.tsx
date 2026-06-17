"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-border/40 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-center px-6">
        {/* Logo */}

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors duration-300 ${
                  isActive
                    ? "text-[#2AD8FF]"
                    : "text-white hover:text-[#2AD8FF]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#2AD8FF] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Menu Mobile */}
        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
}
