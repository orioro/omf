import styled from 'styled-components'
import { MarkdownContent } from '../MarkdownContent'
import { KeyboardArrowDown, InfoOutlined } from '@mui/icons-material'

const StyledDetails = styled.details`
  background-color: var(--azul);
  color: var(--roxo);

  border-radius: 4px;
  padding: 14px 14px 0;

  summary {
    display: flex;
    align-items: center;
    font-weight: bold;
    margin: -14px -14px 0;
    padding: 14px;

    cursor: pointer;

    > * + * {
      margin-left: 10px;
    }
  }

  &[open] {
    padding: 14px;

    summary {
      margin-bottom: 14px;
    }
  }
`

const SummaryCTA = styled.div`
  margin-left: 10px;
  font-size: 0.8rem;
  font-weight: normal;
  display: flex;
  align-items: center;
`

export function ExpandableContentBox({ summary, content }) {
  return (
    <StyledDetails>
      <summary>
        <InfoOutlined style={{ color: 'var(--salmao)' }} />
        <span>{summary}</span>
        <SummaryCTA>
          <span>Saiba mais</span>{' '}
          <KeyboardArrowDown style={{ width: 18, height: 18 }} />
        </SummaryCTA>
      </summary>
      {typeof content === 'string' ? (
        <MarkdownContent>{content}</MarkdownContent>
      ) : (
        content
      )}
    </StyledDetails>
  )
}
