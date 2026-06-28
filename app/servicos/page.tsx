import { Session } from "@/components/ui/section"; // novo componente reutilizável
import Link from "next/link";

export default function todos_serv(){
    return(
        <div className="flex flex-col min-h-screen relative overflow-hidden">
          <section className="relative bg-linear-to-b from-[#0D3A5C] to-[#090E28] text-white py-32 text-start">
            <div className="container mx-auto px-4">
              <div className="inline-block bg-white/10 backdrop-blur-md rounded-md px-4 py-1 text-sm mb-4">
                Soluções para você e para o seu negócio
              </div>
              <h1 className="text-5xl font-bold">Serviços</h1>
            </div>

            {/* Ícone de seta para baixo */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <span className="text-white text-2xl animate-bounce">↓</span>
            </div>
          </section>
          <section className="bg-white text-[#090E28] py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#007BFF] inline-block">
                Áreas de atuação
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {[
                  { name: "Gestão de Negócios", img: "/images/gestao.jpg", href: "/servicos/gnc" },
                  { name: "Otimização de Processos", img: "/images/otimizacao.jpg", href: "/servicos/ot_pr" },
                  { name: "Planejamento Financeiro", img: "/images/financeiro.jpg", href: "/servicos/plan_fin" },
                  { name: "Construção e Energia", img: "/images/construcao.jpg", href: "/servicos/constr_energ" },
                  { name: "Desenvolvimento de Máquinas", img: "/images/maquinas.jpg", href: "/servicos/des_maq" },
                  { name: "Tecnologia", img: "/images/tecnologia.jpg", href: "/servicos/tecnologia" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                      <p className="text-white text-lg font-semibold p-4">{item.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <div className="bg-[#090E28] text-white text-start">
            <Session
                title="Análise de Mercado"
                description="
                Entenda seu público e valide ideias com base em dados. Identificamos oportunidades, mapeamos concorrentes e fornecemos insights estratégicos para decisões mais assertivas no seu nicho de atuação."
                href="/servicos/gnc/analise-de-mercado"
            />
            <Session
                title="Posicionamento de Marca"
                description="
                Fortaleça sua presença online e conquiste relevância no ambiente digital. Definimos estratégias personalizadas para destacar sua marca, atrair o público certo e gerar autoridade no seu mercado."                
                href="/servicos/gnc/posicionamento-de-marca"
            />
            <Session
                title="Planejamento Estratégico"
                description="Defina o rumo do seu negócio com clareza e foco. Analisamos o ambiente interno e externo da sua organização para identificar forças, fraquezas e oportunidades, traçando metas e ações alinhadas à sua visão de futuro."
                href="/servicos/gnc/planejamento-estrategico"
            />
            </div>
            <Session
                title="Mapeamento de processos"
                description="
                    Visualize e entenda como sua empresa funciona. Identificamos, organizamos e analisamos cada etapa dos seus processos para eliminar gargalos, padronizar operações e aumentar a eficiência do seu negócio
                    "
                href="/servicos/ot_pr/mapeamento-de-processos"
            />
            <Session
                title="Pesquisa de clima"
                description="
                    Organize sua empresa para crescer com solidez. Reestruturamos funções, fluxos e responsabilidades para aumentar a eficiência operacional, melhorar a comunicação e garantir uma base sólida para a tomada de decisões.                "
                href="/servicos/ot_pr/pesquisa-de-clima"
            />
            <Session
                title="Estruturação interna"
                description="Organize sua empresa para crescer com solidez. Reestruturamos funções, fluxos e responsabilidades para aumentar a eficiência operacional, melhorar a comunicação e garantir uma base sólida para a tomada de decisões."
                href="/servicos/ot_pr/estruturacao-interna"
            />
            <Session
                title="Gestão de Estoque"
                description="
                    Gerencie os recursos necessários para o funcionamento de uma organização. Compreendemos o fluxo de produtos no seu estoque e como minimizar situações que possam deixar de atender às demandas da organização.
                "
                href="/servicos/ot_pr/gestao-de-estoque"
            />
            <Session
                title="Estudo de Tempo"
                description="
                Solucione desafios na organização física do espaço de trabalho. Buscamos definir, ou redefinir, o arranjo físico de uma instalação, tendo por objetivo ter um espaço mais eficiente.
                "                
                href="/servicos/ot_pr/estudo-de-tempo"
            />
            <Session
                title="Simulação de Processos"
                description="Reproduza virtualmente o funcionamento de atividades, fluxos de trabalho ou operações internas de uma empresa."
                href="/servicos/ot_pr/simulacao-de-processos"
            />
            <div className="bg-[#090E28] text-white text-start">
            <Session
              title="FP&A"
              description="Transforme dados financeiros em decisões estratégicas. Estruturamos projeções, análises de desempenho e cenários futuros para orientar o crescimento sustentável da sua empresa com foco em rentabilidade e eficiência."
              href="/servicos/plan_fin/fp-a"
            />
            <Session
               title="Estudo de Viabilidade"
                description="Descubra se sua ideia é financeiramente viável antes de investir. Analisamos custos, receitas, riscos e retorno esperado para embasar decisões com segurança e maximizar as chances de sucesso do seu projeto."
                href="/servicos/plan_fin/estudo-de-viabilidade"
            />
            <Session
                title="Precificação de Produtos"
                description="Defina o preço certo para o seu produto e maximize seus resultados. Analisamos custos, mercado, concorrência e percepção de valor para estruturar um preço estratégico que garanta competitividade, rentabilidade e posicionamento adequado."
                href="/servicos/plan_fin/precificacao-de-produtos"
            />
            </div>
            <Session
              title="Projeto Arquitetônico"
              description="Transforme ideias em espaços funcionais e esteticamente marcantes. Desenvolvemos projetos personalizados que equilibram técnica, criatividade e viabilidade, atendendo às necessidades do cliente e às normas urbanísticas."
              href="/servicos/constr_energ/projeto-arquitetonico"
            />
            <Session
              title="Projeto de Instalação Hidrossanitárias"
              description="Desenvolvemos soluções completas em instalações hidrossanitárias, garantindo o correto dimensionamento de água fria, água quente, esgoto e drenagem. Nossos projetos seguem normas técnicas e priorizam eficiência, sustentabilidade e economia, assegurando conforto, segurança e durabilidade para sua obra."
              href="/servicos/constr_energ/instalacoes-hidrossanitarias"
            />
            <Session
              title="Regularização de Imovéis"
              description="Garanta a conformidade legal do seu patrimônio com agilidade e precisão. Atuamos na análise urbanística e na elaboração de projetos técnicos para aprovação junto aos órgãos competentes. Essencial para evitar multas, valorizar o bem e permitir vendas ou comercialização dentro da lei."
              href="/servicos/constr_energ/regularizacao-de-imoveis"
            />
            <Session
              title="Orçamento de Obras"
              description="Elaboramos um orçamento de obras analítico, que inclui materiais, mão de obra, prazos e etapas do projeto. Nosso objetivo é garantir previsibilidade financeira, evitar surpresas e otimizar recursos, permitindo que você construa com segurança, eficiência e economia."
              href="/servicos/constr_energ/orcamento-de-obras"
            />
            <Session
              title="Vistoria Hidrossanitária Predial"
              description="Elimine o desconforto e os riscos causados por falhas nos sistemas de água e esgoto. Realizamos inspeções técnicas especializadas para identificar vazamentos, mau cheiro e obstruções, garantindo a saúde da edificação e o bem-estar dos usuários, além de evitar prejuízos com manutenções de emergência."
              href="/servicos/constr_energ/vistoria-hidrossanitaria-predial"
            />
            <Session
                title="Estudo de luminotécnica"
                description="Realizamos projetos luminotécnicos que consideram normas técnicas, eficiência energética e estética do ambiente. Nosso objetivo é garantir a iluminação ideal para cada espaço, unindo conforto visual, segurança e valorização arquitetônica, além de reduzir custos de energia com soluções sustentáveis."
                href="/servicos/constr_energ/estudo-de-luminotecnica"
            />
            <Session
              title="Instalações Elétricas"
              description="Desenvolvemos projetos elétricos completos para obras residenciais, comerciais e industriais, garantindo segurança, conformidade com normas técnicas e eficiência energética. Nossas soluções incluem dimensionamento de circuitos, distribuição de cargas e sistemas de proteção, assegurando confiabilidade, economia e durabilidade para sua instalação."
              href="/servicos/constr_energ/instalacoes-eletricas"
            />
            <Session
              title="Desenho Mecânico"
              description="Realizamos desenhos mecânicos técnicos completos, seguindo normas e padrões de engenharia, para garantir clareza no projeto, confiabilidade na fabricação e redução de falhas no processo produtivo."
              href="/servicos/des_maq/desenho-mecanico"
            />
            <Session
              title="Estudo de materiais"
              description="Escolha os materiais certos para o seu projeto com base em desempenho, custo e aplicação. Analisamos propriedades técnicas, resistência e viabilidade para garantir eficiência, durabilidade e qualidade na sua solução."
              href="/servicos/des_maq/estudo-de-materiais"
            />
            <Session
              title="Prototipagem 3D"
              description="Dê vida às suas ideias com agilidade e precisão. Desenvolvemos protótipos físicos em impressão 3D, ideais para validação de projetos, testes funcionais e visualização de produtos antes da produção final."
              href="/servicos/des_maq/prototipagem-3d"
            />
            <Session
              title="Analise Estrutural"
              description="Avaliamos cargas, materiais e condições de uso para verificar a resistência e estabilidade de estruturas. Nossa análise identifica riscos, otimiza recursos e assegura conformidade com normas técnicas, oferecendo decisões seguras e projetos mais duradouros."
              href="/servicos/des_maq/analise-estrutural"
            />
            <Session
              title="Manuais Técnicos"
              description="Profissionalize a documentação do seu equipamento com manuais de operação, manutenção e catálogos de peças. Desenvolvemos documentos técnicos em conformidade com as normas vigentes para garantir a segurança do usuário, a eficiência operacional e a longevidade da sua solução."
              href="/servicos/des_maq/manuais-tecnicos"
            />
            <div className="bg-[#090E28] text-white text-start">
            <Session
                title="Desenvolvimento de Site"
                description="Construa sua presença digital com profissionalismo e performance. Criamos sites responsivos, rápidos e alinhados à identidade da sua marca, focando em usabilidade, conversão e otimização para mecanismos de busca (SEO)."
                href="/servicos/tecnologia/desenvolvimento-de-site"
            />
            <Session
                title="Desenvolvimento de Aplicativos"
                description="Criamos aplicativos personalizados para Android e iOS, focados em usabilidade, performance e inovação. Nosso processo envolve análise de requisitos, design intuitivo e programação robusta, garantindo soluções digitais que aumentam a eficiência, melhoram a experiência do usuário e fortalecem a presença da sua marca no mercado."
                href="/servicos/tecnologia/desenvolvimento-de-aplicativos"
            />
            <Session
                title="Automação de Processos"
                description="Desenvolvemos soluções de automação de processos que integram tecnologia e gestão para eliminar tarefas repetitivas, reduzir erros e aumentar a produtividade. Nossos projetos mapeiam fluxos de trabalho, identificam gargalos e aplicam ferramentas digitais que otimizam tempo e recursos, garantindo mais agilidade e competitividade para sua empresa."
                href="/servicos/tecnologia/automacao-de-processos"
            />
            <Session
                title="Otimização de Sites (SEO)"
                description="Transforme seu site em uma poderosa ferramenta de atração e vendas. Aplicamos estratégias avançadas de SEO para colocar sua empresa no topo dos mecanismos de busca, aumentando o tráfego orgânico, a autoridade da marca e a geração constante de leads qualificados."
                href="/servicos/tecnologia/otimizacao-de-sites-seo"
            />
            </div>
        </div>
    )
}
