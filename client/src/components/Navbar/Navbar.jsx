import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="logo">
      <img src='logo.svg' alt='logo'/>
      <span>FiddiAdmin</span>
      </div>
    <div className="icons">
      <img src="/search.svg" alt="search" className='icon'/>
      <img src="/app.svg" alt="app" className='icon'/>
      <img src="/expand.svg" alt="expand" className='icon'/>
      <div className="notifications">
        <img src='/notifications.svg' alt='notification'/>
        <span>1</span>
      </div>
      <div className='user'>
        <img src='' alt='profile'/>
        <span>fardeen</span>
      </div>
      <img src='/settings.svg' alt='setting' className='icon'/>
    </div>
      </div>
  )
}

export default Navbar;