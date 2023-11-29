import React from 'react'
import {Link} from 'react-router-dom'
import {SlMenu} from 'react-icons/sl'
import {IoIosSearch} from 'react-icons/io'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {FiMessageSquare} from 'react-icons/fi'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navbar-wrapper">
      <div className="navbar-left">
      <div className="navbar-item">
     <SlMenu/>
      </div>
      <div className="navbar-item">
      <img src={require('../../assets/logo.png')} alt="logo"/>
      </div>

      </div>
    <div className="navbar-middle">
    <div className="navbar-search">
    <span><IoIosSearch/></span>
    <input type="text" className="searchinput" placeholder="search here ..."/>
    </div>
    </div>
    <div className="navbar-right">
    <div className="right-item">
    <Link to="/">
     <IoMdNotificationsOutline/>
    </Link>
   
    </div>
    <div className="right-item">
    <Link to="/">
    <FiMessageSquare/>
    </Link>
    </div>
    <div className="right-item">
    <Link to="/">
    <HiOutlineUserCircle/>
    </Link>
    </div>
    </div>
    </div>
  
    </div>
  )
}

export default Navbar