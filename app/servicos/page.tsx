import { coordinations } from "@/constants/services";
import { Session } from "@/components/ui/section";

export const metadata = {
  title: "Serviços | Conheça as Soluções da Meta Consultoria",
  description: "Conheça as Soluções da Meta Consultoria",
};

export default function TodosServ() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <section className="relative bg-linear-to-b from-[#0D3A5C] to-[#090E28] text-white py-32 text-start">
        <div className="container mx-auto px-4">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-md px-4 py-1 text-sm mb-4">
            Soluções para você e para o seu negócio
          </div>
          <h1 className="text-5xl font-bold">Serviços</h1>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <span className="text-white text-2xl animate-bounce">↓</span>
        </div>
      </section>

      <section className="bg-white text-[#090E28] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#007BFF] inline-block">
            Áreas de atuação
          </h2>

          {/* 🔹 Renderiza cada coordenação com seus serviços */}
          {coordinations.map((coord) => (
            <div key={coord.slug} className="mb-16 text-start">
              <h3 className="text-2xl font-bold mb-6">{coord.name}</h3>
              <div className="space-y-6">
                {coord.services.map((service) => (
                  <Session
                    key={service.slug}
                    title={service.title}
                    description={service.description}
                    href={`/servicos/${service.slug}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
