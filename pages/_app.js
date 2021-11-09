import { ChakraProvider } from '@chakra-ui/react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Page';
import { GlobalStyle } from '../styles/globalStyles';

const theme = {
  textColor: '#605242',
  red: '#9A5959',
  brick: '#A4745F',
  brown: '#A99070',
  green: '#BFD3C4',
  white: '#FBF6E3',
  grey: '#707070',
};
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <GlobalStyle />
          <Page>
            <Component {...pageProps} />
          </Page>
          <ToastContainer position="bottom-center" transition={Slide} />
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
