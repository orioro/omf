'use client'

import styled from 'styled-components'
import { Container, Button } from '@radix-ui/themes'
import Link from 'next/link'
import { NavigationMenu } from './NavigationMenu'

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--roxo-light);

  display: flex;
  align-items: center;
  height: 70px;
`

const LogoLink = styled(Link)`
  margin-right: 30px;
  flex-shrink: 0;
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ;
`

export function SiteHeader() {
  return (
    <HeaderContainer>
      <Container
        px={{
          initial: '5',
          md: '9',
        }}
      >
        <InnerContainer>
          <LogoLink href="/">
            <img src="/img/logo_OMF.svg" />
          </LogoLink>

          <NavigationMenu />
        </InnerContainer>
      </Container>
    </HeaderContainer>
  )
}
