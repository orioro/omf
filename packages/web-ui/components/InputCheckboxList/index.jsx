import React from 'react'
import styled from 'styled-components'
import { InputCheckbox } from '../InputCheckbox'
import { uniq } from 'lodash'

const Container = styled.div``

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
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
      <OptionsContainer>
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
      </OptionsContainer>
    </Container>
  )
}
