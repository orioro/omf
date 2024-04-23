import { Box, Container, Flex, Heading, Inset, Section } from '@radix-ui/themes'
import { MarkdownContent } from '@/components/MarkdownContent'

export function Intro({}) {
  return (
    <Section
      id="inicio"
      style={{
        paddingTop: 90,
        backgroundColor: 'var(--roxo-light)',
        // backgroundColor: 'var(--mostarda-bg)',
        color: 'white',
      }}
    >
      <Container
        px={{
          initial: '5',
          md: '9',
        }}
      >
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
              sm: '50%',
            }}
          >
            <Heading size={{ initial: '8', sm: '9' }} as="h1" mb="8">
              Observatório da Mulher de Fortaleza
            </Heading>
            <MarkdownContent>
              {`O Observatório da Mulher de Fortaleza é um instrumento que coleta e disponibiliza indicadores dedicados à promoção dos direitos e bem-estar das mulheres na cidade. A iniciativa nasce com o propósito de trazer justiça e reduzir as desigualdades de gênero a partir de amostra e análise de dados.

Temos como meta influenciar e aproximar pesquisadores, tomadores de decisão e cidadãs para pautar e desenhar políticas públicas, sempre considerando as questões de gênero na sua formulação e implementação.

**Nosso grande sonho é que a igualdade esteja no centro das ações governamentais**.`}
            </MarkdownContent>
          </Box>
          <Box
            width={{
              initial: '100%',
              sm: '50%',
            }}
          >
            <img src="/img/home/maria_da_penha.jpeg" />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}
