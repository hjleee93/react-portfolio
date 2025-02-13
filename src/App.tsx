import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import './common.scss';
import styled from 'styled-components'
import Info from './components/Info'
import Projects from './components/Projects';
import Skills from './components/Skills';
import icon from './assets/coding.png'
import Footer from './components/Footer';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Header from './components/header';
import { scrollToRef, throttling } from './scripts/utils'
import { BrowserRouter, useLocation } from 'react-router-dom';

function App() {
  const MAIN_ADDR = 'https://안녕하세요_프론트엔드_개발자_이현정입니다.com'

  const infoRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const [addrMsg, setAddrMsg] = useState(MAIN_ADDR)

  const handleClickScroll = () => {
    scrollToRef(infoRef);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header addrMsg={addrMsg} />
        <div className='typewriter'>
          <img src={icon} />
          <h1> Frontend Developer</h1>
          <div className='ani-desc'>
            안녕하세요, 프론트엔드 개발자 이현정입니다. <br />
          </div>
          <div className='ani-btn'>
            <button className="more-btn" onClick={handleClickScroll}><ArrowDownwardIcon />More</button>
          </div>
        </div>
        <div ref={infoRef} id="info" className="section info" > 
          <Info />
        </div>
        <div ref={projectsRef} id="projects" className="section project">
          <Projects />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
