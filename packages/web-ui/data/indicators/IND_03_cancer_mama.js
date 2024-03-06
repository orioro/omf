import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label: 'Incidência de novos casos de câncer de mama em Fortaleza (1998-2020)',
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
      value: 'incidencia_cancer_mama',
    },
    dataKey: 'incidencia_cancer_mama',
  },
  groupByKey: 'local',
  renderer: 'lines',
  data: {
    src: '/data/03_01_cancer_mama_casos.csv',
  },
}

const IND_03_cancer_mama = {
  label: 'Câncer de mama',
  charts: [CHART_01],
}

export default IND_03_cancer_mama
