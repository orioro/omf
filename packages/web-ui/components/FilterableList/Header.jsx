import React, { useMemo } from 'react'
import styled from 'styled-components'
import { ControlMultiSelectPopover } from '../ControlMultiSelectPopover'
import { Row, RowItem } from './Row'
import { get, uniq } from 'lodash'

const Container = styled.header`
  > ${Row} {
    flex-direction: row;

    > * + * {
      margin-top: 0;
      margin-left: 20px;
    }
  }
`

function FilterColumnHeader({ data, colDef, filter, onSetFilter }) {
  const options = useMemo(
    () =>
      get(colDef, 'filter.options') ||
      uniq(data.map((item) => get(item, colDef.key))).map((value) => ({
        label: value,
        value,
      })),
    [colDef, data]
  )

  return (
    <ControlMultiSelectPopover
      value={filter[colDef.key]}
      onSetValue={(value) =>
        onSetFilter({
          ...filter,
          [colDef.key]: value,
        })
      }
      label={({ value }) => colDef.header}
      options={options}
      buttonProps={{
        variant: 'ghost',
        style: {
          fontSize: '1em',
        },
      }}
    />
  )
}

export function Header({ data, colDefs, filter, onSetFilter }) {
  return (
    <Container>
      <Row>
        {colDefs.map((def, index) => {
          return (
            <RowItem
              key={def.key || index}
              $width={def.width}
              $flexGrow={def.flexGrow}
              $flexShrink={def.flexShrink}
              $desktopOnly={!def.filter}
            >
              {def.filter ? (
                <FilterColumnHeader
                  data={data}
                  filter={def.filter}
                  onSetFilter={onSetFilter}
                  colDef={def}
                />
              ) : (
                def.header
              )}
            </RowItem>
          )
        })}
      </Row>
    </Container>
  )
}
