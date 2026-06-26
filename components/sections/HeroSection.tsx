// src/components/sections/HeroSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  showArrow?: boolean;
}

export function HeroSection({ title, subtitle, showArrow }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* 🔹 Área reservada para o GIF ou vídeo de fundo */}
      <div className="absolute inset-0 z-0">
        {/* Substitua esta div pelo seu <video> ou <img> quando tiver o arquivo */}
        <div className="w-full h-full bg-black/60 flex items-center justify-center">
          <span className="text-white/70 text-sm">
            Espaço reservado para GIF ou vídeo de fundo
          </span>
        </div>
      </div>

      {/* 🔹 Conteúdo principal */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl font-light mb-8">{subtitle}</p>
        )}
        <Link href="/quem-somos">
          <Button variant="link" className="text-white text-lg">
            Conheça nossa história →
          </Button>
        </Link>

        {showArrow && (
          <div className="mt-12 animate-bounce text-2xl">↓</div>
        )}
      </div>
    </section>
  );
}
