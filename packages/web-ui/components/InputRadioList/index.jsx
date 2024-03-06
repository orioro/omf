import React from 'react'
import { RadioGroup, Flex, Text } from '@radix-ui/themes'
// import styled from 'styled-components'
// import { InputCheckbox } from '../InputCheckbox'
// import { uniq } from 'lodash'

export function InputRadioList({ options, value, onSetValue }) {
  return (
    <RadioGroup.Root value={value} onValueChange={onSetValue}>
      <Flex gap="2" direction="column">
        {options.map((option) => (
          <Text as="label" size="2" key={option.value}>
            <Flex gap="2">
              <RadioGroup.Item value={option.value} /> {option.label}
            </Flex>
          </Text>
        ))}
      </Flex>
    </RadioGroup.Root>
  )
}
