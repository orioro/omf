import styled from 'styled-components'

const BREAKPOINT = '600px'

export const Row = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  display: flex;

  flex-direction: column;

  > * + * {
    margin-top: 20px;
  }

  @media (min-width: ${BREAKPOINT}) {
    flex-direction: row;
    align-items: center;

    > * + * {
      margin-top: 0;
      margin-left: 20px;
    }
  }
`

export const RowItem = styled.div`
  display: ${({ $desktopOnly }) => ($desktopOnly ? 'none' : 'block')};

  @media (min-width: ${BREAKPOINT}) {
    display: block;
    width: ${({ $width }) => $width};
    flex-shrink: ${({ $flexShrink }) => $flexShrink || '0'};
    flex-grow: ${({ $flexGrow }) => $flexGrow || '0'};
  }
`
