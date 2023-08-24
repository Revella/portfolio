import React from 'react'
import { Link, NavLink, useMatch } from 'react-router-dom'
import { styled } from 'styled-components'

const Container = styled.div`
  position: relative;
  z-index: 10;
  `
  const Wrap = styled.div`
  background-color: ${({theme}) => theme.colors.light};
  box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.5);   
  z-index: 1;
  width: 5%;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 30px;
  display: flex;
  position: fixed;
  ${({theme}) => theme.desktop`
  width: 5%;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 30px;
  display: flex;
  position: fixed;
  `}
  ${({theme}) => theme.tablet`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  `}
  ${({theme}) => theme.mobile`
  width: 100%;
  height: 60px;
  padding-top: 7%;
  flex-direction: row;
  align-items: center;
  `}
  `
const LogoWrap = styled.div`
  flex: 0 auto;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  transform: rotate(-90deg);
  z-index: 2;
  position: fixed;
  top: 50%;
  ${({theme}) => theme.desktop`
  flex: 0 auto;
  margin-bottom: 140px;
  padding-left: 20px;
  padding-right: 20px;
  transform: rotate(-90deg);
  z-index: 2;
  position: relative;
  top: 15%;
  `}
  ${({theme}) => theme.tablet`
  margin-bottom: 0px;
  padding-left: 20px;
  padding-right: 15px;
  order: 1;
  transform: rotate(0);
  position: relative;
  top: 0;
  right: -30px;
  `}
  ${({theme}) => theme.mobile`
  transform: rotate(0);
  order: 0;
  position: relative;
  top: 0;
  left: -25px;
`}
`
const NavLinked = styled.div`
  flex: 0.2 auto;
  margin-bottom: 40px;
  padding-left: 90px;
  padding-right: 10px;
  transform: rotate(-90deg);
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 35px;
  z-index: 2;
  ${({theme}) => theme.desktop`
    flex: 0.3 auto;
    margin-bottom: 40px;
    padding-left: 40px;
    padding-right: 10px;
    transform: rotate(-90deg);
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    z-index: 2;
  `}
  ${({theme}) => theme.tablet`
    transform: rotate(0);
    margin-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    order: 2;
  `}
  ${({theme}) => theme.mobile`
    position: relative;
    transform: rotate(0);
    margin-left: 0px;
    margin-right: 50px;
    margin-bottom: 0;
    padding-right: 0px;
    order: 1;
    gap: 10px;
`}
`
const StyledLink = styled(Link)`
  font-weight: 900;
  font-size: ${({theme}) => theme.fontSize.xxxl};
  text-decoration: none;
  `
const StyledNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  letter-spacing: 1.2px;
  font-size: ${({theme}) => theme.fontSize.xxl};
  &:hover {
    font-weight: bold;
    color: ${({theme}) => theme.colors.pastel};
    transition: 0.3s
  };
  &.active {
    font-weight: bold;
    color: ${({theme}) => theme.colors.pastel};
  }
  ${({theme}) => theme.tablet`
  &:hover {
    font-weight: normal;
  };
  `}
  ${({theme}) => theme.mobile`
  &:hover {
    font-weight: normal;
  };
`}
`
const CopyRight = styled.div`
  flex: 0 auto;
  margin-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  transform: rotate(-90deg);
  width: 20%;
  display: flex;
  justify-content: end;
  align-items: center;
  position: fixed;
  bottom: -15%;
  ${({theme}) => theme.desktop`
  flex: 0 auto;
  margin-bottom: 40px;
  padding-left: 20px;
  transform: rotate(-90deg);
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  `}
  ${({theme}) => theme.tablet`
  transform: rotate(0);
  margin-bottom: 10px;
  padding-right: 100px;
  padding-left: 0px;
  order: 0;
  position: relative;
  `}
  ${({theme}) => theme.mobile`
  display: none;
  transform: rotate(0);
  position: relative;
`}
`
const Navigation = ({menus}) => {
  const mainMatch = useMatch('/');

  return (
    <Container>
      <Wrap>
        <NavLinked>
          {
          mainMatch ? menus.map((menu) => <StyledNavLink style={{visibility: "hidden"}} key={menu.menu} to={menu.url}>{menu.menu}</StyledNavLink>) :
          menus.map((menu) => <StyledNavLink key={menu.menu} to={menu.url}>{menu.menu}</StyledNavLink>
          )}
        </NavLinked>
        <LogoWrap>
          <StyledLink to="/">YJ</StyledLink>
        </LogoWrap>
        <CopyRight>
          ⓒ2023
        </CopyRight>
      </Wrap>
    </Container>
  )
}

export default Navigation