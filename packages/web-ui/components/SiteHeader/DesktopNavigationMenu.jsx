import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import styled from 'styled-components'
import classNames from 'classnames'
import { LINKS } from './constants'

const Container = styled.nav`
  display: flex;

  @media (max-width: 800px) {
    display: none;
  }
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;

  margin-right: 20px;

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
      margin-left: 20px;
    }
  }
`

export function DesktopNavigationMenu({}) {
  return (
    <Container>
      <LinkList>
        {LINKS.map(([href, label], index) => (
          <li key={index}>
            <Link
              href={href}
              className={classNames({
                // active: true,
              })}
            >
              {label}
            </Link>
          </li>
        ))}
      </LinkList>

      <Button asChild color="roxo" style={{ fontWeight: 'bold' }}>
        <Link href="/servicos">Serviços para Mulheres</Link>
      </Button>
    </Container>
  )
}
