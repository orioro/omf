import React, { useEffect, useState } from 'react'
import { dsvFormat } from 'd3-dsv'
import { ChartDataSeries, groupEntries } from './'

import { InputCheckboxList } from '../InputCheckboxList'

// Override console.error
// This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
// @link https://github.com/recharts/recharts/issues/3615
const error = console.error
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return
  error(...args)
}

export default {
  title: 'Graficos',
}

function useAsyncFetch(fetchTarget) {
  const [data, setData] = useState(null)

  async function _fetch() {
    if (typeof fetchTarget === 'function') {
    } else if (typeof fetchTarget === 'string') {
      const response = await fetch(fetchTarget)
      setData(await response.text())
    } else {
      throw new Error('Invalid fetch')
    }
  }

  useEffect(() => {
    _fetch()
  }, [])

  return data
}

function _isNumeric(str) {
  if (typeof str != 'string') return false // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ) // ...and ensure strings of whitespace fail
}

export const IND_01_MortalidadeMaterna = () => {
  const [locais, onSetLocais] = useState(['Brasil', 'Fortaleza'])
  const [racaCor, setRacaCor] = useState('Total')
  const data = useAsyncFetch('/data/01_taxa_mortalidade_materna.csv')

  const xAxis = {
    label: {
      value: 'Ano',
    },
    dataKey: 'ano',
  }
  const yAxis = {
    label: {
      value: 'Taxa de mortalidade materna',
    },
    dataKey: 'mortalidade_materna',
  }
  const options = data
    ? {
        xAxis,
        yAxis,
        ...groupEntries(
          {
            xAxis,
            yAxis,
            groupByKey: 'Local',
          },
          dsvFormat(',')
            .parse(data)
            .filter((entry) => _isNumeric(entry.ano))
            .filter(
              (entry) =>
                locais.includes(entry.Local) && entry.raca_cor === racaCor
            )
        ),
      }
    : null

  return options ? (
    <div style={{ padding: 20 }}>
      <div>
        <InputCheckboxList
          options={['Brasil', 'Nordeste', 'Ceará', 'Fortaleza'].map((opt) => ({
            label: opt,
            value: opt,
          }))}
          value={locais}
          onSetValue={onSetLocais}
        />
        <select value={racaCor} onChange={(e) => setRacaCor(e.target.value)}>
          {[
            'Total',
            'Amarela',
            'Branca',
            'Indígena',
            'Parda',
            'Preta',
            'Ignorado',
          ].map((opt) => (
            <option key={opt} selected={opt === racaCor}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <ChartDataSeries renderer="lines" {...options} />
    </div>
  ) : null
}

export const IND_01_ObitoMaterno = () => {
  const [local, setLocal] = useState('Fortaleza')
  // const [racaCor, setRacaCor] = useState('Total')
  const data = useAsyncFetch('/data/01_obito_materno.csv')

  const xAxis = {
    label: {
      value: 'Ano',
    },
    dataKey: 'ano',
  }
  const yAxis = {
    label: {
      value: 'Total de óbitos maternos',
    },
    dataKey: 'obito_materno',
  }
  const options = data
    ? {
        xAxis,
        yAxis,
        ...groupEntries(
          {
            xAxis,
            yAxis,
            groupByKey: 'raca_cor',
          },
          dsvFormat(',')
            .parse(data)
            .filter((entry) => _isNumeric(entry.ano))
            .filter((entry) => entry.local === local && entry.raca_cor !== 'Total')
        ),
      }
    : null

  console.log(data, options)
  return options ? (
    <div style={{ padding: 20 }}>
      <div>
        {/*   <InputCheckboxList
          options={['Brasil', 'Nordeste', 'Ceará', 'Fortaleza'].map((opt) => ({
            label: opt,
            value: opt,
          }))}
          value={locais}
          onSetValue={onSetLocais}
        />*/}
        <select value={local} onChange={(e) => setLocal(e.target.value)}>
          {['Brasil', 'Nordeste', 'Ceará', 'Fortaleza'].map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <ChartDataSeries
        renderer="percentage_areas"
        numberFormat={{ style: 'percent' }}
        {...options}
      />
    </div>
  ) : null
}
