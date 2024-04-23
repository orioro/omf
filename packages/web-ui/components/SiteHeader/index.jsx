'use client'

import styled from 'styled-components'
import { Container } from '@radix-ui/themes'
import Link from 'next/link'
import { NavigationMenu } from './NavigationMenu'

const HeaderContainer = styled.header``

const FortalezaHeaderContainer = styled.div`
  height: 70px;
  background-color: var(--mostarda);
  display: flex;
  align-items: center;
`

const MainHeaderContainer = styled.div`
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
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export function SiteHeader() {
  return (
    <HeaderContainer>
      <FortalezaHeaderContainer>
        <Container
          px={{
            initial: '5',
            md: '9',
          }}
        >
          <InnerContainer>
            <img
              src="/img/logo_prefeitura_fortaleza.png"
              style={{ height: 45 }}
            />
          </InnerContainer>
        </Container>
      </FortalezaHeaderContainer>
      <MainHeaderContainer>
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
      </MainHeaderContainer>
    </HeaderContainer>
  )
}
