import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label:
    'Taxa de escolarização, por grupo de idade, por gênero e por local (2016-2022)',
  description: `O gráfico mostra o número de meninas de determinada idade que estão estudando em relação ao número total de meninas que fazem parte daquele grupo. Por exemplo, podemos observar que 92% das meninas fortalezenses de 4 a 5 anos estão estudando e, consequentemente, 8% delas estão fora da escola.

Também é possível visualizar os dados de outros locais (Brasil, Nordeste e Ceará). Para isso, selecione filtro desejado acima do gráfico.

Ainda, é possível visualizar os dados para homens e para o total da população. Para isso, selecione filtro desejado acima do gráfico.`,
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

const CHART_02 = {
  label: 'Taxa de escolarização por gênero (2016-2022)',
  description: `O gráfico compara a taxa de escolarização de meninos e meninas em Fortaleza em cada grupo de idade.

A taxa de escolarização representa a quantidade de meninas(os) de determinada idade que estão estudando em relação ao número total de meninas(os) que fazem parte da população. Por exemplo, podemos observar que 92% das meninas fortalezenses de 4 a 5 anos estão estudando e por isso, consequentemente, 8% delas estão fora da escola.

Também é possível visualizar os dados de outros locais (Brasil, Nordeste e Ceará). Para isso, selecione filtro desejado acima do gráfico.

Ainda, é possível visualizar os dados por grupos de idade. Para isso, selecione filtro desejado acima do gráfico`,
  queryControls: {
    local: {
      type: 'single',
      options: LOCAL_OPTIONS,
      defaultValue: 'Fortaleza',
    },
    genero: {
      type: 'multiple',
      hidden: true,
      options: ['Fem', 'Masc'],
    },
    grupo_idade: {
      type: 'single',
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
      defaultValue: '15 a 17 anos',
    },
  },
  numberFormat: {
    style: 'percent',
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
  groupByKey: 'genero',
  renderer: 'bars',
  data: {
    src: '/data/09_02.csv',
  },
}

const CHART_03 = {
  label: 'Taxa de escolarização comparativa por local (2016-2022)',
  description: `O gráfico compara a taxa de escolarização de meninas em Fortaleza e em outros locais (Brasil, Nordeste e Ceará), de acordo com o grupo de idade. Para isso, selecione filtro desejado acima do gráfico.

A taxa de escolarização representa a quantidade de meninas(os) de determinada idade que estão estudando em relação ao número total de meninas(os) que fazem parte da população. Por exemplo, podemos observar que 92% das meninas fortalezenses de 4 a 5 anos estão estudando e por isso, consequentemente, 8% delas estão fora da escola.

Também é possível visualizar os dados de meninos e o total. Para isso, selecione filtro desejado acima do gráfico.

Ainda, é possível visualizar os dados por grupos de idade. Para isso, selecione filtro desejado acima do gráfico`,
  queryControls: {
    // local: {
    //   type: 'single',
    //   options: LOCAL_OPTIONS,
    //   defaultValue: 'Fortaleza',
    // },
    genero: {
      type: 'single',
      options: ['Fem', 'Masc', 'Total'],
      defaultValue: 'Fem',
    },
    grupo_idade: {
      type: 'single',
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
      defaultValue: '15 a 17 anos',
    },
  },
  numberFormat: {
    style: 'percent',
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
  groupByKey: 'local',
  renderer: 'bars',
  data: {
    src: '/data/09_03.csv',
  },
}

const IND_09_ESCOLARIZACAO = {
  category: 'educacao',
  label: 'Taxa de escolarização',
  highlight: {
    number: '90%',
    unit: 'das meninas',
    text: 'de 15 a 17 anos em Fortaleza eram estudantes em 2022.',
  },
  topBadges: [
    {
      type: 'info',
      text: 'Desde 2018, a taxa de escolarização de meninas de 15 a 17 anos é 4% menor do que a taxa dos meninos.',
    },
    {
      type: 'success',
      text: 'Em 2017 e 2018, a taxa de escolarização de meninas de 15 a 17 anos em Fortaleza esteve acima das taxas nacional e estadual.',
    },
  ],
  topBox: {
    content: `_A "taxa de escolarização" indica a proporção da população de determinada faixa etária que está matriculada no nível educacional apropriado para sua idade, geralmente expressa em porcentagem._

**Por quê esse indicador é importante?**

A "taxa de escolarização" serve para entender como está o nível de universalização da educação, ou seja o nível o acesso à educação e a participação na escola na idade correta em determinada população ou região.
Quando uma pessoa não estuda no nível educacional apropriado para a idade, ela pode enfrentar defasagens educacionais, perdendo a oportunidade de desenvolver habilidades e conhecimentos adequados ao seu estágio de desenvolvimento, o que pode afetar sua capacidade de progredir academicamente no futuro. Além disso, pode resultar em dificuldades de interação social com alunos de idades diferentes, barreiras emocionais, desmotivação que pode gerar desinteresse pela aprendizagem e à falta de engajamento na educação, e também limitações futuras pela defasagem de habilidades e conhecimentos.
Por isso, acompanhar essa evolução é fundamental para identificar desigualdades, pautar políticas de educação, promover a igualdade de oportunidades e compreender necessidades específicas de determinados contextos e comunidades.

**Como melhorar a taxa de escolarização?**

A melhora da taxa de escolarização não é uma tarefa apenas da pasta de educação, mas sim um trabalho conjunto que deve envolver toda a sociedade, assim como todos problema complexo. Para isso, alguns dos caminhos são:
- Garantir acesso à educação, dando condições à população independente da sua condição geográfica, socioeconômica, gênero ou raça, fornecendo transporte e materiais para estudantes.
- Entender os motivos para a não matrícula ou abandono escolar para identificar a existência de barreiras, como por exemplo gravidez na adolescência ou casamento infantil;
- Combater o trabalho infantil e outras barreiras sociais como cuidado de irmãos enquanto pais trabalham;
- Criação de Ambientes Escolares Seguros e Inclusivos;
- Conscientização das oportunidades de desenvolvimento profissional e empoderamento;
- Formação e valorização de professores;
- Monitoramento e avaliação da qualidade do ensino;
- Ampliar e melhorar a infraestrutura escolar;
- Envolvimento dos pais e da comunidade.`,
  },
  bottomBox: {
    content: `- Quantas meninas em idade escolar estavam estudando, em Fortaleza, em 2022?
- Como a taxa de escolarização de meninas de 15 a 17 anos tem evoluído em Fortaleza? E em relação à taxa do Brasil?
- Qual a diferença entre a taxa de escolarização de meninas e meninos em Fortaleza?
- Como a taxa de escolarização de meninas varia entre os diferentes grupos de idade?`,
  },
  sourcesBox: {
    content: `Para o cálculo deste indicador, foram utilizados os dados de:

Pesquisa Nacional por Amostra de Domicílios Contínua (PnadC): https://sidra.ibge.gov.br/tabela/7267`,
  },
  charts: [CHART_01, CHART_02, CHART_03],
}

export default IND_09_ESCOLARIZACAO
