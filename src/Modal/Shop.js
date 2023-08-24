import React from 'react'
import { HeaderTitle, ModalContainer, ModalContentLeft, ModalWrapper, anime, left, right } from '../Styled/componentStyle'
import { motion } from 'framer-motion'
import pcImg from '../img/Shop_mall_main.png'

const Shop = ({title, img}) => {

  return (
    <ModalContainer>
      <ModalWrapper >
        <HeaderTitle props={img}>
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
                <li>가상 Json server 사용 하는 방법</li>
                <li>React-router-dom을 이용한 private 형식으로 분기</li>
              </ul>
            </div>
            <div>
              <h4>회고</h4>
              <p>
                이 페이지를 구상할때 중요하게 생각했던 부분은 가상서버를 이용하여 아이템 출력 및 검색을 할 수 있도록 만들었습니다.<br />
                페이지를 분기 할 때 사용자의 데이터를 곧 바로 넘기지 않고, 보안을 위해 한 번 걸러서 넘어가야한다는 점을 배웠습니다.<br />
                또한, 네이버 등 포털 사이트에서 로그인을 했을 시와 로그인을 하지 않았을 시의 컴포넌트가 어떻게 변화하는지 또한 배우게 되었습니다.
              </p>
              <p>
                상태관리를 관리를 위한 라이브러리로 Redux와 Redux를 좀 더 효율적으로 관리할 수 있게도와주는 미들웨어가 있다는 점 또한 배웠습니다.
              </p>
            </div>
          </motion.div>
        </ModalContentLeft>
      </ModalWrapper>
    </ModalContainer>
  )
}

export default Shop