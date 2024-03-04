const COLOR_ORDER = [
  'green',
  'dark-blue',
  'red',
  'pale-green',
  'purple',
  'orange',
  'blue',
  'grey',
]

export function getColorId(index) {
  const mod = index % COLOR_ORDER.length
  return COLOR_ORDER[mod]
}
