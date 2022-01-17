import { ChakraProvider } from '@chakra-ui/react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Page';
import { GlobalStyle } from '../styles/globalStyles';
import theme from '../styles/theme';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Page>
            <Component {...pageProps} />
          </Page>
          <ToastContainer position="bottom-center" transition={Slide} />
        </ThemeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
