import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  html, body, __next {
  height: 100vh;
  }

  body {
    font: 16px 'Roboto', sans-serif;
  }

  span, p, h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  :root,
  body,
  html {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background: linear-gradient(to right, rgb(211, 204, 247), rgb(233, 568, 240));
  }
`

export default GlobalStyles