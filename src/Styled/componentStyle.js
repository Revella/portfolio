import { styled } from "styled-components";

export const loading = {
  start: {
    opacity: 0,
    y: 300,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.4
    }
  },
}
export const anime = {
  start: {
    y: -100,
    opacity: 0
  },
  end : {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.4,
      staggerChildren: 0.4
    }
  }
}

export const left = {
  start: {
    x: -1900
  },
  end : {
    x: 0,
    transition: {
      delay: 0.6,
      duration: 0.3
    }
  }
}
export const right = {
  start: {
    x: 1900
  },
  end : {
    x: 0,
    transition: {
      delay: 1,
      duration: 0.3
    }
  }
}

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border: 20px solid white;
  font-family: var(--Primary-KR);
`
export const ModalWrapper = styled.div`
  overflow: hidden;
`
export const HeaderTitle = styled.div`
  padding: 20px;
  width: 88vw;
  height: 30vh;
  border-radius: 10px 10px 0 0;
  background: url(${({props}) => props})  no-repeat center;
  background-size: cover;
  filter: grayscale(0.5);
  z-index: -2;
  }
  & h1.modalTitle {
    line-height: 5;
    letter-spacing: 1vw;
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.titleSize};
    &:before {
      content: '-';
      margin-right: 15px;
    }
    &:after {
      content: '-';
      margin-left: 15px;
    }
  }
  ${({theme}) => theme.desktop`
  & h1.modalTitle {
    line-height:4;
  `}
  ${({theme}) => theme.tablet`
  & h1.modalTitle {
    font-size: calc(${({theme}) => theme.fontSize.xxxl} * 1.2 );
    line-height: 5.5;
  `}
  ${({theme}) => theme.mobile`
  & h1.modalTitle {
    line-height: 8;
    font-size: ${({theme}) => theme.fontSize.xxl};
  `}
`
export const ModalContentLeft = styled.div`
  padding: 45px;
  width: 88vw;
  display: flex;
  justify-content: center;

  div:nth-of-type(1){
    flex: 1;
    img {
      width: 100%;
    }
  }
  div:nth-of-type(2) {
    padding: 25px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5vh;
    ul {
      padding: 0 20px;
    }
    li {
      margin-bottom: 5px;
      font-size: ${({theme}) => theme.fontSize.lg};
      font-weight: bold;
      font-family: var(--Primary-KR);
    }
    div {
      padding: 20px;
      width: 90%;
      flex: 0 auto;
      gap: 0;
    }
    h4 {
      margin-bottom: 20px;
      font-size: ${({theme}) => theme.fontSize.xl};
      color: var(--font-lightDark);
      position: relative;
      &:before {
        content: '';
        width: 30%;
        border: 1px solid #ddd;
        position: absolute;
        bottom: -5px;
        left: 0;
      }
    }
    p {
      font-size: ${({theme}) => theme.fontSize.lg};
      padding: 15px;
      line-height: 1.7;
      word-spacing: 5px;
      white-space: pre-wrap;
      font-family: var(--Primary-KR);
      em {
        font-family: var(--Primary-KR);
        font-style: normal;
        font-weight: bold;
      }
    }
  }
  ${({theme}) => theme.tablet`
  flex-direction: column;
  `}
`