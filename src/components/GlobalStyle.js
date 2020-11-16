import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #1b1b1b;
  }

  button {
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all .5s ease;

    &:hover {
      background-color: #23d997;
    }
  }

  h2 {
    font-weight: lighter;
  }

  h3 {
    color: white;
  }

  h4 {
    font-weight: 600;
  }
  
  a{
    font-size: 1.1rem;
  }
  
  span {
    font-weight: 600;
    color: #23d997;
  }

  p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }

`;

export default GlobalStyle;
