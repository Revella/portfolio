import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  padding: 1.0025rem 1.25rem;
  background-color: ${({theme}) => theme.colors.Main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;
const IconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;
  cursor: pointer;
`;
const StyledFontAwesomeIcon  = styled(FontAwesomeIcon)`
  font-size: ${({theme}) => theme.fontSize.xxl};
  path {
    color: var(--font-WhiteGray);
  }
  opacity: 0.7;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 0 0.3125rem -0.3125rem rgba(255, 255, 255, 0.8);
    path {
      color: var(--font-White);
    }
    opacity: 1;
  }
`
const CopyWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  gap: 0.9375rem;
`
const CopyText = styled.div`
  color: var(--font-WhiteGray);
  font-size: ${({theme}) => theme.fontSize.small};
`

const Footer = () => {
  const gitUrl = 'https://github.com/Revella';
  return (
    <Container>
      <IconWrap>
        <StyledFontAwesomeIcon onClick={() => window.open(gitUrl)} icon={faGithub} />
        <div>Notion</div>
        <StyledFontAwesomeIcon icon={faEnvelope} />
      </IconWrap>
      <CopyWrap>
        <CopyText>이 사이트는 포트폴리오 목적으로 만든 사이트입니다.</CopyText>
        <CopyText>ⓒ 2023</CopyText>
      </CopyWrap>
    </Container>
  )
}

export default Footer