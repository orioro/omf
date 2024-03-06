import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label:
    'Quantidade de ocorrências de assédio no transporte público em Fortaleza (set/2022-fev/2024)',
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
  // groupByKey: 'ano',
  // renderer: 'lines',
  data: {
    src: '/data/15_01_denuncias_assedio.csv',
  },
}

const CHART_02 = {
  label:
    'Porcentagem de casos de assédio no transporte público registrados em Fortaleza, por tipo de assédio (set/2022-mar/2024)',
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

const IND_15_assedio_no_transporte = {
  category: 'violencia',
  label: 'Assédio no transporte público',
  highlight: {
    number: '304',
    unit: 'casos',
    text: 'de assédio no transporte público foram registrados em Fortaleza em 2023.',
  },
  charts: [CHART_01, CHART_02],
}

export default IND_15_assedio_no_transporte
