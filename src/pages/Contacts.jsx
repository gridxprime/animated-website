import React from 'react'
import Header from '../components/Header'
import './style.css'
import Footer from '../components/Footer'
import { useEffect } from 'react'

function Contacts() {

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])


  return (
    <>
    <Header></Header>
        <section className='pages__page'>
        <span className='page__title'>Contacts</span>
        <div className="contacts">
          <a href="https://www.t.me/till_morning_comes"><span>Telegram</span></a>
          <a href="https://www.github.com/gridxprime"><span>GitHub</span></a>
          <a href='mailto:till_morning_comes@mail.ru'>Email</a>
        </div>
        </section>
 <Footer></Footer>
    </>
  )
}

export default Contacts