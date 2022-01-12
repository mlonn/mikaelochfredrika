// theme.js

import { extendTheme } from '@chakra-ui/react';

const config = {
  colors: {
    textColor: '#605242',
    red: '#9A5959',
    brick: '#A4745F',
    brown: '#A99070',
    green: '#BFD3C4',
    grey: '#707070',
  },
  config: { initialColorMode: 'light', useSystemColorMode: false },
  fonts: {
    heading: 'tangier',
    body: 'Mrs Eaves XL Serif Nar OT',
  },
};

// 3. extend the theme
const theme = extendTheme(config);
console.log(theme);
export default theme;
