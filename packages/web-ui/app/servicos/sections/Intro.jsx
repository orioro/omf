import { Box, Container, Flex, Heading, Inset, Section } from '@radix-ui/themes'
import { MarkdownContent } from '@/components/MarkdownContent'
import { IndicatorContainer } from '@/components/IndicatorContainer'
import { IndicatorCard } from '@/components/IndicatorCard'

const INDICATORS = [
  {
    label: 'Aluguel Social Maria da Penha',
    href: '/servicos/01-aluguel-social-maria-da-penha.pdf',
    highlight: {
      number: 40,
      unit: 'beneficiadas',
      text: 'entre 2022 e 2023 onde 90% delas são mulheres pretas e pardas.',
    },
    category: 'moradia',
  },
  {
    label: 'Projeto Costurando o Futuro',
    href: '/servicos/02-03-autonomia-economica-rompendo-ciclo-da-violencia.pdf',
    highlight: {
      number: 90,
      unit: '% dos 900',
      text: 'participantes do projeto foram ou são mulheres, desde 2022.',
    },
    category: 'trabalho',
  },
  {
    label: 'Programa Nossas Guerreiras',
    href: '/servicos/02-03-autonomia-economica-rompendo-ciclo-da-violencia.pdf',
    highlight: {
      number: '11.169',
      unit: 'mulheres',
      text: 'beneficiadas de 2021 a 2023, para estímulá-las ao empreendedorismo.',
    },
    category: 'trabalho',
  },
  {
    label: 'Casa Abrigo Margarida Alves',
    href: '/servicos/04-casa-abrigo-margarida-alves.pdf',
    highlight: {
      number: '70',
      unit: 'mulheres',
      text: 'abrigadas em razão de risco iminente de morte por violência doméstica.',
    },
    category: 'violencia',
  },
  {
    label: 'Grupo Espec. Maria da Penha',
    href: '/servicos/05-grupo-especializado-maria-da-penha.pdf',
    highlight: {
      number: '1.454',
      unit: 'ações',
      text: 'preventivas ou de intervenção na violência de gênero.',
    },
    category: 'violencia',
  },
  {
    label: 'CRAM – Francisca Clotilde',
    href: '/servicos/06-cram-casa-francisca-clotilde.pdf',
    highlight: {
      number: '11.521',
      unit: 'mulheres',
      text: 'atendidas em 2022 e 2023 pela assistência psicossocial.',
    },
    category: 'violencia',
  },
]

export function Intro({}) {
  return (
    <Section
      style={{
        paddingTop: 90,
        backgroundColor: 'var(--azul)',
        color: 'var(--roxo)',
      }}
    >
      <Container
        px={{
          initial: '5',
          md: '9',
        }}
      >
        <Flex direction="column" gap="9" mb="6">
          <Flex
            direction={{
              initial: 'column-reverse',
              sm: 'row',
            }}
            gap="9"
            align="center"
          >
            <Box
              width={{
                initial: '100%',
                sm: '70%',
              }}
            >
              <Heading size="8" as="h2" mb="8">
                Serviços para Mulheres
              </Heading>
              <MarkdownContent>
                {`A Prefeitura de Fortaleza oferece uma ampla gama de serviços dedicados às mulheres, visando promover seu bem-estar e garantir o acesso a direitos fundamentais. Esses serviços incluem apoio psicológico e jurídico para vítimas de violência doméstica, programas de capacitação profissional e empreendedorismo, além de centros de atendimento à saúde da mulher, que oferecem serviços de prevenção, diagnóstico e tratamento de doenças específicas.

O Observatório da Mulher de Fortaleza listou alguns serviços que a Prefeitura de Fortaleza oferece. Conheça e acesse o site do respectivo serviço.`}
              </MarkdownContent>
            </Box>
            <Box
              width={{
                initial: '100%',
                sm: '30%',
              }}
            >
              <img src="/img/ilustracoes/ilustra_servicos.png" />
            </Box>
          </Flex>
        </Flex>
        <IndicatorContainer>
          {INDICATORS.map((indicator, index) => (
            <a
              href={indicator.href}
              target="_blank"
              rel="noreferrer noopener"
              key={index}
              style={{
                display: 'flex',
              }}
            >
              <IndicatorCard
                clickable={Boolean(indicator.href)}
                indicator={indicator}
              />
            </a>
          ))}
        </IndicatorContainer>
      </Container>
    </Section>
  )
}
