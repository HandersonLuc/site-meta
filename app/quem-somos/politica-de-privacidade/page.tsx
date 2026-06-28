import Link from "next/link";

const dadosColetados = [
  {
    titulo: "Formulários de contato e orçamento",
    texto: "Coletamos informações fornecidas diretamente por você, como nome, e-mail, telefone e mensagem, para responder solicitações e apresentar nossas soluções.",
  },
  {
    titulo: "Dados de navegação",
    texto: "Podemos utilizar cookies e ferramentas de análise para entender, de forma estatística, como os visitantes interagem com nosso site e melhorar a experiência de navegação.",
  },
  {
    titulo: "Dados de projetos",
    texto: "Durante a execução de projetos, podemos tratar informações fornecidas pelo cliente conforme a finalidade prevista em contrato.",
  },
];

const direitos = [
  {
    titulo: "Acesso",
    texto: "Você pode solicitar informações sobre quais dados pessoais possuímos.",
  },
  {
    titulo: "Correção",
    texto: "Você pode solicitar a correção de dados incompletos, inexatos ou desatualizados.",
  },
  {
    titulo: "Exclusão",
    texto: "Você pode solicitar a exclusão de dados pessoais, respeitando obrigações legais e contratuais aplicáveis.",
  },
];

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#F4F7FF] text-[#131936]">
      <section className="relative overflow-hidden bg-[#131936] text-white">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#2AD8FF] to-[#0067FF]" />
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#22C0FF]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#0067FF]/20 blur-3xl" />

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white/80">
              LGPD e proteção de dados
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight md:text-6xl">
              Política de Privacidade
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
              Na Meta Consultoria, tratamos dados pessoais com seriedade,
              transparência e responsabilidade, respeitando a Lei Geral de
              Proteção de Dados.
            </p>
          </div>
        </div>
      </section>

      <main>
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-[1.75rem] border border-[#131936]/10 bg-white p-6 shadow-sm">
                <h2 className="mb-5 text-lg font-extrabold">Nesta página</h2>

                <nav className="flex flex-col gap-3 text-sm text-slate-600">
                  <a href="#compromisso" className="transition hover:text-[#0067FF]">
                    Nosso compromisso
                  </a>

                  <a href="#dados" className="transition hover:text-[#0067FF]">
                    Dados coletados
                  </a>

                  <a href="#finalidade" className="transition hover:text-[#0067FF]">
                    Finalidade do uso
                  </a>

                  <a href="#direitos" className="transition hover:text-[#0067FF]">
                    Direitos do titular
                  </a>

                  <a href="#seguranca" className="transition hover:text-[#0067FF]">
                    Segurança dos dados
                  </a>

                  <a href="#atualizacoes" className="transition hover:text-[#0067FF]">
                    Atualizações
                  </a>

                  <a href="#contato" className="transition hover:text-[#0067FF]">
                    Contato
                  </a>
                </nav>
              </div>
            </aside>

            <div className="flex flex-col gap-8">
              <section
                id="compromisso"
                className="rounded-[1.75rem] border border-[#131936]/10 bg-white p-8 shadow-sm"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0067FF]">
                  Nosso compromisso
                </p>

                <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-4xl">
                  Privacidade, transparência e responsabilidade.
                </h2>

                <p className="mb-4 leading-relaxed text-slate-700">
                  A Meta Consultoria, empresa júnior de Engenharia e Gestão de
                  Negócios da Universidade Federal Fluminense, reconhece a
                  importância da proteção dos dados pessoais de seus clientes,
                  parceiros, visitantes e demais pessoas que interagem conosco.
                </p>

                <p className="leading-relaxed text-slate-700">
                  Esta política descreve como coletamos, utilizamos, armazenamos
                  e protegemos informações pessoais ao longo da navegação em
                  nosso site ou durante a contratação e execução de nossos
                  serviços de consultoria.
                </p>
              </section>

              <section
                id="dados"
                className="rounded-[1.75rem] border border-[#131936]/10 bg-white p-8 shadow-sm"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0067FF]">
                  Dados pessoais
                </p>

                <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-4xl">
                  Quais dados coletamos?
                </h2>

                <p className="mb-8 leading-relaxed text-slate-700">
                  A coleta de dados pode ocorrer por meio da navegação no site,
                  do preenchimento de formulários ou da execução dos projetos
                  contratados.
                </p>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {dadosColetados.map((item) => (
                    <div
                      key={item.titulo}
                      className="rounded-3xl border border-[#131936]/10 bg-[#F4F7FF] p-6"
                    >
                      <h3 className="mb-3 text-xl font-bold text-[#131936]">
                        {item.titulo}
                      </h3>

                      <p className="text-sm leading-relaxed text-slate-700">
                        {item.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="finalidade"
                className="rounded-[1.75rem] border border-[#131936]/10 bg-white p-8 shadow-sm"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0067FF]">
                  Finalidade
                </p>

                <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-4xl">
                  Para que utilizamos os dados?
                </h2>

                <div className="space-y-4 leading-relaxed text-slate-700">
                  <p>
                    Utilizamos os dados pessoais para responder solicitações de
                    contato, elaborar propostas, executar projetos contratados,
                    melhorar a experiência no site e aprimorar nossas
                    metodologias internas.
                  </p>

                  <p>
                    O tratamento de dados relacionados a projetos ocorre de
                    acordo com a finalidade prevista em contrato e dentro dos
                    limites necessários para a entrega do serviço contratado.
                  </p>

                  <p>
                    Sempre que possível, dados utilizados para análises internas
                    são tratados de forma estatística ou anonimizada, com o
                    objetivo de melhoria contínua dos nossos processos.
                  </p>
                </div>
              </section>

              <section
                id="direitos"
                className="rounded-[1.75rem] border border-[#131936]/10 bg-white p-8 shadow-sm"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0067FF]">
                  Seus direitos
                </p>

                <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-4xl">
                  Direitos como titular dos dados.
                </h2>

                <p className="mb-8 leading-relaxed text-slate-700">
                  Conforme a LGPD, você possui direitos sobre seus dados
                  pessoais e pode entrar em contato conosco para exercê-los.
                </p>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {direitos.map((item, index) => (
                    <div
                      key={item.titulo}
                      className="rounded-3xl border border-[#131936]/10 bg-[#F4F7FF] p-6"
                    >
                      <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-[#2AD8FF] to-[#0067FF] font-bold text-white">
                        {index + 1}
                      </span>

                      <h3 className="mb-3 text-xl font-bold text-[#131936]">
                        {item.titulo}
                      </h3>

                      <p className="text-sm leading-relaxed text-slate-700">
                        {item.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="seguranca"
                className="rounded-[1.75rem] border border-[#131936]/10 bg-[#131936] p-8 text-white shadow-sm"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#22C0FF]">
                  Segurança
                </p>

                <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-4xl">
                  Segurança e compartilhamento de dados.
                </h2>

                <div className="space-y-4 leading-relaxed text-white/75">
                  <p>
                    A Meta Consultoria não vende, não aluga e não cede dados
                    pessoais para fins de marketing.
                  </p>

                  <p>
                    O compartilhamento de informações ocorre apenas quando
                    necessário para a execução do serviço contratado, conforme
                    alinhado em contrato, ou para o uso de ferramentas essenciais
                    à nossa operação.
                  </p>

                  <p>
                    Podemos utilizar plataformas reconhecidas de gestão,
                    comunicação e armazenamento em nuvem, sempre buscando
                    proteger as informações tratadas.
                  </p>
                </div>
              </section>

              <section
                id="atualizacoes"
                className="rounded-[1.75rem] border border-[#131936]/10 bg-white p-8 shadow-sm"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0067FF]">
                  Atualizações
                </p>

                <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-4xl">
                  Atualizações desta política.
                </h2>

                <p className="leading-relaxed text-slate-700">
                  Esta política pode ser atualizada periodicamente para refletir
                  melhorias em nossos processos, mudanças operacionais ou
                  adequações legais. Recomendamos que você visite esta página
                  periodicamente para se manter informado.
                </p>
              </section>

              <section
                id="contato"
                className="rounded-[1.75rem] bg-gradient-to-r from-[#2AD8FF] to-[#0067FF] p-8 text-white shadow-sm"
              >
                <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-4xl">
                  Dúvidas sobre privacidade?
                </h2>

                <p className="mb-7 max-w-3xl leading-relaxed text-white/90">
                  Para solicitações relacionadas aos seus dados pessoais,
                  dúvidas sobre esta política ou informações sobre como tratamos
                  dados, entre em contato pelo nosso canal oficial.
                </p>

                <a
                  href="mailto:contato@metaconsultoria.com"
                  className="inline-flex rounded-full bg-white px-7 py-3 font-bold text-[#131936] transition hover:opacity-90"
                >
                  contato@metaconsultoria.com
                </a>
              </section>

              <div className="pt-4">
                <Link
                  href="/quem-somos"
                  className="inline-flex text-sm font-semibold text-[#0067FF] transition hover:opacity-80"
                >
                  ← Voltar para Quem Somos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}