import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const IDADE_OPTIONS = [
  'Total',
  '14-19',
  '20-29',
  '30-39',
  '40-49',
  '50-59',
  '60-65',
  '66+',
]

const CHART_01 = {
  label:
    'Taxa de desemprego, por local, gênero, grupo de idade e raça (2012-2022)',
  description: `O gráfico apresenta a evolução da porcentagem de mulheres desempregadas por ano.

Aqui estão disponíveis dados de Fortaleza, Ceará, Nordeste e Brasil. Também é possível visualizar os dados por raça, gênero e grupo de idade. Para isso, selecione filtro desejado acima do gráfico.`,
  queryControls: {
    local: {
      type: 'multiple',
      options: LOCAL_OPTIONS,
      defaultValue: ['Fortaleza', 'Brasil'],
    },
    genero: {
      type: 'single',
      options: ['Fem', 'Masc', 'Total'],
      defaultValue: 'Fem',
    },
    idade: {
      type: 'single',
      options: IDADE_OPTIONS,
      defaultValue: 'Total',
    },
    raca_cor: {
      type: 'single',
      options: RACA_COR_OPTIONS,
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
      value: 'taxa_ocupacao',
    },
    dataKey: 'taxa_ocupacao',
  },
  groupByKey: 'local',
  renderer: 'lines',
  data: {
    src: '/data/13_01_taxa_desemprego.csv',
  },
}

const CHART_02 = {
  label:
    'Porcentagem da população de mulheres desempregadas, por raça, idade e local (2012-2022)',
  description: `O gráfico apresenta a porcentagem de mulheres brancas, pretas e pardas desempregadas em relação ao total de mulheres em cada um desses grupos. A pergunta que esse gráfico responde é: Dentre as mulheres brancas, quantas estão desempregadas? Dentre as mulheres pretas, quantas estão desempregadas?

É possível visualizar os dados para outros locais (Ceará, Nordeste e Brasil). Para isso, selecione filtro desejado acima do gráfico.

Também é possível visualizar os dados de homens e da população total; e filtrar os dados por grupo de idade Para isso, selecione filtro desejado acima do gráfico.`,
  numberFormat: {
    style: 'percent',
  },
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
    idade: {
      type: 'single',
      options: IDADE_OPTIONS,
      defaultValue: 'Total',
    },
    raca_cor: {
      type: 'multiple',
      options: RACA_COR_OPTIONS,
      defaultValue: RACA_COR_OPTIONS.filter(
        (opt) => opt !== 'Total' && opt !== 'Ignorado'
      ),
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
      value: 'taxa_ocupacao',
    },
    dataKey: 'taxa_ocupacao',
  },
  groupByKey: 'raca_cor',
  renderer: 'bars',
  data: {
    src: '/data/13_02.csv',
  },
}

const CHART_03 = {
  label: 'Mulheres desempregadas, por grupos de idade (2012-2021)',
  description: `O gráfico apresenta a % de mulheres desempregadas de acordo com seus grupos de idade.

É possível visualizar os dados para outros locais (Ceará, Nordeste e Brasil). Para isso, selecione filtro desejado acima do gráfico.

Também é possível visualizar os dados de homens e da população total; e filtrar os dados por raça Para isso, selecione filtro desejado acima do gráfico.`,
  numberFormat: {
    style: 'percent',
  },

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
    idade: {
      type: 'multiple',
      hidden: true,
      options: IDADE_OPTIONS,
      defaultValue: IDADE_OPTIONS.filter((opt) => opt !== 'Total'),
    },
    raca_cor: {
      type: 'single',
      options: RACA_COR_OPTIONS,
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
      value: 'total_desocupacao',
    },
    dataKey: 'total_desocupacao',
  },
  groupByKey: 'idade',
  renderer: 'percentage_areas',
  data: {
    src: '/data/13_03.csv',
  },
}

const CHART_04 = {
  label:
    'Porcentagem e quantidade de mulheres desempregadas por raça (2012-2022)',
  description: `O gráfico apresenta a porcentagem e quantidade de mulheres desempregadas por raça. Uma das pergunta que esse gráfico responde é: A maioria das mulheres desempregadas se autodeclaram de que raça?

É possível visualizar os dados para outros locais (Ceará, Nordeste e Brasil). Para isso, selecione filtro desejado acima do gráfico.

Também é possível visualizar os dados de homens e da população total; e filtrar os dados por grupo de idade Para isso, selecione filtro desejado acima do gráfico.`,
  numberFormat: {
    style: 'percent',
  },

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
    idade: {
      type: 'single',
      options: IDADE_OPTIONS,
      defaultValue: 'Total',
    },
    raca_cor: {
      type: 'multiple',
      hidden: true,
      options: RACA_COR_OPTIONS,
      defaultValue: RACA_COR_OPTIONS.filter((opt) => opt !== 'Total'),
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
      value: 'total_desocupacao',
    },
    dataKey: 'total_desocupacao',
  },
  groupByKey: 'raca_cor',
  renderer: 'percentage_areas',
  data: {
    src: '/data/13_04.csv',
  },
}

