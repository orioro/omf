const COLOR_ORDER = [
  'roxo',
  'mostarda',
  'salmao',
  'verde',
  'toranja',
  // 'azul',
]

export function getColorId(index) {
  const mod = index % COLOR_ORDER.length
  return COLOR_ORDER[mod]
}
