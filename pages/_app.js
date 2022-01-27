import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Page';

import { GlobalStyle } from '../styles/globalStyles';
import theme from '../styles/theme';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/iaz7vbu.css" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Page>
          <Component {...pageProps} />
        </Page>
        <ToastContainer position="bottom-center" transition={Slide} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
