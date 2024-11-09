// styles/global.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 // ========== RESET START ========== //
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  // ========== RESET END ========== //

  body {
    background-color: ${props => props.theme.colors.background};
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
`;

export default GlobalStyle;