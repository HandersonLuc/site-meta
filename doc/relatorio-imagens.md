# Relatório de imagens

## Escopo e metodologia

- Foram analisadas 80 imagens encontradas em `public/media`, incluindo a pasta `public/media/midias site` e o arquivo solto `public/media/imagem-servico-1.webp`.
- O arquivo `public/media/fundo-servico-1.mp4` não entrou na contagem porque é vídeo, não imagem.
- A classificação cruzou nome do arquivo, dimensões, conteúdo visual das miniaturas e referências existentes em TSX/Markdown.
- Nenhum arquivo foi movido, deletado ou renomeado nesta etapa. Nenhum caminho de código foi atualizado.
- Observação de estado: o Git já mostra `public/media/midias site/banner-analise-mercado(1).webp` como deletado antes desta análise; como o arquivo não está no filesystem, ele não entrou na galeria nem na contagem.

## Cruzamento com páginas existentes

- `constants/services.ts` referencia diretamente `/media/imagem-servico-1.webp`.
- `app/quem-somos/sobre-nos/page.tsx` espera imagens futuras em `/quem-somos`, `/eventos` e `/parceiros`. As imagens atuais de eventos/parceiros parecem candidatas para essas rotas futuras.
- `app/servicos/page.tsx` espera imagens em `/images` para cards de áreas, mas as imagens atuais de serviços em `midias site` parecem candidatas para substituir essa estrutura depois.
- `app/page.tsx` usa logos de Shell, Mercedes e Coca-Cola por caminhos na raiz pública; as versões em `midias site` foram classificadas como parceiros, mas ainda não devem ser movidas nesta etapa.

## Referência do site publicado

Referência usada em 29/06/2026: `https://metaconsultoria.com/`.

- Home: a seção `Nossos clientes` confirma o uso de logos de Shell, Mercedes, Coca-Cola, Bob's, Grupo Trigo, Grupo SBF e Radix.
- Home: a seção inicial de serviços confirma as áreas Gestão de negócios, Otimização de processos, Planejamento financeiro, Construção e energia, Desenvolvimento de Máquinas e Tecnologia.
- Quem Somos: a página publicada confirma uma imagem institucional de consultores, os eventos Interação e SE LIGA, e a lista de empresas parceiras.
- Quem Somos / Parcerias: os parceiros confirmados no site publicado são Ambev, Visagio, Live Mode, EloGroup, Globo, Red Bull, Stone, Radix, Americanas, Ecco, Start Carreiras e Câmara Italiana.
- Serviços: a página publicada confirma os nomes de serviços específicos usados como destino provável para as imagens de serviço: Análise de Mercado, Posicionamento de Marca, Planejamento Estratégico, Pesquisa de Clima, Estruturação Organizacional, Otimização de Processos, Gestão de Estoque, Estudo de Tempo, Simulação de Processos, Viabilidade Econômica, Precificação de Produtos, FP&A, Projeto Arquitetônico, Instalações Hidrosanitárias, Regularização de Imóveis, Orçamento de Obras, Vistoria Técnica, Estudo da Luminotécnica, Instalações Elétricas, Desenho Mecânico, Estudo de Materiais, Desenvolvimento de Produto, Análise Estrutural, Manuais Técnicos, Desenvolvimento de site, Desenvolvimento de Aplicativo, Automação de Processos e Otimização de Sites (SEO).
- SETTA: a página publicada do processo seletivo mostra o logo da Meta Consultoria na introdução, mas não confirmou uma imagem específica de SETTA além da identidade institucional.
- O HTML bruto da Home indicou arquivos do WordPress como `cropped-favimeta-1-scaled-1.png` e `Logo-meta-3.png`, correspondendo semanticamente aos arquivos locais `cropped-favimeta-1-scaled-1(1).webp` e `Meta_Consultoria_Logo-removebg-preview-1.webp`.

## Ajustes de leitura com base no site publicado

