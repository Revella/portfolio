import React from 'react'
import { HeaderTitle, ModalContainer, ModalContentLeft, ModalWrapper, anime, left, right } from '../Styled/componentStyle'
import { motion } from 'framer-motion'
import pcImg from '../img/isotope-Pc-mockup.ver.png'
import tabletImg from '../img/isotope Tablet.ver .png'

const Grid = ({title, img}) => {

  return (
    <ModalContainer>
      <ModalWrapper >
        <HeaderTitle props={img}>
          <motion.h1 className='modalTitle' style={{color: "#fff", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)"}} variants={anime} initial="start" animate="end">
            {title}
          </motion.h1>
        </HeaderTitle>
        <ModalContentLeft>
          <motion.div variants={left}>
            <img src={pcImg} alt="information" />
            {/* <img src={tabletImg} alt="information" /> */}
          </motion.div>
          <motion.div variants={right} className='info'>
            <div>
              <h4>Result</h4>
              <ul>
                <li>isotope 라이브러리</li>
                <li>라이브러리의 장 단점</li>
              </ul>
            </div>
            <div>
              <h4>회고</h4>
              <p>
                CSS를 이용하여 display: gird를 주는 방법도 있으나, 라이브러리를 통하여 홈페이지 디자인을 도와주는 라이브러리들이 많이 있다는 것을 알게되었습니다.<br />
                CSS만을 이용하여 grid 형식으로 홈페이지를 만들 때 보다, 라이브러리를 통하여 쉽고 간결하게 만들 수 있었습니다.<br />
                그러나, 라이브러리를 많이 사용하게 되었을 경우 라이브러리들이 충돌이 일어날 수 도 있다는 점을 배웠습니다.
              </p>
            </div>
          </motion.div>
        </ModalContentLeft>
        
      </ModalWrapper>
    </ModalContainer>
  )
}

export default Grid