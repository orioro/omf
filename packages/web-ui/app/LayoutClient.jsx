'use client'

import styled from 'styled-components'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

const Container = styled.main``

export function LayoutClient({ params, children }) {
  return (
    <Container>
      <SiteHeader />
      {children}
      <SiteFooter />
    </Container>
  )
}
