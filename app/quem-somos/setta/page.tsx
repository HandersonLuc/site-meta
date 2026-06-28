import Link from "next/link";

const etapas = [
  {
    numero: "01",
    titulo: "Inscrição online",
    texto: "Preencha nosso formulário e envie suas informações para que possamos dar início à sua jornada na Meta Consultoria.",
  },
  {
    numero: "02",
    titulo: "Teste online",
    texto: "Queremos entender o quanto você está motivado, engajado e alinhado com a proposta da nossa equipe.",
  },
  {
    numero: "03",
    titulo: "Dinâmica em grupo",
    texto: "Etapa voltada à avaliação de habilidades interpessoais, comunicação, colaboração e trabalho em equipe.",
  },
  {
    numero: "04",
    titulo: "Entrevista individual",
    texto: "Momento para conhecermos melhor sua trajetória, motivações, expectativas e alinhamento com a Meta Consultoria.",
  },
  {
    numero: "05",
    titulo: "Semana desafio",
    texto: "Uma experiência prática e dinâmica, com atividades que simulam desafios reais e desenvolvem competências importantes.",
  },
  {
    numero: "06",
    titulo: "Trainee",
    texto: "Fase de maior desenvolvimento, em que você será preparado para se tornar membro efetivo e atuar em projetos reais.",
  },
];

const beneficios = [
  "Participação em projetos reais de consultoria para empresas",
  "Desenvolvimento de habilidades técnicas e comportamentais",
  "Capacitações e treinamentos exclusivos para membros",
  "Networking com empresas, consultores e ex-membros",
  "Experiência prática que complementa sua formação acadêmica",
];

export default function ProcessoSeletivoSettaPage() {
  return (
    <div className="min-h-screen bg-[#F4F7FF] text-[#131936]">
      <section className="relative overflow-hidden bg-[#131936] text-white">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF]" />
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#22C0FF]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#0067FF]/20 blur-3xl" />

        <div className="relative container mx-auto px-4 py-28 md:py-36">
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white/80">
              Processo Seletivo Meta Consultoria
            </span>

            <h1 className="mt-8 text-5xl font-extrabold tracking-[0.18em] md:text-7xl">
              S.E.T.T.A
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-relaxed text-white/80 md:text-xl">
              Junte-se à consultoria{" "}
              <span className="text-[#22C0FF]">líder em resultados</span> e
              transforme seu futuro profissional ainda durante a graduação.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#inscricao"
                className="rounded-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF] px-8 py-3 font-bold text-white shadow-lg shadow-[#0067FF]/20 transition hover:scale-[1.02]"
              >
                Inscrever-se
              </Link>

              <Link
                href="#etapas"
                className="rounded-full border border-white/25 px-8 py-3 font-bold text-white transition hover:bg-white hover:text-[#131936]"
              >
                Ver etapas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0067FF]">
                Sua oportunidade
              </p>

              <h2 className="mb-6 text-3xl font-extrabold leading-tight md:text-5xl">
                Atue em consultoria empresarial desde a graduação.
              </h2>

              <div className="mb-6 h-1 w-40 rounded-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF]" />

              <p className="mb-5 leading-relaxed text-slate-700">
                O processo seletivo da Meta Consultoria é a porta de entrada
                para estudantes da Universidade Federal Fluminense que desejam
                viver uma experiência prática em consultoria empresarial ainda
                durante a graduação.
              </p>

              <p className="leading-relaxed text-slate-700">
                Por meio de projetos reais, capacitações e vivência em equipe, o
                SETTA viabiliza oportunidades concretas de desenvolvimento
                profissional e pessoal, preparando futuros consultores para os
                desafios do mercado.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-2xl font-extrabold">
                Por que participar?
              </h3>

              <ul className="space-y-4">
                {beneficios.map((beneficio) => (
                  <li key={beneficio} className="flex gap-3 text-slate-700">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#22C0FF]" />
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="etapas" className="bg-[#131936] py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-14 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#22C0FF]">
                Jornada SETTA
              </p>

              <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
                Etapas do processo seletivo Meta Consultoria
              </h2>

              <p className="mt-5 leading-relaxed text-white/70">
                Nosso processo seletivo é estruturado para identificar
                estudantes alinhados com os valores da Meta e com potencial para
                contribuir com nossos projetos e clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {etapas.map((etapa) => (
                <div
                  key={etapa.numero}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <span className="text-sm font-extrabold text-[#22C0FF]">
                    {etapa.numero}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">{etapa.titulo}</h3>

                  <p className="mt-4 leading-relaxed text-white/70">
                    {etapa.texto}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-[#22C0FF]">
              *Dinâmica em grupo apenas para os cursos de Engenharia,
              Arquitetura e Urbanismo.
            </p>
          </div>
        </section>

        <section className="bg-[#F4F7FF] py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0067FF]">
                  Participação
                </p>

                <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
                  Quem pode participar?
                </h2>

                <div className="mt-5 h-1 w-40 rounded-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF]" />
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <p className="leading-relaxed text-slate-700">
                  Estudantes da Universidade Federal Fluminense dos cursos de{" "}
                  <strong>
                    Engenharia de Produção, Civil, Mecânica, Elétrica,
                    Telecomunicações, Arquitetura e Urbanismo, Ciências da
                    Computação e Sistemas de Informação
                  </strong>{" "}
                  que estejam interessados em adquirir experiência prática em
                  consultoria empresarial e desenvolver habilidades essenciais
                  para o mercado de trabalho.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="inscricao"
          className="bg-white py-16 md:py-20"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0067FF]">
                Faça parte da Meta
              </p>

              <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
                Inscreva-se no processo seletivo Meta Consultoria
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-700">
                Se você está pronto para assumir novos desafios e viver uma
                experiência única, inscreva-se agora no nosso processo seletivo
                e venha transformar sua trajetória com a Meta Consultoria.
              </p>

              <Link
                href="/contato"
                className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF] px-9 py-4 font-bold text-white shadow-lg shadow-[#0067FF]/20 transition hover:scale-[1.02]"
              >
                Inscrever-se →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}