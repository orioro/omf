import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label:
    'Número de vereadores eleitos para a Câmara Municipal de Vereadores de Fortaleza, por gênero (2000-2020)',
  queryControls: {
    local: {
      type: 'single',
      options: LOCAL_OPTIONS,
      defaultValue: 'Fortaleza',
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
      value: 'numero_assentos_mulheres',
    },
    dataKey: 'numero_assentos_mulheres',
  },
  groupByKey: 'genero',
  renderer: 'percentage_areas',
  data: {
    src: '/data/08_01_mulheres_politica_assentos.csv',
  },
}

const IND_08_MULHERES_POLITICA = {
  label: 'Mulheres na política',
  charts: [CHART_01],
}

export default IND_08_MULHERES_POLITICA
