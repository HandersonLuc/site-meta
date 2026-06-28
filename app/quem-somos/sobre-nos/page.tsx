"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
};

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${
        visible ? "visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 1600,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const { ref, visible } = useInView<HTMLSpanElement>(0.35);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let startTime: number | null = null;
    let frameId = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * end);

      setValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [visible, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

const areas = [
  {
    title: "Gestão de Negócios",
    image: "/quem-somos/gestao-negocios.jpg",
  },
  {
    title: "Otimização de Processos",
    image: "/quem-somos/otimizacao-processos.jpg",
  },
  {
    title: "Construção e Energia",
    image: "/quem-somos/construcao-energia.jpg",
  },
  {
    title: "Criação de Produtos",
    image: "/quem-somos/criacao-produtos.jpg",
  },
  {
    title: "Tecnologia",
    image: "/quem-somos/tecnologia.jpg",
  },
];

const stats = [
  {
    number: 30,
    prefix: "+",
    label: "Anos de experiência no mercado",
  },
  {
    number: 27,
    prefix: "+",
    label: "Premiações em excelência e inovação",
  },
  {
    number: 95,
    suffix: "%",
    label: "Satisfação dos clientes",
  },
  {
    number: 600,
    prefix: "+",
    label: "Consultorias realizadas",
  },
];

const events = [
  {
    name: "Interação",
    image: "/eventos/interacao.png",
    description:
      "Com 24 anos de história, o Interação é um dos maiores eventos acadêmicos da UFF. Reúne, em uma semana, palestras, minicursos e workshops com profissionais que inspiram e transformam.",
  },
  {
    name: "SE LIGA!",
    image: "/eventos/se-liga.png",
    description:
      "O SE LIGA! é um evento que promove diversidade, equidade e inclusão, reunindo coletivos, ativistas e empresas em debates transformadores. De 2022 a 2024, a Meta foi reconhecida por seu compromisso com essa causa.",
  },
];

const partners = [
  { name: "Visagio", image: "/parceiros/visagio.png" },
  { name: "Live Mode", image: "/parceiros/live-mode.png" },
  { name: "Parceiro 3", image: "/parceiros/parceiro-3.png" },
  { name: "Parceiro 4", image: "/parceiros/parceiro-4.png" },
];

export default function SobreNos() {
  return (
    <div className="min-h-screen bg-[#F4F7FF] text-[#131936]">
      <section className="relative overflow-hidden bg-[#131936] text-white">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF]" />
        <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#22C0FF]/10 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#0067FF]/10 blur-3xl" />

        <div className="relative container mx-auto px-4 py-24 md:py-28">
          <Reveal>
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80">
                Pessoas, história e propósito
              </span>

              <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
                Quem somos
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
                A Meta Consultoria é a Empresa Júnior de Engenharia e Gestão de
                Negócios da Universidade Federal Fluminense, conectando
                conhecimento acadêmico, prática de mercado e soluções reais para
                empresas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <main>
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal direction="left">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0067FF]">
                  Nossa história
                </p>

                <h2 className="mb-5 text-3xl font-extrabold md:text-5xl">
                  Uma trajetória construída com propósito e impacto.
                </h2>

                <div className="mb-6 h-1 w-32 rounded-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF]" />

                <p className="mb-5 leading-relaxed text-slate-700">
                  A Meta Consultoria é a Empresa Júnior de Engenharia e Gestão
                  de Negócios da Universidade Federal Fluminense (UFF), fundada
                  em 1995. Surgiu com o objetivo de aplicar, na prática, os
                  conhecimentos adquiridos em sala de aula, aproximando os
                  estudantes do mercado de trabalho.
                </p>

                <p className="mb-5 leading-relaxed text-slate-700">
                  Ao longo de quase três décadas, a Meta realizou mais de 600
                  projetos, impactando empresas e formando profissionais
                  capacitados. Hoje, a Meta é referência entre as EJs do Brasil,
                  aliando propósito social com resultados reais.
                </p>

                <Link
                  href="/contato"
                  className="inline-block rounded-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF] px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Fale Conosco
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div className="relative mx-auto h-[320px] w-full max-w-[520px] overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src="/quem-somos/equipe-meta.jpg"
                  alt="Equipe da Meta Consultoria"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="mb-10 text-3xl font-extrabold md:text-4xl">
                Trazemos soluções inteligentes em:
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {areas.map((area, index) => (
                <Reveal key={area.title} direction="right" delay={index * 100}>
                  <div className="group relative h-[220px] overflow-hidden rounded-[1.75rem]">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#131936]/60 transition group-hover:bg-[#131936]/50" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-xl font-bold leading-tight text-white">
                        {area.title}
                      </h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#131936] py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
              <Reveal direction="left">
                <div>
                  <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white/75">
                    Nossa história em resultados
                  </span>

                  <h2 className="mt-6 text-3xl font-extrabold md:text-5xl">
                    Por que escolher a Meta Consultoria
                  </h2>

                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                    Escolher a Meta é garantir soluções inovadoras, acessíveis e
                    de qualidade, com o talento dos melhores estudantes de
                    engenharia da UFF.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {stats.map((item, index) => (
                  <Reveal key={item.label} direction="right" delay={index * 100}>
                    <div className="rounded-[1.75rem] border border-[#22C0FF]/40 bg-[#10162F] p-6 shadow-lg">
                      <div className="text-5xl font-extrabold text-[#22C0FF]">
                        <CountUp
                          end={item.number}
                          prefix={item.prefix}
                          suffix={item.suffix}
                        />
                      </div>

                      <p className="mt-4 max-w-[180px] text-base leading-snug text-white">
                        {item.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0E1329] py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
              <Reveal direction="left">
                <div>
                  <h2 className="text-3xl font-extrabold md:text-4xl">
                    Nossos valores
                  </h2>

                  <div className="mt-4 h-1 w-44 rounded-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF]" />
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Reveal direction="right">
                    <div className="rounded-[1.75rem] bg-[#131936] p-8">
                      <h3 className="mb-4 text-2xl font-bold">Missão</h3>

                      <p className="leading-relaxed text-white/80">
                        Fazer a diferença na vida das pessoas, formando
                        profissionais de alta performance que alcançam sua
                        autorrealização por meio da atuação direta em problemas
                        reais e complexos do mercado.
                      </p>
                    </div>
                  </Reveal>

                  <Reveal direction="right" delay={120}>
                    <div className="rounded-[1.75rem] bg-[#131936] p-8">
                      <h3 className="mb-4 text-2xl font-bold">Visão</h3>

                      <p className="leading-relaxed text-white/80">
                        Tornar-se a maior forja de talentos do Rio de Janeiro,
                        reconhecida como fonte confiável de futuros líderes e
                        solucionadores de desafios de alto valor.
                      </p>
                    </div>
                  </Reveal>
                </div>

                <Reveal direction="up" delay={180}>
                  <div className="rounded-[1.75rem] bg-[#131936] p-8">
                    <h3 className="mb-8 text-2xl font-bold">Raízes</h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                      <div>
                        <h4 className="mb-2 text-xl font-semibold">
                          Identidade
                        </h4>
                        <p className="text-white/75">
                          Somos 1 só, agimos em conjunto.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-2 text-xl font-semibold">
                          Propósito
                        </h4>
                        <p className="text-white/75">
                          Temos um objetivo e não o perdemos de vista.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-2 text-xl font-semibold">Forja</h4>
                        <p className="text-white/75">
                          Somos forjados em desafios reais.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-2 text-xl font-semibold">
                          Resultado
                        </h4>
                        <p className="text-white/75">
                          Nos guiamos por evidência.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-2 text-xl font-semibold">
                          Cadência
                        </h4>
                        <p className="text-white/75">
                          Ninguém está pronto, todos estão em formação.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F4F7FF] py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Reveal direction="left">
              <div className="mb-14 text-center">
                <h2 className="text-3xl font-extrabold uppercase tracking-wide text-[#131936] md:text-4xl">
                  Eventos
                </h2>

                <div className="mx-auto mt-4 h-1 w-44 rounded-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF]" />
              </div>
            </Reveal>

            <div className="mx-auto flex max-w-5xl flex-col gap-16">
              {events.map((event, index) => (
                <Reveal key={event.name} direction="left" delay={index * 140}>
                  <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[220px_1fr]">
                    <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-white shadow-sm md:mx-0">
                      <div className="relative h-32 w-32">
                        <Image
                          src={event.image}
                          alt={`Logo do evento ${event.name}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-[#131936]/10 bg-white p-7 shadow-sm">
                      <h3 className="mb-4 text-2xl font-extrabold text-[#131936]">
                        {event.name}
                      </h3>

                      <p className="leading-relaxed text-slate-700">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal direction="left" delay={240}>
              <div className="mt-14 text-center">
                <Link
                  href="/contato"
                  className="inline-block rounded-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF] px-7 py-3 font-bold text-white shadow-lg shadow-[#0067FF]/20 transition hover:scale-[1.02]"
                >
                  Seja parceiro →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-extrabold md:text-4xl">
                  Empresas parceiras
                </h2>

                <div className="mx-auto mt-4 h-1 w-44 rounded-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF]" />
              </div>
            </Reveal>

            <div className="marquee-wrapper">
              <div className="marquee-track">
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="mx-6 flex h-28 min-w-[240px] items-center justify-center rounded-3xl border border-[#131936]/10 bg-[#F4F7FF] px-8 shadow-sm"
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
          </div>
        </section>

        <section className="bg-[#131936] py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5 text-4xl">
                  ✉
                </div>

                <h2 className="text-3xl font-extrabold md:text-4xl">
                  Preencha com seu email para impulsionar o seu negócio!
                </h2>

                <p className="mt-4 text-white/75">
                  Fique por dentro das novidades da Meta Consultoria e descubra
                  como podemos ajudar sua empresa.
                </p>

                <form className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full rounded-full border border-white/15 bg-white px-5 py-4 text-[#131936] outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF] px-8 py-4 font-semibold text-white transition hover:scale-[1.02]"
                  >
                    Quero assinar
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
          will-change: opacity, transform;
        }

        .reveal-up {
          transform: translateY(36px);
        }

        .reveal-left {
          transform: translateX(-40px);
        }

        .reveal-right {
          transform: translateX(40px);
        }

        .reveal.visible {
          opacity: 1;
          transform: translate(0, 0);
        }

        .marquee-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
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
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}