import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon  from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import CropFreeIcon from '@mui/icons-material/CropFree';
import Logo from './Logo-remove.png'
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="logo">
      <img src={Logo} alt='logo'/> 
      <span>FidAdmin</span>
      </div>
    <div className="icons">
      <SearchIcon/>
      <AppsIcon/>
      <CropFreeIcon/>
      <div className="notifications">
        <NotificationsNoneIcon/>
        <span>1</span>
      </div>
      <div className='user'>
        <img src='https://avatars.githubusercontent.com/u/116375703?v=4' alt='profile'/>
        <span>fardeen</span>
      </div>
      <SettingsIcon/>
    </div>
      </div>
  )
}

export default Navbar;