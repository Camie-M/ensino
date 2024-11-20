import styled from 'styled-components'

export const BaseLayout = styled.main`
  color: ${props => props.theme.colors.background};
  width: 100%;

  > * {
    width: 85%;
    margin: 0 auto;
  }

  .smallTitle {
    color: ${props => props.theme.colors.titles};
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 3rem;
  }
`