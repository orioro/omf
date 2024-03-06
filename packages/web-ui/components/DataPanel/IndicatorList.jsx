import { Card } from '@radix-ui/themes'
import styled from 'styled-components'

const Container = styled.div`
  // display: flex;
`

export function IndicatorList({ indicators, onOpenIndicator }) {
  return (
    <>
      <Container>
        {indicators.map((indicator) => (
          <Card
            key={indicator.id}
            onClick={() => onOpenIndicator(indicator.id)}
          >
            {indicator.label}
          </Card>
        ))}
      </Container>
    </>
  )
}
