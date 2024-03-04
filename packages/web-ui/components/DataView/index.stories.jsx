import React from 'react'
import { DataView } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'DataView',
}

export const Basic = () => {
  return (
    <DataView
      title="Casos de feminicídio (1995-2021)"
      source="DATASUS, 2021"
      controls={{
        locais: {
          type: 'radio',
          options: ['Brasil', 'Nordeste', 'Ceará', 'Fortaleza'],
        },
        cor_raca: {
          type: 'checkbox_list',
          options: [
            'Amarela',
            'Branca',
            'Indígena',
            'Parda',
            'Preta',
            'Ignorado',
          ],
        },
      }}
      data={{
        src: '/data/test.csv',
        prepare: ({ data, controls }) => data,
      }}
      renderChart={({ data, controls }) => null}
    />
  )
}
