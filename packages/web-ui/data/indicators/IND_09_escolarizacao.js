import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label:
    'Taxa de escolarização, por grupo de idade, por gênero e por local (2016-2022)',
  queryControls: {
    // local: {
    //   type: 'multiple',
    //   options: LOCAL_OPTIONS,
    //   defaultValue: ['Fortaleza', 'Brasil'],
    // },
    genero: {
      type: 'single',
      options: ['Fem', 'Masc', 'Total'],
      defaultValue: 'Fem',
    },
    grupo_idade: {
      type: 'multiple',
      options: [
        '0 a 3 anos',
        '0 a 5 anos',
        '4 a 5 anos',
        '6 a 14 anos',
        '15 a 17 anos',
        '18 a 24 anos',
        '25 anos ou mais',
        'Total',
      ],
      defaultValue: [
        '0 a 5 anos',
        '4 a 5 anos',
        '6 a 14 anos',
        '15 a 17 anos',
        '18 a 24 anos',
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
      value: 'taxa_escolarizacao',
    },
    dataKey: 'taxa_escolarizacao',
  },
  groupByKey: 'grupo_idade',
  renderer: 'lines',
  data: {
    src: '/data/09_01_escolarizacao.csv',
  },
}

const IND_09_ESCOLARIZACAO = {
  label: 'Taxa de escolarização',
  charts: [CHART_01],
}

export default IND_09_ESCOLARIZACAO
