import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label:
    'Quantidade de ocorrências de assédio no transporte público em Fortaleza (set/2022-fev/2024)',
  description:
    'O gráfico apresenta o número de ocorrências registradas de assédio ocorridas no transporte público de Fortaleza entre setembro de 2022 e março de 2024.',
  xAxis: {
    label: {
      value: 'Ano',
    },
    dataKey: 'ano',
  },
  yAxis: {
    label: {
      value: 'numero_denuncias',
    },
    dataKey: 'numero_denuncias',
  },
  data: {
    src: '/data/15_01_denuncias_assedio.csv',
  },
}

const CHART_02 = {
  label:
    'Porcentagem de casos de assédio no transporte público registrados em Fortaleza, por tipo de assédio (set/2022-mar/2024)',
  description: `O gráfico apresenta a porcentagem de ocorrências registradas de assédio ocorridas no transporte público de Fortaleza entre setembro de 2022 e março de 2024, pelo tipo de assédio ocorrido.

A soma das porcentagens dá mais do que 100% porque uma ocorrência pode ter mais de um tipo de assédio, como "apalpada" + "intimidação", por exemplo.`,
  xAxis: {
    label: {
      valaue: 'Tipo',
    },
    dataKey: 'tipo',
  },
  yAxis: {
    label: {
      value: 'Porcentagem ocorrências',
    },
    dataKey: 'porcentagem_ocorrencias',
  },
  data: {
    src: '/data/15_02_tipo_assedio.csv',
  },
}

const CHART_03 = {
  label:
    'Porcentagem de ocorrências de assédio no transporte público registrados em Fortaleza, por gênero da vítima (set/2022-mar/2024)',
  description: `O gráfico apresenta a porcentagem de ocorrências registradas de assédio ocorridas no transporte público de Fortaleza entre setembro de 2022 e março de 2024, por gênero da vítima`,
  xAxis: {
    label: {
      valaue: 'Gênero da vítima',
    },
    dataKey: 'genero',
  },
  yAxis: {
    label: {
      value: 'Porcentagem ocorrências',
    },
    dataKey: 'porcentagem_casos',
  },
  data: {
    src: '/data/15_03.csv',
  },
}

const IND_15_assedio_no_transporte = {
  category: 'violencia',
  label: 'Assédio no transporte público',
  highlight: {
    number: '304',
    unit: 'casos',
    text: 'de assédio no transporte público foram registrados em Fortaleza em 2023.',
  },
  leadText:
    'Quantos casos de assédio no transporte público são registrados em Fortaleza?',
  topBadges: [
    {
      type: 'alert',
      text: 'O principal tipo de assédio registrado em 2023 foi a "apalpada ou encoxada", representando 45% dos casos.',
    },
    {
      type: 'info',
      text: '79% das vítimas de assédio no transporte público são mulheres. Dessas, 1% são mulheres trans.',
    },
  ],
  topBox: {
    content: `Os dados mostram os números e tipos de ocorrências de assédio nos transportes públicos registrados em Fortaleza. Os dados foram informados pelo programa NINA 2.0, Programa da Prefeitura Municipal de Fortaleza de Combate ao Assédio Sexual no Transporte Público.

Por quê esse indicador é importante?
A maioria das pessoas que sofrem assédio nos transportes públicos são mulheres. Segundo uma pesquisa feita pelo Instituto Locomotiva a nível nacional em 2021, os meios de transporte que transmitem menos segurança para as mulheres são "ônibus e trem". Se elas se sentem inseguras ao viajar, podem acabar limitando suas escolhas de mobilidade, o que impacta na sua participação na vida pública, social e econômica. Por isso, o monitoramento do assédio no transporte público e a formulação de políticas públicas em direção ao combate ao assédio é crucial para garantir a segurança das mulheres durante suas viagens.

Como melhorar esse indicador?
Diminuir o assédio nos transportes públicos requer uma abordagem multifacetada que envolve tanto medidas preventivas quanto reativas, como:
- Campanhas de conscientização e educação o público sobre o impacto negativo do assédio nos transportes públicos e destacar a importância do respeito mútuo.
- Instalação de câmeras de segurança nos veículos e paradas de ônibus pode ajudar a identificar os agressores e fornecer evidências para processos legais.
- Linhas diretas de denúncia dedicados para relatar incidentes de assédio pode encorajar mais vítimas a denunciar e facilitar uma resposta rápida das autoridades.
- Espaços seguros com áreas específicas nos veículos e estações designadas para passageiras que se sentem desconfortáveis ou ameaçados pode fornecer um refúgio imediato em situações de emergência.
- Treinamento para funcionários: Capacitar os funcionários dos transportes públicos sobre os protocolos a serem seguidos em caso de assédio e dar apoio às vítimas.`,
  },
  bottomBadges: [
    {
      type: 'alert',
      text: '"Intimidação" é o segundo maior tipo de assédio registrado, representando 22% dos casos.',
    },
    {
      type: 'info',
      text: 'Os homens representam 17% das vítimas de assédio no transporte público, sendo destes, 1% homens trans.',
    },
    {
      type: 'info',
      text: 'Pessoas não-binárias representam 2% das vítimas de assédio no transporte público.',
    },
  ],
  bottomBox: {
    content: `- Quantos casos de assédio no transporte público de Fortaleza foram registrados em 2023?
- Quais são os tipos de assédio mais recorrentes no transporte público de Fortaleza?
- Quem são as principais vítimas de assédio no transporte público de fortaleza?`,
  },

  charts: [CHART_01, CHART_02, CHART_03],
}

export default IND_15_assedio_no_transporte
