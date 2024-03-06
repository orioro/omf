import { Plus_Jakarta_Sans } from 'next/font/google'
import './styles/globals.css'
import '@radix-ui/themes/styles.css'
import './styles/radix-theme-config.css'
import './styles/colors.css'
import StyledComponentsRegistry from './lib/registry'

import Providers from './providers'
import { DefaultTheme } from '@/components/DefaultTheme'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Observatório da Mulher de Fortaleza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head></head>
      <body className={plus_jakarta_sans.className}>
        <StyledComponentsRegistry>
          <Providers>
            <DefaultTheme>{children}</DefaultTheme>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
