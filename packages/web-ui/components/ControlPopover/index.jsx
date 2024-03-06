import { Button, Popover, AccessibleIcon } from '@radix-ui/themes'
// import { InputCheckboxList } from '../InputCheckboxList'
import { useState } from 'react'

export function ControlPopover({
  value,
  onSetValue,
  renderControl,
  children,
  label,
  ...props
}) {
  const [open, setIsOpen] = useState(false)
  const [localValue, setLocalValue] = useState(value)

  return (
    <Popover.Root
      open={open}
      onOpenChange={(nextOpenValue) => {
        if (nextOpenValue === false) {
          setLocalValue(value)
        }
        setIsOpen(nextOpenValue)
      }}
    >
      <Popover.Trigger>
        <Button color="mostarda">
          {typeof label === 'function'
            ? label({
                value,
              })
            : label}
        </Button>
      </Popover.Trigger>
      <Popover.Content
        style={{
          zIndex: 999,
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSetValue(localValue)
            setIsOpen(false)
          }}
        >
          {renderControl({
            localValue,
            onSetLocalValue: setLocalValue,
            ...props,
          })}
          <Button type="submit">Aplicar</Button>
        </form>
      </Popover.Content>
    </Popover.Root>
  )
}
