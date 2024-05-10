import { MenuOutlined } from '@mui/icons-material'
import { Flex, IconButton, Portal } from '@radix-ui/themes'
import { useState } from 'react'
import styled from 'styled-components'
import { LINKS } from './constants'
import Link from 'next/link'

const Container = styled.div`
  @media (min-width: 799px) {
    display: none;
  }
`

const Nav = styled.nav`
  position: fixed;
  top: 140px;
  bottom: 0;
  background-color: white;
  padding: 20px;
  width: 100%;
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;

  > li {
    display: flex;
    align-items: center;

    > a {
      // color: white;
      white-space: nowrap;
      font-weight: bold;

      display: block;
      position: relative;

      &.active,
      &:hover {
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: calc(100% + 5px);
          width: 100%;
          height: 3px;
          background-color: var(--verde-light);
        }
      }
    }

    & + li {
      margin-top: 20px;
    }
  }
`

export function MobileNavigationMenu() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Container>
      <IconButton onClick={() => setNavOpen(!navOpen)}>
        <MenuOutlined />
      </IconButton>
      {navOpen && (
        <Portal>
          <Nav>
            <LinkList>
              {LINKS.map(([href, label], index) => (
                <li key={index}>
                  <Link href={href} onClick={() => setNavOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </LinkList>
          </Nav>
        </Portal>
      )}
    </Container>
  )
}
