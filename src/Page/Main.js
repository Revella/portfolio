import React from 'react'
import background from '../img/white-crumpled-paper-texture-background-rotate.jpg'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    background: ${({theme}) => theme.colors.ye};
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    opacity: 0.3;
  }
  &::after {
    content: '';
    position: absolute;
    background: url(${background}) no-repeat center ;
    // transform: scale(1.2);
    object-fit: cover;
    top:0;
    left:0;
    width: 100vw;
    height: 100%;
    opacity: 0.8;
    z-index: -1;
  }
`
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${({ theme }) => theme.tablet`
  flex-direction: column;
  `}
  ${({ theme }) => theme.mobile`
  flex-direction: column;
  `}
`
  const Title = styled.div`
  padding: 5px;
  margin-top: 30%;
  display: flex;
  flex-direction: column;
  font-size: ${({theme}) => theme.fontSize.lg};
  font-weight: bold;

  ${({ theme }) => theme.laptop`
  width: 100%;
  align-item: center;
  flex: 1;
  `}
  ${({ theme }) => theme.tablet`
  width: 100%;
  height: auto;
  flex: 1;
  `}
  ${({ theme }) => theme.mobile`
  width: 100%;
  height: auto;
  align-item: center;
  `}
`
const TitleText = styled(motion.h1)`
  color: #000;
  letter-spacing: 5px;
  ${({ theme }) => theme.laptop`
  text-align: center;
`}
  ${({ theme }) => theme.tablet`
  font-size: ${({theme}) => theme.fontSize.titleSize};
  `}
  ${({ theme }) => theme.mobile`
  font-size: ${({theme}) => theme.fontSize.titleSize};
  text-align: center;
  `}
  `
const Bars = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width : 800px;
  white-space : nowrap;

  ${({ theme }) => theme.tablet`
  align-items: center;
  flex: 1;
  `}
`
const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 12vw;
  color: var(--font-dark);
  margin-bottom: 25px;
  position: relative;
  font-style: italic;
  font-weight: normal;
  letter-spacing: 8px;
  text-transform: uppercase;
  transform: translateX(-5vw);
  transition: all 0.8s;
  &:hover {
    color: ${({theme}) => theme.colors.pastel};
    transform: translateX(-3.5vw);
  }

  ${({ theme }) => theme.desktop`
  transform: translateX(0);
  &:hover {
    transform: translateX(3vw);
  }
  `}
  ${({ theme }) => theme.laptop`
  transform: translateX(-5vw);
  &:hover {
    transform: translateX(-3vw);
  }
  `}
  ${({ theme }) => theme.tablet`
  line-height: 1;
  font-weight: bold;
  transform: translateX(0);
  `}
  ${({ theme }) => theme.mobile`
  font-size: 15vw;
  line-height: 1;
  font-weight: bold;
  transform: translateX(0);
  `}
`

const mainLoading = {
  start: {
    y: -1000,
  },
  end: {
    y: 0,
    transition: {
      duration: 0.8,
      delayChildren: 1,
      staggerChildren: 0.4
    }
  }
}
const leftAnime = {
  start: {
    x: -800,
  },
  end: {
    x: 0,
    transition: {
      type: "tween",
    }
  }
}
const rightAnime = {
  start: {
    x: 1900,
  },
  end: {
    x: 0,
  }
}
const Main = ({menu}) => {
  return (
    <Container variants={mainLoading} initial="start" animate="end">
      <Wrapper>
        <Title>
          <TitleText variants={leftAnime} style={{letterSpacing:30}}>HYJ</TitleText>
          <TitleText variants={leftAnime} style={{whiteSpace:"pre-line"}}>Frontend Developer </TitleText>
        </Title>
        <Bars variants={rightAnime}>
          {menu.map((it) => 
          <StyledLink key={it.id} menu={it.menu} to={it.url} >{it.menu}</StyledLink>
          )}
        </Bars>
      </Wrapper>
    </Container>
  )
}

export default Main