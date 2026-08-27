interface CallToActionSectionProps {
  title: string;
  paragraphs: string[];
}

export function CallToActionSection({ title, paragraphs }: CallToActionSectionProps) {
  return (
    <section className="bg-white text-[#090E28] py-20">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#2AD8FF] inline-block pb-1">
          {title}
        </h2>
        {paragraphs.map((text, i) => (
          <p key={i} className="text-lg text-gray-700 leading-relaxed mb-4">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

export const CalltoActionSection = CallToActionSection;
