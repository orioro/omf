import { Button, Container, Flex, Section } from '@radix-ui/themes'

import { useQuery } from '@tanstack/react-query'
import { FilterableList } from '@/components/FilterableList'
import { useMemo } from 'react'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import { OpenInNew } from '@mui/icons-material'
import { fetchCSV } from '@/lib'

const DocumentsInner = () => {
  const dataQuery = useQuery({
    queryKey: ['Documents'],
    queryFn: () => fetchCSV('/biblioteca/index.csv'),
  })

  const colDefs = useMemo(
    () =>
      dataQuery.data
        ? [
            {
              key: 'Formatos (cartilha, recomendação, música, vídeo, etc)',
              header: (
                <>
                  <InsertDriveFileOutlinedIcon /> Formato
                </>
              ),
              render: ({ value }) => {
                switch (value) {
                  case 'Livro': {
                    return (
                      <Flex gap="2" align="center">
                        <img width="24" src="/biblioteca/icon/livro.svg" />
                        Livro
                      </Flex>
                    )
                  }
                  case 'Cartilha': {
                    return (
                      <Flex gap="2" align="center">
                        <img width="24" src="/biblioteca/icon/cartilha.svg" />
                        Cartilha
                      </Flex>
                    )
                  }
                  case 'Dossiê': {
                    return (
                      <Flex gap="2" align="center">
                        <img width="24" src="/biblioteca/icon/dossie.svg" />
                        Dossiê
                      </Flex>
                    )
                  }
                  default:
                  case 'Artigo': {
                    return (
                      <Flex gap="2" align="center">
                        <img width="24" src="/biblioteca/icon/artigo.svg" />
                        Artigo
                      </Flex>
                    )
                  }
                }
              },
              filter: true,
              width: '120px',
            },
            {
              key: 'Categoria',
              header: <>Categorias</>,
              width: '120px',
              filter: true,
            },
            {
              key: 'Título',
              header: <>Título</>,
              render: ({ value }) => <strong>{value}</strong>,
              width: '400px',
              flexShrink: 1,
              flexGrow: 1,
            },
            {
              key: 'Autoria',
              header: <>Autoria</>,
              width: '200px',
            },
            {
              header: null,
              width: '100px',
              render: ({ item }) => {
                const href = item['ID_arquivo (final)']
                  ? `/biblioteca/arquivos/${item['ID_arquivo (final)']}`
                  : item['Endereço website']

                return (
                  href && (
                    <Button asChild variant="soft">
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        Acessar <OpenInNew />
                      </a>
                    </Button>
                  )
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

export function Documents({}) {
  return (
    <Section
      id="inicio"
      style={{
        paddingTop: 0,
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
        <DocumentsInner />
      </Container>
    </Section>
  )
}
