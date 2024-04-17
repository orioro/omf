'use client'

import styled from 'styled-components'
import { Button, Container, Flex } from '@radix-ui/themes'

const FooterContainer = styled.footer``

const FooterTop = styled.div`
  background-color: var(--mostarda-light);
`

const FooterBottom = styled.div`
  background-color: var(--roxo-light);
`

const Address = styled.address`
  font-style: normal;
  color: var(--roxo);
  max-width: 300px;
  white-space: pre-wrap;
`

export function SiteFooter() {
  return (
    <FooterContainer>
      <FooterTop>
        <Container
          py={{
            initial: '7',
          }}
          px={{
            initial: '5',
            md: '9',
          }}
        >
          <Flex
            justify="between"
            direction={{
              initial: 'column',
              sm: 'row',
            }}
          >
            <img src="/img/logo_OMF_roxo.svg" />

            <nav>
              <Flex gap="3">
                <Button color="roxo">Serviços para Mulheres</Button>
              </Flex>
            </nav>
          </Flex>
          <Flex justify="between" mt="6">
            <Address>
              Av. Dr. Silas Munguba, n. 1700 Campus do Itapery, Fortaleza - CE
            </Address>
          </Flex>
        </Container>
      </FooterTop>
      <FooterBottom>
        <Container
          py={{
            initial: '7',
          }}
          px={{
            initial: '5',
            md: '9',
          }}
        >
          <Flex justify="center">
            <img src="/img/footer_logos.png" style={{ height: 80 }} />
          </Flex>
        </Container>
      </FooterBottom>
    </FooterContainer>
  )
}
