import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    touch-action: manipulation;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre {
    margin: 0;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    color: #605242;
    font-family: 'Mrs Eaves XL Serif Nar OT';
    font-size: 20px;
       @media (max-width: 640px) {
        font-size: 16px;
      }

    h3 {
      font-family: 'rosella-engraved';
      margin: 0;
      font-size: 40px;
      @media (max-width: 640px) {
        font-size: 30px;
      }
    }
    h4 {
      font-family: 'tangier';
      font-weight: 300;
      margin-top: -24px;
      font-size: 24px;
      @media (max-width: 640px) {
          margin-top: -20px;
          font-size: 20px;
      }
      color: ${({ theme }) => theme.colors.brown};
    }
    h5 {
      font-family: 'rosella-solid';
      font-size: 24px;
      @media (max-width: 640px) {
          font-size: 18px;
      }
    }
    h6 {
      font-family: 'Mrs Eaves XL Serif Nar OT';
      font-size: 20px;
      font-weight: bold;

    }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }


  a em {
   text-decoration:underline;
  }
  .Toastify__toast--success {
          background: ${({ theme }) => theme.colors.green};
          color: white;
      }
      .Toastify__toast--error {
          background: ${({ theme }) => theme.colors.red};
          color: white;
      }
`;
