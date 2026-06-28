"use client";

import { Award, Target, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { HeroSection } from "@/components/sections/HeroSection";
import { SectionBadge } from "@/components/common/SectionBadge";
import { Newsletter } from "@/components/sections/Newsletter";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
};

function useInView<T extends HTMLElement>(threshold = 0.18) {
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
    icon: <TrendingUp className="h-7 w-7" />,
    number: 30,
    prefix: "+",
    suffix: "",
    label: "Anos de experiência no mercado",
  },
  {
    icon: <Award className="h-7 w-7" />,
    number: 27,
    prefix: "+",
    suffix: "",
    label: "Premiações em excelência e inovação",
  },
  {
    icon: <Users className="h-7 w-7" />,
    number: 95,
    prefix: "",
    suffix: "%",
    label: "Satisfação dos clientes",
  },
  {
    icon: <Target className="h-7 w-7" />,
    number: 600,
    prefix: "+",
    suffix: "",
    label: "Consultorias realizadas",
  },
];

const events = [
  {
    name: "Interação",
    image: "/eventos/interacao.png",
    description:
      "Com 24 anos de história, o Interação é um dos maiores eventos acadêmicos da UFF. Reúne palestras, minicursos e workshops com profissionais que inspiram e aproximam os estudantes do mercado.",
  },
  {
    name: "SE LIGA!",
    image: "/eventos/se-liga.png",
    description:
      "O SE LIGA! é um evento que promove diversidade, equidade e inclusão, reunindo coletivos, ativistas e empresas em debates transformadores.",
  },
];

const partners = [
  { name: "Visagio", image: "/parceiros/visagio.png" },
  { name: "Live Mode", image: "/parceiros/live-mode.png" },
  { name: "Parceiro 3", image: "/parceiros/parceiro-3.png" },
  { name: "Parceiro 4", image: "/parceiros/parceiro-4.png" },
];

export default function QuemSomosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* 1. HERO SECTION */}
      <HeroSection
        title="Quem somos"
        subtitle="Conheça a Meta Consultoria, a Empresa Júnior de Engenharia e Gestão de Negócios da Universidade Federal Fluminense."
        showArrow
      />

      {/* 2. EMPRESA / HISTÓRIA */}
      <section className="container mx-auto max-w-6xl px-4 py-24 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal direction="left">
            <div>
              <SectionBadge>Empresa</SectionBadge>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Uma trajetória construída com propósito, pessoas e impacto.
              </h2>

              <div className="my-6 h-1 w-32 rounded-full bg-primary" />

              <p className="mb-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                A Meta Consultoria é a Empresa Júnior de Engenharia e Gestão de
                Negócios da Universidade Federal Fluminense, fundada com o
                objetivo de aplicar, na prática, os conhecimentos desenvolvidos
                em sala de aula.
              </p>

              <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Ao longo da nossa história, conectamos estudantes ao mercado por
                meio de projetos reais, desenvolvendo soluções em engenharia,
                gestão, tecnologia e inovação para empresas de diferentes
                segmentos.
              </p>

              <Link
                href="/contato"
                className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Fale conosco
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="relative h-[320px] overflow-hidden rounded-3xl border border-border shadow-sm md:h-[420px]">
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

      {/* 3. ÁREAS */}
      <section className="bg-muted/40 py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <Reveal>
            <SectionBadge>Áreas de atuação</SectionBadge>

            <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Trazemos soluções inteligentes em diferentes frentes.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {areas.map((area, index) => (
              <Reveal key={area.title} direction="right" delay={index * 100}>
                <div className="group relative h-[230px] overflow-hidden rounded-3xl border border-border shadow-sm">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/55 transition group-hover:bg-black/45" />

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

      {/* 4. RESULTADOS */}
      <section className="container mx-auto max-w-6xl px-4 py-24 md:px-8">
        <Reveal>
          <SectionBadge>Resultados</SectionBadge>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Nossa história também é contada pelos resultados que entregamos.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal key={item.label} direction="right" delay={index * 100}>
              <div className="rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {item.icon}
                </div>

                <div className="text-4xl font-bold text-foreground">
                  <CountUp
                    end={item.number}
                    prefix={item.prefix}
                    suffix={item.suffix}
                  />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. VALORES */}
      <section className="bg-primary/10 py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <Reveal direction="left">
            <SectionBadge>Valores</SectionBadge>

            <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-4xl">
              O que guia a nossa forma de trabalhar.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal direction="right">
              <div className="rounded-3xl border border-primary/20 bg-background p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Missão
                </h3>

                <p className="leading-relaxed text-muted-foreground">
                  Fazer a diferença na vida das pessoas, formando profissionais
                  de alta performance que alcançam sua autorrealização por meio
                  da atuação direta em problemas reais e complexos do mercado.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div className="rounded-3xl border border-primary/20 bg-background p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Visão
                </h3>

                <p className="leading-relaxed text-muted-foreground">
                  Tornar-se uma grande forja de talentos, reconhecida como fonte
                  confiável de futuros líderes e solucionadores de desafios de
                  alto valor.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal direction="up" delay={180}>
            <div className="mt-6 rounded-3xl border border-primary/20 bg-background p-8 shadow-sm">
              <h3 className="mb-8 text-2xl font-bold text-foreground">
                Raízes
              </h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                <div>
                  <h4 className="mb-2 font-bold text-foreground">
                    Identidade
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Somos um só, agimos em conjunto.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-bold text-foreground">
                    Propósito
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Temos um objetivo e não o perdemos de vista.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-bold text-foreground">Forja</h4>
                  <p className="text-sm text-muted-foreground">
                    Somos forjados em desafios reais.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-bold text-foreground">
                    Resultado
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Nos guiamos por evidência.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-bold text-foreground">Cadência</h4>
                  <p className="text-sm text-muted-foreground">
                    Ninguém está pronto, todos estão em formação.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. EVENTOS */}
      <section className="container mx-auto max-w-6xl px-4 py-24 md:px-8">
        <Reveal direction="left">
          <SectionBadge>Eventos</SectionBadge>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Também criamos experiências que conectam pessoas, empresas e
            conhecimento.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10">
          {events.map((event, index) => (
            <Reveal key={event.name} direction="left" delay={index * 140}>
              <div className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-border bg-card p-8 shadow-sm md:grid-cols-[180px_1fr]">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-muted md:mx-0">
                  <div className="relative h-28 w-28">
                    <Image
                      src={event.image}
                      alt={`Logo do evento ${event.name}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    {event.name}
                  </h3>

                  <p className="leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="left" delay={240}>
          <div className="mt-12 text-center">
            <Link
              href="/contato"
              className="inline-flex rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Seja parceiro →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* 7. EMPRESAS PARCEIRAS */}
      <section className="bg-muted/40 py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <Reveal>
            <div className="text-center">
              <SectionBadge>Parcerias</SectionBadge>

              <h2 className="mt-6 text-3xl font-bold text-foreground md:text-4xl">
                Empresas parceiras
              </h2>
            </div>
          </Reveal>

          <div className="marquee-wrapper mt-12">
            <div className="marquee-track">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="mx-5 flex h-28 min-w-[240px] items-center justify-center rounded-3xl border border-border bg-background px-8 shadow-sm"
                >
                  <div className="relative h-16 w-[170px]">
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

      {/* 8. NEWSLETTER */}
      <Newsletter />

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