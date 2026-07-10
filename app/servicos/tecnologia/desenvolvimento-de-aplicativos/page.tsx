import { FormularioServico } from "@/components/forms/serviceForm";

export default function DesenvolvimentoDeAplicativosPage() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <section className="bg-black text-white py-16 text-start">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">Desenvolvimento de Aplicativos</h1>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16 bg-[#EFFAFF] [box-shadow:0_0_0_100vmax_#EFFAFF] [clip-path:inset(0_-100vmax)]">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <p className="text-gray-600 leading-relaxed">
              Estrutura base da subpágina. O conteúdo textual e midiático será inserido posteriormente.
            </p>
          </div>
          <div>
            <FormularioServico
              variant="highlight"
              coordenacao="tecnologia"
              servicoInicial="Aplicativo"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#090E28] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FormularioServico
            variant="compact"
            coordenacao="tecnologia"
            servicoInicial="Aplicativo"
          />
        </div>
      </section>
    </div>
  );
}

