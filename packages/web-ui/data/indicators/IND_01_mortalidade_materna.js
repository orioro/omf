function _isNumeric(str) {
  if (typeof str != 'string') return false // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ) // ...and ensure strings of whitespace fail
}

const CHART_01 = {
  label: 'Mortalidade materna por local, a cada 100 mil nascidos vivos',
  queryControls: {
    Local: {
      type: 'multiple',
      options: ['Fortaleza', 'Ceará', 'Nordeste', 'Brasil'],
      defaultValue: ['Brasil', 'Fortaleza'],
    },
    'Raça/Cor': {
      type: 'single',
      options: [
        'Amarela',
        'Branca',
        'Indígena',
        'Parda',
        'Preta',
        'Ignorado',
        'Total',
      ],
      defaultValue: 'Total',
    },
  },
  xAxis: {
    label: {
      value: 'Ano',
    },
    dataKey: 'ano',
  },
  yAxis: {
    label: {
      value: 'Taxa de mortalidade materna',
    },
    dataKey: 'mortalidade_materna',
  },
  groupByKey: 'Local',
  renderer: 'lines',

  data: {
    src: '/data/01_01_taxa_mortalidade_materna.csv',
  },
  description: `
    O gráfico mostra a taxa de mortalidade materna em Fortaleza ao longo do tempo (1996-2022), a cada 100 mil nascidos vivos.
    **Os dados de 2022 são preliminares**

    A visualização permite a comparação da taxa de mortalidade materna em Fortaleza com as taxas do Brasil, do Nordeste e do Ceará. Para isso, selecione a opção desejada no botão de filtro acima do gráfico

    É possível também visualizar a comparação da taxa de mortalidade materna entre mulheres Amarelas, Brancas, Pretas, Pardas e Indígenas, além dos casos em que a informação da raça da mãe não está disponível (Ignorado). Para isso, selecione a opção desejada no botão de filtro.
  `,
}

const CHART_02 = {
  label: 'Total de óbitos maternos por raça',
  data: {
    src: '/data/01_02_obito_materno.csv',
  },
  queryControls: {
    local: {
      type: 'single',
      options: ['Fortaleza', 'Ceará', 'Nordeste', 'Brasil'],
      defaultValue: 'Fortaleza',
    },
  },

  renderer: 'percentage_areas',
  xAxis: {
    label: {
      value: 'Ano',
    },
    dataKey: 'ano',
  },
  yAxis: {
    label: {
      value: 'Total de óbitos maternos',
    },
    dataKey: 'obito_materno',
  },
  groupByKey: 'raca_cor',
}

const IND_01_mortalidade_materna = {
  label: 'Mortalidade materna',
  categories: ['saude'],
  summary:
    'Quantas mulheres morrem durante a gravidez, o parto ou até 42 dias após o término da gestação, a cada 100 mil bebês nascidos vivos em Fortaleza?',
  badges: [
    {
      icon: 'check',
      text: `De 2020 e 2021, a Taxa de Mortalidade Materna em Fortaleza diminuiu em 21%.`,
      position: 'top',
    },
    {
      icon: 'alert',
      text: 'Em 2021, das 24 mortes maternas registradas em Fortaleza, 19 foram de mulheres pardas.',
      position: 'top',
    },
  ],
  description: `
    Segundo a Organização Mundial da Saúde, a taxa de mortalidade materna nos mostra quantas mulheres morrem durante a gravidez, o parto ou até 42 dias após o término da gestação em relação a um número de bebês que nascem vivos.  

    **Por quê esse indicador é importante?**
    As mortes maternas são evitáveis. Para evitá-las, é necessário ter cuidados médicos de qualidade destinados à saúde da mulher. O número de mortes maternas ser alto, pode indicar problemas na qualidade do atendimento médico durante a gravidez e o parto, o que significa que as mulheres grávidas podem não estar recebendo a ajuda necessária para garantir uma gestação segura e um parto saudável. Por isso, esse indicador é importante porque nos ajuda a entender se a saúde das gestantes está sendo priorizada na rede de saúde.

    **Como melhorar o indicador de mortalidade materna?**
    Para melhorar esse indicador, é essencial garantir que todas as mulheres tenham acesso a cuidados médicos adequados durante a gravidez, incluindo consultas pré-natais regulares (no mínimo, seis consultas de pré-natal, sendo, preferencialmente, uma no primeiro trimestre, duas no segundo trimestre e três no terceiro trimestre da gestação) e assistência qualificada no momento do parto. Dessa forma, é possível trabalhar para reduzir o número de mortes maternas e garantir que mais mães tenham a oportunidade de vivenciar uma gravidez e parto saudáveis.
    A OMS estabeleceu como meta reduzir a taxa global de mortalidade materna para menos de 70 mortes a cada 100 mil nascidos até 2030. Hoje, em Fortaleza a taxa está em 76, e no Brasil 117 mortes para cada 100 mil nascidos vivos (2021).
  `,

  charts: [CHART_01, CHART_02],
}

export default IND_01_mortalidade_materna
