import { useMemo } from 'react'
import { ControlPopover } from '../ControlPopover'
import { InputRadioList } from '../InputRadioList'

export function ControlSingleSelectPopover(props) {
  return (
    <ControlPopover
      {...props}
      label={({ value }) => (value ? `${props.label}: ${value}` : props.label)}
      renderControl={useMemo(
        () =>
          ({ localValue, onSetLocalValue }) => {
            return (
              <InputRadioList
                options={props.options}
                value={localValue}
                onSetValue={onSetLocalValue}
              />
            )
          },
        []
      )}
    />
  )
}
