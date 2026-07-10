"use client";

import Image from "next/image";
import Link from "next/link";

interface Partner {
  name: string;
  image: string;
}

interface PartnersCarouselProps {
  partners: Partner[];
}

export function PartnersCarousel({ partners }: PartnersCarouselProps) {
  return (
    <section className="py-20 bg-[#1A1A1A] text-white text-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12">Nossos clientes</h2>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="mx-6 flex h-28 min-w-[240px] items-center justify-center rounded-3xl border border-[#2AD8FF]/10 bg-transparent shadow-sm"
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

        <Link
          href="/servicos"
          className="inline-block mt-12 text-[#2AD8FF] font-medium hover:underline"
        >
          Conheça nossos serviços →
        </Link>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 24s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
