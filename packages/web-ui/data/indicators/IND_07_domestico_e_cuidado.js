import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label:
    'Média de horas semanais dedicadas a trabalho doméstico e de cuidado, por local, gênero e raça (2016-2022)',
  description: `O gráfico mostra a média de horas gastas na realização de afazeres domésticos ou tarefas de cuidados no próprio domicílio ou em domicílio de parente, por gênero, por local e por raça.

Essa visualização permite a comparação entre os dados de Fortaleza e outros locais (Brasil, Nordeste e Ceará). Para isso, selecione a o filtro desejado acima do gráfico.

Também é possível filtrar os dados por gênero ou por raça. Para isso, selecione o filtro desejado acima do gráfico.`,
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
  },
  xAxis: {
    label: {
      value: 'Ano',
    },
    dataKey: 'ano',
  },
  yAxis: {
    label: {
      value: 'domestico_cuidado_media_horas',
    },
    dataKey: 'domestico_cuidado_media_horas',
  },
  groupByKey: 'local',
  renderer: 'bars',
  data: {
    src: '/data/07_01_domestico_cuidado_media_horas.csv',
  },
}

const CHART_02 = {
  label:
    'Média de horas semanais de trabalho doméstico e de cuidado realizado por mulheres, por raça (2016-2022)',
  description: `O gráfico mostra a média de horas gastas na realização de afazeres domésticos ou tarefas de cuidados no próprio domicílio ou em domicílio de parente, por gênero, por local e por raça.

Essa visualização permite a comparação entre os dados de Fortaleza e outros locais (Brasil, Nordeste e Ceará). Para isso, selecione o filtro desejado acima do gráfico.

Também é possível filtrar os dados por gênero. Para isso, selecione o filtro desejado acima do gráfico.`,
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
    raca_cor: {
      type: 'multiple',
      hidden: true,
      defaultValue: ['Amarela', 'Branca', 'Indígena', 'Parda', 'Preta'],
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
      value: 'domestico_cuidado_media_horas',
    },
    dataKey: 'domestico_cuidado_media_horas',
  },
  groupByKey: 'raca_cor',
  renderer: 'bars',
  data: {
    src: '/data/07_02.csv',
  },
}

const CHART_03 = {
  label:
    'Gráfico da média de horas semanais de trabalho doméstico e de cuidado realizado por gênero, por local e por raça (2016-2022)',
  description: `O gráfico mostra a média de horas gastas na realização de afazeres domésticos no próprio domicílio ou em domicílio de parente; ou tarefas de cuidados de moradores do domicílio ou parentes não moradores, por gênero, por raça e por ano.

Essa visualização permite a comparação entre os dados de Fortaleza e outros locais (Brasil, Nordeste e Ceará). *Para isso, selecione a opção desejada no botão de filtro acima do gráfico.

Também é possível filtrar os dados por raça e por gênero. *Para isso, selecione a opção desejada no botão de filtro acima do gráfico.`,
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
      value: 'domestico_cuidado_media_horas',
    },
    dataKey: 'domestico_cuidado_media_horas',
  },
  groupByKey: 'genero',
  renderer: 'bars',
  data: {
    src: '/data/07_03.csv',
  },
}

const IND_07_DOMESTICO_CUIDADO = {
  category: 'cuidado',
  label: 'Trabalho doméstico e de cuidado',
  highlight: {
    number: '10,3',
    unit: 'h/semanais',
    text: 'gastas a mais por mulheres em tarefas do lar do que homens.',
  },
  topBadges: [
    {
      type: 'alert',
      text: 'A média de horas semanais dedicadas em tarefas domésticas é maior para as população preta e parda: 11,4 horas.',
    },
    {
      type: 'alert',
      text: 'Em 2022, as mulheres pretas e pardas gastaram em média 3,8 horas a mais que mulheres brancas em tarefas domésticas.',
    },
  ],
  topBox: {
    content: `_O trabalho de cuidado diz respeito às atividades remuneradas e não remuneradas relacionadas ao cuidado com a casa e com pessoas (dar banho, fazer comida, faxinar, comprar alimentos, cuidar das roupas, prevenir doenças com boa alimentação e higiene, entre outras atividades). No Brasil, as mulheres trabalham 11 horas a mais por semana em tarefas domésticas e de cuidado do que os homens._

**Por quê esse indicador é importante?**

O trabalho doméstico não remunerado é uma barreira que impede a equidade de gênero, a igualdade de oportunidades no mercado de trabalho e a paridade salarial entre homens e mulheres. Além disso, contribui para a exclusão social, sobrecarga e doenças psicológicas das mulheres.
Esse indicador é fundamental para dar luz à carga desproporcional de tarefas que recai sobre as mulheres, especialmente quando possuem filha(o) ou pessoas idosas em casa.
Segundo uma notícia divulgada pelo IBGE (2022), as mulheres brasileiras que se declararam pretas tinham a maior taxa de realização de afazeres domésticos. Na região nordeste, os homens mostraram a menor taxa de realização desses trabalhos.
É importante romper com a construção social de que é responsabilidade apenas da mulher cuidar do lar, é importante garantir que os homens e a sociedade façam parte desse processo, uma vez que o trabalho doméstico e do cuidado é um recurso social valioso e insubstituível, essencial para o funcionamento das nossas comunidades e fundamental para o progresso econômico e social.

**O que fazer para melhorar este indicador?**

É importante a formulação e implementação de políticas públicas que permitam reduzir e redistribuir o trabalho não remunerado, como por exemplo:
- aumento da quantidade de empregos remunerados na economia de cuidado;
- conscientização, educação e incentivo aos homens para dividir o trabalho de cuidado e o trabalho doméstico;
- expansão da quantidade e horas de funcionamento de creches e escolas de educação infantil, para permitir às mulheres retornar ao mercado de trabalho após o nascimento das(os) filhas(os) e conquistar sua autonomia financeira;
- investir em infraestrutura para fornecer acesso à água, eletricidade, transporte e outras necessidades essenciais, visando reduzir as tarefas domésticas.`,
  },
  bottomBox: {
    content: `- Quantas horas são gastas por semana, em média, pelas mulheres de Fortaleza na realização de tarefas domésticas e de cuidado?
- Qual a diferença entre a quantidade de tempo gasto semanalmente entre mulheres e homens de Fortaleza na realização de tarefas domésticas e de cuidado?
- Qual a diferença entre a quantidade de tempo gasto semanalmente entre mulheres negras e mulheres brancas na realização de tarefas domésticas e de cuidado?
- Qual a tendência da evolução da quantidade de tempo gasto pelas mulheres de Fortaleza em tarefas de trabalho doméstico e de cuidado, em relação à tendência nacional?`,
  },
  sourcesBox: {
    content: `Para o cálculo deste indicador, foram utilizados os dados de:

Pesquisa Nacional por Amostra de Domicílios Contínua (PnadC)

IPEA: https://www.ipea.gov.br/portal/categorias/45-todas-as-noticias/noticias/14024-estudo-aponta-desigualdade-de-genero-no-trabalho-domestico-e-de-cuidados-nao-remunerado-no-brasil

IBGE: https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37621-em-2022-mulheres-dedicaram-9-6-horas-por-semana-a-mais-do-que-os-homens-aos-afazeres-domesticos-ou-ao-cuidado-de-pessoas`,
  },
  charts: [CHART_01, CHART_02, CHART_03],
}

export default IND_07_DOMESTICO_CUIDADO
