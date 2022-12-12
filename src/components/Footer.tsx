import GitHubIcon from '@mui/icons-material/GitHub';
import WebAssetIcon from '@mui/icons-material/WebAsset';
function Footer() {
return ( 
  <div style={{backgroundColor:"#444444", height:'200px', display:'flex',
    flexDirection:'column'
  }}> 
  <div style={{paddingTop:'50px'}}>
    <GitHubIcon style={{marginRight:'20px', color:'#fff'}}/>
    <WebAssetIcon style={{color:'#fff'}}/>
  </div>     
  <p style={{color:'#fff'}}>Copyright 2022. Hyeonjeong</p>
 
  </div>

     )
}
export default Footer