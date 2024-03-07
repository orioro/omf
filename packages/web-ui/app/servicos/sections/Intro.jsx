import { Box, Container, Flex, Heading, Inset, Section } from '@radix-ui/themes'
import { MarkdownContent } from '@/components/MarkdownContent'

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
            <Box
              width={{
                initial: '100%',
                sm: '50%',
              }}
            >
              <Heading as="h6" size="2" style={{ marginBottom: 20 }}>
                Secretarias parceiras:
              </Heading>
              <img src="/img/home/parcerias_secretarias.png" />
            </Box>
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
