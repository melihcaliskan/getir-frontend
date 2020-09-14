import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Lato', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.TEXT};
    transition: all 0.15s linear;
  }

  a,p,span {
    color: ${({ theme }) => theme.TEXT};
  }

  @media only screen and (max-width: 1280px) {
    h2{
      font-size:32px;
    }
  }

  @media only screen and (max-width: 960px) {
    h2{
      font-size:20px;
    }
    p{
      font-size:14px;
    }
  }
`