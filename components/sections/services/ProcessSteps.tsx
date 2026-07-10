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
    <section className="bg-white text-[#090E28] py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título e introdução */}
        <h2 className="text-3xl font-bold mb-4 border-b-2 border-[#2AD8FF] inline-block pb-1">
          {title}
        </h2>
        <p className="text-gray-700 mb-16 leading-relaxed max-w-4xl">
          {intro}
        </p>

        {/* Lista de etapas */}
        <div className="space-y-24">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-12 items-start gap-x-12 gap-y-8"
            >
              <div className="col-span-2 flex justify-center">
                <span className="text-[#007BFF] text-4xl font-bold">{step.number}.</span>
              </div>
              <div className="col-span-10">
                <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
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
