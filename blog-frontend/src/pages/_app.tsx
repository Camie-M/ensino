import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import usePersistedState from '@/utils/usePersistedState';

import light from '@/styles/themes/light';
import dark from '@/styles/themes/dark';
import GlobalStyle from '@/styles/global';



function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = usePersistedState("theme", light)

  const toggleTheme = () => {
    setTheme(theme.theme == "light" ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default MyApp;
