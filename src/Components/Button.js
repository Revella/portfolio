import React from 'react'
import { styled } from 'styled-components'

export const BoxContainer = styled.div`
  display: inline-block;
  margin: 5px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.pastel};
  color: var(--font-White);
  text-align: center;
  cursor: pointer;
  &.tag {
    padding: 5px 10px;
    background-color: ${({theme}) => theme.colors.light};
    border-radius: 5px;
    font-size: ${({theme}) => theme.fontSize.small};
    font-family: var(--Primary-KR);
    color: var(--font-dark);
    font-weight: bold;
    cursor: auto;
  }
  &.Modal {
    border-radius: 20px;
    background-color: ${({theme}) => theme.colors.or};
  }
  &.Modal:hover {
    background: linear-gradient(270deg, rgba(251, 157, 126,1) 15%, rgba(255, 255, 255, 1) 140%);
    box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.8);
  }
  &.Website {
    border-radius: 20px;
    background-color: ${({theme}) => theme.colors.pastel};
  }
  &.Website:hover {
    background: linear-gradient(270deg, rgba(251, 125, 121, 1) 15%, rgba(255, 255, 255, 1) 140%);
    box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.8);
  }

  ${({theme}) => theme.mobile`
  padding: 8px 14px;
    &.Modal {
      display:none;
      font-size: ${({theme}) => theme.fontSize.small}
    }
    &.Website {
      font-size: ${({theme}) => theme.fontSize.small}
    }
  `}
`

const Button = ({type, text, onClick}) => {
  return (
    <BoxContainer onClick={onClick} className={type}>{text}</BoxContainer>
  )
}

export default Button