import React, { useState } from 'react';
import './Dropdown.scss'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
const Dropdown = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  const handleClickDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown)
  }

  return (
    <div className='dropdown-btn' 
    onClick={handleClickDropdown} >
       {isOpenDropdown ? <CloseIcon/> : <MenuIcon/>}
        <div className={`dropdown ${isOpenDropdown && 'active'}`}>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
  </div>
  )
}

export default Dropdown