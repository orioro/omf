import { uniq } from 'lodash'

function prepareSrcEntries({ yAxis }, srcEntries) {
  return srcEntries.map((srcEntry) => ({
    ...srcEntry,
    // yAxis is always a numerical value
    [yAxis.dataKey]: parseFloat(srcEntry[yAxis.dataKey]),
  }))
}

function multiGroup(
  { xAxis, yAxis, groupByKey },
  srcEntries,
  metadataByValue = {}
) {
  srcEntries = prepareSrcEntries({ yAxis }, srcEntries)

  const entriesByXAxisValue = srcEntries.reduce((acc, srcEntry) => {
    const xAxisValue = srcEntry[xAxis.dataKey]
    const groupByValue = srcEntry[groupByKey]

    const entry = acc[xAxisValue]
      ? acc[xAxisValue]
      : { [xAxis.dataKey]: xAxisValue }

    return {
      ...acc,
      [xAxisValue]: {
        ...entry,
        [groupByValue]: srcEntry[yAxis.dataKey] || 0,
      },
    }
  }, {})

  const entries = Object.keys(entriesByXAxisValue)
    .sort()
    .map((xAxisValue) => entriesByXAxisValue[xAxisValue])

  const groups = uniq(srcEntries.map((srcEntry) => srcEntry[groupByKey]))
    .map((groupByValue) => ({
      dataKey: groupByValue,
      label: groupByValue,
      total: entries.reduce((acc, entry) => acc + entry[groupByValue], 0),
      ...(metadataByValue[groupByValue] || {}),
    }))
    .sort((areaA, areaB) => areaA.total - areaB.total)

  return {
    entries,
    groups,
  }
}

function noGrouping({ yAxis }, srcEntries) {
  srcEntries = prepareSrcEntries({ yAxis }, srcEntries)

  return {
    entries: srcEntries,
    groups: [
      {
        // label: yAxis.label,
        dataKey: yAxis.dataKey,
        color: yAxis.color,
      },
    ],
  }
}

export function groupEntries(options, srcEntries, metadataByValue) {
  return options.groupByKey
    ? multiGroup(options, srcEntries, metadataByValue)
    : noGrouping(options, srcEntries)
}
