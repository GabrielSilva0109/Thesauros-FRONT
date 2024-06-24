import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme.mode === 'dark' ? 'black' : 'white')};
    color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }
`

export default GlobalStyles
