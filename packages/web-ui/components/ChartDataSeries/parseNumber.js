class NumberParser {
  constructor(locale) {
    const format = new Intl.NumberFormat(locale)
    const parts = format.formatToParts(12345.6)
    const numerals = Array.from({ length: 10 }).map((_, i) => format.format(i))
    const index = new Map(numerals.map((d, i) => [d, i]))
    this._group = new RegExp(
      `[${parts.find((d) => d.type === 'group').value}]`,
      'g'
    )
    this._decimal = new RegExp(
      `[${parts.find((d) => d.type === 'decimal').value}]`
    )
    this._numeral = new RegExp(`[${numerals.join('')}]`, 'g')
    this._index = (d) => index.get(d)
  }
  parse(string) {
    return (string = string
      .trim()
      .replace(this._group, '')
      .replace(this._decimal, '.')
      .replace(this._numeral, this._index))
      ? +string
      : NaN
  }
}

export function parseNumber(numberCandidate) {
  const parser = new NumberParser('pt-BR')

  if (numberCandidate.includes('%')) {
    return parser.parse(numberCandidate.replace('%', '')) / 100
  } else if (numberCandidate.includes('R$')) {
    return parser.parse(numberCandidate.replace(/^\s*R\$\s*/, ''))
  } else {
    return parser.parse(numberCandidate)
  }
}
