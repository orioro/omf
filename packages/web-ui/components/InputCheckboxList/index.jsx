import React from 'react'
import styled from 'styled-components'
import { InputCheckbox } from '../InputCheckbox'
import { uniq } from 'lodash'
import { Flex } from '@radix-ui/themes'

const Container = styled.div``

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`

function addValue(values, value) {
  return uniq([...values, value]).sort()
}

function removeValue(values, value) {
  return values.filter((v) => v !== value)
}

export function InputCheckboxList({
  label,
  options,
  value: listOfValues = [],
  onSetValue,
}) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Flex direction="column" gap="2">
        {options.map((option) => (
          <InputCheckbox
            key={option.value}
            value={listOfValues.includes(option.value)}
            label={option.label}
            onSetValue={(isSelected) =>
              onSetValue(
                isSelected
                  ? addValue(listOfValues, option.value)
                  : removeValue(listOfValues, option.value)
              )
            }
          />
        ))}
      </Flex>
    </Container>
  )
}
