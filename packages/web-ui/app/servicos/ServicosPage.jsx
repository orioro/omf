'use client'

import styled from 'styled-components'
import { SiteHeader } from '@/components/SiteHeader'
import { Intro } from './sections/Intro'
// import { Data } from './sections/Data'
// import { Partnerships } from './sections/Partnerships'
import { SiteFooter } from '@/components/SiteFooter'

const Container = styled.main``

export function ServicosPage() {
  return (
    <Container>
      <SiteHeader />
      <Intro />
      <SiteFooter />
    </Container>
  )
}
