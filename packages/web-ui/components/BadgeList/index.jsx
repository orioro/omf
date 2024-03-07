import { Card, Flex } from '@radix-ui/themes'
import styled from 'styled-components'
import { MarkdownContent } from '../MarkdownContent'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  margin-left: -20px;
  margin-top: -20px;

  > * {
    width: calc(50% - 20px);
    margin-top: 20px;
    margin-left: 20px;
  }

  @media (max-width: 500px) {
    > * {
      width: 100%;
    }
  }
`

const Badge = styled.div`
  box-shadow: 0px 0px 8px 4px rgba(33, 24, 135, 0.1);
  border: none;
  border-radius: 4px;
  padding: 16px;

  display: flex;

  border-left: 6px solid;

  > img {
    width: 50px;
    height: 50px;

    margin-right: 15px;
  }
`

const ICON_SRC = {
  alert: '/img/badges/alert.png',
  positive: '/img/badges/positive.png',
  negative: '/img/badges/negative.png',
  success: '/img/badges/success.png',
  info: '/img/badges/info.png',
}

const COLORS = {
  alert: 'var(--mostarda)',
  positive: 'var(--verde)',
  negative: 'var(--salmao)',
  success: 'var(--roxo-bg)',
  info: 'var(--roxo)',
}

export function BadgeList({ badges }) {
  return (
    //
    // Extra div in order not to interfere with top margins
    //
    <div>
      <Container>
        {badges.map((badge, index) => (
          <Badge key={index} style={{ borderColor: COLORS[badge.type] }}>
            <img src={ICON_SRC[badge.type]} />
            <MarkdownContent>{badge.text}</MarkdownContent>
          </Badge>
        ))}
      </Container>
    </div>
  )
}
