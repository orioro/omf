import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label: 'Incidência de novos casos de câncer de mama em Fortaleza (1998-2020)',
  description: `O gráfico mostra o número de novos casos de câncer de mama diagnosticados em Fortaleza, ao longo do tempo (1998-2020).

Essa visualização permite a comparação da incidência de casos em Fortaleza com os números  do Brasil, do Nordeste e do Ceará. Para isso, selecione a opção desejada no botão de filtro acima do gráfico.`,
  queryControls: {
    local: {
      type: 'multiple',
      options: LOCAL_OPTIONS,
      defaultValue: ['Fortaleza', 'Brasil'],
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
      value: 'incidencia_cancer_mama',
    },
    dataKey: 'incidencia_cancer_mama',
  },
  groupByKey: 'local',
  renderer: 'lines',
  data: {
    src: '/data/03_01_cancer_mama_casos.csv',
  },
}

const CHART_02 = {
  label:
    'Incidência de novos casos de câncer de mama em Fortaleza e nas outras cidades do Ceará (1996-2020)',
  description: `O gráfico mostra a proporção e o número de novos casos de câncer de mama diagnosticados a cada ano em pacientes mulheres, por local, ao longo do tempo (1996-2020).

A visualização permite a comparação da incidência de casos em Fortaleza com as demais cidades do Ceará.`,

  xAxis: {
    label: {
      value: 'Ano',
    },
    dataKey: 'ano',
  },
  yAxis: {
    label: {
      value: 'incidencia_cancer_mama',
    },
    dataKey: 'incidencia_cancer_mama',
  },
  groupByKey: 'local',
  renderer: 'percentage_areas',
  data: {
    src: '/data/03_02_incidencia_fortaleza_vs_ceara.csv',
  },
}

const CHART_03 = {
  label: 'Incidência de novos casos de câncer de mama, por raça (1999-2020)',
  description: `O gráfico mostra a proporção e o número de novos casos de câncer de mama diagnosticados a cada ano em pacientes mulheres, por raça, ao longo do tempo (1999-2020).

A visualização permite a comparação da incidência de câncer de mama entre mulheres Amarelas, Brancas, Pretas, Pardas e Indígenas, além dos casos em que a informação da raça não está disponível (Ignorado). *Para isso, selecione a opção desejada no botão de filtro acima do gráfico

Nos botões acima do gráfico, também é possível selecionar a visualização dos dados de outros locais (Brasil, Nordeste, Ceará e Fortaleza).`,
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
      value: 'incidencia_cancer_mama',
    },
    dataKey: 'incidencia_cancer_mama',
  },
  groupByKey: 'raca_cor',
  renderer: 'percentage_areas',
  data: {
    src: '/data/03_03_incidencia_raca_cor.csv',
  },
}

const CHART_04 = {
  label: 'Taxa de mortalidade em mulheres por câncer de mama (1979-2022)',
  description: `O gráfico mostra a taxa de mortalidade de mulheres por câncer de mama, por local, ao longo do tempo (1979-2022). O cálculo da taxa é o número de óbitos por neoplasias malignas, por 100 mil habitantes, na população residente em determinado espaço geográfico, no ano considerado.

A visualização permite a comparação da incidência de casos em Fortaleza com os números  do Brasil, do Nordeste e do Ceará. Para isso, selecione a opção desejada no botão de filtro acima do gráfico

A visualização também permite a comparação da taxa de mortalidade entre mulheres Amarelas, Brancas, Pretas, Pardas e Indígenas, além dos casos em que a informação da raça não está disponível (Ignorado). *Para isso, selecione a opção desejada no botão de filtro acima do gráfico`,
  queryControls: {
    local: {
      type: 'multiple',
      options: ['Fortaleza', 'Ceará'],
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
      value: 'taxa_ajustada_mortalidade',
    },
    dataKey: 'taxa_ajustada_mortalidade',
  },
  groupByKey: 'local',
  renderer: 'lines',
  data: {
    src: '/data/03_04_mortalidade.csv',
  },
}

const CHART_05 = {
  label: 'Mortalidade do câncer de mama em mulheres, por raça (1996-2022)',
  description: `O gráfico mostra a proporção e o número de mortes de mulheres causadas por câncer de mama a cada ano, por raça, ao longo do tempo (1996-2022).

Essa visualização permite a comparação da mortalidade do câncer de mama entre mulheres Amarelas, Brancas, Pretas, Pardas e Indígenas, além dos casos em que a informação da raça não está disponível (Ignorado). Para isso, selecione a opção desejada no botão de filtro acima do gráfico

Nos botões acima do gráfico, também é possível selecionar a visualização dos dados de outros locais (Brasil, Nordeste, Ceará e Fortaleza).`,
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
      value: 'mortalidade_cancer_mama',
    },
    dataKey: 'mortalidade_cancer_mama',
  },
  groupByKey: 'raca_cor',
  renderer: 'percentage_areas',
  data: {
    src: '/data/03_05_mortalidade_raca_cor.csv',
  },
}

