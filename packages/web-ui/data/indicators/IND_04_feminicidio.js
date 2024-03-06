import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label: 'Casos de feminicídio por local (2018-2023)',
  xAxis: {
    label: {
      value: 'Ano',
    },
    dataKey: 'ano',
  },
  yAxis: {
    label: {
      value: 'casos_feminicidio',
    },
    dataKey: 'casos_feminicidio',
  },
  groupByKey: 'local',
  renderer: 'percentage_areas',
  data: {
    src: '/data/04_01_feminicidio_fortaleza_vs_ceara.csv',
  },
}

const IND_04_feminicidio = {
  label: 'Feminicídio',
  charts: [CHART_01],
}

export default IND_04_feminicidio
