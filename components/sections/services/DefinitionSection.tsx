interface DefinitionSectionProps {
  title: string;
  paragraphs: string[];
}

export function DefinitionSection({ title, paragraphs }: DefinitionSectionProps) {
  return (
    <section className="bg-transparent text-[#090E28] pt-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-[#2AD8FF] inline-block pb-1">
          {title}
        </h2>
        {paragraphs.map((text, i) => (
          <p key={i} className="text-gray-700 leading-relaxed mb-4 text-xl">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
