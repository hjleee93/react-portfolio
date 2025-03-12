import { useEffect, useRef } from "react";
import { scrollToRef } from "../scripts/utils";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import icon from '../../public/images/coding.png'
import Info from "../components/Info";
import Projects from "../components/Projects";
import '../styles/pages/home.scss'
import { useLocation } from "react-router-dom";
import ScrollAnimation from "../components/Scroll";

function Home() {
  const infoRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleClickScroll = () => {
    scrollToRef(infoRef);
  }

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);


  return (
    <div className="home">
      <div className='typewriter'>
        <img src={icon} alt="" />
        <h1> Frontend Developer</h1>
        <div className='ani-desc'>
          안녕하세요, 프론트엔드 개발자 이현정입니다. <br />
        </div>
        <div className='ani-btn'>
          <button className="more-btn" onClick={handleClickScroll}><ArrowDownwardIcon />More</button>
        </div>
      </div>
      <div ref={infoRef} id="info" className="section info" >
        <ScrollAnimation>
          <Info />
        </ScrollAnimation>
      </div>
      <div ref={projectsRef} id="projects" className="section project">
        <ScrollAnimation>
          <Projects />
        </ScrollAnimation>
      </div>
    </div>
  )
}
export default Home