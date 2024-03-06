import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label: 'Nascidos vivos',
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
  },
  xAxis: {
    label: {
      value: 'Ano',
    },
    dataKey: 'ano',
  },
  yAxis: {
    label: {
      value: 'domestico_cuidado_media_horas',
    },
    dataKey: 'domestico_cuidado_media_horas',
  },
  groupByKey: 'local',
  renderer: 'bars',
  data: {
    src: '/data/07_01_domestico_cuidado_media_horas.csv',
  },
}

const IND_07_DOMESTICO_CUIDADO = {
  label: 'Trabalho doméstico e de cuidado',
  charts: [CHART_01],
}

export default IND_07_DOMESTICO_CUIDADO
