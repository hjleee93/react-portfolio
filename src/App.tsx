import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import './common.css';
import styled from 'styled-components'
import Info from './components/Info'
import Projects from './components/Projects';
import Skills from './components/Skills';
import icon from './assets/coding.png'
import Footer from './components/Footer';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Header from './components/header';
import { scrollToRef } from './scripts/utils'

function App() {
  const MAIN_ADDR='https://안녕하세요_프론트엔드_개발자_이현정입니다.com'
  const INFO_ADDR='https://자기소개.com'
  const PROJECTS_ADDR='https://프로젝트.com'

  
  const infoRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const [addrMsg, setAddrMsg] = useState(MAIN_ADDR)
  const [isInfoRefPassed, setIsInfoRefPassed] = useState(false);
  const [isProjectsRefPassed, setIsProjectsRefPassed] = useState(false);
  const [isSkillsRefPassed, setIsSkillsRefPassed] = useState(false);


  const isPassedTargetArea = (targetRef:React.RefObject<HTMLElement>) => {
    if(!targetRef.current) return false

      const targetRect = targetRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;

      return targetRect.top < scrollY
  }

  const handleScroll = () => {
    if(!isProjectsRefPassed) setIsInfoRefPassed( isPassedTargetArea(infoRef))
    if(!isInfoRefPassed) setIsProjectsRefPassed( isPassedTargetArea(projectsRef))

    if(isInfoRefPassed){
      setAddrMsg(INFO_ADDR) 
    }
    if(isProjectsRefPassed){
      setAddrMsg(PROJECTS_ADDR)
    }
    if(!isInfoRefPassed && !isProjectsRefPassed){
      setAddrMsg(MAIN_ADDR)
    }
  }

  window.addEventListener('scroll', handleScroll);



  const handleClickScroll = () => {
   scrollToRef(infoRef);
  } 

  return (   
    <div className="App">
      <Header addrMsg={addrMsg}/>
      <div className='typewriter'>
      <img src={icon}/>
        <h1> Frontend Developer</h1>
        <div className='ani-desc' style={{fontSize:'20px', paddingBottom:'50px'}}>
          안녕하세요, 프론트엔드 개발자 이현정입니다. <br/>
        </div>
        <div  className='ani-btn'>
        <button className="more-btn" onClick={handleClickScroll}><ArrowDownwardIcon/>More</button>
        </div>
        </div>
        <div ref={infoRef}>
          <Info  />
        </div>
        <div ref={projectsRef}>
          <Projects/>
        </div>
        <div ref={skillsRef}>
          <Skills/> 
        </div>
        <Footer/>

    </div>

  );
}

export default App;
