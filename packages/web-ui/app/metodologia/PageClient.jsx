'use client'

import { Box, Container, Flex, Heading, Section } from '@radix-ui/themes'
import { MarkdownContent } from '@/components/MarkdownContent'

function MainSection({ title, content }) {
  return (
    <Flex style={{ maxWidth: '800px' }} direction="column" gap="5">
      <Heading as="h2" size="8">
        {title}
      </Heading>

      {content && <MarkdownContent children={content} />}
    </Flex>
  )
}

function SecondarySection({ title, content }) {
  return (
    <Flex style={{ maxWidth: '800px' }} direction="column" gap="5">
      <Heading as="h3" size="6">
        {title}
      </Heading>

      <MarkdownContent children={content} />
    </Flex>
  )
}

export function PageClient({}) {
  return (
    <Section
      id="inicio"
      style={{
        paddingTop: 90,
        backgroundColor: 'white',
        color: 'var(--roxo)',
      }}
    >
      <Container
        px={{
          initial: '5',
          md: '9',
        }}
      >
        <Flex direction="column" gap="8">
          <MainSection
            title="1. Construção do observatório"
            content={`O Observatório da Mulher de Fortaleza (OMF) é uma ferramenta que orienta a formulação, implementação e avaliação de políticas públicas municipais para mulheres e meninas e que visa reduzir as desigualdades de gênero e raça presentes no município.

Para isso, emprega uma metodologia baseada na coleta, análise e disseminação de dados e fornece uma compreensão mais aprofundada dos desafios enfrentados por mulheres e meninas fortalezenses nas mais diversas áreas (educação, saúde, proteção social, autonomia econômica, enfrentamento à violências, acesso a direitos).

Vem sendo construído desde setembro de 2021 numa parceria entre a Secretaria Municipal de Direitos Humanos e Desenvolvimento Social (SDHDS) representada pela Coordenadoria Especial de Políticas Públicas para as Mulheres (COPM), o Instituto de Planejamento de Fortaleza (Iplanfor), a Secretaria Municipal de Planejamento, Orçamento e Gestão (SEPOG) e os Institutos Foz e ORI:ORO com apoio da Fundação Tide Setubal.

Para a construção do Observatório, foi utilizada a abordagem do Design Thinking que consiste na resolução de problemas complexos colocando as pessoas no centro das ações. A seguir, explicaremos brevemente cada etapa do projeto, a saber: entendimento inicial, exploração e diagnóstico, cocriação e implementação.`}
          />
          <SecondarySection
            title="1.1. Entendimento Inicial"
            content={`Num primeiro momento, o Observatório da Mulher de Fortaleza dedicou-se a um entendimento inicial e contextualização do projeto. Essa etapa incluiu três momentos principais: (1) mapeamento de expectativas da Coordenadoria Especial de Políticas Públicas para Mulheres (COPM) e do Instituto de Planejamento de Fortaleza (IPLANFOR) sobre o que seria a ferramenta do Observatório; (2) construção de uma visão de futuro compartilhada a todas as pessoas integrantes do projeto; e (3) mapeamento de atrizes e atores chave para toda a execução do projeto (incluindo academia, sociedade civil, entes governamentais).`}
          />
          <SecondarySection
            title="1.2. Exploração e Diagnóstico"
            content={`Após uma compreensão mais aprofundada de contexto, o Observatório da Mulher de Fortaleza avançou para a etapa de Exploração e diagnóstico.

Foram realizadas: pesquisa de mesa, que incluiu levantamento de +15 cases de observatórios e iniciativas similares; seleção de alguns indicadores iniciais, para guiar e pesquisa e aprofundar estudos de dados já disponíveis; e análise de +10 dispositivos legais, para apoiar a institucionalização do OMF junto à COPM.

Depois, seguimos com 2 frentes em paralelo: (1) foram realizadas pesquisas de campo com entrevistas a 13 Secretarias Municipais; e (2) foi elaborado e enviado um questionário online para instituições de ensino, sociedade civil e outros organismos governamentais, na qual obtivemos 26 respostas. A partir de ambas as pesquisas, foi possível obter uma compreensão a respeito da coleta de dados da própria Prefeitura: como são coletados, tratados, armazenados e, principalmente, se possuíam recorte de gênero e raça.`}
          />
          <SecondarySection
            title="1.3. Cocriação"
            content={`Uma vez concluídas as etapas de entendimento inicial e diagnóstico, o Observatório da Mulher de Fortaleza adotou uma abordagem colaborativa na fase de cocriação. Neste estágio, foram realizadas oficinas participativas e conversas bilaterais envolvendo 23 atoras relevantes para o projeto, e o resultado foi a definição do formato e características que o projeto e a plataforma deveriam ter, quais tipos de conteúdos deveriam ser incluídos e as ações estratégicas necessárias para viabilizar a implementação do observatório.

Além disso, foram listados mais de 170 indicadores que poderiam compor o observatório, no qual, para a primeira fase do projeto, fizemos um esforço de redução para os 16 apresentados do Painel de Dados.`}
          />
          <SecondarySection
            title="1.4. Implementação"
            content={`Por fim, com as diretrizes estabelecidas e os indicadores definidos, o Observatório da Mulher de Fortaleza partiu para a sua fase de implementação. Aqui, desenvolvemos a plataforma digital do OMF, que possui um painel de dados e detalhes de cada um dos 16 indicadores, biblioteca com materiais relativos a temas pertinentes à mulheres e informações sobre os serviços ofertados pelo município.

Além disso, e pensando para além da plataforma e o que fazer com os dados aqui sistematizados, também estamos oferecendo apoio estratégico junto às pastas finalísticas da Prefeitura para a construção de planejamentos e orçamentos sensíveis a gênero e raça.`}
          />

          <MainSection title="2. Metodologia dos Dados" />

          <SecondarySection
            title="2.1. Pesquisa Descritiva"
            content={`Após a definição dos 16 indicadores a serem incluídos no Painel de Dados do Observatório, iniciamos nossa etapa de coleta e análise de dados. Para isso, construímos o desenho de nossa pesquisa utilizando uma metodologia descritiva.

A pesquisa descritiva envolve a coleta, organização, análise e interpretação de dados para descrever características ou padrões em uma determinada população ou fenômeno, de acordo com os objetivos. No caso do Observatório, a pesquisa foi realizada buscando responder à seguinte pergunta:

**"Qual é a realidade de desigualdade de gênero enfrentada por meninas e mulheres em Fortaleza?"**`}
          />

          <SecondarySection
            title="2.2. Objetivos"
            content={`
A partir dessa pergunta, definimos como objetivos de nossa pesquisa:

**Objetivo geral:**
- Construir o Painel de Dados do Observatório da Mulher de Fortaleza e democratizar o acesso a dados quantitativos de indicadores sociais relevantes que evidenciam a situação da desigualdade de gênero no município;

**Objetivos específicos:**
- Identificar fontes de dados quantitativos de indicadores relacionados ao problema da desigualdade de gênero em Fortaleza, em diferentes áreas (educação, saúde, proteção social, autonomia econômica, enfrentamento à violências, acesso a direitos)
- Identificar fontes de dados públicos quantitativos relacionados ao problema da desigualdade de gênero, com abrangência geográfica municipal (Fortaleza), estadual (Ceará), regional (Região Nordeste) e nacional; e com, no mínimo, recortes de gênero e raça.
- Coletar, limpar, analisar e descrever os dados selecionados
- Comunicar os resultados por meio do Painel de Dados do Observatório da Mulher de Fortaleza
            `}
          />

          <SecondarySection
            title="2.3. Desafios da Análise"
            content={`
Após uma primeira etapa de mapeamento de bases de dados públicas e relevantes e as variáveis disponíveis para os dados de nossos indicadores de interesse. Nesta etapa, ficou evidente a falta de dados com recortes de gênero e raça, bem como de outras características que possibilitem a compreensão das disparidades existentes entre diferentes grupos sociais (identidade de gênero, orientação sexual, renda, presença de deficiência, entre outras).

Superar a falta de dados com esses recortes é crucial para entender e abordar as desigualdades existentes, promovendo políticas mais justas e equitativas. Iniciativas para promover a coleta sistemática e padronizada de dados, juntamente com conscientização e sensibilização sobre a importância dessas informações, são passos essenciais para preencher essa lacuna.            `}
          />

          <SecondarySection
            title="2.4. Requisitos Mínimos"
            content={`
Diante dessa limitação, estabelecemos requisitos mínimos (mas não únicos) que deveriam ser cumpridos para a seleção dos dados: abrangência municipal (Fortaleza) e recorte de gênero. **Sempre que disponíveis, variáveis de raça, identidade de gênero, idade, entre outras, foram priorizadas e incluídas em nossa base de dados e em nossas análises.**`}
          />

          <SecondarySection
            title="2.5. Método e Fontes de Coleta"
            content={`
Para a coleta dos dados, foram utilizados 2 métodos: 1) coleta manual em bases de dados públicas e 2) envio de ofícios para Secretarias Municipais de Fortaleza. Ao final, foram utilizadas como fonte de dados:

- Sistema de Informações sobre Mortalidade - SIM
- Sistema de Informação de Agravos de Notificação - Sinan
- Sistema de Registro Hospitalar de Câncer - SisRHC
- Atlas da Mortalidade do Câncer - Instituto Nacional do Câncer
- Superintendência de Pesquisa e Estratégia de Segurança Pública - Secretaria de Segurança Pública e Defesa Social - Governo do Estado do Ceará
- Sistema Nacional de Informações de Segurança Pública, Prisionais, de Rastreabilidade de Armas e Munições, de Material Genético, de Digitais e de Drogas - Sinesp
- Pesquisa Nacional por Amostra de Domicílios Contínua - PnadC
- Sistema de Informações sobre Nascidos Vivos - SINASC
- Tribunal Superior Eleitoral - TSE
- Ministério das Mulheres
- Portal Idea
- Secretaria de Conservação e Serviços Públicos de Fortaleza
- Relação Anual de Informações Sociais - RAIS
- Pesquisa Nacional por Amostra de Domicílios Contínua Trimestral - PnadC/T`}
          />

          <SecondarySection
            title="2.6. Limpeza dos Dados e Análise Descritiva"
            content={`
Após a coleta dos dados, foram realizadas a organização e a limpeza dos dados, corrigindo erros, preenchendo lacunas e/ou tratando valores ausentes ou outliers, quando necessário.

Em seguida, foram realizadas as análises descritivas, gerando visualizações gráficas e a interpretação de seus resultados, onde foram destacados padrões, tendências e demais insights relevantes observados. A comunicação dos resultados está disponível no Painel de Dados.

É importante ressaltar que essas análises descritivas são um esforço inicial que é parte de um processo contínuo, alinhado ao objetivo do Observatório de monitorar a evolução desses indicadores ao longo do tempo e democratizar o acesso à informações que possam, também, apoiar o trabalho de pesquisadores e especialistas de diversas áreas no avanço da produção de conhecimento acerca das manifestações da desigualdade de gênero no município de Fortaleza e no Brasil.`}
          />
        </Flex>
      </Container>
    </Section>
  )
}
