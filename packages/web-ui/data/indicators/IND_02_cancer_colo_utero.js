const CHART_01 = {
  label:
    'Incidência de novos casos de câncer de colo do útero em Fortaleza (1996-2020)',
  queryControls: {
    local: {
      type: 'multiple',
      options: ['Fortaleza', 'Ceará', 'Nordeste', 'Brasil'],
      defaultValue: ['Brasil', 'Fortaleza'],
    },
    raca_cor: {
      type: 'single',
      options: [
        'Amarela',
        'Branca',
        'Indígena',
        'Parda',
        'Preta',
        'Ignorado',
        'Total',
      ],
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
      value: 'incidencia_cancer_colo_utero',
    },
    dataKey: 'incidencia_cancer_colo_utero',
  },
  groupByKey: 'local',
  renderer: 'lines',

  data: {
    src: '/data/02_01_cancer_colo_de_utero_incidencia_total_casos.csv',
  },
}

const CHART_02 = {
  label:
    'Incidência de novos casos de câncer de colo de útero em Fortaleza e nas outras cidades do Ceará (1997-2020)',
  xAxis: {
    label: {
      value: 'Ano',
    },
    dataKey: 'ano',
  },
  yAxis: {
    label: {
      value: 'incidencia_cancer_colo_utero',
    },
    dataKey: 'incidencia_cancer_colo_utero',
  },
  groupByKey: 'local',
  renderer: 'percentage_areas',

  data: {
    src: '/data/02_02_cancer_colo_de_utero_incidencia_fortaleza_vs_ceara.csv',
  },
}

const CHART_03 = {
  label:
    'Incidência de novos casos de câncer de colo de útero, por raça (1999-2020)',
  queryControls: {
    local: {
      type: 'single',
      options: ['Fortaleza', 'Ceará', 'Nordeste', 'Brasil'],
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
      value: 'incidencia_cancer_colo_utero',
    },
    dataKey: 'incidencia_cancer_colo_utero',
  },
  groupByKey: 'raca_cor',
  renderer: 'percentage_areas',

  data: {
    src: '/data/02_03_cancer_colo_de_utero_por_raca.csv',
  },
}

const CHART_04 = {
  label:
    'Taxa de mortalidade em mulheres por câncer de colo de útero (1990-2022)',
  queryControls: {
    local: {
      type: 'multiple',
      options: ['Fortaleza', 'Ceará', 'Nordeste', 'Brasil'],
      defaultValue: ['Brasil', 'Fortaleza'],
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
      value: 'taxa_ajustada_mortalidade',
    },
    dataKey: 'taxa_ajustada_mortalidade',
  },
  groupByKey: 'local',
  renderer: 'lines',

  data: {
    src: '/data/02_04_cancer_colo_de_utero_mortalidade_por_local.csv',
  },
}

const CHART_05 = {
  label:
    'Mortalidade do câncer de colo do útero em mulheres, por raça (1996-2022)',
  queryControls: {
    local: {
      type: 'single',
      options: ['Fortaleza', 'Ceará', 'Nordeste', 'Brasil'],
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
      value: 'mortalidade_cancer_colo',
    },
    dataKey: 'mortalidade_cancer_colo',
  },
  groupByKey: 'raca_cor',
  renderer: 'percentage_areas',

  data: {
    src: '/data/02_05_cancer_colo_de_utero_mortalidade_por_raca.csv',
  },
}

const IND_02_cancer_colo_utero = {
  category: 'saude',
  label: 'Câncer de colo de útero',
  highlight: {
    number: '71%',
    unit: 'das mortes',
    text: 'por causa de câncer de colo de útero foram de pessoas pretas e pardas em 2022',
  },
  charts: [CHART_01, CHART_02, CHART_03, CHART_04, CHART_05],
}

export default IND_02_cancer_colo_utero
