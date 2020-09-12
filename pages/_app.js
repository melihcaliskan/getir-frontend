import '../assets/normalize.css'

import React, { useEffect, useState } from 'react'
import { darkTheme, lightTheme } from '../assets/theme';

import { GlobalStyles } from '../assets/global';
import Head from 'next/head'
import { ThemeProvider } from 'styled-components';
import useDarkMode from '../contexts/useDarkMode';
import useWindowSize from '../contexts/useWindowSize'

const App = ({ Component, pageProps, router, router: { asPath } }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const size = useWindowSize();
  const isMobile = size.width < 960
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Head>
        <title>getir</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="getir.com" />
        <meta property="og:url" content="https://getir.com" />
      </Head>

      <GlobalStyles />

      <Component
        loading={!componentMounted}
        isMobile={isMobile}
        isLight={theme === 'light'}
        theme={theme === 'light' ? lightTheme : darkTheme}
        toggleTheme={toggleTheme}
        {...pageProps}
      />
    </ThemeProvider>
  )
}

export default App
