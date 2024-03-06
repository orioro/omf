import { Heading } from '@radix-ui/themes'
import { DataView } from '../DataView'
import { DefaultTheme } from '../DefaultTheme'
import styled from 'styled-components'

const Container = styled.div`
  > * + * {
    margin-top: 30px;
  }
`

export function IndicatorDetails({ indicator }) {
  return (
    <DefaultTheme
      accentColor="roxo"
      grayColor="sand"
      scaling="100%"
      radius="small"
    >
      <Container>
        <Heading as="h2">{indicator.label}</Heading>

        {indicator.charts.map((spec, index) => (
          <DataView key={index} spec={spec} />
        ))}
      </Container>
    </DefaultTheme>
  )
}
