import '@radix-ui/themes/styles.css'
import '../app/styles/globals.css'
import { Theme, ThemePanel } from '@radix-ui/themes'

import { Plus_Jakarta_Sans } from 'next/font/google'

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Theme>
        <main className={plus_jakarta_sans.className}>
          <Story />
        </main>
        
      </Theme>
    ),
  ],
}

export default preview
