import TokenProvider from 'contexts/tokenContext';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <TokenProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Monly</title>
          <link
            rel="shortcut icon"
            href="/img/icon-192.png"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta name="description" content="A simple boilerplate for next.js" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </TokenProvider>
  );
}

export default App;
