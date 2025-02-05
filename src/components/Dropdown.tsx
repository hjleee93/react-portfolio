import React, { useState } from 'react';
import './Dropdown.scss'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

interface DropdownProps {
  menuItems: { label: string; onClick: () => void }[]; 
}

const Dropdown: React.FC<DropdownProps>  = ({ menuItems }) => {
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
            {menuItems.map((item, index) => (
              <li key={index} onClick={item.onClick}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
  </div>
  )
}

export default Dropdown