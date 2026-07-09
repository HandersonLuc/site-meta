import React from "react";
import Link from "next/link";

interface RelatedService {
  title: string;
  description: string;
  href: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className="bg-[#090E28] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-lg sm:text-xl leading-tight font-bold mb-8 border-b-2 border-[#2AD8FF] inline-block">
          SERVIÇOS QUE PODEM TE INTERESSAR
        </h2>

        <div className="flex flex-col items-center gap-8 md:gap-12 max-w-4xl mx-auto text-left">
          {services.map((service) => (
            <div key={service.title} className="w-full">
              <h3 className="text-lg leading-tight font-bold mb-2 break-words">{service.title}</h3>
              <p className="text-gray-300 mb-2 break-words">{service.description}</p>
              <Link href={service.href} className="text-[#2AD8FF] font-medium hover:underline">
                Saiba mais →
              </Link>
            </div>
          ))}
        </div>

          <Link href="/servicos" className="inline-block mt-12 text-[#2AD8FF] font-medium hover:underline">
          <div className="mt-12 border-t border-gray-500 pt-4 text-sm text-gray-400">
            OUTROS SERVIÇOS
          </div>
        </Link>
      </div>
    </section>
  );
}
