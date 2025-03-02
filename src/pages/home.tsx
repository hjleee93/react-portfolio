import { useRef } from "react";
import { scrollToRef } from "../scripts/utils";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import icon from '../assets/coding.png'
import Info from "../components/Info";
import Projects from "../components/Projects";
import './home.scss'

function Home() {
  const infoRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleClickScroll = () => {
    scrollToRef(infoRef);
  }

  return (
    <div className="home">
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
          </div>
  )
}
export default Home