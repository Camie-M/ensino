import styled from 'styled-components'

export const BaseLayout = styled.main`
  color: ${props => props.theme.colors.background};
  width: 100%;

  > * {
    width: 85%;
    margin: 0 auto;
  }
`