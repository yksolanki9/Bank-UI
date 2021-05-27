import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import "@fontsource/nunito-sans";

const GlobalStyles = createGlobalStyle`
${normalize}
body {
  background: hsl(0, 0%, 98%);
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  color: hsl(200, 15%, 8%);
  transition: all .1s ease-out;
}
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
`;

export default GlobalStyles;