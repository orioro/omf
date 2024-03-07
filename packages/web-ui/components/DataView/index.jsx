import { Heading } from '@radix-ui/themes'
import styled from 'styled-components'
import { QueryControls } from './QueryControls'
import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { dsvFormat } from 'd3-dsv'
import { ChartDataSeries, groupEntries } from '../ChartDataSeries'
import { Details } from './Details'

const Container = styled.div`
  > * + * {
    margin-top: 20px;
  }
`

function _entryMatchesQuery({ entry, queryControls = {}, query }) {
  return Object.keys(queryControls).every((key) => {
    const targetValue = query[key]
    const entryValue = entry[key]

    switch (queryControls[key].type) {
      case 'multiple': {
        if (!Array.isArray(targetValue) || targetValue.length === 0) {
          return true
        } else {
          return targetValue.includes(entryValue)
        }
      }
      case 'single': {
        if (!targetValue) {
          return true
        } else {
          return targetValue === entryValue
        }
      }
    }
  })
}

export function DataView({ spec, additionalChartOptions = {} }) {
  const { label, queryControls, xAxis, yAxis, groupByKey } = spec

  const [query, setQuery] = useState(
    queryControls
      ? Object.keys(queryControls).reduce(
          (acc, key) => ({
            ...acc,
            [key]: queryControls[key].defaultValue,
          }),
          {}
        )
      : {}
  )

  const dataQuery = useQuery({
    queryKey: [spec.data.src],
    queryFn: async function () {
      const response = await fetch(spec.data.src)
      return dsvFormat(',').parse(await response.text())
    },
  })

  const chartOptions = useMemo(() => {
    if (!dataQuery.data) {
      return null
    }

    const filteredData = dataQuery.data.filter((entry) =>
      _entryMatchesQuery({
        entry,
        query,
        queryControls,
      })
    )

    return {
      xAxis,
      yAxis,
      ...groupEntries(
        {
          xAxis,
          yAxis,
          groupByKey,
        },
        filteredData
      ),
    }
  }, [query, dataQuery.data])

  return (
    <Container>
      <div>
        <Heading as="h3" size="4">
          {label}
        </Heading>
        <span style={{ fontSize: '.8rem' }}>Fonte: {spec.source}</span>
      </div>

      {queryControls && dataQuery.data && (
        <QueryControls
          spec={queryControls}
          value={query}
          onSetValue={setQuery}
          data={dataQuery.data}
        />
      )}

      {chartOptions && (
        <ChartDataSeries
          renderer={spec.renderer}
          {...spec}
          {...chartOptions}
          {...additionalChartOptions}
        />
      )}

      <Details description={spec.description} downloadUrl={spec.data.src} />
    </Container>
  )
}
