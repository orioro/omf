import { IndicatorCard } from '../IndicatorCard'
import { IndicatorContainer } from '../IndicatorContainer'

export function IndicatorList({ indicators, onOpenIndicator }) {
  return (
    <IndicatorContainer>
      {indicators.map((indicator) => (
        <IndicatorCard
          key={indicator.id}
          indicator={indicator}
          onClick={() => onOpenIndicator(indicator.id)}
        />
      ))}
    </IndicatorContainer>
  )
}