- `shell-logo-1.webp`, `mercedes-logo-2-2.webp`, `coca_cola-removebg-preview-1(1).webp`, `bobs-logo-1(1).webp`, `grupo-trigo-1.webp`, `Grupo-SBF-Logo-1.webp` e `radix_logo.webp` têm uso mais forte em `Home > Nossos clientes`.
- `ambev-logo-scaled(1).webp`, `Modelo_parcerias_31.webp` (Visagio), `live_mode_logo-.webp`, `elogroup-logo-scaled.webp`, `Globo.webp`, `red_bull_logo.webp`, `stone-logo.webp`, `radix_logo.webp`, `americanas_logo(1).webp`, `Ecco-logo-scaled.webp`, `start-carreiras.webp` e `camara-italiana-logo-1(1).webp` têm uso mais forte em `Quem Somos / Parcerias > Empresas parceiras`.
- `logo-interacao-1.webp` e `se-liga-meta.webp` têm uso confirmado em `Quem Somos > Eventos`.
- `banner-uff-1(1).webp` continua sugerido para `Quem Somos > história`, mas o site publicado mostrou como imagem institucional principal uma imagem com alt `Consultores Meta Consultoria`; entre os arquivos locais atuais, nenhuma foto de equipe/consultores corresponde com confiança alta.
- `Logo-Meta-Consultoria.webp`, `Meta_Consultoria_Logo-removebg-preview-1.webp` e `cropped-favimeta-1-scaled-1(1).webp` continuam em `public/media/logos`; o site publicado reforça que são identidade principal, favicon/OG e pop-up/rodapé.
- Não houve confirmação clara no site publicado para `buzios-1(1).webp`, `icon-qcx-1.webp`, `nupote-icon-1.webp`, `socerj-icon-1.webp`, `grumec-1-scaled.webp`, `biura-logo-1(1).webp`, `logo-green-rabit.webp`, `hashtag-logo.webp`, `Sebrae-logo.webp` e algumas variações em `Modelo_parcerias_*`; por isso elas continuam como itens de revisão ou clientes/parceiros não exibidos claramente nas páginas consultadas.

## Tabela de classificação

