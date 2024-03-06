import { Flex } from '@radix-ui/themes'
import { ControlMultiSelectPopover } from '../ControlMultiSelectPopover'
import { ControlSingleSelectPopover } from '../ControlSingleSelectPopover'
import styled from 'styled-components'
import { get, uniq } from 'lodash'

const Container = styled.div``

function _fmtOptions({ key, options, data }) {
  return Array.isArray(options)
    ? options.map((opt) =>
        typeof opt === 'string'
          ? {
              label: opt,
              value: opt,
            }
          : opt
      )
    : uniq(data.map((entry) => get(entry, key))).map((opt) => ({
        label: opt,
        value: opt,
      }))
}

export function QueryControls({ spec, data, value, onSetValue }) {
  return (
    <Container>
      <Flex gap="3">
        {Object.keys(spec).map((key) => {
          const keySpec = spec[key]

          switch (keySpec.type) {
            case 'multiple': {
              const options = _fmtOptions({
                key,
                options: keySpec.options,
                data,
              })
              return (
                <ControlMultiSelectPopover
                  key={key}
                  options={options}
                  value={value[key]}
                  onSetValue={(nextKeyValue) => {
                    onSetValue({
                      ...value,
                      [key]: nextKeyValue,
                    })
                  }}
                  label={keySpec.label || key}
                />
              )
            }
            case 'single': {
              const options = _fmtOptions({
                key,
                options: keySpec.options,
                data,
              })

              return (
                <ControlSingleSelectPopover
                  key={key}
                  options={options}
                  value={value[key]}
                  onSetValue={(nextKeyValue) => {
                    onSetValue({
                      ...value,
                      [key]: nextKeyValue,
                    })
                  }}
                  label={keySpec.label || key}
                />
              )
            }
          }
        })}
      </Flex>
    </Container>
  )
}
