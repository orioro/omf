import { useMemo } from 'react'
import { ControlPopover } from '../ControlPopover'
import { InputCheckboxList } from '../InputCheckboxList'

export function ControlMultiSelectPopover(props) {
  return (
    <ControlPopover
      {...props}
      label={
        typeof props.label === 'function'
          ? props.label
          : ({ value }) =>
              Array.isArray(value) && value.length > 0 ? (
                <>
                  {props.label}: {value.join(', ')}
                </>
              ) : (
                <>{props.label}: Todos</>
              )
      }
      renderControl={useMemo(
        () =>
          ({ localValue, onSetLocalValue }) => {
            return (
              <InputCheckboxList
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
