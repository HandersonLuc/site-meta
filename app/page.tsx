import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionBadge } from "@/components/common/SectionBadge";
import { SuccessCase } from "@/components/sections/SuccessCase";
import { Newsletter } from "@/components/sections/Newsletter";
import { Session } from "@/components/ui/section"; // novo componente reutilizável
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "A Meta Consultoria oferece soluções em consultoria empresarial com foco em Engenharia e Gestão de Negócios, impulsionando o crescimento e a eficiência de empresas com estratégia, inteligência e propósito.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <HeroSection
        title="A Meta Consultoria oferece soluções em consultoria empresarial"
        subtitle="Com foco em Engenharia e Gestão de Negócios, impulsionando o crescimento e a eficiência de empresas com estratégia, inteligência e propósito."
        showArrow
      />

      {/* 2. DESTAQUES */}
    <section className="py-24 bg-[#F5F7FA] text-black">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
        {/* Botão "Quem somos" */}
        <div className="mb-8">
          <a
            href="/quem-somos"
            className="inline-block bg-[#2AD8FF] text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-[#1CBFE0] transition-colors"
          >
            Quem somos
          </a>
        </div>

        {/* Texto institucional */}
        <p className="text-lg leading-relaxed font-medium mb-16 text-left md:text-center">
          A Meta Consultoria oferece soluções em consultoria empresarial{" "}
          <span className="text-[#007BFF] font-semibold">
            com foco em Engenharia e Gestão de Negócios,
          </span>{" "}
          impulsionando o crescimento e a eficiência de empresas{" "}
          <span className="text-[#007BFF] font-semibold">com estratégia</span>,
          inteligência e propósito para quem quer liderar o próprio futuro.
        </p>

        {/* Blocos de destaque */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bloco 1 */}
          <div className="bg-black text-white rounded-3xl p-8 flex flex-col justify-center text-left">
            <h3 className="text-3xl font-light mb-2">
              Mais de <span className="font-bold">600</span>
            </h3>
            <p className="text-3xl font-light mb-2">
              projetos realizados em todo o{" "}
              <span className="text-[#2AD8FF] font-bold">Brasil</span>
            </p>
          </div>

          {/* Bloco 2 */}
          <div className="flex flex-col gap-8">
            <div className="bg-black text-white rounded-3xl p-8 text-left">
              <h3 className="text-5xl font-bold mb-2">
                30<span className="text-[#2AD8FF]">+</span>
              </h3>
              <p className="text-xl font-light">Anos de experiência</p>
            </div>

            <div className="bg-black text-white rounded-3xl p-8 text-left">
              <h3 className="text-5xl font-bold mb-2">
                95<span className="text-[#2AD8FF]">%</span>
              </h3>
              <p className="text-xl font-light">Satisfação</p>
            </div>
          </div>
        </div>
      </div>
</section>


      {/* 3. SERVIÇOS */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <Session
          title="Gestão de negócios"
          description="Soluções estratégicas para impulsionar o crescimento e a eficiência da sua empresa."
          href="/servicos/gestao"
        />
        <Session
          title="Otimização de processos"
          description="Melhore a performance operacional com metodologias de eficiência comprovadas."
          href="/servicos/processos"
        />
        <Session
          title="Planejamento financeiro"
          description="Planeje o futuro da sua empresa com segurança e inteligência financeira."
          href="/servicos/financeiro"
        />
        <Session
          title="Construção e energia"
          description="Projetos sustentáveis e eficientes para o setor de construção e energia."
          href="/servicos/energia"
        />
        <Session
          title="Desenvolvimento de máquinas"
          description="Inovação e tecnologia aplicadas ao desenvolvimento industrial."
          href="/servicos/maquinas"
        />
        <Session
          title="Tecnologia"
          description="Transforme digitalmente sua empresa com soluções tecnológicas sob medida."
          href="/servicos/tecnologia"
        />
      </section>

      {/* 4. NOSSOS CLIENTES */}
      <section className="py-20 bg-black text-white text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Nossos clientes</h2>
          <div className="flex justify-center gap-12 items-center mb-8">
            <img src="/shell.png" alt="Shell" className="h-24 w-auto" />
            <img src="/mercedes.png" alt="Mercedes" className="h-24 w-auto" />
            <img src="/cocacola.png" alt="Coca-Cola" className="h-24 w-auto" />
          </div>
          <Button variant="link" className="text-[#2AD8FF] hover:underline">
            Conheça nossos serviços →
          </Button>
        </div>
      </section>

      {/* 5. NOVO SERVIÇO */}
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Coluna esquerda */}
        <div>
          <h2 className="text-3xl font-bold mb-2 border-b-2 border-[#007BFF] inline-block pb-1">
            Novo serviço
          </h2>
          <h3 className="text-2xl font-extrabold mt-4 mb-6">
            Otimização de Sites (SEO)
          </h3>
        </div>

        {/* Coluna direita */}
        <div>
          <p className="text-gray-700 leading-relaxed mb-6 font-medium">
            Transforme seu site em uma poderosa ferramenta de atração e vendas.
            Aplicamos estratégias avançadas de SEO para colocar sua empresa no topo
            dos mecanismos de busca, aumentando o tráfego orgânico, a autoridade da
            marca e a geração constante de leads qualificados.
          </p>
          <a
            href="/servicos/seo"
            className="inline-block bg-gradient-to-r from-[#2AD8FF] to-[#007BFF] text-white font-medium px-6 py-2 rounded-full hover:opacity-90 transition-all"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* DEPOIMENTOS */}
  <section className="py-20 bg-[#F5F7FA]">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">O que nossos clientes dizem</h2>
        <a
          href="/contato"
          className="inline-block bg-gradient-to-r from-[#2AD8FF] to-[#007BFF] text-white font-medium px-6 py-2 rounded-full hover:opacity-90 transition-all"
        >
          Diagnóstico Gratuito
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Depoimento 1 */}
        <div className="border border-gray-300 rounded-2xl p-6 bg-white shadow-sm">
          <p className="text-gray-700 mb-4 leading-relaxed">
            “A Meta é há anos a maior EJ parceira da Hashtag Treinamentos. Nos unimos
            com o intuito de auxiliar na capacitação dos membros da EJ, bem como dos
            alunos da universidade. A Meta tem exercido um papel fundamental nesse
            sentido, promovendo diversas capacitações de Excel, VBA e Power BI aos
            membros da EJ e alunos da UFF, contribuindo em conjunto com a Hashtag para
            a formação dos estudantes.”
          </p>
          <p className="font-semibold text-sm">– Alon Pinheiro, Gerente de cursos</p>
        </div>

        {/* Depoimento 2 */}
        <div className="border border-gray-300 rounded-2xl p-6 bg-white shadow-sm">
          <p className="text-gray-700 mb-4 leading-relaxed">
            “Nossa parceria com a Meta Consultoria tem sido um sucesso durante todos
            estes anos. A equipe está sempre motivada a vencer novos desafios e crescer
            profissionalmente. Todos os projetos realizados contam com a garantia de
            qualidade e satisfação de seus clientes e parceiros.”
          </p>
          <p className="font-semibold text-sm">– Luciano Gallucci, Diretor Executivo</p>
        </div>
      </div>
    </div>
  </section>

      <Newsletter />
    </div>
  );
}
