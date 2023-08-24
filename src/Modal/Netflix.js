import React from 'react'
import { HeaderTitle, ModalContainer, ModalContentLeft, ModalWrapper, anime, left, right } from '../Styled/componentStyle'
import { motion } from 'framer-motion'
import pcImg from '../img/netflix.png'

const Netflix = ({title, img}) => {

  return (
    <ModalContainer>
      <ModalWrapper >
        <HeaderTitle props={img}>
          <motion.h1 className='modalTitle' style={{color: "#fff"}} variants={anime} initial="start" animate="end">
            {title}
          </motion.h1>
        </HeaderTitle>
        <ModalContentLeft>
        <motion.div variants={left}>
            <img src={pcImg} alt="information" />
          </motion.div>
          <motion.div variants={right} className='info'>
            <div>
              <h4>Result</h4>
              <ul>
                <li>TMDB 사이트에서 API 가져오는 방법</li>
                <li>API 이용시 환경변수</li>
                <li>axios</li>
                <li>React-redux 사용법 </li>
                <li>React-middleware 사용법</li>
              </ul>
            </div>
            <div>
              <h4>회고</h4>
              <p>
                영화 데이터를 가지고 오기위하여, TMDB라는 사이트의 API 데이터를 가지고 와서 사용하였습니다.
                axios 와 리덕스미들웨어 중 하나인 Redux-Thunk를 사용하여 API를 비동기 처리 하였습니다.
              </p>
              <p>
                React-router-dom을 이용하여 페이지를 분기하였고, 이전 쇼핑몰 웹 페이지를 만들었을 때와 같이 로그인을 하지 않으면 데이터를 볼 수 없도록 만들었습니다.
              </p>
              <p>
                API를 가지고 올 때 evn이라고하는 시스템 환경변수를 사용하여 API Key를 숨겨야한다는 점과 API를 가지고 올 때 가지고 오지 못하는 경우를 가정해 두고 가져와야한다는 것을 배웠습니다.
              </p>
              <p>
                react-router-dom 에서 Link와 useNavigation를 사용하는 법은 같으나, useNavigation은 리액트의 훅으로 사용되고, Link는 컴포넌트로 사용되어 진다는 점입니다.<br />
                두가지 모두 외부 링크를 이용하게 할 수 없으며, 만일 외부링크를 사용해야할시 a태그 혹은 함수를 이용하여내보내야 한다는 점을 배웠습니다.
              </p>
            </div>
          </motion.div>
        </ModalContentLeft>
      </ModalWrapper>
    </ModalContainer>
  )
}

export default Netflix