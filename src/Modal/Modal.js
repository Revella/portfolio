import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import ResponsiveModal from './ResponsiveModal'
import Company from './Company'
import Grid from './Grid'
import Shop from './Shop'
import Netflix from './Netflix'
import Button from '../Components/Button'
import Emotion from './Emotion'
import { motion } from 'framer-motion'

const ModalContainer = styled.div`
  display: block;
  position: relative;
  z-index: 100;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
  }
`
const ModalWrap = styled.div`
  width: 90%;
  height: 95%;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 1%;
  margin-left: 5%;
  border-radius: 10px;
  background-color: #fefefe;
  overflow: auto;
  &::-webkit-scrollbar{
      display: none;
    }
  z-index: 1;
  & div.close {
    width: 40px;
    height: 80px;
    position: fixed;
    margin-top: -1px;
    right: 3.6%;
    text-align: center;
    line-height: 2;
    font-size: ${({theme}) => theme.fontSize.xxxl};
    font-weight: bold;
    background-color: white;
    cursor: pointer;
    border: none;
    border-top: 1px solid ${({theme}) => theme.colors.Main};
    border-right: 1px solid ${({theme}) => theme.colors.Main};
    border-radius: 0 10px 10px 0;
    transition: background 0.3s;
    z-index: 4;
    &:hover {
      background: linear-gradient(90deg, rgba(255, 255, 255, 1) 20%, rgba(251, 157, 126, 1) 140%);
      color: var(--font-lightDark);
    }
  }
  ${({theme}) => theme.laptop`
  & div.close {
    font-size: 2.5vw;
    right: 2.9%;
    line-height: 2.4;
  }
`}
  ${({theme}) => theme.tablet`
    width: 90%;
    height: 90%;
    margin-top: 6%;
    & div.close {
      font-size: 4vw;
      right: 1.6%;
      line-height: 2.5;
    }
  `}
  ${({theme}) => theme.mobile`
    width: 90%;
    height: 90%;
    margin-top: 10%;
    & div.close {
      height: 50px;
      border: none;
      top: 0px;
      right: 6.4%;
      transform: rotate(-90deg);
    }
  `}
`
const ItemWrap = styled.div`
  display: block;
  box-sizing: border-box;
  div.webMove {
    margin-bottom: 20px;
    text-align: center;
    transition: 0.8s;
    & div:hover {
      font-weight: bold;
      background-color: ${({theme}) => theme.colors.dark};
    }
  }
`
const Modal = (props) => {
  const {id, close, title, img, url, isOpen} = props;
  const [matchId, setMatchId] = useState(id);

  useEffect(() => {
    setMatchId(id);
  }, [matchId]);

  const goWeb = () => {
    window.open(url);
  }

  const choosePage = () => {
    switch (matchId) {
      case 0 : 
        return <ResponsiveModal title={title} img={img} />
      case 1 : 
        return <Company title={title} img={img} />
      case 2 : 
        return <Grid title={title} img={img} />
      case 3 : 
        return <Emotion title={title} img={img} />
      case 4 : 
        return <Shop title={title} img={img} />
      case 5 : 
        return <Netflix title={title} img={img} />
    }
  };

  useEffect(() => {
    document.body.style= `overflow: hidden`;
    return () => document.body.style = `overflow: auto`;
  },[]);
  
  return (
    <ModalContainer onClick={close}>
      <ModalWrap onClick={(e) => e.stopPropagation()}>
        <ItemWrap>
          <div className='close' onClick={close}>X</div>
          <React.Fragment>{choosePage()}</React.Fragment>
          <div className='webMove'>
            <Button text='Web Site →' onClick={goWeb}/>
          </div>
        </ItemWrap>
      </ModalWrap>
    </ModalContainer>
  )
}

export default React.memo(Modal)