import React from "react";

export default function PoliticaPrivacidade() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <section className="bg-black text-white py-16 text-start">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-300 mb-3 uppercase tracking-widest">
            LGPD e proteção de dados
          </p>

          <h1 className="text-5xl font-bold">Política de Privacidade</h1>

          <p className="mt-6 max-w-3xl text-gray-300 leading-relaxed">
            Na Meta Consultoria, tratamos dados pessoais com seriedade,
            transparência e responsabilidade, respeitando a Lei Geral de
            Proteção de Dados.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-8 border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
              <h2 className="font-bold text-lg mb-4">Nesta página</h2>

              <nav className="flex flex-col gap-3 text-sm text-gray-600">
                <a href="#compromisso" className="hover:text-black transition">
                  Nosso compromisso
                </a>
                <a href="#dados" className="hover:text-black transition">
                  Dados coletados
                </a>
                <a href="#direitos" className="hover:text-black transition">
                  Direitos do titular
                </a>
                <a href="#seguranca" className="hover:text-black transition">
                  Segurança dos dados
                </a>
                <a href="#atualizacoes" className="hover:text-black transition">
                  Atualizações
                </a>
                <a href="#contato" className="hover:text-black transition">
                  Fale conosco
                </a>
              </nav>
            </div>
          </aside>

          <article className="flex flex-col gap-8">
            <section
              id="compromisso"
              className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white"
            >
              <h2 className="text-3xl font-bold mb-5">
                Nosso compromisso com a sua privacidade
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Na Meta Consultoria, empresa júnior de Engenharia e Gestão de
                Negócios da UFF, seu projeto e seus dados são tratados com
                máxima seriedade, transparência e responsabilidade.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Entendemos a importância da Lei Geral de Proteção de Dados
                Pessoais, Lei Federal nº 13.709/2018, e estamos comprometidos
                em proteger as informações confiadas a nós. Esta política
                descreve como coletamos, utilizamos e protegemos seus dados
                pessoais ao navegar em nosso site ou ao contratar nossos
                serviços de consultoria.
              </p>
            </section>

            <section
              id="dados"
              className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white"
            >
              <h2 className="text-3xl font-bold mb-5">
                Quais dados coletamos e por quê?
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                Coletamos dados por duas vias principais: navegação em nosso
                site e execução de projetos contratados.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">
                  1. Dados de navegação
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Quando você visita nosso site, podemos coletar informações
                  para melhorar sua experiência, entender o uso das páginas e
                  iniciar nosso relacionamento comercial.
                </p>

                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-3">
                  <li>
                    <strong>Formulários de contato e orçamento:</strong>{" "}
                    coletamos informações fornecidas diretamente por você, como
                    nome, e-mail, telefone e mensagem, para responder
                    solicitações e apresentar nossas soluções em engenharia e
                    gestão.
                  </li>

                  <li>
                    <strong>Cookies e análise de navegação:</strong>{" "}
                    utilizamos cookies básicos para o funcionamento do site e
                    ferramentas de análise para entender, de forma estatística,
                    como os visitantes interagem com nosso conteúdo.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  2. Dados de projetos
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  A execução dos nossos serviços de consultoria pode exigir o
                  tratamento de dados fornecidos pelo cliente, conforme
                  estabelecido em contrato.
                </p>

                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-3">
                  <li>
                    <strong>Autorização e finalidade:</strong> o tratamento dos
                    dados ocorre após autorização formalizada em contrato e
                    exclusivamente para cumprir a finalidade do projeto
                    contratado.
                  </li>

                  <li>
                    <strong>Uso para análises internas:</strong> quando
                    aplicável, dados de projetos podem ser utilizados de forma
                    estatística e, sempre que possível, anonimizada, para
                    aprimorar metodologias e melhorar continuamente nossos
                    serviços.
                  </li>
                </ul>
              </div>
            </section>

            <section
              id="direitos"
              className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white"
            >
              <h2 className="text-3xl font-bold mb-5">
                Seus direitos como titular dos dados
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                A Meta Consultoria assegura que você tenha controle sobre seus
                dados pessoais. De acordo com a LGPD, você pode solicitar:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-lg mb-2">Acesso</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Saber quais dados pessoais possuímos sobre você.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-lg mb-2">Alteração</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Corrigir dados incompletos, inexatos ou desatualizados.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-lg mb-2">Exclusão</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Solicitar a exclusão dos dados, respeitando obrigações
                    legais e contratuais aplicáveis.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Para exercer seus direitos, entre em contato com nosso canal
                oficial de privacidade.
              </p>
            </section>

            <section
              id="seguranca"
              className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white"
            >
              <h2 className="text-3xl font-bold mb-5">
                Segurança e compartilhamento de dados
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                A Meta Consultoria não vende, não aluga e não cede seus dados
                pessoais para fins de marketing.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                O compartilhamento de informações ocorre apenas quando
                estritamente necessário para a execução do serviço contratado,
                conforme alinhado em contrato, ou para utilização de ferramentas
                essenciais para nossa operação.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Para garantir eficiência e segurança, podemos utilizar
                plataformas reconhecidas de gestão, comunicação e armazenamento
                em nuvem, sempre buscando proteger as informações tratadas e
                respeitar os padrões de segurança aplicáveis.
              </p>
            </section>

            <section
              id="atualizacoes"
              className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white"
            >
              <h2 className="text-3xl font-bold mb-5">
                Atualizações desta política
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Esta política pode ser atualizada periodicamente para refletir
                melhorias em nossos processos, mudanças operacionais ou
                adequações legais. Recomendamos que você visite esta página
                periodicamente para se manter informado sobre como protegemos
                seus dados.
              </p>
            </section>

            <section
              id="contato"
              className="bg-black text-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold mb-5">
                Dúvidas? Fale conosco
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Se você tem qualquer dúvida sobre esta política ou sobre como a
                Meta Consultoria trata seus dados pessoais, entre em contato
                pelo e-mail:
              </p>

              <a
                href="mailto:contato@metaconsultoria.com"
                className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                contato@metaconsultoria.com
              </a>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}