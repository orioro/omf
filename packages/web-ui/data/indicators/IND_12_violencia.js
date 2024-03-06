import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label:
    'Quantidade de notificações no SUS de casos de violência com vítimas mulheres, por local (2009-2022)',
  queryControls: {
    local: {
      type: 'multiple',
      options: LOCAL_OPTIONS,
      defaultValue: ['Fortaleza', 'Brasil'],
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
      value: 'notificacoes_violencia_contra_mulher',
    },
    dataKey: 'notificacoes_violencia_contra_mulher',
  },
  groupByKey: 'local',
  renderer: 'bars',
  data: {
    src: '/data/12_01_violencia.csv',
  },
}

const IND_12_violencia = {
  category: 'violencia',
  label: 'Violência contra a mulher',
  highlight: {
    number: '77%',
    unit: 'dos casos',
    text: 'de violência registrados no SUS em 2022 tinham como vítima mulheres pretas e pardas.'
  },
  charts: [CHART_01],
}

export default IND_12_violencia
