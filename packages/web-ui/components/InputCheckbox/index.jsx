import { Checkbox, Flex, Text } from '@radix-ui/themes'
import React from 'react'

export function InputCheckbox({ label, value, onSetValue }) {
  return (
    <Text as="label" size="2">
      <Flex gap="2">
        <Checkbox checked={value} onCheckedChange={onSetValue} /> {label}
      </Flex>
    </Text>
  )
}
