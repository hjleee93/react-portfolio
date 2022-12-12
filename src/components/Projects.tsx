import styled from 'styled-components';
import ts from '../assets/ts.png'
import vue from '../assets/vue.png'
import js from '../assets/js.png'
import nuxt from '../assets/nuxt.png'
import { Button } from '@mui/material';

const img: any = {
  ts,
  vue,
  js,
  nuxt
}

function Projects() {
  const projects = [
    {
      title:'Zempie',
      langs:['nuxt', 'vue', 'ts'],
      desc1:'HTML5 게임을 공유하는 SNS 형식의 웹 어플리케이션',
      desc2:'Nuxt.js 및 Vue.js 프론트엔드 개발, Node.js 백엔드 유지보수',
      period:'2021.01~2022.12(2년)',
      infos:[
        'Vue.js 2.0 에서 Nuxt.js로 전환 후 SEO 적합성 100 달성 완료 후 google analytics 방문자 수 30% 증가',
        'Google Analytics 4 와 BigQuery를 이용하여 단순 테이블에서 Chart.js를 이용하여 가시성을 50%이상 향상',
        'Quasar 프레임워크를 이용하여 어드민페이지 개발을 빠르게 진행',
      ]
     
    },
    {
      title:'Miliverse',
      langs:['vue', 'js'],
      desc1:'전세계 맵을 10m²로 분할하여 부동산 메타버스를 제공하는 웹 어플리케이션',
      desc2:'Vue.js 프론트엔드 개발',
      period:'2022.01~2022.07(7개월)',
      infos:[
        'Mapbox API를 사용하여 가상 부동산 메타버스 구현, 전체적인 맵의 비즈니스 로직 담당.',
        'Vue.js 3.0을 Composition Api를 도입하여 프로젝트 생산성을 10%높임',
        'Firebase 기반 로그인으로 카카오톡, 구글, 페이스북 로그인을 사용 사용자의 편의성을 높임', 
      ]
    },
    {
      title:'Kia sns',
      langs:['vue', 'ts'],
      desc1:'기아 사내 SNS 웹 어플리케이션',
      desc2:'Vue.js 프론트엔드 개발',
      period:'2021.04~2021.08 (5개월)',
      infos:[]
    },
    
  ]
  
  const Box = styled.div`
    margin: 40px;  
  `;

  const cards = projects.map((project)=>{
    const lan =  project.langs.map((lan)=>{
      return <img src={img[lan]} width={30} key={lan}/>
    })
    const infos = project.infos.map((info) =>{
      return <li>{info}</li>
     
    })

    return (
      <div>
        <Box key={project.title} className='project-card'>
          <div>
            <p><strong>{project.title}</strong></p>
            <small>{project.period}</small>
          </div>
          <p>
            {project.desc1}
          </p>
          <p>{project.desc2}</p>
            <p>Main Skills : {
              <span>{lan}</span>
              }
            </p>
            <ul>
              {infos}
            </ul>
        
        </Box>
        <Button>주요 코드 확인하기</Button>
      </div>

    )
  })


return ( 
<div>
  <h3>Projects</h3>
  {cards}
</div>
     )
}
export default Projects