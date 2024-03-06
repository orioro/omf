import { Theme } from '@radix-ui/themes'

export function DefaultTheme({ children }) {
  return (
    <Theme accentColor="roxo" grayColor="sand" scaling="100%" radius="small">
      {children}
    </Theme>
  )
}
