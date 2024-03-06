import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label: 'Rendimento médio mensal por gênero, por local (2012-2023)',
  queryControls: {
    local: {
      type: 'single',
      options: LOCAL_OPTIONS,
      defaultValue: 'Fortaleza',
    },
    genero: {
      type: 'multiple',
      options: ['Fem', 'Masc', 'Total'],
      defaultValue: ['Fem', 'Masc'],
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
      value: 'renda_media_mensal',
    },
    dataKey: 'renda_media_mensal',
  },
  groupByKey: 'genero',
  renderer: 'lines',
  data: {
    src: '/data/16_01_rendimento.csv',
  },
}

const IND_16_desigualdade_salarial = {
  category: 'trabalho',
  label: 'Desigualdade Salarial',
  highlight: {
    number: 'R$ 687',
    unit: 'a menos',
    text: 'no salário mensal das mulheres em relação ao dos homens em 2023.',
  },
  charts: [CHART_01],
}

export default IND_16_desigualdade_salarial
