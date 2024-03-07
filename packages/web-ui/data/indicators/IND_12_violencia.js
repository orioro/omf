import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label:
    'Quantidade de notificações no SUS de casos de violência com vítimas mulheres, por local (2009-2022)',
  description: `O gráfico apresenta a evolução do número de casos de violência não autoprovocada com vítimas mulheres registrados pelo SUS, ao longo do tempo, por local.

Aqui estão disponíveis dados de Fortaleza, Ceará, Nordeste e Brasil. Também é possível visualizar os dados por raça da vítima. Para isso, selecione filtro desejado acima do gráfico.`,
  queryControls: {
    local: {
      type: 'multiple',
      options: LOCAL_OPTIONS,
      defaultValue: ['Fortaleza', 'Ceará'],
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
      value: 'notificacoes_violencia_contra_mulher',
    },
    dataKey: 'notificacoes_violencia_contra_mulher',
  },
  groupByKey: 'local',
  renderer: 'bars',
  data: {
    src: '/data/12_01_violencia.csv',
  },
}

const CHART_02 = {
  label:
    'Quantidade de notificações no SUS de casos de violência com vítimas mulheres, por raça da vítima (2009-2022)',
  description: `O gráfico apresenta a evolução do número de casos de violência não autoprovocada com vítimas mulheres registrados pelo SUS, ao longo do tempo, por raça da vítima.

Também é possível visualizar os dados para outros locais (Ceará, Nordeste e Brasil). Para isso, selecione filtro desejado acima do gráfico.`,
  queryControls: {
    local: {
      type: 'single',
      options: LOCAL_OPTIONS,
      defaultValue: 'Fortaleza',
    },
    raca_cor: {
      type: 'multiple',
      hidden: true,
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
      value: 'notificacoes_violencia_contra_mulher',
    },
    dataKey: 'notificacoes_violencia_contra_mulher',
  },
  groupByKey: 'raca_cor',
  renderer: 'percentage_areas',
  data: {
    src: '/data/12_02.csv',
  },
}

