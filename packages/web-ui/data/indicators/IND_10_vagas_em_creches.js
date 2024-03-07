import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label: 'Taxa de escolarização por gênero e por local (2016-2022)',
  description: `O gráfico apresenta a proporção de crianças de 0 a 3 anos e de 4 a 5 anos que frequentam creches e escolas em Fortaleza.

A taxa de escolarização representa o número de crianças de determinada idade que estão estudando em relação ao número total de crianças de Fortaleza. Por exemplo, podemos observar que 31% de todas as crianças fortalezenses de 0 a 3 anos frequentavam a creche em 2022, ou seja, 69% das crianças estavam fora das creches.

Também é possível visualizar os dados com recorte de gênero; e para outros locais (Brasil, Nordeste e Ceará). Para isso, selecione filtro desejado acima do gráfico.`,
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
  numberFormat: {
    style: 'percent',
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
  leadText: 'Qual a porcentagem de crianças fortalezenses fora das creches?',
  topBadges: [
    {
      type: 'alert',
      text: 'O número de crianças de 0 a 3 anos matriculadas em nível educacional em 2022 foi 2% menor do que em 2019.',
    },
    {
      type: 'info',
      text: 'O número de crianças de 4 a 5 anos matriculadas em nível educacional apresentou leve queda no anos de 2019 e 2022 em relação a 2018.',
    },
  ],
  topBox: {
    content: `Para compreender a quantidade de vagas em creches faltantes em Fortaleza, foram estudados os dados de "taxa de escolarização", que representa a quantidade de crianças de uma faixa etária específica que estão matriculadas no nível educacional apropriado para sua idade. Os dados apresentados a seguir mostram a quantidade de crianças de 0 a 3 anos que frequentam creches e a quantidade de crianças entre 4 e 5 anos que frequentam a escola de educação infantil.

**Por quê esse indicador é importante?**

Esse indicador é importante pois nos ajuda a, indiretamente, compreender se o número de vagas em creches do município são suficientes para atender todas as mães. Seria importante ter o dado de quantas vagas de creche faltam para crianças na cidade.

Além da importância para o desenvolvimento da educação integral da criança, as creches são políticas importantes para a promoção da equidade de gênero e da participação ativa das mulheres na vida profissional e social, além de ter uma relação direta na redução do trabalho doméstico e de cuidado não remunerado desempenhado majoritariamente por mulheres. A disponibilidade de vagas em creches confiáveis permite que as mulheres retornem ao mercado de trabalho após a maternidade e possam se dedicar mais plenamente às suas carreiras. Além disso, também podem ter um impacto positivo na saúde mental das mulheres, permitindo-lhes equilibrar melhor as diversas demandas de suas vidas.

Políticas de creches eficazes contribuem para uma sociedade mais igualitária, desafiando estereótipos de gênero relacionados ao cuidado infantil e promovendo a ideia de que ambos os pais têm responsabilidades igualitárias na criação dos filhos.`,
  },
  bottomBox: {
    content: `- Como a taxa de escolarização da educação infantil evolui em Fortaleza?
- Quantas crianças fortalezenses de 0 a 3 anos frequentavam a creche em 2022?
- Como a taxa de escolarização evolui em Fortaleza, quando comparada à taxa do Brasil?`,
  },
  sourcesBox: {
    content: `Para o cálculo deste indicador, foram utilizados os dados de:

Pesquisa Nacional por Amostra de Domicílios Contínua (PnadC): https://sidra.ibge.gov.br/tabela/7267
`,
  },
  charts: [CHART_01],
}

export default IND_10_vagas_em_creches
