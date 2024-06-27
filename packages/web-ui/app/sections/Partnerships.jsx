import { Box, Container, Flex, Heading, Inset, Section } from '@radix-ui/themes'
import { MarkdownContent } from '@/components/MarkdownContent'

export function Partnerships({}) {
  return (
    <Section
      id="parcerias"
      style={{
        paddingTop: 90,
        // backgroundColor: 'var(--mostarda-bg)',
        backgroundColor: 'var(--verde)',
        color: 'var(--roxo)',
      }}
    >
      <Container
        px={{
          initial: '5',
          md: '9',
        }}
      >
        <Flex direction="column" gap="9">
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
              <Heading size="8" as="h2" mb="8">
                Parcerias por uma cidade mais igualitária
              </Heading>
              <MarkdownContent>
                {`O Observatório da Mulher de Fortaleza é um projeto desenvolvido pela Prefeitura de Fortaleza, em conjunto com secretarias municipais, institutos e outras atrizes e atores da sociedade civil.

Todo problema complexo exige coordenação entre diferentes setores para se pensar e chegar a uma solução. E para isso, o trabalho em rede é essencial.`}
              </MarkdownContent>
            </Box>
            <Box
              width={{
                initial: '100%',
                sm: '50%',
              }}
            >
              <img src="/img/home/ilustra_parcerias.png" />
            </Box>
          </Flex>
          <Flex
            direction={{
              initial: 'column',
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
              <Heading as="h6" size="2" style={{ marginBottom: 20 }}>
                Idealizadores:
              </Heading>
              <img src="/img/home/parcerias_idealizadores.png" />
            </Box>
          </Flex>
          <Flex
            direction={{
              initial: 'column',
              sm: 'row',
            }}
            gap="9"
            align="center"
          >
{/*            <Box
              width={{
                initial: '100%',
                sm: '50%',
              }}
            >
              <Heading as="h6" size="2" style={{ marginBottom: 20 }}>
                Secretarias parceiras:
              </Heading>
              <img src="/img/home/parcerias_secretarias.png" />
            </Box>*/}
            <Box
              width={{
                initial: '100%',
                sm: '50%',
              }}
            >
              <Heading as="h6" size="2" style={{ marginBottom: 20 }}>
                Parceiros institucionais:
              </Heading>
              <img src="/img/home/parcerias_institucionais.png" />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Section>
  )
}
