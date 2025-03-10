import { useState } from "react";
import "../styles/components/Header.scss"
import Dropdown from './Dropdown';
import { useLocation, useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [addr, setAddr] = useState('https://안녕하세요_프론트엔드_개발자_이현정입니다.com')

  const handleNavigation = (hash?: string) => {
    if (!hash) {
      navigate('/', { replace: true });
      if (location.pathname === '/') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    } else {
      navigate(`/${hash}`);
    }
  };



  const headerMenu = [
    { label: '홈', onClick: () => { handleNavigation() } },
    { label: '자기소개', onClick: () => { handleNavigation('#info') } },
    { label: '프로젝트 소개', onClick: () => { handleNavigation('#projects') } }
  ]

  return (
    <div className="header">
      <div className="column left">
        <span className="dot" style={{ background: "#ED594A" }}></span>
        <span className="dot" style={{ background: "#FDD800" }}></span>
        <span className="dot" style={{ background: "#5AC05A" }}></span>
      </div>
      <div className="column middle">
        <input readOnly type="text" value={addr} />
      </div>

      <div className="column right" >
        <Dropdown menuItems={headerMenu} />
      </div>
    </div>
  )
}
export default Header