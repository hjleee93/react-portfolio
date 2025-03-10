import { useEffect, useState } from 'react';
import '../styles/components/Project.scss'
import ProjectCard from './ProjectCard';



function Projects() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const projects = [
    {
      title:'Zempie',
      framework:['nuxt', 'vue', 'quasar'],
      style:['elementui'],
      langs:['ts'],
      header:'HTML5 게임을 공유하는 SNS 형식의 웹 어플리케이션',
      desc:`프론트엔드는 Nuxt.js로 개발하였으며, 백엔드는 Node.js와 Sequelize를 활용하여 유지보수를 담당했습니다. 또한 어드민 페이지 개발 시에는 Quasar 프레임워크를 사용했습니다.`,
      period:'2021.01~2024.02(3년)',
      infos:[
        'Vue.js 2.0 에서 Nuxt.js로 전환 후 SEO 적합성 100 달성 완료 후 google analytics 방문자 수 30% 증가',
        'Google Analytics 4 와 BigQuery를 이용하여 단순 테이블에서 Chart.js를 이용하여 가시성을 50%이상 향상',
        'Quasar 프레임워크를 이용하여 어드민페이지 개발을 빠르게 진행',
      ],
      img:'zempie',
      color:'#ff6e17',
      route:'zempie'
    },
    {
      title:'Seller canvas',
      langs:['nuxt', 'vue', 'ts'],
      desc1:'HTML5 게임을 공유하는 SNS 형식의 웹 어플리케이션',
      desc2:`Nuxt.js 와 Vue.js 프론트 개발을 진행했으며 Node.js와 sequelize를 사용하여 백엔드 유지보수를 진행했습니다.
      어드민페이지는 Quasar 프레임워크를 사용하여 개발을 진행했습니다.`,
      period:'2021.01~2022.12(2년)',
      infos:[
        'Vue.js 2.0 에서 Nuxt.js로 전환 후 SEO 적합성 100 달성 완료 후 google analytics 방문자 수 30% 증가',
        'Google Analytics 4 와 BigQuery를 이용하여 단순 테이블에서 Chart.js를 이용하여 가시성을 50%이상 향상',
        'Quasar 프레임워크를 이용하여 어드민페이지 개발을 빠르게 진행',
      ],
      img:'zempie',
      color:'#ff6e17',
      route:'zempie'
    },
    {
      title:'Miliverse',
      langs:['vue', 'js'],
      desc1:'전세계 맵을 10m²로 분할하여 부동산 메타버스를 제공하는 웹 어플리케이션',
      desc2:'Vue.js의 Quasar프레임워크를 이용하여 프론트엔드 개발을 진행했습니다.',
      period:'2022.01~2022.07(7개월)',
      infos:[
        'Mapbox API를 사용하여 가상 부동산 메타버스 구현, 전체적인 맵의 비즈니스 로직 담당.',
        'Vue.js 3.0을 Composition Api를 도입하여 프로젝트 생산성을 10%높임',
        'Firebase 기반 로그인으로 카카오톡, 구글, 페이스북 로그인을 사용 사용자의 편의성을 높임', 
      ],
      img:'miliverse',
      color:'#241712',
      route:'miliverse'
    },
    {
      title:'KIA SNS',
      langs:['vue', 'ts'],
      desc1:'기아 사내 SNS 웹 어플리케이션',
      desc2:'Vue.js 프론트엔드 개발',
      period:'2021.04~2021.08 (5개월)',
      infos:[],
      img:'kia',
      color:'transparent',
      route:'kia'
    },
    
  ]


  
return ( 
  <>
  <h2>PROJECTS</h2>
<div className='project-list'>
<div className="tabs">
  <input type="radio" id="company" name="tab" defaultChecked />
  <label htmlFor="company" className="tab" >회사 프로젝트</label>

  <input type="radio" id="personal" name="tab" />
  <label htmlFor="personal" className="tab">개인 프로젝트</label>

  <div className="content">
    <div className="tab-content company">
    {projects.map((project, index)=>{
    return (
      <ProjectCard project={project} key={project.title}/>
    )
  })}
  </div>
    </div>
    <div className="tab-content personal">
    {projects.map((project, index)=>{
    return (
      <ProjectCard project={project} key={project.title}/>
    )
  })}
  </div>
    </div>
  </div>
  </>
     )
}
export default Projects