'use client'

import styled from 'styled-components'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent'
import { useState } from 'react'

const Container = styled.main``

export function LayoutClient({ params, children }) {
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(
    getCookieConsentValue()
  )

  return (
    <Container>
      <SiteHeader />
      {children}

      <CookieConsent
        location="bottom"
        style={{ background: 'white', color: 'black' }}
        buttonStyle={{
          background: 'var(--verde)',
          color: 'white',
          fontWeight: 'bold',
        }}
        buttonText="Aceitar"
        onAccept={() => {
          setHasAcceptedCookies(true)
        }}
      >
        Nós usamos cookies para melhorar sua experiência de navegação no portal.
        Ao utilizar o Observatório da Mulher de Fortaleza você concorda com a
        política de monitoramento de cookies. Para obter mais informações,
        acesse nossa{' '}
        <a
          href="https://cloudpmf.fortaleza.ce.gov.br/index.php/s/Z4KNCbG6KvFO3fq"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            color: 'var(--verde)',
            textDecoration: 'underline',
          }}
        >
          Política de Privacidade
        </a>{' '}
        e{' '}
        <a
          href="https://cloudpmf.fortaleza.ce.gov.br/index.php/s/rQA8eaYJRDkpyOb"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            color: 'var(--verde)',
            textDecoration: 'underline',
          }}
        >
          Termo de Uso
        </a>
        .
      </CookieConsent>

      <SiteFooter />
    </Container>
  )
}
