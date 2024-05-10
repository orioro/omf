import { useQuery } from '@tanstack/react-query'
import { csv } from 'd3-fetch'
import { FilterableList } from '@/components/FilterableList'
import { useMemo } from 'react'
import { Button, Container, Flex, Section } from '@radix-ui/themes'
import { OpenInNew } from '@mui/icons-material'
import { MarkdownContent } from '@/components/MarkdownContent'

export const ServicosInner = () => {
  const dataQuery = useQuery({
    queryKey: ['Servicos'],
    queryFn: () => csv('/servicos/index.csv'),
  })

  const colDefs = useMemo(
    () =>
      dataQuery.data
        ? [
            {
              key: 'Categoria',
              header: <>Categorias</>,
              width: '120px',
              filter: true,
            },
            {
              header: <>Equipamento e Serviços Oferecidos </>,
              render: ({ value, item }) => (
                <Flex direction="column" gap="2">
                  <strong>{item['Nome do Serviço']}</strong>
                  <MarkdownContent>
                    {
                      item[
                        'Serviços oferecidos (incluir lista resumida dos serviços oferecidos)'
                      ]
                    }
                  </MarkdownContent>
                </Flex>
              ),
              width: '500px',
              flexShrink: 1,
              flexGrow: 1,
            },
            {
              key: 'Nome do equipamento',
              header: <>Prestado por</>,
              width: '200px',
            },
            {
              header: null,
              width: '150px',
              render: ({ item }) => {
                const href = item['Link para mais informações sobre o serviço']
                const tel = item['Telefone de contato']

                return (
                  <Flex direction="column" gap="3">
                    {href && (
                      <Button asChild variant="soft">
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Acessar <OpenInNew />
                        </a>
                      </Button>
                    )}

                    {tel && (
                      <Flex direction="column" gap="1">
                        <div>Telefone:</div>
                        <div
                          style={{
                            fontSize: '14px',
                            fontWeight: 'bold',
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {tel}
                        </div>
                      </Flex>
                    )}
                  </Flex>
                )
              },
            },
          ]
        : null,
    [dataQuery.data]
  )

  return (
    dataQuery.data && <FilterableList data={dataQuery.data} colDefs={colDefs} />
  )
}

export function Servicos({}) {
  return (
    <Section
      id="inicio"
      style={{
        paddingTop: 0,
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
        <ServicosInner />
      </Container>
    </Section>
  )
}
