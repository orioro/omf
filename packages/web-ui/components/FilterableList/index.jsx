import styled from 'styled-components'
import { Header } from './Header'
import { useState } from 'react'
import { Card } from './Card'
import { get } from 'lodash'
import { SearchControl } from './SearchControl'

const Container = styled.div`
  > * + * {
    margin-top: 20px;
  }
`

const Body = styled.div`
  > * + * {
    margin-top: 20px;
  }
`

function defaultApplyFilter({ filterValue, value }) {
  if (typeof filterValue === 'undefined' || filterValue === null) {
    return true
  } else if (Array.isArray(filterValue)) {
    return filterValue.length === 0 ? true : filterValue.includes(value)
  } else {
    return filterValue === value
  }
}

export function FilterableList({ data, colDefs }) {
  const [textSearch, setTextSearch] = useState('')
  const [filter, setFilter] = useState({})

  return (
    <Container>
      <SearchControl value={textSearch} onSetValue={setTextSearch} />
      <Header
        data={data}
        colDefs={colDefs}
        filter={filter}
        onSetFilter={setFilter}
      />
      <Body>
        {data
          .filter((item) =>
            colDefs.every((def) => {
              if (!def.filter) {
                return true
              }

              const applyFilter = get(def, 'filter.apply') || defaultApplyFilter

              return applyFilter({
                item,
                value: get(item, def.key),
                filterValue: filter[def.key],
              })
            })
          )
          .filter((item) => {
            return (
              textSearch === '' ||
              Object.entries(item).some(
                ([, value]) =>
                  typeof value !== 'string' ||
                  value.toLowerCase().includes(textSearch.toLowerCase())
              )
            )
          })
          .map((item, index) => (
            <Card key={index} item={item} colDefs={colDefs} />
          ))}
      </Body>
    </Container>
  )
}
