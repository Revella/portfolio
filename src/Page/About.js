import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import { loading } from '../Styled/componentStyle'

const Container = styled.div`
  width: calc(100vw - 5%);
  margin-left: 5%;
  height: 100vh;
  position: relative;
  background: rgba(225, 225, 225, 0.2);
  display: flex;
  flex-direction: column;
  ${({theme}) => theme.tablet`
  width: 100vw;
  height: auto;
  margin-left: 0;
  `}
  ${({theme}) => theme.mobile`
  width: 100vw;
  height: auto;
  margin-left: 0;
  `}
`
const Wrapper = styled.div`
  height: 100vh;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.87500rem;
  ${({theme}) => theme.tablet`
  height: auto;
  `}
  ${({theme}) => theme.mobile`
  margin-top: 60px;
  height: auto;
  `}
`
const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7.5rem;
  position: relative;
  ${({theme}) => theme.laptop`
    flex-direction: column;
  `}
  ${({theme}) => theme.tablet`
    flex-direction: column;
  `}
  ${({theme}) => theme.mobile`
    flex-direction: column;
    gap: 50px;
  `}
`
const ImagWrap = styled(motion.div)`
  width: 100vw;
  height: 60vh;
  display: inline-block;
  background: url('https://images.unsplash.com/photo-1559794009-b0b35f1d8502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=875&q=80')no-repeat; center center;
  background-size: cover;
  filter: grayscale(0.7);
  border-radius: 0 0 10% 0px;
  box-shadow: 0.125rem 0.125rem 0.625rem -0.3125rem rgba(255, 255, 255, 0.8);
  overflow: hidden;
  box-shadow: 0 0 5px -5px rgba(0, 0, 0, 0.5);
  &:hover {
    transition: 0.8s;
    filter: grayscale(0);
  }
  ${({theme}) => theme.tablet`
  height: 50vh;
`}
  ${({theme}) => theme.mobile`
  order: 1;
  width: 90vw;
  height: 50vh;
  background-position: center;
`}
`
const InfoWrap = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  font-size: ${({theme}) => theme.fontSize.titleSize};
  position: relative;
  &:before {
    content: "〃";
    font-size: calc(${({theme}) => theme.fontSize.xxl} * 2.3);
    font-weight: 900;
    position: absolute;
    top: -0.9375rem;
    left: -0.9375rem;
    transform: rotate(180deg);
    opacity: 0.5;
  }
  &:after {
    content: "〃";
    font-size: calc(${({theme}) => theme.fontSize.xxl} * 2.3);
    font-weight: 900;
    position: absolute;
    top: -0.9375rem;
    left: 41rem;
    opacity: 0.5;
  }
  ${({theme}) => theme.desktop`
  &:after {
    font-size: calc(${({theme}) => theme.fontSize.xxl} * 2.3);
    font-weight: 900;
    position: absolute;
    top: -0.9375rem;
    right: 14rem;
    opacity: 0.5;
  }
  `}
  ${({theme}) => theme.laptop`
  &:after {
    position: absolute;
    top: -0.6375rem;
    right: 0.4rem;
    opacity: 0.5;
  }
  `}
  ${({theme}) => theme.tablet`
  &:after {
    position: absolute;
    top: -0.6375rem;
    right: -1rem;
    opacity: 0.5;
  }
  `}
`
const MyInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;
  ${({theme}) => theme.mobile`
  & div:last-child {
    font-size: ${({theme}) => theme.fontSize.xxxl};
    width: 100%;
    text-align: center;
    white-space: pre-wrap;
  `}
`
const Infos = styled.div`
  width: 100%;
  font-size: ${({theme}) => theme.fontSize.xxxl};
  position: relative;
  span {
    color: ${({theme}) => theme.colors.dark};
    font-family: var(--Sub-KR);
    font-weight: bold;
    width:4.9%;
  }
  ${({theme}) => theme.mobile`
    span {
      width:10%;
    }
  `}
