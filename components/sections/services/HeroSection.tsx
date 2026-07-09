interface ServiceHeaderProps {
  title: string;
  description: string;
}

export function ServiceHeader({ title, description }: ServiceHeaderProps) {
  return (
    <section className="bg-[#090E28] text-white py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
< pagina-servico
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold mb-4 break-words">
          {title}
        </h1>
        <p className="text-sm text-gray-300 max-w-3xl leading-relaxed">
          {description}
        </p>
        <div className="mt-6 h-[2px] w-28 sm:w-40 bg-gray-400" />
=======
        <h1 className="text-7xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-300 leading-relaxed inline-block border-b-2 border-gray-400 pb-1">
          {description}
        </p>
        <div/>
> main
      </div>
    </section>
  );
}
