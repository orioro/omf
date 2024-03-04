import React, { useEffect } from 'react'

// import DATA_1 from '../../public/data/01_taxa_mortalidade_materna.csv'

import { dsvFormat } from 'd3-dsv'

import { ChartDataSeries, groupEntries } from './'

import { GROUP_BY_ESFERA_DATA, UNGROUPED, VIEW_SCHEMA } from './demo-data'

export default {
  title: 'ChartDataSeries',
}

export const Default = () => {
  const xAxis = {
    label: VIEW_SCHEMA.config.xAxis.label,
    dataKey: VIEW_SCHEMA.config.xAxis.valueExpression,
  }
  const yAxis = {
    label: VIEW_SCHEMA.config.yAxis.label,
    dataKey: VIEW_SCHEMA.config.yAxis.valueExpression,
  }
  const options = {
    xAxis,
    yAxis,
    ...groupEntries(
      {
        xAxis,
        yAxis,
      },
      dsvFormat(',').parse(UNGROUPED)
    ),
  }

  return (
    <div style={{ padding: 100 }}>
      <ChartDataSeries {...options} />
    </div>
  )
}

export const Grouped = () => {
  const xAxis = {
    label: VIEW_SCHEMA.config.xAxis.label,
    dataKey: VIEW_SCHEMA.config.xAxis.valueExpression,
  }
  const yAxis = {
    label: VIEW_SCHEMA.config.yAxis.label,
    dataKey: VIEW_SCHEMA.config.yAxis.valueExpression,
  }
  const options = {
    xAxis,
    yAxis,
    ...groupEntries(
      {
        xAxis,
        yAxis,
        groupByKey: 'esfera',
      },
      dsvFormat(',').parse(GROUP_BY_ESFERA_DATA)
    ),
  }

  return (
    <div style={{ padding: 100 }}>
      <ChartDataSeries renderer="stacked_areas" {...options} />
    </div>
  )
}
