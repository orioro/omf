import { CATEGORIES_BY_ID } from '@/data'
import styled from 'styled-components'
import { OpenInNew } from '@mui/icons-material'

const CategoryBadge = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 20px;
    height: 20px;

    margin-right: 10px;
  }

  > strong {
    font-size: 0.75rem;
  }
`

const Highlight = styled.div`
  display: flex;
  flex-direction: column;

  > span {
  }

  > strong {
    font-size: 1.5rem;
    font-weight: 500;

    > span {
      font-size: 2rem;
    }
  }
`

const StyledCard = styled.div`
  position: relative;
  background-color: white;
  color: var(--roxo);
  box-shadow: var(--shadow-4);

  padding: 20px;
  border-radius: 10px;

  > * + * {
    margin-top: 10px;
  }

  > h4 {
    font-weight: normal;

    text-decoration: underline;
    text-underline-offset: 0.3em;
    text-decoration-color: var(--category-color);
    text-decoration-thickness: 2px;
  }

  > svg {
    color: var(--roxo-bg);
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
`

export function IndicatorCard({ indicator, clickable, ...props }) {
  const category = CATEGORIES_BY_ID[indicator.category]

  const clickable_ = Boolean(clickable || props.onClick)

  return (
    <StyledCard
      {...props}
      style={{
        '--category-color': category?.color,
        cursor: clickable_ ? 'pointer' : 'default',
      }}
    >
      {category && (
        <CategoryBadge>
          <img
            style={{
              width: 20,
              height: 20,
            }}
            src={`/img/categories/${category.id}.jpeg`}
          />
          <strong>{category.label}</strong>
        </CategoryBadge>
      )}

      <h4>{indicator.label}</h4>

      <Highlight>
        <strong>
          <span>{indicator?.highlight?.number}</span>{' '}
          {indicator?.highlight?.unit}
        </strong>{' '}
        <span>{indicator?.highlight?.text}</span>
      </Highlight>

      {clickable_ && <OpenInNew />}
    </StyledCard>
  )
}
