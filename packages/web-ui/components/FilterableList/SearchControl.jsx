import { Button, Flex, TextField } from '@radix-ui/themes'
import { Search } from '@mui/icons-material'
import { useState } from 'react'

export function SearchControl({ value, onSetValue }) {
  const [localValue, setLocalValue] = useState(value)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        onSetValue(localValue)
      }}
    >
      <Flex gap="3">
        <TextField.Root>
          <TextField.Input
            value={localValue}
            placeholder="Pesquise aqui"
            onChange={(e) => setLocalValue(e.target.value)}
          />
          <TextField.Slot>
            <Search />
          </TextField.Slot>
        </TextField.Root>
        <Button type="submit">Pesquisar</Button>
      </Flex>
    </form>
  )
}
