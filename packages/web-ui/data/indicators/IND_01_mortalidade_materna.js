const CHART_01 = {
  label: 'Mortalidade materna por local, a cada 100 mil nascidos vivos',
  source: 'DataSUS',
  queryControls: {
    Local: {
      type: 'multiple',
      options: ['Fortaleza', 'Ceará', 'Nordeste', 'Brasil'],
      defaultValue: ['Brasil', 'Fortaleza'],
    },
    'Raça/Cor': {
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
      value: 'Taxa de mortalidade materna',
    },
    dataKey: 'mortalidade_materna',
  },
  groupByKey: 'Local',
  renderer: 'lines',

  data: {
    src: '/data/01_01_taxa_mortalidade_materna.csv',
  },
  description: `O gráfico mostra a taxa de mortalidade materna em Fortaleza ao longo do tempo (1996-2022), a cada 100 mil nascidos vivos.
**Os dados de 2022 são preliminares**

A visualização permite a comparação da taxa de mortalidade materna em Fortaleza com as taxas do Brasil, do Nordeste e do Ceará. Para isso, selecione a opção desejada no botão de filtro acima do gráfico

É possível também visualizar a comparação da taxa de mortalidade materna entre mulheres Amarelas, Brancas, Pretas, Pardas e Indígenas, além dos casos em que a informação da raça da mãe não está disponível (Ignorado). Para isso, selecione a opção desejada no botão de filtro.`,
}

const CHART_02 = {
  label: 'Total de óbitos maternos por raça',
  data: {
    src: '/data/01_02_obito_materno.csv',
  },
  description: `O gráfico mostra a quantidade de óbitos maternos por raça, ao longo do tempo (1996-2021). Nele é possível fazer a comparação da quantidade de óbitos maternos  em Fortaleza entre mulheres Amarelas, Brancas, Pretas, Pardas e Indígenas, além dos casos em que a informação da raça da mãe não está disponível (Ignorado)

Nos botões acima do gráfico, também é possível selecionar a visualização dos dados de outros locais (Brasil, Nordeste, Ceará e Fortaleza).`,
  queryControls: {
    local: {
      type: 'single',
      options: ['Fortaleza', 'Ceará', 'Nordeste', 'Brasil'],
      defaultValue: 'Fortaleza',
    },
  },

  renderer: 'percentage_areas',
  xAxis: {
    label: {
      value: 'Ano',
    },
    dataKey: 'ano',
  },
  yAxis: {
    label: {
      value: 'Total de óbitos maternos',
    },
    dataKey: 'obito_materno',
  },
  groupByKey: 'raca_cor',
}

const IND_01_mortalidade_materna = {
  label: 'Mortalidade materna',
  category: 'saude',
  highlight: {
    number: '76',
    unit: 'mortes',
    text: 'maternas a cada 100 mil nascidos vivos em 2021',
  },
  leadText:
    'Quantas mulheres morrem durante a gravidez, o parto ou até 42 dias após o término da gestação, a cada 100 mil bebês nascidos vivos em Fortaleza?',
  topBadges: [
    {
      type: 'positive',
      text: `De 2020 e 2021, a Taxa de Mortalidade Materna em Fortaleza diminuiu em 21%.`,
      placement: 'top',
    },
    {
      type: 'alert',
      text: 'Em 2021, das 24 mortes maternas registradas em Fortaleza, 19 foram de mulheres pardas.',
      placement: 'top',
    },
  ],
  topBox: {
    content: `Segundo a Organização Mundial da Saúde, a taxa de mortalidade materna nos mostra quantas mulheres morrem durante a gravidez, o parto ou até 42 dias após o término da gestação em relação a um número de bebês que nascem vivos.  

**Por quê esse indicador é importante?**
As mortes maternas são evitáveis. Para evitá-las, é necessário ter cuidados médicos de qualidade destinados à saúde da mulher. O número de mortes maternas ser alto, pode indicar problemas na qualidade do atendimento médico durante a gravidez e o parto, o que significa que as mulheres grávidas podem não estar recebendo a ajuda necessária para garantir uma gestação segura e um parto saudável. Por isso, esse indicador é importante porque nos ajuda a entender se a saúde das gestantes está sendo priorizada na rede de saúde.

**Como melhorar o indicador de mortalidade materna?**
Para melhorar esse indicador, é essencial garantir que todas as mulheres tenham acesso a cuidados médicos adequados durante a gravidez, incluindo consultas pré-natais regulares (no mínimo, seis consultas de pré-natal, sendo, preferencialmente, uma no primeiro trimestre, duas no segundo trimestre e três no terceiro trimestre da gestação) e assistência qualificada no momento do parto. Dessa forma, é possível trabalhar para reduzir o número de mortes maternas e garantir que mais mães tenham a oportunidade de vivenciar uma gravidez e parto saudáveis.
A OMS estabeleceu como meta reduzir a taxa global de mortalidade materna para menos de 70 mortes a cada 100 mil nascidos até 2030. Hoje, em Fortaleza a taxa está em 76, e no Brasil 117 mortes para cada 100 mil nascidos vivos (2021).

**Por quê usar "a cada 100 mil nascidos vivos" quando falamos em taxa de mortalidade materna?**
Para falar sobre a taxa de mortalidade materna, utilizamos sempre como referência o número de 100 mil nascidos vivos (por exemplo, "30 mil mortes maternas a cada 100 mil nascidos vivos").
Utilizamos esse valor como referência para que seja possível comparar igualmente os números de mortes maternas entre lugares e populações diferentes.`,
  },
  bottomBox: {
    content: `- Qual a taxa de mortalidade materna em Fortaleza, em 2021?
- Qual a taxa de mortalidade materna de mulheres pretas em Fortaleza, em 2021?
- Qual a diferença entre a taxa de mortalidade materna em Fortaleza e no Brasil, em 2021?
- Como a taxa de mortalidade materna em Fortaleza evoluiu ao longo do tempo?
- Como a taxa de mortalidade materna de mulheres pretas em Fortaleza evoluiu ao longo do tempo, em relação à taxa do Ceará?`,
  },

  bottomBadges: [
    {
      type: 'info',
      text: 'Ao longo do tempo, a taxa de mortalidade materna em Fortaleza oscilou muito, com picos e quedas.',
    },
    {
      type: 'alert',
      text: 'Fortaleza esteve acima da média nacional de Taxa de Mortalidade Materna por 10 anos.',
    },
    {
      type: 'success',
      text: 'A Taxa de Mortalidade Materna em Fortaleza esteve abaixo da média estadual ao longo do tempo.',
    },
  ],
  sourcesBox: {
    content: `Para o cálculo deste indicador, foram utilizados os dados de:

Óbitos de mulheres em idade fértil e óbitos maternos - Brasil - Datasus (http://tabnet.datasus.gov.br/cgi/tabcgi.exe?sim/cnv/mat10br.def)

Nascidos vivos - Brasil - Datasus (http://tabnet.datasus.gov.br/cgi/tabcgi.exe?sinasc/cnv/nvuf.def)

Para o texto, foram utilizados:

Organização Pan-Americana da Saúde: https://www.paho.org/pt/topicos/saude-materna#:~:text=A%20maioria%20das%20mortes%20maternas,tratar%20complica%C3%A7%C3%B5es%20s%C3%A3o%20bem%20conhecidas

DataSUS: http://tabnet.datasus.gov.br/tabdata/LivroIDB/2edrev/c03.pdf`,
  },

  charts: [CHART_01, CHART_02],
}

export default IND_01_mortalidade_materna
