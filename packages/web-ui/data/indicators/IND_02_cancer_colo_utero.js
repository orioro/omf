const CHART_01 = {
  label:
    'Incidência de novos casos de câncer de colo do útero em Fortaleza (1996-2020)',
  source: 'DataSUS',
  description: `O gráfico mostra o número de novos casos de câncer de colo do útero diagnosticados em Fortaleza, ao longo do tempo (1998-2020).

Essa visualização permite a comparação da incidência de casos em Fortaleza com os números  do Brasil, do Nordeste e do Ceará. Para isso, selecione a opção desejada no botão de filtro acima do gráfico.`,
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
  description: `O gráfico mostra a proporção e o número de novos casos de câncer de colo do útero diagnosticados a cada ano em pacientes mulheres, ao longo do tempo (1997-2020).

A visualização permite a comparação da incidência de casos em Fortaleza com as demais cidades do Ceará.`,
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
  description: `O gráfico mostra a proporção e o número de novos casos de câncer de colo do útero diagnosticados a cada ano em pacientes mulheres, por raça, ao longo do tempo (1999-2020).

Essa visualização permite a comparação da incidência do câncer entre mulheres com útero Amarelas, Brancas, Pretas, Pardas e Indígenas, além dos casos em que a informação da raça da mãe não está disponível (Ignorado). Para isso, selecione a opção desejada no botão de filtro acima do gráfico

Nos botões acima do gráfico, também é possível selecionar a visualização dos dados de outros locais (Brasil, Nordeste, Ceará e Fortaleza).`,
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
  description: `O gráfico mostra a taxa de mortalidade de mulheres por câncer de colo do útero, por local, ao longo do tempo (1990-2022). O cálculo da taxa é o número de óbitos por neoplasias malignas, por 100 mil habitantes, na população residente em determinado espaço geográfico, no ano considerado.

A visualização permite a comparação da incidência de casos em Fortaleza com os números  do Brasil, do Nordeste e do Ceará. Para isso, selecione a opção desejada no botão de filtro acima do gráfico`,
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
  description: `O gráfico mostra a proporção e o número de mortes de mulheres causadas por câncer de colo do útero a cada ano, por raça, ao longo do tempo (1996-2022).

A visualização permite a comparação da mortalidade causadas pelo câncer entre mulheres com útero Amarelas, Brancas, Pretas, Pardas e Indígenas, além dos casos em que a informação da raça da mãe não está disponível (Ignorado). Para isso, selecione a opção desejada no botão de filtro acima do gráfico

Nos botões acima do gráfico, também é possível selecionar a visualização dos dados de outros locais (Brasil, Nordeste, Ceará e Fortaleza).`,
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
  leadText: `Quantos casos de câncer de colo de útero em mulheres são diagnosticados por ano em Fortaleza?
Quantas mortes de mulheres são causadas por câncer de colo de útero em Fortaleza?`,
  topBadges: [
    {
      type: 'positive',
      text: 'Desde 2013, os casos de câncer de colo de útero em Fortaleza estão em queda contínua.',
    },
    {
      type: 'alert',
      text: 'A maior incidência de câncer de colo de útero é em mulheres pretas e pardas, sendo essas as principais vítimas.',
    },
  ],
  topBox: {
    content: `_O câncer de colo de útero se desenvolve a partir da multiplicação anormal de células na parte inferior do útero._

**O que causa o câncer de colo de útero?**

O câncer de colo de útero é causado principalmente pela infecção persistente pelo vírus do papiloma humano (HPV). Por isso é importante identificar e tratar os casos de HPV para que não haja evolução para o câncer.

**Por que esses indicadores são importantes?**

Esses indicadores são importantes porque nos ajudam a entender se as condições de saúde de pessoas com útero estão sendo bem cuidadas. É importante lembrar que as mortes por câncer de colo de útero são altamente evitáveis, uma vez que a cura é certa em 100% dos casos identificados em estágios iniciais. Por esse motivo, altos índices de diagnósticos de câncer de colo de útero podem indicar que a população está realizando poucos exames de rastreamento da doença (exames de papanicolau e HPV), falta de acesso aos serviços de saúde, baixa conscientização e educação sobre o tema, prevalência do HPV, entre outros. É importante que autoridades de saúde investiguem as causas dos problemas que os dados indicam para qualificar políticas públicas de atenção à saúde das mulheres.
Acompanhar o número de novos diagnósticos e o número de mortes causadas pelo câncer de colo de útero ajuda a entender como ele afeta uma determinada  comunidade e a planejar formas de prevenção e detecção precoce.

**O que fazer para melhorar o indicador de incidência e mortalidade por câncer de colo de útero?**

Segundo a Organização Pan-Americana de Saúde (OPAS/OMS), "o câncer do colo do útero é a principal causa de morte entre pessoas com útero na América Latina e no Caribe". A implementação de programas de conscientização sobre a doença, acesso a serviços de saúde de qualidade e educação sobre a importância do rastreamento e vacinação HPV são estratégias fundamentais para reduzir essas taxas.
No Brasil, até 2030, a meta é reduzir em um terço a mortalidade prematura por doenças não transmissíveis via prevenção e tratamento - como é o caso do câncer de colo de útero. Para medir o alcance dessa meta, um dos indicadores é a Taxa de mortalidade por tumores malignos, como é o caso deste tipo de câncer.

Os gráficos abaixo permitem observar 1) a ocorrência de novos casos diagnosticados e 2) o número de mortes causadas por ele.`,
  },
  bottomBadges: [
    {
      type: 'alert',
      text: 'Dados obtidos a partir de 2020 devem ser vistos com precaução, por causa da pandemia e suas consequências no sistema de saúde.',
    },
  ],
  bottomBox: {
    content: `- Quantas mulheres foram diagnosticadas com câncer de colo de útero em Fortaleza, em 2021?
- Quantas mortes de mulheres causadas por câncer de colo de útero foram registradas em Fortaleza, em 2021?
- Qual a incidência de câncer de colo do útero em mulheres pretas, em Fortaleza, em 2021?
- Qual a mortalidade do câncer de colo de útero em mulheres pretas, em Fortaleza, em 2021?
- Qual a diferença entre a incidência de câncer de colo do útero em Fortaleza e no Brasil, em 2021?
- Como a incidência de câncer de colo de útero em Fortaleza evoluiu ao longo do tempo?
- Como a incidência de câncer de colo de útero em mulheres pretas, em Fortaleza, evoluiu ao longo do tempo, em relação ao Ceará?`
  },
  sourcesBox: {
    content: `Ministério da Saúde/SVS - Sistema de Informação de Agravos de Notificação - Sinan Net (http://tabnet.datasus.gov.br/cgi/deftohtm.exe?sim/cnv/obt10ce.def)

Sistema de Registro Hospitalar de Câncer - SisRHC (https://irhc.inca.gov.br/RHCNet/visualizaTabNetExterno.action)

Atlas da Mortalidade do Câncer - Instituto Nacional do Câncer (https://mortalidade.inca.gov.br/MortalidadeWeb/)

Organização Mundial da Saúde: https://www.paho.org/pt/topicos/saude-materna#:~:text=A%20maioria%20das%20mortes%20maternas,tratar%20complica%C3%A7%C3%B5es%20s%C3%A3o%20bem%20conhecidas

Data SUS:
http://tabnet.datasus.gov.br/tabdata/LivroIDB/2edrev/c10.pdf`
  },
  charts: [CHART_01, CHART_02, CHART_03, CHART_04, CHART_05],
}

export default IND_02_cancer_colo_utero
