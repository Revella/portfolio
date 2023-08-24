import React from 'react'
import { HeaderTitle, ModalContainer, ModalContentLeft, ModalWrapper, anime, left, right } from '../Styled/componentStyle'
import { motion } from 'framer-motion'
import pcImg from '../img/3D_Company_Web.png'

const Company = ({title, img }) => {

  return (
    <ModalContainer>
      <ModalWrapper >
        <HeaderTitle props={img}>
          <motion.h1 className='modalTitle' style={{color: "#fefefe"}} variants={anime} initial="start" animate="end">
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
                <li>Java Script를 통해 마우스 이벤트를 줄 수 있었습니다.</li>
                <li>CSS를 통하여 원근감줄 수 있었습니다.</li>
              </ul>
            </div>
            <div>
              <h4>회고</h4>
              <p>
                Java Script를 통해 마우스가 섹션위에 있을때 멈추는 효과를 주고, 마우스가 섹션 위를 떠났을 때는 다시 재생이 될 수 있도록 하는 효과를 주었습니다. <br />
                CSS를 통하여 X와 Y축 뿐만이 아닌 Z 축을 통하여 깊이감을 줄 수 있는 법을 배웠습니다.<br />
                이때 사용하는 프로퍼티는<em>perspective</em>이고, 이 프로퍼티를 이용하여 원근감을 줄 수 있었습니다.
              </p>
            </div>
          </motion.div>
        </ModalContentLeft>
        
      </ModalWrapper>
    </ModalContainer>
  )
}

export default Company