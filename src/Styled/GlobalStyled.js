import { createGlobalStyle } from "styled-components";
import background from '../img/white-crumpled-paper-texture-background.jpg'

const GlobalStyled = createGlobalStyle`
  :root {
    // Font Color 
    --font-dark: #333;
    --font-lightDark : #555;
    --font-gray: #777;
    --font-lightGray: #AAA;
    --font-WhiteGray: #EEE;
    --font-White: #FFF;

    // Font Family
    --Primary-EN: 'Stockers';
    --Primary-KR: 'Pretendard-Regular';   
    --Sub-KR: 'GmarketSansMedium';
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--Primary-EN);
    color: var(--font-dark);
    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top:0;
      left:0;
      width: 100vw;
      height: 100vh;  
      background: url(${background}) no-repeat;
      opacity: 0.2;
      filter: grayscale(1);
      z-index: -1;
    }
  ${({theme}) => theme.tablet`
    &::before {
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `}
  ${({theme}) => theme.mobile`
    &::before {
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `}
  }
`

export default GlobalStyled;