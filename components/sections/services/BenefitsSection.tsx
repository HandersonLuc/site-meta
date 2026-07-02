interface BenefitsSectionProps {
  title: string;
  items: string[];
}

export function BenefitsSection({ title, items }: BenefitsSectionProps) {
  return (
    <section className="bg-white text-[#090E28] py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#2AD8FF] inline-block pb-1">
          {title}
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 leading-relaxed">
          {items.map((item, i) => (
            <li key={i}>
              <span className="font-semibold">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
