interface ServiceHeaderProps {
  title: string;
  description: string;
}

export function ServiceHeader({ title, description }: ServiceHeaderProps) {
  return (
    <section className="bg-[#090E28] text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-300 leading-relaxed inline-block border-b-2 border-gray-400 pb-1">
          {description}
        </p>
        <div/>
      </div>
    </section>
  );
}
