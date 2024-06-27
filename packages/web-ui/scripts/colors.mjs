import { writeFile } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const ACCENT_COLORS = {
  roxo: [
    'rgba(33, 24, 135, 1)',
    'rgba(71, 62, 173, 1)',
    'rgba(177, 174, 223, 1)',

    'white',
  ],
  mostarda: [
    'rgba(252, 185, 85, 1)',
    'rgba(255, 205, 159, 1)',
    'rgba(255, 240, 233, 1)',

    'black',
  ],
  salmao: [
    'rgba(243, 86, 114, 1)',
    'rgba(255, 140, 137, 1)',
    'rgba(255, 203, 203, 1)',

    'white',
  ],
  verde: [
    // Prev base:
    // 'rgba(17, 179, 159, 1)',
    'rgba(25, 155, 145, 1)',
    'rgba(94, 202, 189, 1)',
    'rgba(149, 232, 220, 1)',
    'white',
  ],
  toranja: [
    'rgba(244, 113, 76, 1)',
    'rgba(255, 152, 132, 1)',
    'rgba(255, 201, 187, 1)',
    'white',
  ],
  azul: [
    'rgba(242, 241, 255, 1)',
    'rgba(242, 241, 255, 1)',
    'rgba(242, 241, 255, 1)',
    'white',
  ],
}

async function run() {
  const ACCENT_CSS = Object.keys(ACCENT_COLORS)
    .map((colorKey) => {
      const [main, light, bg, contrast] = ACCENT_COLORS[colorKey]

      const COLOR_VARS = [
        ':root {',
        `  --${colorKey}: ${main};`,
        `  --${colorKey}-light: ${light};`,
        `  --${colorKey}-bg: ${bg};`,
        `  --${colorKey}-contrast: ${contrast};`,
        '}',
      ].join('\n')

      const ACCENT = [
        `[data-accent-color='${colorKey}'] {`,
        `  --accent-1: var(--${colorKey}-bg);`,
        `  --accent-2: var(--${colorKey}-bg);`,
        `  --accent-3: var(--${colorKey}-bg);`,
        `  --accent-4: var(--${colorKey}-bg);`,
        `  --accent-5: var(--${colorKey}-bg);`,
        `  --accent-6: var(--${colorKey}-light);`,
        `  --accent-7: var(--${colorKey}-light);`,
        `  --accent-8: var(--${colorKey}-light);`,
        `  --accent-9: var(--${colorKey});`,
        `  --accent-10: var(--${colorKey});`,
        `  --accent-11: var(--${colorKey});`,
        `  --accent-12: var(--${colorKey});`,

        `  --accent-a1: var(--${colorKey}-bg);`,
        `  --accent-a2: var(--${colorKey}-bg);`,
        `  --accent-a3: var(--${colorKey}-bg);`,
        `  --accent-a4: var(--${colorKey}-bg);`,
        `  --accent-a5: var(--${colorKey}-bg);`,
        `  --accent-a6: var(--${colorKey}-light);`,
        `  --accent-a7: var(--${colorKey}-light);`,
        `  --accent-a8: var(--${colorKey}-light);`,
        `  --accent-a9: var(--${colorKey});`,
        `  --accent-a10: var(--${colorKey});`,
        `  --accent-a11: var(--${colorKey});`,
        `  --accent-a12: var(--${colorKey});`,

        `  --accent-contrast: var(--${colorKey}-contrast);`,
        `  --accent-9-contrast: var(--${colorKey}-contrast);`,
        `  --accent-surface: var(--${colorKey}-bg);`,
        `  --accent-indicator: var(--${colorKey});`,
        `  --accent-track: var(--${colorKey}-light);`,
        '}',
      ].join('\n')

      return [COLOR_VARS, ACCENT].join('\n')
    })
    .join('\n\n')

  await writeFile(
    join(
      dirname(fileURLToPath(import.meta.url)),
      '../app/styles/colors.css'
    ),
    ACCENT_CSS,
    'utf8'
  )
}

await run()
