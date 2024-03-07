import { LOCAL_OPTIONS, RACA_COR_OPTIONS } from './util'

const CHART_01 = {
  label: 'Casos de feminicídio por local (2018-2023)',
  description: `O gráfico mostra a proporção e o número de casos de feminicídio registrados por ano, por local, ao longo do tempo (2018-2023).

A visualização permite a comparação do número de casos em Fortaleza com as outras cidades do Ceará.`,
  xAxis: {
    label: {
      value: 'Ano',
    },
    dataKey: 'ano',
  },
  yAxis: {
    label: {
      value: 'casos_feminicidio',
    },
    dataKey: 'casos_feminicidio',
  },
  groupByKey: 'local',
  renderer: 'percentage_areas',
  data: {
    src: '/data/04_01_feminicidio_fortaleza_vs_ceara.csv',
  },
}

const CHART_02 = {
  label: 'Casos de feminicídio por local e raça (2018-2023)',
  description: `O gráfico mostra o número de casos de feminicídio ocorridos por ano e por raça, ao longo do tempo (1999-2020). Porém, a falta de dados disponíveis de raça da vítima torna a leitura e compreensão dos dados incompleta.

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
      value: 'casos_feminicidio',
    },
    dataKey: 'casos_feminicidio',
  },
  groupByKey: 'raca_cor',
  renderer: 'percentage_areas',
  data: {
    src: '/data/04_02_feminicidio_raca_cor.csv',
  },
}

const IND_04_feminicidio = {
  category: 'violencia',
  label: 'Feminicídio',
  highlight: {
    number: '24%',
    unit: 'das mortes',
    text: 'por feminicídio no Ceará ocorreram em Fortaleza.',
  },
  leadText: 'Quantos casos de feminicídio ocorrem por ano em Fortaleza?',
  topBadges: [
    {
      type: 'alert',
      text: 'Os casos de feminicídio em Fortaleza representam 24% dos registrados no Ceará em 2023.',
    },
    {
      type: 'negative',
      text: 'Em 2022 e 2023, Fortaleza teve um aumento de 11% dos casos de feminicídio',
    },
  ],
  topBox: {
    content: `_O grau mais alto de violência contra uma mulher é o feminicídio, que é o seu assassinato por conta do seu gênero. É a forma mais extrema e letal de violência, pois a vida de uma pessoa é tirada literalmente apenas por ser mulher ou menina_.

**Por quê esse indicador é importante?**
Monitorar dados de feminicídio é fundamental para se ter uma leitura da extensão da violência contra mulheres e meninas em suas variadas localidades e recortes como de raça. Acompanhar o número de casos permite também avaliar a eficácia das políticas de combate à violência de gênero, direcionar medidas de prevenção e proteção às vítimas e indicar pontos para melhorias em políticas públicas. 

**Como melhorar o indicador de feminicídio?**
Sendo o feminicídio uma temática complexa, é necessária uma coordenação intersetorial para alcançar uma transformação significativa, no lugar de intervenções isoladas. A seguir estão esboçadas algumas das ações possíveis:
- **Programas educacionais e de conscientização:** envolver meninos e homens na discussão para refletirem sobre o papel da masculinidade na perpetuação do feminicídio e para desconstruírem ideias prejudiciais de masculinidade que promovem o controle, a dominação e a violência como formas de afirmação de poder. Para meninas e mulheres, é importante oferecer educação e conscientização para que consigam reconhecer sinais de perigo, saibam onde e como buscar ajuda e tomem medidas para proteger a si mesmas e a outras mulheres.
- **O monitoramento e redução da violência doméstica desempenha** um papel crucial na prevenção do feminicídio, pois muitos casos têm suas raízes em relacionamentos abusivos e violentos, e a violência doméstica é uma das principais causas e indicadores de risco para futuros atos letais.
- **Capacitação e Sensibilização de Profissionais** da área da saúde, jurídica, segurança pública e serviços sociais para reconhecerem os sinais de violência de gênero e responderem de forma adequada e sensível garantindo que as vítimas recebam o acolhimento e apoio necessário. É importante também que seja identificada e registrada corretamente quando uma morte se enquadra em caso de feminicídio, para que não haja subnotificação de casos.
- **Melhorar a coleta e qualidade de dados sobre feminicídio**, incluindo a identificação correta, a análise das circunstâncias e fatores associados, pode fornecer informações mais precisas para informar políticas e programas de prevenção.`,
  },
  bottomBadges: [
    {
      type: 'negative',
      text: 'Em 2022 e 2023, o Ceará teve um aumento de 44% nos casos registrados de feminicídio.',
    },
    {
      type: 'alert',
      text: 'A coleta e divulgação de dados sobre os casos de feminicídio precisam ser aprimorados pelo Poder Público, especialmente dados de raça da vítima.',
    },
    {
      type: 'info',
      text: 'Os dados disponíveis de feminicídio não registram o perfil das vítimas e de seus agressores.',
    },
  ],
  bottomBox: {
    content: `- Quantas mulheres foram vítimas de feminicídio em Fortaleza, em 2023?
- Qual é o perfil das mulheres vítimas de feminicídio em Fortaleza?
- Como o número de casos de feminicídios em Fortaleza evoluiu ao longo do tempo em relação aos dados do Brasil?
- Como os números de casos de feminicídios em Fortaleza se comparam ao número de casos no Ceará?`,
  },
  sourcesBox: {
    content: `Superintendência de Pesquisa e Estratégia de Segurança Pública - Secretaria de Segurança Pública e Defesa Social - Governo do Estado do Ceará - disponível em https://app.powerbi.com/view?r=eyJrIjoiOWVmYzQ2ZTMtNWYyMC00MTYzLWI4MzAtYzIwZjg0MDhiNTRhIiwidCI6IjNlZGViODM5LWY4ZmQtNGRmOS05YjJiLTc2MDAwZjg4MjE4ZCJ9

Sistema Nacional de Informações de Segurança Pública, Prisionais, de Rastreabilidade de Armas e Munições, de Material Genético, de Digitais e de Drogas (Sinesp) - Ministério da Justiça e Segurança Pública - disponível em https://app.powerbi.com/view?r=eyJrIjoiYThmMDBkNTYtOGU0Zi00MjUxLWJiMzAtZjFlMmYzYTgwOTBlIiwidCI6ImViMDkwNDIwLTQ0NGMtNDNmNy05MWYyLTRiOGRhNmJmZThlMSJ9

Para o texto, foi utilizada a referência:

Lei do Feminicídio (Lei 13.104/15) - disponível em https://www2.camara.leg.br/legin/fed/lei/2015/lei-13104-9-marco-2015-780225-norma-pl.html`
  },
  charts: [CHART_01, CHART_02],
}

export default IND_04_feminicidio
