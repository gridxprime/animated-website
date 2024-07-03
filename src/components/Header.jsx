import React, {useState} from 'react'
import headerImg from '../assets/icon.svg'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import '../App.css'


function Header() {

    const [openNav, setOpenNav] = useState(false)


    const toggleButton = () => {
        setOpenNav(true)
    }

    const closeButton = () => {
        setOpenNav(false)
    }
    
    

  return (
    <header>
        <NavLink to='/'><img src={headerImg} alt="" /></NavLink>
        <ul style={{left: openNav ? '0' : '-100%'}} className='ul__nav burger'>

            <NavLink style={{}} to='/'><li>Main</li></NavLink>
            <NavLink style={{}} to='/links'><li>Links</li></NavLink> 
            <NavLink style={{}} to='/contacts'><li>Contacts</li></NavLink>
            <NavLink style={{}} to='/about'> <li>About</li></NavLink>

            <button onClick={closeButton} className='close__button'>X</button>
        </ul>
        <button style={{visibility: openNav ? 'hidden' : 'visible'}} onClick={toggleButton} className='burger__button'>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>
  )
}

export default Header