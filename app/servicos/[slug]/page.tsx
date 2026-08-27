import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { coordinations } from "@/constants/services";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { Newsletter } from "@/components/sections/Newsletter";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// 🔹 Função auxiliar para encontrar serviço pelo slug
function findService(slug: string) {
  for (const coord of coordinations) {
    const service = coord.services.find((s) => s.slug === slug || s.slug.endsWith(`/${slug}`));
    if (service) return service; // 🔹 retorna só o serviço
  }
  return null;
}

// 🔹 Metadados dinâmicos para SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) {
    return {
      title: "Serviço não encontrado | Meta Consultoria",
      description: "O serviço solicitado não foi encontrado.",
    };
  }

  return {
    title: `${service.title} | Meta Consultoria`,
    description: service.description.slice(0, 150),
    openGraph: {
      title: `${service.title} | Meta Consultoria`,
      description: service.description,
      url: `https://metaconsultoria.com/servicos/${service.slug}`,
      siteName: "Meta Consultoria",
      images: [
        {
          url: service.imageSrc ?? "/media/meta/meta-logo.webp",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "pt_BR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Meta Consultoria`,
      description: service.description,
      images: [service.imageSrc ?? "/media/meta/meta-logo.webp"],
    },
  };
}

// 🔹 Pré-renderização de todas as páginas de serviço
export async function generateStaticParams() {
  return coordinations.flatMap((coord) =>
    coord.services.map((service) => ({
      slug: service.slug.split("/").pop() ?? service.slug,
    }))
  );
}

export default async function ServicoDetalhePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection title={service.title} subtitle={service.heroSubtitle ?? ""} />

      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-border">
            <Image
              src={service.imageSrc ?? "/media/meta/meta-logo.webp"}
              alt={`Imagem ilustrativa de ${service.title}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{service.title}</h2>
            <p className="text-xl text-primary font-medium">{service.introSubtitle}</p>
            <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
              {service.introDescription}
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg">
                <Link href="/contato">Diagnóstico Gratuito</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            <div className="space-y-12">
              <h2 className="text-3xl md:text-4xl font-bold">Nossa Metodologia</h2>
              <ul className="space-y-6">
                {service.methodology?.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <p className="text-muted-foreground text-lg leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sticky top-28">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center mb-16 text-center space-y-4">
            <div className="bg-primary-foreground/10 px-8 py-2 rounded-full text-sm font-medium uppercase tracking-widest">
              Por que nos escolher
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Nossos Diferenciais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.differentials?.map((diff, index) => (
              <div
                key={index}
                className="bg-background text-foreground rounded-3xl p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300 shadow-lg"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <Trophy className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl">{diff.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
