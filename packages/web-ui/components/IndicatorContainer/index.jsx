import styled from 'styled-components'

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-left: -20px;

  > * {
    width: calc(25% - 20px);
    margin-top: 20px;
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    > * {
      width: calc(50% - 20px);
    }
  }

  @media (max-width: 800px) {
    > * {
      width: 100%;
    }
  }
`
