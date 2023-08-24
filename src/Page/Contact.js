import React, { useRef } from 'react'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import contactBg from '../img/contactbg1.mp4';

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: relative;
  ${({theme}) => theme.mobile`
  height: 100%;
  `}
`
const BackgroundVideo = styled.video`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  z-index: -1;
  object-fit: cover;
  ${({theme}) => theme.mobile`
  width: auto;  
  `}
`
const ContentsWrap = styled.div` 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${100/16}rem;
  position: relative;
  &::before {
    content: '';
    border-radius: ${15/16}rem;
    background-color: #fff;
    width: 50%;
    height: 50%;
    z-index: -1;
    position: absolute;
  }
  ${({theme}) => theme.desktop`
  height: 100vh;
  gap: ${15/16}rem;
  &::before {
    width: 50%;
    height: 50%;
  }
`}
  ${({theme}) => theme.laptop`
  height: 100vh;
  gap: ${15/16}rem;
  &::before {
    content: '';
    width: 80%;
    height: 600px;
  }
`}
  ${({theme}) => theme.tablet`
  height: 100vh;
  flex-direction: column;
  gap: ${15/16}rem;
  &::before {
    content: '';
    width: 80%;
    height: 600px;
  }
`}
  ${({theme}) => theme.mobile`
  height: 100vh;
  flex-direction: column;
  gap: 1rem;
  &::before {
    content: '';
    display: none;
  }
`}
`
const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12%;
  & a {
    text-decoration: none;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3125rem;
    font-size: ${({theme}) => theme.fontSize.xxxl};
    transition: all 0.8s;
    
    &:hover,
    &:hover span {
      font-weight: bold;
      color: ${({theme}) => theme.colors.or};
      path {
        color: ${({theme}) => theme.colors.or};
      }
    }
  }
  & div > span {
    margin-left: 25px;
  }
  ${({theme}) => theme.mobile`
  margin-top: 20px;
  gap: 20px;
  & a {
    padding-top: 10px;
    width: 55vw;
    height: 100%;
    border-radius: 15px;
    background-color: #fff;
  }
`}
`
const StyledFontAwesomeIcon  = styled(FontAwesomeIcon)`
  margin-bottom: 15px;
  display: block;
  font-size: ${({theme}) => theme.fontSize.titleSize};
`
const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 15px;
  & div {
    margin-right: 15px;
    display: flex;
    font-size: ${({theme}) => theme.fontSize. xxl};
    font-weight: 600;
  }
  & input {
    width: 400px;
    padding: 5px 10px;
    border: none;
    outline: none;
    font-size: ${({theme}) => theme.fontSize.lg};
    font-family: var(--Primary-KR);
    border-bottom: 1px solid ${({theme}) => theme.colors.Main};
    background-color: transparent;
  }
  & input::placeholder {
    font-size: ${({theme}) => theme.fontSize.lg};
    color: var(--font-lightDark);
    opacity: 0.5;
    font-family: var(--Primary-KR);
  }
  & textarea {
    width: 400px;
    height: 200px;
    padding: 5px 10px;
    border: 1px solid ${({theme}) => theme.colors.main};
    border-radius: 5px;
    outline: none;
    resize: none;
    overflow-y: scroll;
    background-color: transparent;
    font-size: ${({theme}) => theme.fontSize.lg};
    font-family: var(--Primary-KR);
    &::-webkit-scrollbar{
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.colors.Main};
    }
    &::placeholder {
      font-size: ${({theme}) => theme.fontSize.lg};
      font-family: var(--Primary-KR);
      color: var(--font-lightDark);
      opacity: 0.5;
    }
  }
  ${({theme}) => theme.mobile`
  width: 370px;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  & div {
    font-size: ${({theme}) => theme.fontSize. xxl};
    letter-spacing: 1.3px;
    font-weight: 800;
  }
  & input {
    width: 210px;
    font-size: ${({theme}) => theme.fontSize.base};
  }
  & input::placeholder {
    font-size: ${({theme}) => theme.fontSize.base};
  }
  div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    width: 310px;
  }
  & textarea {
    margin: 10px;
    width: 310px;
    height: 200px;
    padding: 5px 10px;
    overflow-y: scroll;
    font-size: ${({theme}) => theme.fontSize.base};
    &::placeholder {
      font-size: ${({theme}) => theme.fontSize.base};
    }
  }
`}
`
const SubmitButton = styled.button`
  display: block;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: ${({theme}) => theme.colors.pastel};
  color: var(--font-White);
  cursor: pointer;
  transition: 0.8s;
  &:hover {
    background: linear-gradient(270deg, rgba(251, 125, 121,1) 15%, rgba(255, 255, 255, 0.3) 140%);
    box-shadow: 0 0 8px -5px rgba(255, 255, 255, 0.8);
  }
`

const Contact = () => {
  const SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICES_ID;
  const TEMPLATES_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATES_ID;
  const API_KEY = process.env.REACT_APP_EMAIL_JS_API_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATES_ID, form.current, API_KEY)
      .then(() => {
        alert(`메일이 성공적으로 전송되었습니다.`);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <Container>
      <BackgroundVideo autoPlay loop muted>
        <source src={contactBg} type='video/mp4' />
      </BackgroundVideo>
      <ContentsWrap>
        <IconWrap>
          <a href='https://github.com/Revella' target='_blank'>
            <StyledFontAwesomeIcon icon={faGithub} />
            <span>Github</span>
          </a> 
          <a href='https://open.kakao.com/o/snTdHlCf' target='_blank'>
            <StyledFontAwesomeIcon icon={faKaggle} /> 
            <span>Kakao</span>
          </a>
        </IconWrap>
        <FormWrap ref={form} onSubmit={sendEmail}>
          <div>
            <div>Name</div>
            <input required={true} name='user_name' id='name' type="text" placeholder='이름을 입력해주세요.'/>
          </div>
          <div>
            <div>E-mail</div>
            <input required={true} pattern='[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*' title='이메일 형식으로 입력하세요 ex) test@gmail.com' name='user_email' id='email' type="text" placeholder='답변 드릴 이메일을 입력해주세요.'/>
          </div>
          <div>
            <div>Message</div>
            <textarea required={true} name='message' id='message' placeholder='문의 사항을 남겨주세요.' />
          </div>
          <div>
            <SubmitButton type='submit'>Send</SubmitButton>
          </div>
        </FormWrap>
      </ContentsWrap>
    </Container>
  )
}

export default Contact