const IND_13_taxa_desemprego = {
  category: 'trabalho',
  label: 'Taxa de desemprego',
  highlight: {
    number: '9%',
    unit: 'das mulheres',
    text: 'economicamente ativas estavam desempregadas em Fortaleza em 2022.',
  },
  leadText: 'Quantas mulheres estão empregadas em Fortaleza?',
  topBadges: [
    {
      type: 'alert',
      text: 'Historicamente, a taxa de desemprego das mulheres pretas e pardas é maior do que as mulheres brancas',
    },
    {
      type: 'positive',
      text: 'Entre 2021 e 2022, houve queda de 11% na taxa de desemprego entre as mulheres de Fortaleza.',
    },
  ],
  topBox: {
    content: `_Os dados de desemprego mostram o número de mulheres não alocadas no mercado profissional no momento em que a pesquisa foi realizada._

**Por quê esse indicador é importante?**

O desemprego afeta diretamente a qualidade de vida das pessoas. Pode levar a dificuldades financeiras, estresse mental e até problemas de saúde. Monitorar os níveis de desemprego ajuda a entender o impacto social das condições econômicas da população.
A presença de mulheres no mercado de trabalho é fundamental para expandir sua liberdade e autonomia econômica, que pode influenciar em outras questões como diminuir a dependência financeira de homens e romper com ciclos de violência. Além de promover o empoderamento feminino, também contribui para uma mudança nas dinâmicas de poder e influência na sociedade.
Ainda, um equilíbrio adequado entre homens e mulheres no mercado profissional é um sinal de uma sociedade que valoriza e promove oportunidades iguais para ambos os sexos.

**Como melhorar esse indicador?**

Todo problema complexo, como é o caso do desemprego de mulheres, requer uma solução com abordagem multifacetada e intersetorial. Algumas das possibilidades são:
- Investir em educação, treinamento e capacitação com as habilidades necessárias para os empregos disponíveis no mercado, incluindo reciclagem de habilidades para trabalhadores desempregados ou subempregados e programas de treinamento vocacional;
- Promover políticas de flexibilidade no mercado de trabalho, como horários de trabalho flexíveis, trabalho remoto e contratos temporários, para estimular oportunidades de emprego para certos grupos, como mães;
- Desenvolver políticas de proteção social como seguro-desemprego, assistência social e programas de segurança alimentar, pode fornecer um amortecedor para os as mulheres durante períodos de desemprego e ajudá-las a encontrar emprego de forma mais eficaz;
- Rede de apoio e mentoria específicos para mulheres desempregadas pode fornecer suporte emocional, orientação e oportunidades de networking, que são fundamentais para ajudá-las a encontrar emprego;
- Políticas de inclusão de mulheres em setores tradicionalmente masculinos como tecnologia, engenharia e construção, por meio de programas de capacitação e políticas de diversidade, pode expandir as oportunidades de emprego para mulheres.
Destaca-se a importância de se realizar analises com recortes, por exemplo raça e idade, para uma formulação de políticas públicas especificas o grupo de mulheres mais afetado pelo desemprego.`,
  },
  bottomBadges: [
    {
      type: 'info',
      text: 'As mulheres jovens de 20 a 29 anos representam a maioria das mulheres desempregadas em Fortaleza.',
    },
  ],
  bottomBox: {
    content: `- Quantas mulheres estavam desempregadas no último ano, em Fortaleza?
- Como a taxa de desemprego de mulheres evoluiu em Fortaleza ao longo dos anos?
- Como a taxa de desemprego de mulheres em Fortaleza se compara à taxa nacional?
- Qual é o perfil das mulheres desempregadas em Fortaleza?`,
  },
  sourcesBox: {
    content: `Para o cálculo deste indicador, foram utilizados os dados de:

Pesquisa Nacional por Amostra de Domicílios Contínua (PnadC): https://sidra.ibge.gov.br/tabela/7267`,
  },
  charts: [CHART_01, CHART_02, CHART_03, CHART_04],
}

export default IND_13_taxa_desemprego
