'use client'

import styled from 'styled-components'
import { SiteHeader } from '@/components/SiteHeader'
import { Intro } from './sections/Intro'
import { Data } from './sections/Data'

const Container = styled.main``

export function HomePage() {
  return (
    <Container>
      <SiteHeader />
      <Intro />
      <Data />
    </Container>
  )
}
