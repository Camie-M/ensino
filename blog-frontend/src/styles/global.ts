
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    line-height: 1.6;
  }

  h1,h2,h3{
    color:${props => props.theme.colors.titles};
  }
  p{
    color:${props => props.theme.colors.text};
  }
  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;

export default GlobalStyle;
