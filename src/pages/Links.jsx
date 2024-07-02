import React from 'react'
import Header from '../components/Header'
import './style.css'
import Footer from '../components/Footer'
import { useEffect } from 'react'

function Links() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
  return (


    <>      
    <Header></Header>
            <section className='pages__page'>

            <span className='page__title'>Links</span>
            <div className="links">
              <a href="https://react.dev/"><span>React</span></a>
              <a href="https://gsap.com/"><span>GSAP</span></a>
              <a href="https://vitejs.dev/"><span>Vite</span></a>
            </div>
        </section>
        <Footer></Footer>
    </>
  )
}

export default Links