import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label: 'Taxa de escolarização por gênero e por local (2016-2022)',
  queryControls: {
    local: {
      type: 'single',
      options: LOCAL_OPTIONS,
      defaultValue: 'Fortaleza',
    },
    genero: {
      type: 'single',
      options: ['Fem', 'Masc', 'Total'],
      defaultValue: 'Fem',
    },
    grupo_idade: {
      type: 'multiple',
      options: ['0 a 3 anos', '4 a 5 anos'],
      defaultValue: ['0 a 3 anos', '4 a 5 anos'],
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
      value: 'taxa_escolarizacao',
    },
    dataKey: 'taxa_escolarizacao',
  },
  groupByKey: 'grupo_idade',
  renderer: 'lines',
  data: {
    src: '/data/10_01_escolarizacao.csv',
  },
}

const IND_10_vagas_em_creches = {
  category: 'educacao',
  label: 'Vagas em creches',
  highlight: {
    number: 'Apenas 31%',
    text: 'das crianças entre 0 a 3 anos frequentam creche em 2022.',
  },
  charts: [CHART_01],
}

export default IND_10_vagas_em_creches
