import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {AlurakutStyles} from '../src/lib/AluraKutCommons';
import img from '../src/images/fundo_alura.jpg';

const GlobalStyle = createGlobalStyle`
/* Reset CSS*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    //background-color: #d9e6f6;
    background-image: url("https://i.pinimg.com/originals/c4/f2/d5/c4f2d5fed2e8050aab826020cd3cb8d5.jpg");
    font-family: sans-serif;
  }

  #__next {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
img{
  max-width: 100%;
  height: auto;
  display: block;
}

${AlurakutStyles}
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
