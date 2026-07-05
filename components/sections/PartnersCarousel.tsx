"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

interface Partner {
  name: string;
  image: string;
}

interface PartnersCarouselProps {
  partners: Partner[];
}

export function PartnersCarousel({ partners }: PartnersCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });

  return (
    <section className="py-20 bg-[#1A1A1A] text-white text-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12">Nossos clientes</h2>

        {/* 🔹 Carrossel cíclico com drag */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-28 w-[240px] mx-6 rounded-3xl border border-[#2AD8FF]/10 bg-transparent shadow-sm"
              >
                <div className="relative h-16 w-[180px]">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Botão */}
        <Link
          href="/servicos"
          className="inline-block mt-12 text-[#2AD8FF] font-medium hover:underline"
        >
          Conheça nossos serviços →
        </Link>
      </div>
    </section>
  );
}
