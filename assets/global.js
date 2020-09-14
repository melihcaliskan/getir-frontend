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

  @keyframes breathing {
    0% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }

    25% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    60% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }

    100% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }
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