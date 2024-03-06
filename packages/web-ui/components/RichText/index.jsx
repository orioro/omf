import styled from 'styled-components'

export const RichText = styled.div`
  > * + * {
    margin-top: 20px;
  }

  > h2,
  > h3,
  > h4 {
    text-transform: uppercase;
    line-height: 1.25;
    font-family: var(--font-sans-serif);
  }

  > h2 {
    font-size: 1.5rem;
  }

  > h3 {
    font-size: 1.25rem;
  }

  > h4 {
    font-weight: 400;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  cite {
    font-style: italic;
    color: var(--grey);
  }

  a {
    color: var(--purple);
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`
