import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Page';
import { GlobalStyle } from '../styles/globalStyles';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={{}}>
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
