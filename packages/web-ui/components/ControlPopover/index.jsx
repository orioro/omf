import { Tune } from '@mui/icons-material'
import { Button, Popover, AccessibleIcon } from '@radix-ui/themes'
// import { InputCheckboxList } from '../InputCheckboxList'
import { useState } from 'react'

export function ControlPopover({
  value,
  onSetValue,
  renderControl,
  children,
  label,

  buttonProps = {},

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
        <Button {...buttonProps}>
          {typeof label === 'function'
            ? label({
                value,
              })
            : label}
          <AccessibleIcon label="Abrir filtros">
            <Tune />
          </AccessibleIcon>
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
          <Button mt="4" type="submit">Aplicar</Button>
        </form>
      </Popover.Content>
    </Popover.Root>
  )
}
