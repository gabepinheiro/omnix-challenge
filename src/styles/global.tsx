import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #222E50;
    --color-white: #fff;
    --color-grey: #eee;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-x: hidden;

    @media (max-width: 48em) { // 768px
      font-size: 50% // 1rem = 8px
    }

    @media (max-width: 23.4375em) { // 375px
      font-size: 43%; // 1rem = 7px
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
  }
`
