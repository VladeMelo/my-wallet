import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  /* body, input, button {
    font-family: 'Roboto Slab', serif;
  } */

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    font-family: 'Roboto Slab', serif;
  }

  button {
    cursor: pointer;
  }
`;