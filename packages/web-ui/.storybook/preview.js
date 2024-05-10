// import '@radix-ui/themes/styles.css'
import './radix-ui-themes-styles.css'
import '../app/styles/colors.css'
import '../app/styles/radix-theme-config.css'
import '../app/styles/globals.css'
import { Theme, ThemePanel } from '@radix-ui/themes'

import { Plus_Jakarta_Sans } from 'next/font/google'
import Providers from '../app/providers'

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
          <Providers>
            <Story />
          </Providers>
        </main>
      </Theme>
    ),
  ],
}

export default preview
