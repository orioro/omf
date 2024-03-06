import { Heading } from '@radix-ui/themes'
import { DataView } from '../DataView'
import { DefaultTheme } from '../DefaultTheme'

export function IndicatorDetails({ indicator }) {
  return (
    <DefaultTheme
      accentColor="roxo"
      grayColor="sand"
      scaling="100%"
      radius="small"
    >
      <div>
        <Heading as="h2">{indicator.label}</Heading>

        {indicator.charts.map((spec, index) => (
          <DataView key={index} spec={spec} />
        ))}
      </div>
    </DefaultTheme>
  )
}
