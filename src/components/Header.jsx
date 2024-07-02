import React, {useState} from 'react'
import headerImg from '../assets/icon.svg'
import { Link } from 'react-router-dom'
import Links from '../pages/Links'


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
        <Link to='/'><img src={headerImg} alt="" /></Link>
        <ul style={{left: openNav ? '0' : '-100%'}} className='ul__nav burger'>

            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'><li>Main</li></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/links'><li>Links</li></Link> 
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/contacts'><li>Contacts</li></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/about'> <li>About</li></Link>
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