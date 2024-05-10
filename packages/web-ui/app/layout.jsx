import { Plus_Jakarta_Sans } from 'next/font/google'
import './styles/globals.css'
import '@radix-ui/themes/styles.css'
import './styles/radix-theme-config.css'
import './styles/colors.css'
import StyledComponentsRegistry from './lib/registry'
import { LayoutClient } from './LayoutClient'

import Providers from './providers'
import { DefaultTheme } from '@/components/DefaultTheme'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Observatório da Mulher de Fortaleza',
}

//
// Dynamic has to be enforced in all pages in order for CSP nonce
// to work properly.
//
// https://github.com/vercel/next.js/discussions/54907
//
export const dynamic = 'force-dynamic'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head></head>
      <body className={plus_jakarta_sans.className}>
        <StyledComponentsRegistry>
          <Providers>
            <DefaultTheme>
              <LayoutClient>{children}</LayoutClient>
            </DefaultTheme>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
