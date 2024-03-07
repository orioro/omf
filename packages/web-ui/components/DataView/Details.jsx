import { Download } from '@mui/icons-material'
import { Button, Heading } from '@radix-ui/themes'
import styled from 'styled-components'
import { MarkdownContent } from '../MarkdownContent'

const Container = styled.div`
  display: flex;
`

const Description = styled.div`
  flex-grow: 1;
  background-color: var(--azul);
  padding: 10px;
  border-radius: 4px;
  margin-right: 20px;
`

const Actions = styled.div`
  width: 200px;
  flex-shrink: 0;

  > * {
    width: 100%;
  }
`

export function Details({ description, downloadUrl }) {
  return (
    <Container>
      {description && (
        <Description>
          <MarkdownContent style={{ fontSize: '0.8rem' }}>
            {description}
          </MarkdownContent>
        </Description>
      )}

      <Actions>
        <Button asChild>
          <a href={downloadUrl} target="_blank">
            Baixar dados <Download />
          </a>
        </Button>
      </Actions>
    </Container>
  )
}
