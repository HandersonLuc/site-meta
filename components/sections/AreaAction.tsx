import { coordinations } from "@/constants/services";
import Link from "next/link";

export function AreaAction({ currentCoordSlug }: { currentCoordSlug: string }) {
  const otherCoords = coordinations.filter((coord) => coord.slug !== currentCoordSlug);

  return (
    <section className="text-black py-24">
      <div className="container mx-auto px-4 text-center">
        {/* 🔹 Distribuição manual: 2 em cima e 3 embaixo */}
        <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto">
          {/* Primeira linha (2 itens) */}
          <div className="flex flex-wrap justify-center gap-8">
            {otherCoords.slice(0, 3).map((coord) => (
              <Link
                key={coord.slug}
                href={`/servicos/${coord.slug}`}
                className="group w-56 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2AD8FF]/20"
              >
                <div className="relative">
                  <img
                    src={coord.services[0].imageSrc ?? "/images/placeholder.jpg"}
                    alt={coord.name}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-center">
                    <p className="text-white text-sm font-semibold p-3">{coord.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Segunda linha (3 itens) */}
          <div className="flex flex-wrap justify-center gap-8">
            {otherCoords.slice(3, 6).map((coord) => (
              <Link
                key={coord.slug}
                href={`/servicos/${coord.slug}`}
                className="group w-56 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2AD8FF]/20"
              >
                <div className="relative">
                  <img
                    src={coord.services[0].imageSrc ?? "/images/placeholder.jpg"}
                    alt={coord.name}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-center">
                    <p className="text-white text-sm font-semibold p-3">{coord.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
