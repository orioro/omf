'use client'

import styled from 'styled-components'
import { Container } from '@radix-ui/themes'

const HeaderContainer = styled.header`
  padding: 0 40px 0 40px;
`

export function SiteHeader() {
  return (
    <HeaderContainer>
      <Container>
        SiteHeader
      </Container>
    </HeaderContainer>
  )
}
