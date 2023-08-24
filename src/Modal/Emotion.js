import React from 'react'
import { HeaderTitle, ModalContainer, ModalContentLeft, ModalWrapper, anime, left, right } from '../Styled/componentStyle'
import { motion } from 'framer-motion'
import pcImg from '../img/emotionWeb_mockup.png'

const Emotion = ({title, img}) => {
  return (
    <ModalContainer>
      <ModalWrapper >
        <HeaderTitle props={img} style={{backgroundPosition: "top"}}>
          <motion.h1 className='modalTitle' variants={anime} initial="start" animate="end">
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
                <li>React-router-dom 사용 및 분기점의 프로퍼티 값 할당 받는 법</li>
                <li>Props를 주는 방법</li>
                <li>로컬스토리지 사용하는 법</li>
              </ul>
            </div>
            <div>
              <h4>회고</h4>
              <p>
                React-router-dom이라고하는 라우터를 사용하여 Sing Page 안의 분기점을 만들어 낼 수 있었습니다. 이때, 직접 url의 프로퍼티에 값을 할당하는 방법과 메서드로 조작해야하는 Query방식에 대해서 알게되었습니다.
              </p>
              <p>
                Context를 이용하여 Props를 좀더 용이하게 만들 수 있다는 것을 배웠고, 무분별하게 Props를 사용하지 않게 만들 수 있다는 점을 배웠습니다.
              </p>
              <p>
                로컬스토리지를 활용하여 페이지를 떠나더라도 로컬스토리지가 비워지지 않는 이상 페이지의 내용은 남아있도록 하였습니다.<br />
                페이지 배포시 파비콘과, URL공유시 미리보기가 될 수 있도록 만들어졌습니다.
              </p>
            </div>
          </motion.div>
        </ModalContentLeft>
      </ModalWrapper>
    </ModalContainer>
  )
}

export default Emotion