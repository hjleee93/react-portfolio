import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import '../common.css'
import styled from 'styled-components';
import ts from '../assets/ts.png'
import vue from '../assets/vue.png'
import js from '../assets/js.png'
import nuxt from '../assets/nuxt.png'
import zempie from '../assets/zempie.svg'
import miliverse from '../assets/miliverse.png'
import kia from '../assets/kia.webp'


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import { db } from '../utils/firebase';


const img: any = {
  ts,
  vue,
  js,
  nuxt,
  zempie,
  miliverse,
  kia
}



function Projects() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const projects = [
    {
      title:'Zempie',
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
      color:'#241712'
    },
    {
      title:'KIA SNS',
      langs:['vue', 'ts'],
      desc1:'기아 사내 SNS 웹 어플리케이션',
      desc2:'Vue.js 프론트엔드 개발',
      period:'2021.04~2021.08 (5개월)',
      infos:[],
      img:'kia',
      color:'transparent'
    },
    
  ]
  
  // const Container = styled.div`
  //   margin: 40px;  
  //   box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  //   padding:20px;
  //   display:flex;
  // `;

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



  useEffect(() => {
    
    const fetchData = async () => {
      const docRef = doc(db, "portfolio", "experience");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  


  

  const cards = projects.map((project, index)=>{

    const lan =  project.langs.map((lan)=>{
      return <img src={img[lan]} width={30} key={lan}/>
    })
    const infos = project.infos.map((info) =>{
      return <li key={info}  style={{display:'flex'}}><CheckIcon style={{paddingTop:'3px'}}/>{info}</li>
     
    })

    return (
      <div key={index}>
        <div className='project-card'>
          <div style={{ backgroundColor:project.color, borderRadius:'10px', padding:'30px'}}>
            <img src={img[project.img]} style={{width:'100%'}} />
          </div>
          <div>
            <h2><strong>{project.title}</strong></h2>
            <small>{project.period}</small>
          <p>
            <b>{project.desc1}</b>
          </p>
          <p>{project.desc2}</p>
            <p style={{display: 'flex', justifyContent: 'center'}}>Made with {
              <span style={{marginLeft:'10px'}}>{lan}</span>
              }
            </p>
            <ul key={index}> 
              {infos}
            </ul>
        
          <Button onClick={handleOpen}>주요 코드 확인하기</Button>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>

        </div>
        </div>
      </div>
      

    )
  })


return ( 
<div>
  <h1 style={{height:'100px', display:'flex', alignItems: 'center',justifyContent: 'center'}}>PROJECTS</h1>
  {cards}
</div>
     )
}
export default Projects