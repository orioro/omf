import { LOCAL_OPTIONS } from './util'

const CHART_01 = {
  label:
    'Média de anos de estudo por gênero, por local e por grupo de idade (2016-2022)',
  description: `O gráfico apresenta comparação da média de anos de estudo entre homens e mulheres, por local e por grupo de idade (2016 a 2022).

Os dados também estão disponíveis para outros locais (Brasil, Nordeste e Ceará). Para isso, selecione filtro desejado acima do gráfico.

Também é possível visualizar os dados para grupos de idade específicos. Para isso, selecione filtro desejado acima do gráfico.`,
  queryControls: {
    local: {
      type: 'single',
      options: LOCAL_OPTIONS,
      defaultValue: 'Fortaleza',
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

const CHART_02 = {
  label: 'Nível de escolaridade máximo alcançado, por local (mil pessoas*)',
  description: `O gráfico apresenta os dados de nível de escolaridade máxima alcançado pelas mulheres de Fortaleza.

Os dados também estão disponíveis para outros locais (Brasil, Nordeste e Ceará). Para isso, selecione filtro desejado acima do gráfico.

Também é possível visualizar os dados de homens e total. Para isso, selecione filtro desejado acima do gráfico.

*Os números do gráfico estão em milhares. Por exemplo: 216 no gráfico = 216.000 pessoas`,
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
  },
  xAxis: {
    label: {
      value: 'Ano',
    },
    dataKey: 'ano',
  },
  yAxis: {
    label: {
      value: 'pessoas_nivel_escolaridade',
    },
    dataKey: 'pessoas_nivel_escolaridade',
  },
  groupByKey: 'nivel_escolaridade',
  renderer: 'bars',
  data: {
    src: '/data/11_02.csv',
  },
}

const CHART_03 = {
  label: 'Nível de escolaridade máximo alcançado, por gênero (mil pessoas)',
  description: `O gráfico apresenta a comparação entre o nível de escolaridade máximo alcançado por homens e mulheres em Fortaleza.

Os dados também estão disponíveis para outros locais (Brasil, Nordeste e Ceará). *Para isso, selecione a opção desejada no botão de filtro acima do gráfico.

*Os números do gráfico estão em milhares. Por exemplo: 216 no gráfico = 216.000 pessoas`,
  queryControls: {
    local: {
      type: 'single',
      options: LOCAL_OPTIONS,
      defaultValue: 'Fortaleza',
    },
    genero: {
      type: 'multiple',
      hidden: true,
      defaultValue: ['Fem', 'Masc'],
    },
    nivel_escolaridade: {
      type: 'single',
      options: [
        'Sem instrução e fundamental incompleto ou equivalente',
        'Fundamental completo e médio incompleto ou equivalente',
        'Médio completo ou equivalente e superior incompleto',
        'Superior completo',
      ],
      defaultValue: 'Sem instrução e fundamental incompleto ou equivalente',
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
      value: 'pessoas_nivel_escolaridade',
    },
    dataKey: 'pessoas_nivel_escolaridade',
  },
  groupByKey: 'genero',
  renderer: 'percentage_areas',
  data: {
    src: '/data/11_03.csv',
  },
}

const IND_11_grau_escolaridade = {
  category: 'educacao',
  label: 'Grau de escolaridade',
  highlight: {
    number: '55,3%',
    text: 'de pessoas sem instrução ou ensino incompleto em 2022 eram mulheres',
  },
  leadText: 'Por quantos anos, em média, as mulheres de Fortaleza estudam?',
  topBadges: [
    {
      type: 'positive',
      text: 'Desde 2016, o número de mulheres com ensino médio e superior completo tem aumentado em Fortaleza.',
    },
    {
      type: 'negative',
      text: 'O número de mulheres sem instrução ou com ensino fundamental incompleto aumentou em 7% nos anos de 2019 e 2022.',
    },
  ],
  topBox: {
    content: `_Os dados de anos de estudo mostram a quantidade de tempo que uma pessoa passou em educação formal.
O nível de escolaridade máximo alcançado representa os níveis de educação formal alcançados (ensino fundamental, ensino médio e ensino superior completo/incompleto)._

**Por quê esse indicador é importante?**

No geral, monitorar o grau de escolaridade de uma população pode nos dar pistas de seu desenvolvimento econômico e social. O indicador aqui apresentado é importante pois nos oferece um entendimento do grau de escolaridade ao qual as mulheres de Fortaleza têm acesso.
Observar o grau de escolaridade de uma população pode revelar tendências educacionais, desigualdades, padrões de acesso à educação e o impacto da educação na sociedade. Ao olharmos para esse dado com um recorte de gênero, podemos identificar, por exemplo, desigualdades de gênero no acesso e permanência das mulheres nos estudos.`,
  },
  bottomBadges: [
    {
      type: 'info',
      text: 'De maneira geral, existe pouca diferença entre a média de anos de estudo entre homens e mulheres em Fortaleza.',
    },
  ],
  bottomBox: {
    content: `- Por quantos anos, em média, as mulheres de Fortaleza estudam?
- Qual é a diferença entre a média de anos de estudo entre os homens e as mulheres de Fortaleza?
- Qual o número de mulheres com o ensino médio completo em Fortaleza?
- Qual a evolução do número de mulheres sem instrução ou com ensino fundamental incompleto em Fortaleza?
- Como essa evolução se compara à evolução dos números estaduais e nacionais?`,
  },
  sourcesBox: {
    content: `Para o cálculo deste indicador, foram utilizados os dados de:

Pesquisa Nacional por Amostra de Domicílios Contínua (PnadC): https://sidra.ibge.gov.br/tabela/7267`,
  },
  charts: [CHART_01, CHART_02, CHART_03],
}

export default IND_11_grau_escolaridade
