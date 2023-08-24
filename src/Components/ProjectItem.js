import React, { useState } from 'react'
import { styled } from 'styled-components'
import Button from '../Components/Button'
import Modal from '../Modal/Modal'

const ItemContainer = styled.div`
  display: block;
  width: 300px;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 3px 2px 3px -3px rgba(0, 0, 0, 1);
  overflow: hidden;
  transition: 0.3s;
  &:hover {
    width: 750px;
  }
  ${({theme}) => theme.tablet`
  width: 650px;
  &:hover {
    width: inherit;
    box-shadow: none;
  }
  `}
  ${({theme}) => theme.mobile`
  width: 300px;
  &:hover {
    width: inherit;
    box-shadow: none;
  }
  `}
`
const ItemWrap = styled.div`
  border-radius: 10px;
  height: 550px;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  .info {
    position: absolute;
    top: -30%;
    left: 10px;
    opacity: 0;
    & h1 {
      letter-spacing: 2px;
      color: var(--font-White);
      font-size: ${({ theme }) => theme.fontSize.xxxl};
    }
    .overView {
      padding: 5px 15px;
      letter-spacing: 1.5px;
      white-space: pre-wrap;
      font-size: ${({ theme }) => theme.fontSize.base};
      font-family: var(--Primary-KR);
      color: var(--font-WhiteGray);
    }
  }
  .buttonWrap {
    position: absolute;
    bottom: 10px;
    right: -30px;
    z-index: 1;
    opacity: 0;
  }
  &:hover .info,
  &:hover .buttonWrap {
    transition: all 0.8s;
    opacity: 1;
  }
  &:hover .info {
    top: 10px;
  }
  &:hover .buttonWrap { 
    right: 10px;
  }
  &:hover::before {
    content: '';
    background: linear-gradient(0, rgba(255, 255, 255, 0) -20%, rgba(30, 30, 30, 0.8) 100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  ${({theme}) => theme.tablet`
  width: inherit;
  .info {
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    & h1 {
      color: var(--font-White);
    }
    .overView {
      padding: 0 15px;
      color: var(--font-WhiteGray);
      font-family: var(--Primary-KR);
      opacity: 1;
    }
  }
  .buttonWrap {
    position: absolute;
    bottom: 10px;
    right: 5px;
    z-index: 1;
    opacity: 1;
  }
  &:before {
    content: '';
    background: linear-gradient(0, rgba(255, 255, 255, 0) -20%, rgba(30, 30, 30, 0.8) 100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:hover .info {
    top: 0;
  }
  &:hover .buttonWrap { 
    bottom: 10px;
    right: 5px;
  }
  `}
  ${({theme}) => theme.mobile`
  height: 400px;
  .info {
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    z-index: 2;
    & h1 {
      color: var(--font-White);
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
    .overView {
      padding: 0 15px;
      font-size: ${({ theme }) => theme.fontSize.base};
      color: var(--font-WhiteGray);
      opacity: 1;
    }
  }
  .buttonWrap {
    position: absolute;
    bottom: 10px;
    right: 5px;
    z-index: 2;
    opacity: 1;
  }
  &:before {
    content: '';
    background: linear-gradient(0, rgba(255, 255, 255, 0) -20%, rgba(30, 30, 30, 0.8) 100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  &:after {
    content: '';
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
  &:hover .info {
    top: 0;
  }
  &:hover .buttonWrap { 
    bottom: 10px;
    right: 5px;
  }
  `}
`

const ProjectItem = (props) => {
  const {id, img, title, type, tag, overview ,url} = props;

  const [isOpen, setIsOpen] = useState(false);
  const goWeb = () => {
    window.open(url, `_self`);
  }
  const modalOpen = () => { setIsOpen(true)};
  const modalClose = () => { setIsOpen(false)};
  
  return (
    <>
      <ItemContainer>
        <ItemWrap>
          { id === 4 ? <img src={img} alt={type} style={{objectPosition: "left top"}} /> :       
            <img src={img} alt={type} />
          }
            <div className='info' >
              <h1>{title}</h1>
              {tag.map((it) => <Button key={it} type='tag' text={it}/>)}
              <div className='overView'>{overview}</div>
            </div>
            <div className='buttonWrap' >
              <Button type="Modal" text='Modal →' onClick={modalOpen} />
              <Button onClick={goWeb} type="Website" text='Website →' />
            </div>
        </ItemWrap>
      </ItemContainer>
      {isOpen && <Modal key={id} {...props} close={modalClose}/>}
    </>
  )
}

export default React.memo(ProjectItem)