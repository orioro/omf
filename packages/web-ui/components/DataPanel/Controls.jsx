import styled from 'styled-components'
import { Flex, TextField } from '@radix-ui/themes'
import { TuneSharp, Search } from '@mui/icons-material'
import { AccessibleIcon } from '@radix-ui/themes'

import { ControlMultiSelectPopover } from '../ControlMultiSelectPopover'
import { CATEGORIES } from '@/data'

export function Controls({ query, onSetQuery }) {
  return (
    <Flex gap="3">
      <ControlMultiSelectPopover
        value={query.categories}
        buttonProps={{
          color: 'mostarda',
        }}
        onSetValue={(nextValue) =>
          onSetQuery({
            ...query,
            categories: nextValue,
          })
        }
        options={CATEGORIES.map((cat) => ({
          label: cat.label,
          value: cat.id,
        }))}
        label="Categorias"
      />

      <TextField.Root>
        <TextField.Input
          value={query.textSearch}
          placeholder="Pesquise aqui"
          onChange={(e) =>
            onSetQuery({
              ...query,
              textSearch: e.target.value,
            })
          }
        />
        <TextField.Slot>
          <Search />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  )
}
