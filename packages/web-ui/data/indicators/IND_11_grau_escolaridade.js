import { LOCAL_OPTIONS } from './util'

const CHART_01 = {
  label:
    'Média de anos de estudo por gênero, por local e por grupo de idade (2016-2022)',
  queryControls: {
    local: {
      type: 'multiple',
      options: LOCAL_OPTIONS,
      defaultValue: ['Fortaleza', 'Brasil'],
    },
    // genero: {
    //   type: 'single',
    //   options: ['Fem', 'Masc', 'Total'],
    //   defaultValue: 'Fem',
    // },
    idade: {
      type: 'single',
      options: [
        '15 anos ou mais',
        '15 a 17 anos',
        '18 a 29 anos',
        '18 a 24 anos',
        '25 anos ou mais',
        '25 a 39 anos',
        '40 a 59 anos',
        '60 anos ou mais',
      ],
      defaultValue: '15 anos ou mais',
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
      value: 'media_anos_estudo',
    },
    dataKey: 'media_anos_estudo',
  },
  groupByKey: 'genero',
  renderer: 'bars',
  data: {
    src: '/data/11_01_anos_de_estudo.csv',
  },
}

const IND_11_grau_escolaridade = {
  category: 'educacao',
  label: 'Grau de escolaridade',
  highlight: {
    number: '55,3%',
    text: 'de pessoas sem instrução ou ensino incompleto em 2022 eram mulheres',
  },
  charts: [CHART_01],
}

export default IND_11_grau_escolaridade
