interface DefinitionSectionProps {
  title: string;
  paragraphs: string[];
  inline?: boolean;
}

export function DefinitionSection({ title, paragraphs, inline = false }: DefinitionSectionProps) {
  const sectionClassName = inline
    ? "text-[#090E28]"
    : "bg-[#F5F7FA] text-[#090E28] py-20";
  const contentClassName = inline
    ? "w-full"
    : "container mx-auto px-4 max-w-6xl";
  const titleClassName = inline
    ? "text-2xl md:text-3xl font-bold mb-8 border-b-2 border-[#2AD8FF] block pb-3"
    : "text-2xl font-bold mb-6 border-b-2 border-[#2AD8FF] inline-block pb-1";
  const paragraphClassName = inline
    ? "text-lg md:text-xl text-gray-700 leading-loose mb-7"
    : "text-gray-700 leading-relaxed mb-4";

  return (
    <section className={sectionClassName}>
      <div className={contentClassName}>
        <h2 className={titleClassName}>
          {title}
        </h2>
        {paragraphs.map((text, i) => (
          <p key={i} className={paragraphClassName}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