const CHART_03 = {
  label:
    'Quantidade de notificações no SUS de casos de violência com vítimas mulheres, por autor da violência (2009-2022)',
  description: `O gráfico apresenta a evolução do número de casos de violência não autoprovocada com vítimas mulheres registrados pelo SUS, ao longo do tempo, pelo tipo de relação da vítima com o autor da violência.

Também é possível visualizar os dados para outros locais (Ceará, Nordeste e Brasil). Para isso, selecione filtro desejado acima do gráfico.`,
  queryControls: {
    local: {
      type: 'single',
      options: LOCAL_OPTIONS,
      defaultValue: 'Fortaleza',
    },
    autor_violencia: {
      type: 'multiple',
      hidden: true,
      defaultValue: [
        'Cônjuge',
        'Namorado',
        'Ex-cônjuge',
        'Outros',
        'Ex-namorado',
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
      value: 'numero_notificacoes',
    },
    dataKey: 'numero_notificacoes',
  },
  groupByKey: 'autor_violencia',
  renderer: 'percentage_areas',
  data: {
    src: '/data/12_03.csv',
  },
}

const CHART_04 = {
  label:
    'Número de ocorrências registradas pela Polícia na Lei Maria da Penha (2015-2023)',
  description: `O gráfico apresenta a evolução do número de ocorrências registradas pela polícia do estado do Ceará enquadradas na Lei Maria da Penha ao longo do tempo,  por ano e por local.

Estão disponíveis os dados do Ceará e de Fortaleza. Para isso, selecione filtro desejado acima do gráfico.`,
  queryControls: {
    local: {
      type: 'multiple',
      hidden: true,
      options: LOCAL_OPTIONS,
      defaultValue: ['Fortaleza', 'Ceará'],
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
      value: 'ocorrencias_violencia_domestica',
    },
    dataKey: 'ocorrencias_violencia_domestica',
  },
  groupByKey: 'local',
  renderer: 'lines',
  data: {
    src: '/data/12_04.csv',
  },
}

const IND_12_violencia = {
  category: 'violencia',
  label: 'Violência contra a mulher',
  highlight: {
    number: '77%',
    unit: 'dos casos',
    text: 'de violência registrados no SUS em 2022 tinham como vítima mulheres pretas e pardas.',
  },
  leadText:
    'Quantas mulheres são vítimas de violência contra a mulher em Fortaleza?',
  topBadges: [
    {
      type: 'alert',
      text: '43,5% dos casos de violência contra a mulher registrados em 2022 tiveram como agressor um parceiro ou ex-parceiro íntimo da vítima.',
    },
    {
      type: 'negative',
      text: 'Em 2023, quase 40% das ocorrências enquadradas na Lei Maria da Penha no estado do Ceará foram registradas em Fortaleza.',
    },
  ],
  topBox: {
    content: `_Os dados do SUS sobre violência contra a mulher mostram todos os casos de violência em que mulheres foram vítimas (não autoprovocada) e foram registradas por equipamentos de saúde, como hospitais e postos de saúde.
Os dados de ocorrências na Lei Maria da Penha são os números de Boletins de Ocorrência registrados pela polícia do estado do Ceará como caso de violência doméstica enquadrado por essa Lei._

**Por quê esse indicador é importante?**

Todas as pessoas têm direito à segurança e dignidade, independentemente do seu gênero ou raça. A violência contra as mulheres viola esses direitos fundamentais e impede que as mulheres vivam vidas plenas e livres de medo. O conceito de violência contra a mulher em nossa sociedade gira em torno da agressão física ou sexual, mas ela também pode ser agressão psicológica, moral e patrimonial.  É importante combater quaisquer tipos de violências para que todas as mulheres vivam uma vida digna.
Monitorar a evolução da violência contra a mulher é fundamental para:
- Dar visibilidade da abrangência do problema. Dados detalhados, com local da ocorrência, tipo de agressão, perfil da vítima, perfil do agressor, etc, possibilitam a compreensão da extensão do problema.
- Avaliar a eficácia das políticas públicas e ajustar estratégias de prevenção. Ao compreender as nuances do fenômeno, as pessoas formuladoras de políticas podem desenvolver estratégias direcionadas à promoção da equidade de gênero e à erradicação da violência.

**Como melhorar esse indicador?**

Muitas mulheres deixam de relatar casos de violência por medo de represália, dependência financeira, vergonha, falta de apoio ou por estarem presas aos ciclos de violência. Por isso, pode ser difícil identificar a quantidade correta de casos de violência contra a mulher, que muitas vezes é subnotificada. É importante estimular que casos de violência sejam denunciados para que se tenha uma correta dimensão do problema a ser enfrentado. Para isso, é necessário:
- Garantir que haja espaços seguros e confidenciais onde as mulheres possam relatar a violência sem medo de represálias, que pode incluir linhas diretas de apoio, centros de atendimento a vítimas de violência doméstica e unidades especializadas na aplicação da lei;
- Conscientizar e educar para desafiar estigmas e tabus em torno da violência contra a mulher, informando as mulheres sobre seus direitos e onde procurar ajuda;
- Fornecer apoio empático e não julgador às mulheres que relatam violência, demonstrando compreensão e solidariedade com suas experiências.
- Oferecer variedade de serviços de apoio, incluindo aconselhamento psicológico, assistência jurídica, abrigos seguros e assistência para necessidades básicas, como moradia e finanças.
Cada comunidade e contexto enfrentam desafios únicos relacionados à violência contra a mulher. Uma abordagem estruturada permite a compreensão das necessidades específicas de diferentes grupos, orientando intervenções adequadas e sensíveis.`,
  },
  bottomBadges: [
    {
      type: 'info',
      text: 'Houve um aumento dos casos de violência contra a mulher em Fortaleza e no Ceará em 2022.',
    },
    {
      type: 'info',
      text: 'Em 2022, foram registrados 5.631 casos de violência não autoprovocada com vítimas mulheres em Fortaleza.',
    },
  ],
  bottomBox: {
    content: `- Quantas mulheres foram vítimas de violência em Fortaleza no último ano?
- Quem são os principais autores de violência contra a mulher?
- Como a evolução do número de casos de violência contra mulher em Fortaleza sem compara à evolução dos números estaduais e nacional?`,
  },
  sourcesBox: {
    content: `Para o cálculo deste indicador, foram utilizados os dados de:

Ministério da Saúde/SVS - Sistema de Informação de Agravos de Notificação - Sinan Net: http://tabnet.datasus.gov.br/cgi/deftohtm.exe?sinannet/cnv/violebr.def

Ministério das Mulheres: https://www.gov.br/mulheres/pt-br/acesso-a-informacao/observatorio-brasil-da-igualdade-de-genero/painel-de-indicadores-2/enfrentamento-de-todas-as-formas-de-violencia-contra-as-mulheres


Superintendência de Pesquisa e Estratégia de Segurança Pública - Secretaria de Segurança Pública e Defesa Social - Governo do Estado do Ceará: https://app.powerbi.com/view?r=eyJrIjoiOWVmYzQ2ZTMtNWYyMC00MTYzLWI4MzAtYzIwZjg0MDhiNTRhIiwidCI6IjNlZGViODM5LWY4ZmQtNGRmOS05YjJiLTc2MDAwZjg4MjE4ZCJ9


Sistema Nacional de Informações de Segurança Pública, Prisionais, de Rastreabilidade de Armas e Munições, de Material Genético, de Digitais e de Drogas (Sinesp) - Ministério da Justiça e Segurança Pública: https://app.powerbi.com/view?r=eyJrIjoiYThmMDBkNTYtOGU0Zi00MjUxLWJiMzAtZjFlMmYzYTgwOTBlIiwidCI6ImViMDkwNDIwLTQ0NGMtNDNmNy05MWYyLTRiOGRhNmJmZThlMSJ9`,
  },
  charts: [CHART_01, CHART_02, CHART_03, CHART_04],
}

export default IND_12_violencia
