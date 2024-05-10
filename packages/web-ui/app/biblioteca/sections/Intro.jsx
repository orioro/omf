import { Box, Container, Flex, Heading, Section } from '@radix-ui/themes'
import { MarkdownContent } from '@/components/MarkdownContent'

export function Intro({}) {
  return (
    <Section
      id="inicio"
      style={{
        paddingTop: 90,
        backgroundColor: 'var(--mostarda-bg)',
        color: 'var(--roxo)',
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
              Biblioteca
            </Heading>
            <MarkdownContent>
              {`O Observatório da Mulher de Fortaleza é um instrumento dedicada à promoção dos direitos e bem-estar das mulheres na cidade. Sua biblioteca foi selecionada e recomendada pela  Coordenadoria Especial de Políticas Públicas para as Mulheres (COPM) e abriga uma seleção de recursos, incluindo livros, dossiês, cartilhas e artigos, que abordam questões relevantes como igualdade de gênero, violência contra a mulher e empoderamento feminino.

Todo o catálogo da biblioteca está disponível para consultas e acessos. Boa leitura!`}
            </MarkdownContent>
          </Box>
          <Box
            width={{
              initial: '100%',
              sm: '50%',
            }}
          >
            <img src="/img/ilustracoes/ilustra_biblioteca.png" />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}
