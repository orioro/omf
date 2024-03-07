import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label: 'Rendimento médio mensal por gênero, por local (2012-2023)',
  description: `O gráfico apresenta e evolução do salário médio mensal, por gênero, por local.

É possível visualizar os dados para outros locais (Ceará, Nordeste e Brasil). Para isso, selecione filtro desejado acima do gráfico.

Esses dados foram retirados da Pnad Contínua Trimestral. O rendimento médio mensal foi obtido por meio da média dos dados de rendimento trimestral do mesmo ano. Por limitação da disponibilidade de dados, para o ano de 2023, foi considerado o rendimento médio mensal dos 3 primeiros trimestres do ano.`,
  queryControls: {
    local: {
      type: 'single',
      options: LOCAL_OPTIONS,
      defaultValue: 'Fortaleza',
    },
    genero: {
      type: 'multiple',
      options: ['Fem', 'Masc', 'Total'],
      defaultValue: ['Fem', 'Masc'],
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
      value: 'renda_media_mensal',
    },
    dataKey: 'renda_media_mensal',
  },
  groupByKey: 'genero',
  renderer: 'lines',
  data: {
    src: '/data/16_01_rendimento.csv',
  },
}

const CHART_02 = {
  label: 'Comparação da renda média em Fortaleza, por raça (2012-2022)',
  description: `O gráfico apresenta a comparação do rendimento médio mensal das mulheres em Fortaleza, por raça.

Também é possível visualizar os dados de homens e da população total; e filtrar os dados por nível de ensino. Para isso, selecione filtro desejado acima do gráfico.`,
  queryControls: {
    genero: {
      type: 'single',
      options: ['Mulher', 'Homem', 'Total'],
      defaultValue: 'Mulher',
    },
    raça: {
      type: 'multiple',
      hidden: true,
      defaultValue: RACA_COR_OPTIONS.filter((opt) => opt !== 'Total'),
    },
    nível_ensino: {
      type: 'single',
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
      value: 'rend_real_habitual',
    },
    dataKey: 'rend_real_habitual',
  },
  groupByKey: 'raça',
  renderer: 'lines',
  data: {
    src: '/data/16_02.csv',
  },
}

const CHART_03 = {
  label: 'Renda média em Fortaleza, por gênero, nível de ensino e raça',
  description: `Rendimento médio mensal em Fortaleza, por nível de ensino. Para visualização correta, selecione as opções dos botões de gênero e raça abaixo.

É possível filtrar os dados por gênero, raça e nível de ensino.

Esses dados foram retirados da Relação Anual de Informações Sociais (RAIS), do Ministério do Trabalho e Emprego.`,
  queryControls: {
    genero: {
      type: 'single',
      options: ['Mulher', 'Homem', 'Total'],
      defaultValue: 'Mulher',
    },
    raça: {
      type: 'single',
      options: RACA_COR_OPTIONS,
      defaultValue: 'Total',
    },
    nível_ensino: {
      type: 'multiple',
      options: [
        'Sem instrução e menos de 1 ano de estudo',
        'Fundamental incompleto ou equivalente',
        'Fundamental completo ou equivalente',
        'Médio incompleto ou equivalente',
        'Médio completo ou equivalente',
        'Superior incompleto ou equivalente',
        'Superior completo',
      ],
      defaultValue: [
        'Fundamental completo ou equivalente',
        'Médio completo ou equivalente',
        'Superior completo',
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
      value: 'rend_real_habitual',
    },
    dataKey: 'rend_real_habitual',
  },
  groupByKey: 'nível_ensino',
  renderer: 'lines',
  data: {
    src: '/data/16_03.csv',
  },
}

const IND_16_desigualdade_salarial = {
  category: 'trabalho',
  label: 'Desigualdade Salarial',
  highlight: {
    number: 'R$ 687',
    unit: 'a menos',
    text: 'no salário mensal das mulheres em relação ao dos homens em 2023.',
  },
  leadText: 'Qual o valor da renda média mensal das mulheres em Fortaleza?',
  topBadges: [
    {
      type: 'alert',
      text: 'Em 2023, mulheres pretas receberam R$1.245 a menos por mês do que as mulheres brancas.',
    },
    {
      type: 'info',
      text: 'Mulheres sem instrução ou com ensino fundamental incompleto receberam por mês em média R$896 em 2022.',
    },
  ],
  topBox: {
    content: `A disparidade salarial é a diferença de salário que existe entre homens e mulheres que ocupam cargos semelhantes ou idênticos em ambientes comparáveis. Os dados de renda média apresentados nos mostram o valor de todos os ganhos financeiros que uma pessoa ou uma população recebe ao longo do período de um mês.

**Por quê esse indicador é importante?**

Esse indicador é importante para evidenciar as desigualdades econômicas que existem entre as mulheres e os homens dentro de uma sociedade. Um homem receber salário maior que uma mulher, mesmo que ela tenha melhor qualificação, escancara o machismo estrutural da sociedade na qual vivemos e reflete a falsa e absurda ideia de que as mulheres são inferiores aos homens e têm menos valor, o que é absolutamente prejudicial. Entre outros efeitos, esse tipo de injustiça perpetua a desigualdade de gênero na sociedade e impacta negativamente a saúde mental de mulheres afetando sua autoestima e causando sentimentos de ansiedade. Além disso, reduz o valor a ser recebido na aposentadoria aumentando a insegurança financeira durante a terceira idade.
A compreensão das disparidades de renda pode informar políticas e programas destinados a capacitar economicamente as mulheres, promovendo o acesso a oportunidades educacionais e profissionais que podem reduzir as desigualdades a longo prazo.
A análise da renda média mensal com recorte de gênero é essencial para promover a igualdade de oportunidades, combater estereótipos de gênero e contribuir para o desenvolvimento social e econômico sustentável.

**Como melhorar este indicador?**

São algumas ações para que mulheres e homens recebam salários mais equitativos:
- Educar e conscientizar empregadores e a sociedade sobre a importância e reflexão sobre o tema;
- Estimular transparência salarial no ambiente de trabalho;
- Estabelecer licença parental equitativa para homens e mulheres; e
- Formular políticas públicas para que o trabalho do cuidado não remunerado passe a ser remunerado.`,
  },
  bottomBox: {
    content: `- Qual é a renda mensal que as mulheres de Fortaleza recebem, em média?
- Qual é a diferença entre a renda média mensal entre homens e mulheres em Fortaleza?
- Como a evolução da renda média mensal das mulheres em Fortaleza evolui em relação às renda média mensal de outros locais?
- Qual o perfil das mulheres com menor valor de renda média mensal em Fortaleza?`,
  },
  sourcesBox: {
    content: `Para o cálculo deste indicador, foram utilizados os dados de:

Relação Anuai de Informações Sociais (RAIS), do Ministério do Trabalho e Emprego

Pesquisa Nacional por Amostra de Domicílios Contínua Trimestral (PnadC/T): https://sidra.ibge.gov.br/pesquisa/pnadct/tabelas`,
  },
  charts: [CHART_01, CHART_02, CHART_03],
}

export default IND_16_desigualdade_salarial
