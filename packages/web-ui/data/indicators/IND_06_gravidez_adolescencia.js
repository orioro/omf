import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label: 'Nascidos vivos',
  queryControls: {
    idade_mae: {
      type: 'multiple',
      options: [
        'Menor de 10 anos',
        '10 a 14 anos',
        '15 a 19 anos',
        'Mais de 20 anos',
        'Ignorado',
        // 'Total',
      ],
      defaultValue: [
        'Menor de 10 anos',
        '10 a 14 anos',
        '15 a 19 anos',
        // 'Mais de 20 anos',
        // 'Ignorado',
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
      value: 'nascidos_vivos',
    },
    dataKey: 'nascidos_vivos',
  },
  groupByKey: 'idade_mae',
  renderer: 'stacked_areas',
  data: {
    src: '/data/06_01_gravidez_adolescencia_nascidos_vivos.csv',
  },
}

const CHART_02 = {
  label: 'Porcentagem de bebês nascidos vivos de mães adolescentes, por local',
  description: `O número apresentado no gráfico significa a porcentagem de bebês nascidos vivos de mães adolescentes de determinadas faixas de idade (10 a 14 anos, 15 anos, 15 anos, 16 anos, 17 anos e 18 anos). Os dados não incluem casos de aborto, gravidez interrompida e óbitos fetais.

Essa visualização permite a comparação entre os dados de Fortaleza e outros locais (Brasil, Nordeste e Ceará). Para isso, selecione o filtro acima do gráfico.

Também é possível filtrar os dados pela idade da mãe. *Para isso, selecione a opção desejada no botão de filtro acima do gráfico.`,

  queryControls: {
    local: {
      type: 'multiple',
      options: LOCAL_OPTIONS,
      defaultValue: ['Fortaleza', 'Brasil'],
    },
    idade_mae: {
      type: 'single',
      options: ['adolescentes', 'não-adolescentes'],
      defaultValue: 'adolescentes',
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
      value: 'porcentagem_nascidos_vivos',
    },
    dataKey: 'porcentagem_nascidos_vivos',
  },
  groupByKey: 'local',
  renderer: 'lines',
  data: {
    src: '/data/06_02_gravidez_adolescencia_nascidos_vivos_por_local.csv',
  },
}

const CHART_03 = {
  label:
    'Proporção e quantidade de nascidos vivos pela idade da mãe, por local',
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
      value: 'nascidos_vivos',
    },
    dataKey: 'nascidos_vivos',
  },
  groupByKey: 'idade_mae',
  renderer: 'percentage_areas',
  data: {
    src: '/data/06_01_gravidez_adolescencia_nascidos_vivos.csv',
  },
}

const IND_06_GRAVIDEZ_ADOLESCENCIA = {
  category: 'saude',
  label: 'Gravidez na Adolescência',
  highlight: {
    number: '2.433',
    unit: 'meninas',
    text: 'com 18 anos  ou menos deram à luz em Fortaleza em 2021.',
  },
  topBadges: [
    {
      type: 'alert',
      text: 'Em 2021, 159 meninas com 15 anos ou menos deram à luz em Fortaleza.',
    },
    {
      type: 'positive',
      text: 'Há uma tendência de queda nos números de gravidez na adolescência, seguindo os dados estaduais, regionais e nacional.',
    },
  ],
  topBox: {
    content: `_A gravidez na adolescência refere-se à gestação ocorrida em jovens com idade entre 10 e 19 anos._

**Por quê esse indicador é importante?**
O indicador de gravidez na adolescência é importante para entender, prevenir e abordar questões relacionadas à saúde sexual e reprodutiva de meninas. A gravidez na adolescência traz uma série de riscos para a gestante, uma vez que adolescentes têm maior probabilidade de desenvolver complicações como pré-eclâmpsia (pressão arterial elevada durante a gravidez), anemia, diabetes gestacional, ter um parto prematuro e desenvolver depressão pós-parto. Além de afetar outras áreas da vida como interrupção da educação formal, limitações nas oportunidades de emprego e maior probabilidade de enfrentar dificuldades financeiras e risco psicossociais.

**Como melhorar o indicador de gravidez na adolescência?**
Sendo esta uma temática complexa, para alcançar uma transformação significativa é necessária uma coordenação intersetorial eficaz, no lugar de intervenções isoladas pelas pastas responsáveis. A seguir estão esboçadas algumas das ações possíveis:
 - Investir em programas educacionais e de prevenção;
- Garantir fácil acesso a métodos contraceptivos;
- Garantir serviços de saúde amigáveis às adolescentes, incluindo capacitação e sensibilização de profissionais de saúde, educação e serviços sociais;
- Melhorar a coleta e qualidade de dados sobre gravidez na adolescência e dados a ela relacionados, possibilitando a qualificação de políticas públicas de educação sexual, planejamento familiar e saúde sexual e reprodutiva para adolescentes.`,
  },
  bottomBox: {
    content: `- Quantos casos de gravidez na adolescência foram registrados em Fortaleza?
- Quantas meninas com menos de 15 anos deram à luz em Fortaleza?
- Qual a tendência no número de casos de gravidez na adolescência em Fortaleza em relação aos números estaduais?
- Em qual idade é mais prevalente o número de casos de gravidez na adolescência?`,
  },
  sourcesBox: {
    content: `Para o cálculo deste indicador, foram utilizados os dados de:

Óbitos fetais - Brasil - Datasus (http://tabnet.datasus.gov.br/cgi/tabcgi.exe?sim/cnv/mat10br.def)

Nascidos vivos - Brasil - Datasus (http://tabnet.datasus.gov.br/cgi/tabcgi.exe?sinasc/cnv/nvuf.def)

Biblioteca virtual em Saúde (https://bvsms.saude.gov.br/01-a-08-02-semana-nacional-de-prevencao-da-gravidez-na-adolescencia-2/)`,
  },
  charts: [CHART_01, CHART_02, CHART_03],
}

export default IND_06_GRAVIDEZ_ADOLESCENCIA
