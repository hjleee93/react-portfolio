import React from 'react'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

const skills = [
  {
    lang:'Vue.js',
    desc:'',
    percentage:80,
    color:'#41b883'

  },
  {
    lang:'Typescript',
    percentage:70,
    color:'#3178c6'

  },
  {
    lang:'Nuxt.js',
    percentage:80,
    color:'#34495E'

  },
  {
    lang:'Javascript',
    percentage:70,
    color:'#f1dd35'

  },

]
function Skills() {
 
const skillBar = skills.map((skill)=>{
  return(
    <div style={{display:'flex'}}>
      <p style={{width:'20%'}}>{skill.lang}</p>
      <p style={{width:'70%'}}>
      <LinearProgress variant="determinate" color='inherit'  value={skill.percentage} style={{ margin:10+'px', color:skill.color}} 
      key={skill.lang}/>
      </p>
    </div>

  )
  
})
  
return(
  <div>
    <h3>Skills</h3>
   {skillBar}
        
  </div>

)
}
export default Skills