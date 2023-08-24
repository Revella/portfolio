import React from 'react'
import { HeaderTitle, ModalContainer, ModalContentLeft, ModalWrapper, anime, left, right } from '../Styled/componentStyle'
import { motion } from 'framer-motion'
import pcImg from '../img/responsive-mockup.png'

const ResponsiveModal = ({title, img}) => {

  return (
    <ModalContainer>
      <ModalWrapper >
        <HeaderTitle props={img}>
          <motion.h1 style={{color:"#fefefe"}} className='modalTitle' variants={anime} initial="start" animate="end">
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
                <li>라이브러리 사용 방법 </li>
                <li>스크롤 이벤트</li>
                <li>개발자 태그</li>
              </ul>
            </div>
            <div>
              <h4>회고</h4>
              <p>
                'data'라고 하는 개발자 태그에 대하여 공부하게 되었습니다. data 태그의 경우, 개발자가 임의적으로 이름을 부여하여 자바스크립트 등으로 하여금 원하는 이벤트를 부여할 수 있게 해준다는 것을 배웠습니다.
              </p>
              <p>
                라이브러리를 통하여, 순수 바닐라 자바스크립트 보다 빠른 효과를 주어 시간을 단축할 수 있다는 것을 배웠고, 이 라이브러리들을 과도하게 사용하게 될 경우 라이브러리가 충돌 될 수 있다는 점을 배웠습니다.
              </p>
            </div>
          </motion.div>
        </ModalContentLeft>
      </ModalWrapper>
    </ModalContainer>
  )
}

export default ResponsiveModal