`
const Description = styled.div`
  width: 50vw;
  padding: 1.875rem;
  display: flex;
  justify-content: space-around;
  gap: 1.5rem;
  position: relative;
  // font-size: ${({theme}) => theme.fontSize.xxl};
  ${({theme}) => theme.tablet`
  width: 85vw;
`}
  ${({theme}) => theme.mobile`
  width: 100%;
  line-height: 1.3;
  white-space: pre-line;
`}
`
const OverDesc = styled.div`
  // font-size: ${({theme}) => theme.fontSize.xl};
  font-size: 1.3vw;
  font-family: var(--Primary-KR);
  z-index: 1;
  line-height: 1.3;
  & p:first-child {
    padding-top: 1vw;
    margin-bottom: 1.2vw;
  }
  & p:last-child {
    margin-top: 1.2vw;
  }
  & p {
    font-family: var(--Primary-KR);
    letter-spacing: 1px;
    line-height: 1.4;
    white-space: pre-wrap;
    color: var(--font-dark);
    & em {
      font-size: 1.3vw;
      font-family: var(--Sub-KR);
      letter-spacing: 0;
      font-style: normal;
      font-weight: bold;
    }
  }
  ${({theme}) => theme.laptop`
  font-size: 1.4vw;
  & p:first-child {
    padding-top: 0;
    margin-bottom: 1.4vw;
  }
  & p {
    margin-bottom: 2vw;
    & em {
      font-size: 1.4vw;
    }
  }
`}
  ${({theme}) => theme.tablet`
  width: 100vw;
  font-size: 2vw;
  & p:first-child {
    padding-top: 0;
    margin-bottom: 2vw;
  }
  & p {
    margin-bottom: 2vw;
    & em {
      font-size: 2vw;
    }
  }
`}
  ${({theme}) => theme.mobile`
  width: 72vw;
  font-size: 5vw;

  & p:first-child {
    padding-top: 0;
    margin-bottom: 3vw;
  }
  & p {
    margin-bottom: 3vw;
    em {
      font-size: 5vw;
    }
  }
`}
`
const Files = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 5%;
  padding-right: 10%;
  font-size: ${({theme}) => theme.fontSize. lg};
  a {
    padding: 10px 15px;
    pointer: curser;
    text-decoration: none;
    color: var(--font-White);
    font-weight: bold;
    font-family: var(--Primary-KR);
    background-color: ${({theme}) => theme.colors.or};
    border-radius: 10px;
    &:hover {
      transition: 0.8s;
      background-color: ${({theme}) => theme.colors.ye};
      color: var(--font-Dark);
    }
  }
`
const textAnime = {
  start: {
    opacity: 0
  }, 
  end: {
    opacity: 1,
    transition: {
      duration: 0.1
    }
  },
}
const itemLeftAnime = {
  start: {
    x: 300,
    opacity: 0,
  }, 
  end: {
    x: 0,
    opacity: 1,
    duration: 0.8
  }
}
const itemRightAnime = {
  start: {
    x: -300,
    opacity: 0,
  }, 
  end: {
    x: 0,
    opacity: 1,
    duration: 0.8
  }
}

const About = () => {
  let title = "천천히 한 걸음씩 나아가는 황영재입니다.";
  let splitTitle =  title.split("");

  useEffect(() => {
  },[])
  return (
    <motion.div variants={loading} initial="start" animate="end">
      <Container >
        <Wrapper>
          <Profile>
            <ImagWrap variants={itemRightAnime}/>
            <InfoWrap>
              <MyInfos>
                <Infos>
                  <motion.span variants={textAnime} >천천히 한 걸음씩 나아가는 황영재입니다.</motion.span>
                </Infos>
              </MyInfos>
              <Description>
                <OverDesc>
                  <motion.p variants={itemLeftAnime}>
                    FrontEnd에 도전하는 이유는 여러 기술을 접목하여 <em>사용자의 편의성에 도움을 줄 수 있다는 점이 매력적으로</em> 다가왔습니다.<br />위와 같은 사유로 이 일을 선택하게 되었습니다. 
                  </motion.p>
                  <motion.p variants={itemRightAnime}>
                    창작하는 것을 좋아하고, 찾아보는 것을 좋아합니다.
                  </motion.p>
                  <motion.p variants={itemLeftAnime}>
                    앞으로도 더 잘 하고 싶기 때문에 <em>Youtube 및 시중에 나와있는 교재와 구글링을 이용하여
                    더 전진해 나가는 사람이 되도록 하겠습니다.</em>
                  </motion.p>
                </OverDesc>
              </Description>
              <Files>
                <motion.a variants={itemRightAnime} href="https://blog.kakaocdn.net/dn/d4DOZF/btsrjrpFKlj/j5JyuR1sxvkFp9qcBsLFKK/%ED%99%A9%EC%98%81%EC%9E%AC_%EC%9D%B4%EB%A0%A5%EC%84%9C_%EB%B0%8F_%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C%EC%84%9C.docx?attach=1&knm=tfile.docx" download="황영재_이력서.docx">이력서 다운로드</motion.a>
              </Files>
            </InfoWrap>
          </Profile>
        </Wrapper>
      </Container>
    </motion.div>
  )
}

export default About