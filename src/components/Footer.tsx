import GitHubIcon from '@mui/icons-material/GitHub';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import Tooltip from '@mui/material/Tooltip';
function Footer() {
  const GITHUB = import.meta.env.VITE_APP_GIT_HUB
  const BLOG = import.meta.env.VITE_APP_BLOG
  return (
    <div style={{
      backgroundColor: "#444444", height: '200px',position:'fixed', bottom:'0',width:'100%', display: 'flex',
      flexDirection: 'column', alignItems:'center'
    }}>
      <div style={{ paddingTop: '50px' }}>

        <Tooltip title="Github">
          <GitHubIcon
            onClick={() => window.open(GITHUB)}
            style={{ marginRight: '20px', color: '#fff', cursor: 'pointer' }}
          />
        </Tooltip>
        <Tooltip title="Blog">
          <WebAssetIcon
            onClick={() => window.open(BLOG)}
            style={{ color: '#fff', cursor: 'pointer' }} />
        </Tooltip>
      </div>
      <p style={{ color: '#fff' }}> Copyright 2022. Hyeonjeong</p>

    </div>

  )
}
export default Footer