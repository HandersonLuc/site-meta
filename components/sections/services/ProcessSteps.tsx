interface Step {
  number: number;
  description: string;
}

interface ServiceStepsProps {
  title: string;
  intro: string;
  steps: Step[];
}

export function ServiceSteps({ title, intro, steps }: ServiceStepsProps) {
  return (
    <section className="bg-white text-[#090E28] py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título e introdução */}
        <h2 className="text-2xl md:text-3xl leading-tight font-bold mb-4 border-b-2 border-[#2AD8FF] inline-block pb-1">
          {title}
        </h2>
        <p className="text-gray-700 mb-10 md:mb-16 leading-relaxed max-w-4xl">
          {intro}
        </p>

        {/* Lista de etapas */}
        <div className="space-y-10 md:space-y-16 lg:space-y-24">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-[auto,1fr] items-start gap-x-4 gap-y-3 sm:gap-x-6 md:grid-cols-12 md:gap-x-12"
            >
              <div className="flex justify-start md:col-span-2 md:justify-center">
                <span className="block text-[#007BFF] text-3xl sm:text-4xl leading-none font-bold">{step.number}.</span>
              </div>
              <div className="min-w-0 md:col-span-10">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl break-words">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
