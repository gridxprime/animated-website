import React, {useState} from 'react'
import headerImg from '../assets/icon.svg'

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
        <img src={headerImg} alt="" />
        <ul style={{left: openNav ? '0' : '-100%'}} className='ul__nav burger'>

            <li>Main</li>
            <li>Links</li>
            <li>Contacts</li>
            <li>About</li>
            <button onClick={closeButton} className='close__button'>X</button>
        </ul>
        <button onClick={toggleButton} className='burger__button'>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>
  )
}

export default Header