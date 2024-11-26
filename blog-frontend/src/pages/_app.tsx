// pages/_app.tsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import light from '@/styles/themes/light';
import dark from '@/styles/themes/dark';
import GlobalStyle from '@/styles/global';
import { UserContext } from '@/context/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.theme === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={null} />
      <GlobalStyle />
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default MyApp;
