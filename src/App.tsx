import './App.css';
import './common.css';
import styled from 'styled-components'
import Info from './components/Info'
import Projects from './components/Projects';
import Skills from './components/Skills';
import icon from './assets/coding.png'
import Footer from './components/Footer';

function App() {

  const Page = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align:center;
  `;
  return (   
    <div className="App">
      <Page className='typewriter'>
      <img src={icon}/>
        <h1> Frontend Developer</h1>
        <span style={{fontSize:'20px', paddingBottom:'50px'}}>안녕하세요, 프론트엔드 개발자 이현정입니다.</span>
        </Page>
        <Info/>
        <Projects/>
        <Skills/> 
        <Footer/>

    </div>

  );
}

export default App;
