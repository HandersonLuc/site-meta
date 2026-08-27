interface ServiceHeaderProps {
  title: string;
  description: string;
}

export function ServiceHeader({ title, description }: ServiceHeaderProps) {
  return (
    <section className="bg-[#090E28] text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-gray-300 max-w-3xl leading-relaxed">
          {description}
        </p>
        <div className="mt-6 h-[2px] w-40 bg-gray-400" />
      </div>
    </section>
  );
}

export const HeroSection = ServiceHeader;
