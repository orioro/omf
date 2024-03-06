import styled from 'styled-components'
import { Flex, TextField } from '@radix-ui/themes'
import { TuneSharp, Search } from '@mui/icons-material'
import { AccessibleIcon } from '@radix-ui/themes'

import { ControlMultiSelectPopover } from '../ControlMultiSelectPopover'

export function Controls({ query, onSetQuery }) {
  return (
    <Flex gap="3">
      <ControlMultiSelectPopover
        value={query.categories}
        onSetValue={(nextValue) =>
          onSetQuery({
            ...query,
            categories: nextValue,
          })
        }
        options={[
          'Cuidado e Assistência',
          'Educação',
          'Infraestrutura Urbana',
          'Saúde',
          'Trabalho e Renda',
          'Política e Vida Pública',
          'Violência',
        ].map((opt) => ({
          label: opt,
          value: opt,
        }))}
      >
        Filtros
        <AccessibleIcon label="Abrir filtros">
          <TuneSharp />
        </AccessibleIcon>
      </ControlMultiSelectPopover>

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