const IND_03_cancer_mama = {
  category: 'saude',
  label: 'Câncer de mama',
  highlight: {
    number: '1.248',
    unit: 'mulheres',
    text: 'diagnosticadas com câncer de mama em 2020 em Fortaleza.',
  },
  leadText: `Quantos casos de câncer de mama em mulheres são diagnosticados por ano em Fortaleza?
Quantas mortes de mulheres são causadas por câncer de mama em Fortaleza?`,
  topBadges: [
    {
      type: 'alert',
      text: 'A cada 10 mulheres que morrem por câncer de mama em Fortaleza, 5 são pretas e pardas.',
    },
    {
      type: 'alert',
      text: 'Em 2022, 298 mulheres naturais de Fortaleza morreram vítimas de câncer de mama.',
    },
  ],
  topBox: {
    content: `_O câncer de mama se desenvolve a partir da multiplicação anormal de células na mama, podendo se espalhar para outras partes do corpo. 
O câncer de mama é a principal causa de morte de mulheres no Brasil, segundo o Instituto Nacional do Câncer (INCA)_.

**O que causa o câncer de mama?**

O câncer de mama pode ter várias causas, sendo a idade o fator de risco mais significativo, com a maioria dos casos ocorrendo após os 50 anos. Além disso, fatores comportamentais como sedentarismo, consumo de álcool e tabagismo podem aumentar o risco. Fatores relacionados à história reprodutiva e hormonal, como idade da primeira menstruação, gravidez tardia e uso de contraceptivos hormonais, também são relevantes. História familiar, especialmente em idade precoce, também contribuem para o risco.

**Por quê esses indicadores são importantes?**

Esses indicadores são importantes porque nos ajudam a entender se as condições de saúde das mulheres estão sendo bem cuidadas. É importante lembrar que as mortes por câncer de mama são altamente evitáveis, uma vez que 90% dos casos identificados em estágios iniciais possuem cura. Por isso, mulheres morrerem por câncer de mama pode significar que políticas públicas não estão as alcançando a tempo. Acompanhar o número de novos diagnósticos e o número de mortes causadas pelo câncer de mama ajuda a entender como a doença afeta uma determinada comunidade e a planejar formas de prevenção e detecção precoce.

**O que fazer para melhorar os indicadores de incidência e de mortalidade por câncer de mama?**

É necessário adotar uma abordagem abrangente que envolva medidas de prevenção, detecção precoce, tratamento adequado e apoio contínuo às pacientes. Algumas estratégias que podem ajudar são:
- Campanhas de conscientização e educação;
- Acesso facilitado a exames preventivos e garantir acesso a serviços de saúde;
- Melhoria no acesso ao rastreamento e tratamento; e
- Estímulo e promoção de estilos de vida saudáveis.
No Brasil, até 2030, a meta é reduzir em um terço a mortalidade prematura por doenças não transmissíveis via prevenção e tratamento - como é o caso do câncer de mama. Para medir o alcance dessa meta, um dos indicadores é a Taxa de mortalidade por tumores malignos, como é o caso deste tipo de câncer.`,
  },
  bottomBadges: [
    {
      type: 'alert',
      text: 'Em 2020, a cada 10 mulheres diagnosticadas com câncer de mama em Fortaleza, 9 eram pretas e pardas.',
    },
    {
      type: 'info',
      text: 'A maior incidência de câncer de mama em mulheres pretas e pardas é uma tendência constante no Ceará.',
    },
  ],
  bottomBox: {
    content: `-Quantas mulheres foram diagnosticadas com câncer de mama em Fortaleza, em 2021?
- Quantas mortes de mulheres causadas por câncer de mama o foram registradas em Fortaleza, em 2021?
- Qual a incidência de câncer de mama em mulheres pretas, em Fortaleza, em 2021?
- Qual a mortalidade do câncer de mama em mulheres pretas, em Fortaleza, em 2021?
- Qual a diferença entre a incidência de câncer de mama em Fortaleza e no Brasil, em 2021?
- Como a incidência de câncer de mama em Fortaleza evoluiu ao longo do tempo?
- Como a incidência de câncer de mama em mulheres pretas, em Fortaleza, evoluiu ao longo do tempo, em relação ao Ceará?`,
  },
  sourcesBox: {
    content: `Ministério da Saúde/SVS - Sistema de Informação de Agravos de Notificação - Sinan Net (http://tabnet.datasus.gov.br/cgi/deftohtm.exe?sim/cnv/obt10ce.def)

Sistema de Registro Hospitalar de Câncer - SisRHC (https://irhc.inca.gov.br/RHCNet/visualizaTabNetExterno.action)

Atlas da Mortalidade do Câncer - Instituto Nacional do Câncer (https://mortalidade.inca.gov.br/MortalidadeWeb/)

Para o texto, foram utilizados:

Instituto Nacional do Câncer
https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/dados-e-numeros/mortalidade

Conselho Nacional de Saúde
https://conselho.saude.gov.br/ultimas-noticias-cns/3193-cancer-de-mama-prevencao-deteccao-precoce-e-reducao-de-riscos-evitaveis-estao-entre-as-estrategias-para-diminuir-mortalidade#:~:text=O%20C%C3%A2ncer%20de%20mama%20%C3%A9%20uma%20doen%C3%A7a%20multicausal%2C%20por%C3%A9m%20a,por%20meio%20de%20h%C3%A1bitos%20saud%C3%A1veis.`,
  },
  charts: [CHART_01, CHART_02, CHART_03, CHART_04, CHART_05],
}

export default IND_03_cancer_mama
