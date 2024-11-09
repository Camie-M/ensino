// styles/global.ts
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
    font-family: ${props => props.theme.fonts.primary};
  }

  h1, h2, h3 {
    color: ${props => props.theme.colors.titles};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes.h1};
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.h2};
  }

  h3 {
    font-size: ${props => props.theme.fontSizes.h3};
  }

  p {
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.p};
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
