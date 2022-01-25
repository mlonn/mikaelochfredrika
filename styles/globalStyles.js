import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  color: #605242;
  font-family: 'Mrs Eaves XL Serif Nar OT';
  font-size:20px;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

p {
  line-height:24px;
}
`;
