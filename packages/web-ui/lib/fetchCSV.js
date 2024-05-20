import { parse } from 'csv-parse/sync'

export async function fetchCSV(url) {
  const response = await fetch(url)

  return parse(await response.text(), {
    columns: true,
  })
}
