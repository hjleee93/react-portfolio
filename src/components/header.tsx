import React, { useState } from 'react'
import './Header.scss';
import Dropdown from './Dropdown';


function Header({addrMsg}:{addrMsg:string}) {
  const [addMsg, setAddrMsg] = useState('https://안녕하세요_프론트엔드_개발자_이현정입니다.com')

  const headerMenu = [
    {label: '홈',onClick: () => {}},
    {label: '자기소개',onClick: () => () => {}},
    {label: '프로젝트 소개',onClick: () => {}}
  ]

   
  
  return (
    <div className="header">
          <div className="column left">
            <span className="dot" style={{background:"#ED594A"}}></span>
            <span className="dot" style={{background:"#FDD800"}}></span>
            <span className="dot" style={{background:"#5AC05A"}}></span>
          </div>
          <div className="column middle">
            <input readOnly type="text" value={addrMsg}/>
          </div>
    
          <div className="column right" >
            <Dropdown menuItems={headerMenu}/>
          </div>
        </div>
  )
}
export default Header