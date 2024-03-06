import { Box, Container, Flex, Heading, Inset, Section } from '@radix-ui/themes'
import { MarkdownContent } from '@/components/MarkdownContent'
import Grid from '@mui/material/Unstable_Grid2'
import { DataPanel } from '@/components/DataPanel'

export function Data() {
  return (
    <Section
      py="9"
      style={{
        backgroundColor: 'var(--roxo)',
        color: 'white',
      }}
    >
      <Container
        px={{
          initial: '5',
          md: '9',
        }}
      >
        <Grid container spacing={6}>
          <Grid md={8} display="flex" alignItems="center">
            <div>
              <Heading size="9" as="h1" mb="8">
                O que os indicadores nos dizem sobre as mulheres de Fortaleza?
              </Heading>
              <MarkdownContent>
                {`O Painel de Dados mostra 16 indicadores organizados em 7 categorias que representam os principais direitos e bem-estar das mulheres. Esperamos que esta seja uma ferramenta valiosa para compreender melhor as dinâmicas sociais e identificar as áreas de intervenção prioritárias para promover a equidade de gênero em Fortaleza.

Ao clicar em cada cartão, é possível ver mais detalhes sobre aquele indicador, como gráficos, análises e outras informações relevantes.`}
              </MarkdownContent>
            </div>
          </Grid>
          <Grid md={4}>
            <Box mr="-9" mt="-9" mb="-9">
              <img src="/img/home/ilustra_painel.png" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container
        px={{
          initial: '5',
          md: '9',
        }}
      >
        <DataPanel />
      </Container>
    </Section>
  )
}
