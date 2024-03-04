import React from 'react'
import styled from 'styled-components'

const Container = styled.label`
  display: inline-flex;
  align-items: flex-start;

  > input {
    margin-top: 4px;
  }

  > span {
    margin-left: 8px;
    font-size: 0.875rem;
  }
`

const Input = styled.input``

export function InputCheckbox({ label, value, onSetValue }) {
  return (
    <Container>
      <Input
        type="checkbox"
        checked={value}
        onChange={(e) => {
          onSetValue(e.target.checked)
        }}
      />
      <span>{label}</span>
    </Container>
  )
}
