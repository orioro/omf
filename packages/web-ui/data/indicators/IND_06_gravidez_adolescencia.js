import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label: 'Nascidos vivos',
  queryControls: {
    idade_mae: {
      type: 'multiple',
      options: [
        'Menor de 10 anos',
        '10 a 14 anos',
        '15 a 19 anos',
        'Mais de 20 anos',
        'Ignorado',
        // 'Total',
      ],
      defaultValue: [
        'Menor de 10 anos',
        '10 a 14 anos',
        '15 a 19 anos',
        // 'Mais de 20 anos',
        // 'Ignorado',
      ],
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
      value: 'nascidos_vivos',
    },
    dataKey: 'nascidos_vivos',
  },
  groupByKey: 'idade_mae',
  renderer: 'stacked_areas',
  data: {
    src: '/data/06_01_gravidez_adolescencia_nascidos_vivos.csv',
  },
}

const IND_06_GRAVIDEZ_ADOLESCENCIA = {
  category: 'saude',
  label: 'Gravidez na Adolescência',
  highlight: {
    number: '2.433',
    unit: 'meninas',
    text: 'com 18 anos  ou menos deram à luz em Fortaleza em 2021.',
  },
  charts: [CHART_01],
}

export default IND_06_GRAVIDEZ_ADOLESCENCIA