| Nome atual do arquivo | Caminho atual | Tipo provável da imagem | Página ou seção onde ela deveria ser usada | Nova pasta sugerida | Novo nome sugerido | Motivo da classificação | Confiança |
|---|---|---|---|---|---|---|---|
| imagem-servico-1.webp | public/media/imagem-servico-1.webp | Foto/arte de motor ou máquina | Serviços: Desenvolvimento de Máquinas ou placeholder atual de serviço em constants/services.ts | public/media/servicos | desenvolvimento-maquinas-motor.webp | Arquivo já é referenciado como imagem de serviço e mostra motor/máquina em destaque. | médio |
| ambev-logo-scaled(1).webp | public/media/midias site/ambev-logo-scaled(1).webp | Logo de parceiro | Quem Somos > Empresas parceiras / Home > clientes | public/media/parceiros | ambev.webp | Logo Ambev visível e citado na lista de parceiros solicitada. | alto |
| americanas_logo(1).webp | public/media/midias site/americanas_logo(1).webp | Logo de parceiro | Quem Somos > Empresas parceiras | public/media/parceiros | americanas.webp | Logo Americanas SA visível e citado na lista de parceiros solicitada. | alto |
| analisecpfoto-1(1).webp | public/media/midias site/analisecpfoto-1(1).webp | Imagem de serviço: análise de mercado/dados | Serviços > Gestão de Negócios > Análise de Mercado | public/media/servicos | analise-de-mercado.webp | Mostra análise visual de gráficos; combina com análise de mercado e gestão. | alto |
| app2-1(1).webp | public/media/midias site/app2-1(1).webp | Imagem de serviço: aplicativo | Serviços > Tecnologia > Desenvolvimento de Aplicativos | public/media/servicos | desenvolvimento-aplicativos.webp | Mostra telas de aplicativo em notebook, compatível com desenvolvimento de app. | alto |
| automacao-1(1).webp | public/media/midias site/automacao-1(1).webp | Imagem de serviço: automação | Serviços > Tecnologia > Automação de Processos | public/media/servicos | automacao-processos.webp | Nome e conteúdo visual indicam automação/fluxo digital. | alto |
| banner-cabamento-1(1).webp | public/media/midias site/banner-cabamento-1(1).webp | Banner/fundo de construção | Banner de serviço em Construção e Energia, possivelmente acabamento/obras | public/media/banners | banner-acabamento-obras.webp | Formato panorâmico 1920x568 e nome de banner; conteúdo remete a obra/construção. | médio |
| banner-novo-1-1(1).webp | public/media/midias site/banner-novo-1-1(1).webp | Banner institucional/cidade | Home ou Quem Somos > hero institucional | public/media/banners | banner-rio-institucional.webp | Imagem ampla do Rio; parece capa institucional mais do que serviço específico. | médio |
| banner-uff-1(1).webp | public/media/midias site/banner-uff-1(1).webp | Foto institucional da UFF | Quem Somos > história / vínculo com UFF | public/media/quem-somos | uff-campus.webp | Mostra campus da UFF, ligado à origem institucional da Meta. | alto |
| Bg-Meta-Consultoria(1).webp | public/media/midias site/Bg-Meta-Consultoria(1).webp | Fundo visual da marca | Banners/hero com identidade Meta | public/media/banners | bg-meta-consultoria.webp | Imagem escura com marca Meta no canto, típica de background. | alto |
| biura-logo-1(1).webp | public/media/midias site/biura-logo-1(1).webp | Logo de parceiro/cliente | Quem Somos > Empresas parceiras ou Home > clientes | public/media/parceiros | biura.webp | Logo Biura visível. | alto |
| bobs-logo-1(1).webp | public/media/midias site/bobs-logo-1(1).webp | Logo de parceiro/cliente | Quem Somos > Empresas parceiras ou Home > clientes | public/media/parceiros | bobs.webp | Logo Bob's visível. | alto |
| brasil junior(1).webp | public/media/midias site/brasil junior(1).webp | Logo institucional/ecossistema | Quem Somos > parcerias/ecossistema EJ | public/media/parceiros | brasil-junior.webp | Logo Brasil Júnior; é mais institucional do que serviço. | médio |
| buzios-1(1).webp | public/media/midias site/buzios-1(1).webp | Foto de local/hotelaria | Uso não claro; possível case, cliente ou banner de conteúdo antigo | public/media/outros | buzios-local.webp | Imagem de hospedagem/paisagem sem ligação evidente com rotas atuais. | baixo |
| calc-estrut-1(1).webp | public/media/midias site/calc-estrut-1(1).webp | Imagem de serviço: cálculo/análise estrutural | Serviços > Desenvolvimento de Máquinas > Análise Estrutural | public/media/servicos | calculo-estrutural.webp | Nome e imagem de mesa técnica/plantas combinam com cálculo estrutural. | alto |
| camara-italiana-logo-1(1).webp | public/media/midias site/camara-italiana-logo-1(1).webp | Logo de parceiro | Quem Somos > Empresas parceiras | public/media/parceiros | camara-italo-brasileira-cultura.webp | Logo da Câmara Ítalo-Brasileira citado na lista de parceiros solicitada. | alto |
| climaorg-1(1).webp | public/media/midias site/climaorg-1(1).webp | Imagem de serviço: clima organizacional | Serviços > Otimização de Processos > Pesquisa de Clima | public/media/servicos | pesquisa-clima-organizacional.webp | Nome indica clima organizacional e a foto sugere pessoas/organização. | alto |
| coca_cola-removebg-preview-1(1).webp | public/media/midias site/coca_cola-removebg-preview-1(1).webp | Logo de parceiro/cliente | Home > clientes ou Quem Somos > Empresas parceiras | public/media/parceiros | coca-cola.webp | Logo Coca-Cola visível; há referência atual a Coca-Cola na home por outro arquivo. | alto |
| cropped-favimeta-1-scaled-1(1).webp | public/media/midias site/cropped-favimeta-1-scaled-1(1).webp | Logo/ícone da Meta | Favicon, marca ou elemento visual principal | public/media/logos | favimeta.webp | Símbolo triangular da Meta em formato quadrado, típico de favicon/ícone. | alto |
| desenho-mec-1(1).webp | public/media/midias site/desenho-mec-1(1).webp | Imagem de serviço: desenho mecânico | Serviços > Desenvolvimento de Máquinas > Desenho Mecânico | public/media/servicos | desenho-mecanico.webp | Nome e foto de equipamento/3D indicam desenho mecânico/prototipagem. | alto |
| desenvproduto-1-1.webp | public/media/midias site/desenvproduto-1-1.webp | Imagem de serviço: desenvolvimento de produto | Serviços > Desenvolvimento de Máquinas > Desenvolvimento de Produto | public/media/servicos | desenvolvimento-produto.webp | Nome e foto de prototipagem/peça impressa indicam criação de produto. | alto |
| Design-sem-nome-2.webp | public/media/midias site/Design-sem-nome-2.webp | Logo de parceiro duplicado/variação | Quem Somos > Empresas parceiras: EloGroup | public/media/parceiros | elogroup-compacto.webp | Imagem mostra logo EloGroup; nome genérico sugere arquivo exportado sem padronização. | médio |
| Ecco-logo-scaled.webp | public/media/midias site/Ecco-logo-scaled.webp | Logo de parceiro | Quem Somos > Empresas parceiras | public/media/parceiros | ecco.webp | Logo Ecco visível e citado na lista de parceiros solicitada. | alto |
| elogroup-logo-scaled.webp | public/media/midias site/elogroup-logo-scaled.webp | Logo de parceiro | Quem Somos > Empresas parceiras | public/media/parceiros | elogroup.webp | Logo EloGroup visível e citado na lista de parceiros solicitada. | alto |
| engrena-last.webp | public/media/midias site/engrena-last.webp | Ícone de engrenagem/serviço | Serviços > Desenvolvimento de Máquinas ou Automação | public/media/servicos | icone-engrenagem.webp | Ícone de engrenagens pode representar máquinas/processos, mas sem página clara. | médio |
| estrut-interna-1.webp | public/media/midias site/estrut-interna-1.webp | Imagem de serviço: estruturação interna | Serviços > Otimização de Processos > Estruturação Interna | public/media/servicos | estruturacao-interna.webp | Nome e visual de fluxograma/processo combinam com estruturação organizacional. | alto |
| esttempoo1.webp | public/media/midias site/esttempoo1.webp | Imagem de serviço: estudo de tempo | Serviços > Otimização de Processos > Estudo de Tempo | public/media/servicos | estudo-de-tempo.webp | Nome identifica estudo de tempo; foto de anotação reforça análise operacional. | alto |
| estudo-da-luminotecnica-1.webp | public/media/midias site/estudo-da-luminotecnica-1.webp | Imagem de serviço: luminotécnica | Serviços > Construção e Energia > Estudo de Luminotécnica | public/media/servicos | estudo-luminotecnica.webp | Nome e visual de iluminação indicam luminotécnica. | alto |
| estudomat-1.webp | public/media/midias site/estudomat-1.webp | Imagem de serviço: estudo de materiais | Serviços > Desenvolvimento de Máquinas > Estudo de Materiais | public/media/servicos | estudo-materiais.webp | Nome e imagem de materiais/ferramentas técnicas indicam o serviço. | alto |
| fundo-hvac.webp | public/media/midias site/fundo-hvac.webp | Fundo/banner de serviço: HVAC | Serviços > Construção e Energia > HVAC | public/media/servicos | hvac-fundo.webp | Nome indica HVAC; apesar de ser fundo, é específico de serviço. | alto |
| fundo-legaliza.webp | public/media/midias site/fundo-legaliza.webp | Fundo/banner de serviço: legalização | Serviços > Construção e Energia > Regularização/Legalização de Obras | public/media/servicos | legalizacao-obras-fundo.webp | Nome indica legalização e formato de fundo para página de serviço. | alto |
| fundo-plan-financ.webp | public/media/midias site/fundo-plan-financ.webp | Fundo/banner de serviço: planejamento financeiro | Serviços > Planejamento Financeiro | public/media/servicos | planejamento-financeiro-fundo.webp | Nome identifica planejamento financeiro; formato panorâmico sugere hero de serviço. | alto |
| fundo-plann.webp | public/media/midias site/fundo-plann.webp | Fundo/banner de planejamento | Serviços > Planejamento Financeiro ou Planejamento Estratégico | public/media/servicos | planejamento-fundo.webp | Nome abreviado e visual de planejamento; pode ser variação de fundo. | médio |
| gestao-de-estoque-1.webp | public/media/midias site/gestao-de-estoque-1.webp | Imagem de serviço: gestão de estoque | Serviços > Otimização de Processos > Gestão de Estoque | public/media/servicos | gestao-estoque.webp | Nome e foto de checklist em estoque/ambiente operacional indicam o serviço. | alto |
| gestaodenegocios-1.webp | public/media/midias site/gestaodenegocios-1.webp | Imagem de serviço/área: gestão de negócios | Serviços > Gestão de Negócios ou Quem Somos > áreas de atuação | public/media/servicos | gestao-negocios.webp | Nome identifica gestão de negócios; imagem tem sobreposição corporativa. | alto |
| Globo.webp | public/media/midias site/Globo.webp | Logo de parceiro | Quem Somos > Empresas parceiras | public/media/parceiros | globo.webp | Logo Globo visível e citado na lista de parceiros solicitada. | alto |
| grumec-1-scaled.webp | public/media/midias site/grumec-1-scaled.webp | Logo de parceiro/organização | Quem Somos > Empresas parceiras ou clientes | public/media/parceiros | grumec.webp | Logo institucional do GRUMEC; parece cliente/parceiro, mas não está na lista dada. | médio |
| Grupo-SBF-Logo-1.webp | public/media/midias site/Grupo-SBF-Logo-1.webp | Logo de parceiro/cliente | Quem Somos > Empresas parceiras ou Home > clientes | public/media/parceiros | grupo-sbf.webp | Logo Grupo SBF visível. | alto |
| grupo-trigo-1.webp | public/media/midias site/grupo-trigo-1.webp | Logo de parceiro/cliente | Quem Somos > Empresas parceiras ou Home > clientes | public/media/parceiros | grupo-trigo.webp | Imagem mostra marcas do Grupo Trigo. | alto |
| hashtag-logo.webp | public/media/midias site/hashtag-logo.webp | Logo de parceiro/cliente | Quem Somos > Empresas parceiras ou Home > clientes | public/media/parceiros | hashtag.webp | Logo Hashtag visível. | alto |
| homepagg.webp | public/media/midias site/homepagg.webp | Banner/fundo de home | Home > hero ou seção principal | public/media/banners | banner-home-consultoria.webp | Nome sugere home page e formato grande com overlay de fundo. | alto |
| icon-placa-sol-1-scaled.webp | public/media/midias site/icon-placa-sol-1-scaled.webp | Imagem de serviço: energia solar | Serviços > Construção e Energia > Projeto Fotovoltaico | public/media/servicos | projeto-fotovoltaico-paineis.webp | Foto de placas solares; nome confirma o tema. | alto |
| icon-qcx-1.webp | public/media/midias site/icon-qcx-1.webp | Ícone/logo não identificado | Uso não claro; revisar manualmente | public/media/outros | icon-qcx.webp | Ícone pequeno com sigla/símbolo sem correspondência clara nas páginas. | baixo |
| instalaeletrica.webp | public/media/midias site/instalaeletrica.webp | Imagem de serviço: instalação elétrica | Serviços > Construção e Energia > Instalações Elétricas | public/media/servicos | instalacoes-eletricas.webp | Nome e foto de fiação/instalação elétrica indicam o serviço. | alto |
| instalahidro-1.webp | public/media/midias site/instalahidro-1.webp | Imagem de serviço: instalação hidrossanitária | Serviços > Construção e Energia > Instalações Hidrossanitárias | public/media/servicos | instalacoes-hidrossanitarias.webp | Nome e foto de tubulação indicam instalações hidrossanitárias. | alto |
| legalizaobras-1.webp | public/media/midias site/legalizaobras-1.webp | Imagem de serviço: legalização de obras | Serviços > Construção e Energia > Regularização/Legalização de Obras | public/media/servicos | legalizacao-obras.webp | Nome e foto de reunião com plantas indicam legalização/regularização de obra. | alto |
| live_mode_logo-.webp | public/media/midias site/live_mode_logo-.webp | Logo de parceiro | Quem Somos > Empresas parceiras | public/media/parceiros | live-mode.webp | Logo Live Mode visível e citado na lista de parceiros solicitada. | alto |
| logo_trigo-removebg-preview-1.webp | public/media/midias site/logo_trigo-removebg-preview-1.webp | Logo de parceiro/cliente | Quem Somos > Empresas parceiras ou Home > clientes | public/media/parceiros | trigo-icone.webp | Ícone do grupo/marca Trigo; relacionado ao arquivo grupo-trigo. | médio |
| logo-green-rabit.webp | public/media/midias site/logo-green-rabit.webp | Logo de parceiro/cliente | Quem Somos > Empresas parceiras ou Home > clientes | public/media/parceiros | green-rabbit.webp | Logo Green Rabbit visível. | alto |
| logo-interacao-1.webp | public/media/midias site/logo-interacao-1.webp | Logo de evento | Quem Somos > Eventos > Interação | public/media/eventos | interacao-logo.webp | Logo do evento Interação, que aparece nas páginas de Quem Somos. | alto |
| Logo-Meta-Consultoria.webp | public/media/midias site/Logo-Meta-Consultoria.webp | Logo principal da Meta | Header/Footer ou páginas institucionais | public/media/logos | meta-consultoria-logo-branco.webp | Logo Meta Consultoria em versão clara/baixa opacidade. | alto |
| mapprocessos-1.webp | public/media/midias site/mapprocessos-1.webp | Imagem de serviço: mapeamento de processos | Serviços > Otimização de Processos > Mapeamento de Processos | public/media/servicos | mapeamento-processos.webp | Nome e visual de quadro de processo indicam mapeamento de processos. | alto |
| mercedes-logo-2-2.webp | public/media/midias site/mercedes-logo-2-2.webp | Logo de parceiro/cliente | Home > clientes ou Quem Somos > Empresas parceiras | public/media/parceiros | mercedes.webp | Logo Mercedes visível; há referência atual a Mercedes na home por outro arquivo. | alto |
| Meta_Consultoria_Logo-removebg-preview-1.webp | public/media/midias site/Meta_Consultoria_Logo-removebg-preview-1.webp | Logo principal da Meta | Header/Footer, contato ou páginas institucionais | public/media/logos | meta-consultoria-logo-horizontal.webp | Logo horizontal da Meta Consultoria com fundo removido. | alto |
| Modelo_parcerias_11.webp | public/media/midias site/Modelo_parcerias_11.webp | Logo de parceiro em card/template | Quem Somos > Empresas parceiras: EloGroup | public/media/parceiros | elogroup-card.webp | Card/template com logo EloGroup; parece variação duplicada do parceiro. | médio |
| Modelo_parcerias_31.webp | public/media/midias site/Modelo_parcerias_31.webp | Logo de parceiro em card/template | Quem Somos > Empresas parceiras: Visagio | public/media/parceiros | visagio.webp | Card/template com logo Visagio, citado no código de Quem Somos. | alto |
| Modelo_parcerias_51.webp | public/media/midias site/Modelo_parcerias_51.webp | Logo de parceiro em card/template | Quem Somos > Empresas parceiras: Ambev | public/media/parceiros | ambev-card.webp | Card/template com logo Ambev; variação visual do arquivo ambev-logo-scaled. | médio |
| Modelo_parcerias_61.webp | public/media/midias site/Modelo_parcerias_61.webp | Logo de parceiro em card/template | Quem Somos > Empresas parceiras: Sebrae | public/media/parceiros | sebrae-card.webp | Card/template com logo Sebrae; variação visual do arquivo Sebrae-logo. | médio |
| Modelo-parcerias-11.webp | public/media/midias site/Modelo-parcerias-11.webp | Logo de parceiro em card/template | Quem Somos > Empresas parceiras: Live Mode | public/media/parceiros | live-mode-card.webp | Card/template com logo Live Mode; variação visual do arquivo live_mode_logo-. | médio |
| Modelo-PostBanner-Meta-1-1.webp | public/media/midias site/Modelo-PostBanner-Meta-1-1.webp | Banner de tecnologia/digital | Serviços > Tecnologia ou post/banner institucional | public/media/banners | banner-tecnologia-digital.webp | Formato 1917x577 e nome de post/banner; imagem mostra uso de notebook. | médio |
| Modelo-PostBanner-Meta-2.webp | public/media/midias site/Modelo-PostBanner-Meta-2.webp | Banner de planejamento/negócios | Serviços > Gestão de Negócios ou Planejamento | public/media/banners | banner-planejamento-negocios.webp | Formato 1917x577 e nome de post/banner; imagem mostra anotação/planejamento. | médio |
| nupote-icon-1.webp | public/media/midias site/nupote-icon-1.webp | Logo de parceiro/cliente | Quem Somos > Empresas parceiras ou clientes | public/media/parceiros | nupote.webp | Logo NuPote visível, mas não aparece nas listas atuais. | médio |
| op11-1.webp | public/media/midias site/op11-1.webp | Imagem de serviço: otimização/processos | Serviços > Otimização de Processos | public/media/servicos | otimizacao-processos.webp | Nome abreviado pode indicar OP; visual com ícones de processos/engrenagens. | médio |
| orcobras-1.webp | public/media/midias site/orcobras-1.webp | Imagem de serviço: orçamento de obras | Serviços > Construção e Energia > Orçamento de Obras | public/media/servicos | orcamento-obras.webp | Nome e foto de orçamento/capacete/obra indicam orçamento de obras. | alto |
| pesquisa-e-analise.webp | public/media/midias site/pesquisa-e-analise.webp | Imagem de serviço: pesquisa/análise | Serviços > Gestão de Negócios > Análise de Mercado | public/media/servicos | pesquisa-analise-mercado.webp | Nome e foto com lupa/gráficos indicam pesquisa e análise. | alto |
| planmkt.webp | public/media/midias site/planmkt.webp | Imagem de serviço: planejamento de marketing | Serviços > Gestão de Negócios > Posicionamento de Marca/Plano de Marketing | public/media/servicos | planejamento-marketing.webp | Nome abrevia plano de marketing e visual mostra planejamento em quadro. | alto |
| popup-saida.webp | public/media/midias site/popup-saida.webp | Banner/pop-up da marca | Pop-up de saída ou peça de captura | public/media/banners | popup-saida-meta.webp | Nome e proporção vertical indicam peça de pop-up/banner. | alto |
| precificacao-1.webp | public/media/midias site/precificacao-1.webp | Imagem de serviço: precificação | Serviços > Planejamento Financeiro > Precificação de Produtos | public/media/servicos | precificacao-produtos.webp | Nome e visual de calculadora/planilha indicam precificação. | alto |
| proj-fotovoltaico-1.webp | public/media/midias site/proj-fotovoltaico-1.webp | Imagem de serviço: projeto fotovoltaico | Serviços > Construção e Energia > Projeto Fotovoltaico | public/media/servicos | projeto-fotovoltaico.webp | Nome e imagem com painel/plantas indicam projeto fotovoltaico. | alto |
| projarquitetonicoo.webp | public/media/midias site/projarquitetonicoo.webp | Imagem de serviço: projeto arquitetônico | Serviços > Construção e Energia > Projeto Arquitetônico | public/media/servicos | projeto-arquitetonico.webp | Nome e foto de desenho técnico indicam projeto arquitetônico. | alto |
| radix_logo.webp | public/media/midias site/radix_logo.webp | Logo de parceiro | Quem Somos > Empresas parceiras | public/media/parceiros | radix.webp | Logo Radix visível e citado na lista de parceiros solicitada. | alto |
| red_bull_logo.webp | public/media/midias site/red_bull_logo.webp | Logo de parceiro | Quem Somos > Empresas parceiras | public/media/parceiros | red-bull.webp | Logo Red Bull visível e citado na lista de parceiros solicitada. | alto |
| se-liga-meta.webp | public/media/midias site/se-liga-meta.webp | Logo de evento | Quem Somos > Eventos > SE LIGA! | public/media/eventos | se-liga-logo.webp | Logo do evento SE LIGA, que aparece nas páginas de Quem Somos. | alto |
| Sebrae-logo.webp | public/media/midias site/Sebrae-logo.webp | Logo de parceiro/cliente | Quem Somos > Empresas parceiras ou clientes | public/media/parceiros | sebrae.webp | Logo Sebrae visível. | alto |
| serv1-1.webp | public/media/midias site/serv1-1.webp | Imagem genérica de consultoria/negócios | Serviços > listagem geral ou Gestão de Negócios | public/media/servicos | consultoria-negocios.webp | Nome genérico de serviço e foto de reunião/negócios sem subtipo claro. | médio |
| shell-logo-1.webp | public/media/midias site/shell-logo-1.webp | Logo de parceiro/cliente | Home > clientes ou Quem Somos > Empresas parceiras | public/media/parceiros | shell.webp | Logo Shell visível; há referência atual a Shell na home por outro arquivo. | alto |
| socerj-icon-1.webp | public/media/midias site/socerj-icon-1.webp | Logo de parceiro/organização | Quem Somos > Empresas parceiras ou clientes | public/media/parceiros | socerj.webp | Logo SOCERJ visível, mas não aparece nas listas atuais. | médio |
| start-carreiras.webp | public/media/midias site/start-carreiras.webp | Logo de parceiro | Quem Somos > Empresas parceiras | public/media/parceiros | start-carreiras.webp | Logo Start Carreiras visível e citado na lista de parceiros solicitada. | alto |
| stone-logo.webp | public/media/midias site/stone-logo.webp | Logo de parceiro | Quem Somos > Empresas parceiras | public/media/parceiros | stone.webp | Logo Stone visível e citado na lista de parceiros solicitada. | alto |
| terreno-1.webp | public/media/midias site/terreno-1.webp | Imagem de serviço: terreno/obra | Serviços > Construção e Energia > Regularização de Imóveis ou Projeto Arquitetônico | public/media/servicos | terreno-regularizacao-imoveis.webp | Imagem de terreno/maquete; tema ligado a construção, mas página exata exige revisão. | médio |

