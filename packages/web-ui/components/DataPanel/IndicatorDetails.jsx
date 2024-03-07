import { Heading } from '@radix-ui/themes'
import { DataView } from '../DataView'
import { DefaultTheme } from '../DefaultTheme'
import styled from 'styled-components'
import { ExpandableContentBox } from '../ExpandableContentBox'
import { MarkdownContent } from '../MarkdownContent'
import { BadgeList } from '../BadgeList'

const Container = styled.div`
  color: var(--roxo);
  user-select: text;
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

        {indicator.leadText && (
          <MarkdownContent>{indicator.leadText}</MarkdownContent>
        )}

        {Array.isArray(indicator.topBadges) &&
          indicator.topBadges.length > 0 && (
            <BadgeList badges={indicator.topBadges} />
          )}

        {indicator.topBox && (
          <ExpandableContentBox
            summary="O que esse indicador significa?"
            {...indicator.topBox}
          />
        )}

        {Array.isArray(indicator.charts) &&
          indicator.charts.map((spec, index) => (
            <DataView
              key={index}
              spec={spec}
              additionalChartOptions={{
                alwaysActive: index === 0,
              }}
            />
          ))}

        {Array.isArray(indicator.bottomBadges) &&
          indicator.bottomBadges.length > 0 && (
            <>
              <Heading as="h2">
                O que estes dados mostram sobre Fortaleza?
              </Heading>
              <BadgeList badges={indicator.bottomBadges} />
            </>
          )}

        {indicator.bottomBox && (
          <ExpandableContentBox
            summary="Quais perguntas esse indicador pode nos ajudar a responder?"
            {...indicator.bottomBox}
          />
        )}

        {indicator.sourcesBox && (
          <ExpandableContentBox summary="Fontes" {...indicator.sourcesBox} />
        )}
      </Container>
    </DefaultTheme>
  )
}
