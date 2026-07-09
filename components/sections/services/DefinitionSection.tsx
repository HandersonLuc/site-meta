interface DefinitionSectionProps {
  title: string;
  paragraphs: string[];
}

export function DefinitionSection({ title, paragraphs }: DefinitionSectionProps) {
  return (
< pagina-servico
    <section className="bg-[#F5F7FA] text-[#090E28] py-16 md:py-20">
=======
    <section className="bg-white text-[#090E28] pt-8">
> main
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl leading-tight font-bold mb-6 border-b-2 border-[#2AD8FF] inline-block pb-1 break-words">
          {title}
        </h2>
        {paragraphs.map((text, i) => (
< pagina-servico
          <p key={i} className="text-gray-700 leading-relaxed mb-4 break-words">
=======
          <p key={i} className="text-gray-700 leading-relaxed mb-4 text-xl">
> main
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
