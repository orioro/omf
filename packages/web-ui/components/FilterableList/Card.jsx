import { get } from 'lodash'
import styled from 'styled-components'
import { Row, RowItem } from './Row'

const Container = styled.div`
  border-radius: 4px;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  color: var(--roxo);
`

export function Card({ item, colDefs }) {
  return (
    <Container>
      <Row>
        {colDefs.map((def, index) => {
          const value = get(item, def.key)
          const contents =
            typeof def.render === 'function'
              ? def.render({ item, value })
              : value

          return (
            <RowItem
              key={def.key || index}
              $width={def.width}
              $flexGrow={def.flexGrow}
              $flexShrink={def.flexShrink}
            >
              {contents}
            </RowItem>
          )
        })}
      </Row>
    </Container>
  )
}
