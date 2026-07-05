import Image from "next/image";
import Link from "next/link";

const areas = [
  {
    title: "Gestão de Negócios",
    image: "/media/serviços/gnc/gestaodenegocios-1.webp",
    href: "/servicos/gnc",
  },
  {
    title: "Otimização de Processos",
    image: "/media/serviços/ot_pr/op11-1.webp",
    href: "/servicos/ot_pr",
  },
  {
    title: "Construção e Energia",
    image: "/media/serviços/constr_energ/homepagg.webp",
    href: "/servicos/constr_energ",
  },
  {
    title: "Criação de Produtos",
    image: "/media/serviços/des_maq/desenho-mec-1(1).webp",
    href: "/servicos/des_maq",
  },
  {
    title: "Tecnologia",
    image: "/media/serviços/tecnologia/app2-1(1).webp",
    href: "/servicos/tecnologia",
  },
  {
    title: "Planejamento Financeiro",
    image: "/media/serviços/plan_fin/fundo-plan-financ.webp",
    href: "/servicos/plan_fin",
  },
];

export function AreasSection() {
  return (
    <section className="bg-white text-[#090E28] py-16">
      <div className="container mx-auto px-4 text-center">

        {/* 🔹 Grade com 6 itens lado a lado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 justify-items-center">
          {areas.map((area, index) => (
            <Link
              key={index}
              href={area.href}
              className="group relative h-[180px] w-[180px] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#131936]/60 group-hover:bg-[#131936]/50 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-sm font-bold text-white">{area.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
