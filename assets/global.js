import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

  body {
    font-family: 'Lato', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.TEXT};
    transition: all 0.15s linear;
  }

  a,p,span {
    color: ${({ theme }) => theme.TEXT};
  }
`