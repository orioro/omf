import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label:
    'Número de vereadores eleitos para a Câmara Municipal de Vereadores de Fortaleza, por gênero (2000-2020)',
  description: `O gráfico mostra a proporção e o número de vereadores eleitos para a Câmara Municipal de Vereadores de Fortaleza, por gênero do(a) candidato(a).

A visualização permite a comparação entre a quantidade de homens e mulheres eleitos(as) em governos municipais. Também é possível visualizar os dados de outros locais (Brasil, Nordeste e Ceará). Para isso, selecione filtro desejado acima do gráfico.

Também é possível filtrar os dados por raça. Para isso, selecione filtro desejado acima do gráfico.`,
  queryControls: {
    local: {
      type: 'single',
      options: LOCAL_OPTIONS,
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
      value: 'numero_assentos_mulheres',
    },
    dataKey: 'numero_assentos_mulheres',
  },
  groupByKey: 'genero',
  renderer: 'percentage_areas',
  data: {
    src: '/data/08_01_mulheres_politica_assentos.csv',
  },
}

// const CHART_02 = {
//   label: 'Quantidade de assentos ocupados por mulheres em governos municipais, por local (2000-2020)'
// }

const IND_08_MULHERES_POLITICA = {
  category: 'politica',
  label: 'Mulheres na política',
  highlight: {
    number: '7 das 9',
    unit: 'eleitas',
    text: 'na Câmara Municipal em 2020 eram mulheres pretas e pardas.',
  },
  topBadges: [
    {
      type: 'negative',
      text: 'Em 2020, apenas 9 das 43 pessoas eleitas como vereadores na Câmara Municipal eram mulheres.',
    },
    {
      type: 'info',
      text: 'Historicamente, existe, em Fortaleza e no Brasil, grande diferença no número de mulheres e homens eleitos para cargos políticos',
    },
  ],
  topBox: {
    content: `_O número de assentos políticos ocupados por mulheres se refere à quantidade de mulheres que são eleitas para ocupar cargos políticos como de vereadoras, deputadas estaduais, deputadas federais, senadoras, prefeitas, governadoras e presidenta. Em eleições municipais, são disputados cargos de pessoas vereadoras e prefeita(o)._

**Por que esse indicador é importante?**

Historicamente, a sociedade excluiu as mulheres dos espaços de tomada de decisão como a política. Porém, sabemos que haver representatividade é essencial para garantir que os direitos de toda a sociedade sejam protegidos. Quanto mais mulheres na política, maior a probabilidade de existirem pautas que abordem problemas enfrentados por mulheres, como a desigualdade de gênero, saúde reprodutiva e violência contra mulheres.
Ser representada(o) também gera oportunidade de participar do processo político e fortalece o engajamento cívico e a participação democrática. Quando as mulheres se sentem representadas e ouvidas, ficam mais inclinadas a se envolver ativamente na política, votar, protestar, cobrar e contribuir para a vida pública de suas comunidades.
Além disso, a presença de mulheres em cargos políticos inspira outras mulheres a ocuparem posições de liderança em todos os setores da sociedade, e contribui para a construção de uma sociedade que valoriza a diversidade e a igualdade de oportunidades.
Por isso, lugar de mulher é na política!
Esse indicador é importante para nos mostrar como as mulheres estão sendo representadas nos espaços políticos de Fortaleza e garantir que suas vozes sejam ouvidas e consideradas nas decisões que afetam a sociedade. Uma baixa representação de mulheres, sobretudo mulheres negras, pode indicar que existem barreiras sistêmicas para que as mulheres alcancem esses espaços.

**Como melhorar esse indicador?**

Algumas das estratégias que podem ser adotadas para ajudar a melhorar esse indicador são: respeitar e fiscalizar as cotas de gênero nos partidos políticos, promover a educação e a conscientização sobre a importância da participação das mulheres na política desde cedo,  apoiar coletivos feministas e promover mentoria, capacitação e criação de redes de mulheres na política.`,
  },
  bottomBadges: [
    {
      type: 'info',
      text: 'Os dados disponíveis não mostram o perfil das mulheres que ocupam cargos políticos.',
    },
  ],
  bottomBox: {
    content: `- Quantas mulheres foram eleitas vereadoras na eleição municipal de 2020?
- O número de mulheres eleitas para a Câmara Municipal de Fortaleza tem aumentado ou diminuído ao longo do tempo?
- Qual é o perfil das mulheres que são eleitas em Fortaleza?
- Das vereadoras eleitas em Fortaleza em 2020, quantas eram negras? e brancas?`,
  },
  sourcesBox: {
    content: `Para o cálculo deste indicador, foram utilizados os dados de:

Tribunal Superior Eleitoral: https://dadosabertos.tse.jus.br/`,
  },
  charts: [CHART_01],
}

export default IND_08_MULHERES_POLITICA
