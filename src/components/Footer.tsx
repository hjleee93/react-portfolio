import GitHubIcon from '@mui/icons-material/GitHub';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import Tooltip from '@mui/material/Tooltip';
function Footer() {
return ( 
  <div style={{backgroundColor:"#444444", height:'200px', display:'flex',
    flexDirection:'column'
  }}> 
  <div style={{paddingTop:'50px'}}>
    
  <Tooltip title="Github">
    <GitHubIcon
      onClick={() => window.open(process.env.REACT_APP_GIT_HUB)}
      style={{marginRight:'20px', color:'#fff', cursor:'pointer'}} 
      />
    </Tooltip>

    <Tooltip title="Blog">
      <WebAssetIcon 
        onClick={() => window.open(process.env.REACT_APP_BLOG)}
        style={{color:'#fff', cursor:'pointer'}}/>
    </Tooltip>
  </div>     
  <p style={{color:'#fff'}}> Copyright 2022. Hyeonjeong</p>
 
  </div>

     )
}
export default Footer