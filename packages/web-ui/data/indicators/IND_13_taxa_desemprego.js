import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label:
    'Taxa de desemprego, por local, gênero, grupo de idade e raça (2012-2022)',
  queryControls: {
    local: {
      type: 'multiple',
      options: LOCAL_OPTIONS,
      defaultValue: ['Fortaleza', 'Brasil'],
    },
    genero: {
      type: 'single',
      options: ['Fem', 'Masc', 'Total'],
      defaultValue: 'Fem',
    },
    idade: {
      type: 'single',
      options: [
        'Total',
        '14-19',
        '20-29',
        '30-39',
        '40-49',
        '50-59',
        '60-65',
        '66+',
      ],
      defaultValue: 'Total',
    },
    raca_cor: {
      type: 'single',
      options: RACA_COR_OPTIONS,
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
      value: 'taxa_ocupacao',
    },
    dataKey: 'taxa_ocupacao',
  },
  groupByKey: 'local',
  renderer: 'lines',
  data: {
    src: '/data/13_01_taxa_desemprego.csv',
  },
}

const IND_13_taxa_desemprego = {
  category: 'trabalho',
  label: 'Taxa de desemprego',
  highlight: {
    number: '9%',
    unit: 'das mulheres',
    text: 'economicamente ativas estavam desempregadas em Fortaleza em 2022.',
  },
  charts: [CHART_01],
}

export default IND_13_taxa_desemprego
