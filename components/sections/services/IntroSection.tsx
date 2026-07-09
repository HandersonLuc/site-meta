interface ServiceIntroProps {
  title: string;
  paragraphs: string[];
}

export function ServiceIntro({ title, paragraphs }: ServiceIntroProps) {
  return (
< pagina-servico
    <section className="bg-white text-[#090E28] py-16 md:py-20">
=======
    <section className="bg-white text-[#090E28] py-15">
> main
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl leading-tight font-bold mb-8 break-words">
          {title}
        </h2>
        {paragraphs.map((text, i) => (
< pagina-servico
          <p key={i} className="text-gray-700 leading-relaxed mb-6 break-words">
=======
          <p key={i} className="text-gray-700 leading-relaxed mb-6 text-xl">
> main
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
