import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
