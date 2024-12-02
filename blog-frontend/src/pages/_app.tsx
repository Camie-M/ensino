// pages/_app.tsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import darkTheme from "../styles/themes/dark";
import lightTheme from "../styles/themes/light";
import GlobalStyle from '@/styles/global';
import { UserContext } from '@/context/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.theme === "light" ? darkTheme : lightTheme);
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
