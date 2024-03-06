import React from 'react'
import { getColorId, ChartContainer } from '../ChartUtil'
export * from './groupEntries'
import {
  ComposedChart,
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import deepmerge from 'deepmerge'
import { omit } from 'lodash'

// Override console.error
// This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
// @link https://github.com/recharts/recharts/issues/3615
const error = console.error
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return
  error(...args)
}

function renderBars({ groups }) {
  return groups.map((group, index) => (
    <Bar
      key={group.dataKey}
      dataKey={group.dataKey}
      name={group.label || group.dataKey}
      barSize={30}
      fill={`var(--${group.color || getColorId(index)})`}
    />
  ))
}

function renderStackedAreas({ groups }) {
  return groups.map((group, index) => (
    <Area
      key={group.dataKey}
      type="monotone"
      stackId={1}
      name={group.label || group.dataKey}
      dataKey={group.dataKey}
      stroke={`var(--${group.color || getColorId(index)})`}
      strokeWidth={3}
      fill={`var(--${group.color || getColorId(index)})`}
    />
  ))
}

function renderLines({ groups }) {
  return groups.map((group, index) => (
    <Line
      key={group.dataKey}
      type="monotone"
      dataKey={group.dataKey}
      name={group.label || group.dataKey}
      stroke={`var(--${group.color || getColorId(index)})`}
    />
  ))
}

const RENDERERS = {
  bars: renderBars,
  stacked_areas: renderStackedAreas,
  percentage_areas: renderStackedAreas,
  lines: renderLines,
}

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0

  return toPercent(ratio, 2)
}

const _percentarenderTooltipContent = (o) => {
  const { payload, label } = o
  const total = payload.reduce((result, entry) => result + entry.value, 0)

  return (
    <div className="customized-tooltip-content" style={{ background: 'white' }}>
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value} (${getPercent(
              entry.value,
              total
            )})`}
          </li>
        ))}
      </ul>
    </div>
  )
}

const CHART_DEFAULTS = {
  margin: {
    top: 10,
    right: 30,
    left: 50,
    bottom: 60,
  },
}

const X_AXIS_DEFAULTS = {
  tickSize: 10,
  tick: {
    stroke: 'black',
  },
  tickLine: false,
  axisLine: false,
  label: {
    offset: 20,
    position: 'bottom',
  },
}

const Y_AXIS_DEFAULTS = {
  tickSize: 10,
  label: {
    angle: -90,
    offset: 40,
    position: 'left',
    style: {
      textAnchor: 'middle',
    },
  },
  tick: {
    stroke: 'black',
  },
  tickLine: false,
  axisLine: false,
}

const LEGEND_CHAR_PER_LINE = 140
const LEGEND_LINE_HEIGHT = 36

export function ChartDataSeries({
  renderer = 'bars',

  chart = {},
  xAxis,
  yAxis = {},
  entries,
  groups,
  children,
  numberFormat,
  alwaysActive,
}) {
  const render = typeof renderer === 'string' ? RENDERERS[renderer] : renderer

  const fmtNumber = (value) =>
    Intl.NumberFormat('pt-BR', numberFormat).format(value)

  const chartProps = deepmerge(CHART_DEFAULTS, chart)
  const xAxisProps = deepmerge(X_AXIS_DEFAULTS, xAxis)

  //
  // When using multiple groups,
  // yAxis must not have 'dataKey' prop otherwise it
  // renders nothing
  //
  const yAxisProps = omit(deepmerge(Y_AXIS_DEFAULTS, yAxis), ['dataKey'])

  const joinedLabelText = groups.map((group) => group.label).join(' ')
  const lines = Math.ceil(joinedLabelText.length / LEGEND_CHAR_PER_LINE)

  return (
    <ChartContainer style={{ fontSize: '.875rem' }} alwaysActive={alwaysActive}>
      <ComposedChart
        {...chartProps}
        data={entries}
        stackOffset={renderer === 'percentage_areas' ? 'expand' : undefined}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Legend verticalAlign="top" height={lines * LEGEND_LINE_HEIGHT} />
        <XAxis {...xAxisProps} />
        <YAxis {...yAxisProps} tickFormatter={fmtNumber} />
        <Tooltip
          itemSorter={(item) => {
            return -1 * item.value
          }}
          formatter={(value) => fmtNumber(value)}
          content={
            renderer === 'percentage_areas'
              ? _percentarenderTooltipContent
              : undefined
          }
        />
        {render({ groups })}
        {children}
      </ComposedChart>
    </ChartContainer>
  )
}