## Resumo

- Imagens analisadas: 80.
- Confiança alta: 58.
- Confiança média: 20.
- Confiança baixa: 2.

## Imagens que parecem duplicadas ou variações próximas

- Ambev: `ambev-logo-scaled(1).webp` e `Modelo_parcerias_51.webp` parecem variações do mesmo logo.
- EloGroup: `Design-sem-nome-2.webp`, `elogroup-logo-scaled.webp` e `Modelo_parcerias_11.webp` parecem variações do mesmo logo.
- Live Mode: `live_mode_logo-.webp` e `Modelo-parcerias-11.webp` parecem variações do mesmo logo.
- Sebrae: `Sebrae-logo.webp` e `Modelo_parcerias_61.webp` parecem variações do mesmo logo.
- Meta Consultoria: `Logo-Meta-Consultoria.webp` e `Meta_Consultoria_Logo-removebg-preview-1.webp` são versões do logo principal.
- Grupo Trigo: `grupo-trigo-1.webp` e `logo_trigo-removebg-preview-1.webp` parecem variações da mesma marca/grupo.
- Planejamento/fundos: `fundo-plan-financ.webp` e `fundo-plann.webp` podem ser variações semânticas próximas, mas não são duplicatas exatas.

## Imagens que precisam de revisão humana

- `buzios-1(1).webp` - uso não claro.
- `icon-qcx-1.webp` - ícone/logo não identificado.
- `engrena-last.webp` - pode representar máquinas/processos, mas não tem página clara.
- `nupote-icon-1.webp` - logo visível, mas não aparece nas listas atuais.
- `socerj-icon-1.webp` - logo visível, mas não aparece nas listas atuais.
- `terreno-1.webp` - tema provável é construção, mas a página exata exige revisão.
- `fundo-plann.webp` - pode ser planejamento financeiro ou planejamento estratégico.
- `Modelo-PostBanner-Meta-1-1.webp` e `Modelo-PostBanner-Meta-2.webp` - parecem banners reaproveitáveis, mas o uso final depende da direção visual do site.

## Imagens sem uso claro

- `buzios-1(1).webp`
- `icon-qcx-1.webp`
