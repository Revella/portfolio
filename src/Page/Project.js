import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import ProjectItem from '../Components/ProjectItem'
import { motion } from 'framer-motion'
import { loading } from '../Styled/componentStyle'
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position:relative;
  // background: linear-gradient(0, rgba(30, 30, 30, 0.5) 15%, rgba(255, 255, 255, 0) 130%);
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${({theme}) => theme.laptop`
  height: 100vh;
  `}
  ${({theme}) => theme.tablet`
  height: auto;
  `}
  ${({theme}) => theme.mobile`
  height: auto;
  `}
`
const ProjectWrap = styled.div`
  width: calc(100% - 6%);
  margin-left: 6%;
  height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({theme}) => theme.laptop`
  height: 100%;
  `}
  ${({theme}) => theme.tablet`
  height: auto;
  `}
  ${({theme}) => theme.mobile`
  height: auto;
  padding: 50px 10px;
  `}
`
const ProjectMenus = styled.div`
  height: 120px;
  margin-bottom: 20px;
  font-size: ${({theme}) => theme.fontSize.xxl};
  display: flex;
  justify-content: space-around;
  align-items: center;
  & div {
    display: flex;
    justify-content: space-around;
    position: relative;
    padding: 15px;
  }
  & label {
    padding: 5px 25px;
    border: none;
    border-left: 1px solid ${({theme}) => theme.colors.Main};
    cursor: pointer;
    &:nth-of-type(1) {
      border-left: none;
    }
    & input[type="radio"]:checked {
      font-weight: 900;
    }
  }
  ${({theme}) => theme.mobile`
  height: 90px;
  margin-bottom: 0px;
  font-size: ${({theme}) => theme.fontSize.xl};
  `}
`
const ProjectItemWrap = styled(motion.div)`
  max-width: 100%;
  padding: 10px 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content : center;
  align-times: center;
  ${({theme}) => theme.tablet`
  margin-right: 70px;
  width: 650px;
  max-width: none;
  flex-direction: column;
  `}
  ${({theme}) => theme.mobile`
  margin-right: 20px;
  padding: 0px 0px;
  width: 300px;
  max-width: none;
  flex-direction: column;
  `}
`

const animes = {
  start: {
    opacity: 0
  },
  end: {
    y: 0,
    opacity: 1
  }
}

const Project = () => {
  const [load, setLoad] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const projectMenus = ["All", "Web", "React"];
  const [type, setType] = useState("All");
  let [targetArray, setTargetArray] = useState(projectData);
  
  const getProject = async () => {
    let url = `https://my-json-server.typicode.com/Revella/portfolio/project`;
    let response = await fetch(url);
    let data = await response.json();
    setProjectData(data);
    setTargetArray(data);
    setLoad(true);
  };


  useEffect(() => {
    getProject();
  },[],[targetArray,projectData]);

  const webType = projectData.filter((data) => {
    return data.type === "Web";
  });
  const reactType = projectData.filter((data) => {
    return data.type === "React";
  });

  const HandleButtonClick = (e) => {
    setType(e.target.value)
    if(e.target.value === "All") {
      setTargetArray(projectData)
    } else if (e.target.value === "Web") {
      setTargetArray(webType)
    } else if (e.target.value === "React") {
      setTargetArray(reactType)
    } 
  };

  return (
    <motion.div variants={loading} initial="start" animate="end">
      <Container>
        <ProjectWrap>
          <ProjectMenus>
            {projectMenus.map((type) => {
              return (
                <label id="type" key={type}>
                <input 
                type='radio'
                name='type'
                defaultValue={type}
                id='type'
                defaultChecked={type === "All"}
                onChange={HandleButtonClick}
                style={{display: "none"}}
                />
              {type}</label>
              )
            })
            }
          </ProjectMenus>
          <ProjectItemWrap variants={animes} >
            {load ? targetArray.map((item) => 
            <ProjectItem key={item.id} {...item} />) : 
            <h1>현재 로딩중 입니다.</h1>
            }
          </ProjectItemWrap>
        </ProjectWrap>
      </Container>
    </motion.div>
  )
}

export default Project
