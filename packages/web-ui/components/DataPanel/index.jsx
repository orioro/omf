import { useMemo, useState } from 'react'
import { Controls } from './Controls'
import { Flex } from '@radix-ui/themes'
import { IndicatorList } from './IndicatorList'
import { IndicatorDetails } from './IndicatorDetails'
import { INDICATORS } from '@/data/indicators'
import { BottomSheet } from '../BottomSheet'

export function DataPanel({}) {
  const [query, setQuery] = useState({
    categories: [],
    textSearch: '',
  })

  const [activeIndicatorId, setActiveIndicatorId] = useState(null)
  const activeIndicator = useMemo(
    () =>
      INDICATORS.find((indicator) => indicator.id === activeIndicatorId) ||
      null,
    [activeIndicatorId]
  )

  return (
    <>
      <Flex direction="column" gap="4">
        <Controls query={query} onSetQuery={setQuery} />
        <IndicatorList
          indicators={INDICATORS}
          onOpenIndicator={(indicatorId) => setActiveIndicatorId(indicatorId)}
        />
      </Flex>

      <BottomSheet
        // isOpen={true}
        isOpen={Boolean(activeIndicatorId)}
        onSetIsOpen={(nextIsOpen) => {
          if (!nextIsOpen) {
            setActiveIndicatorId(null)
          }
        }}
      >
        {activeIndicator && <IndicatorDetails indicator={activeIndicator} />}
      </BottomSheet>
    </>
  )
}
