// pages/_app.tsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import darkTheme from "../styles/themes/dark";
import lightTheme from "../styles/themes/light";
import GlobalStyle from '@/styles/global';
import { UserContext } from '@/context/UserContext';

const defaultUser = {
  userID: '',
  changeUserId: () => '',
  isAuthorized: false,
  changeIsAuthorized: () => ''
}

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.theme === "light" ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={defaultUser}>
        <GlobalStyle />
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
