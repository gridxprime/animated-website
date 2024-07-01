import { useEffect, useRef } from 'react'
import './App.css'
import './media.css'
import Header from './components/Header'
import gsap from 'gsap'

function App() {
  
  const sectionTitle = useRef(null)
  const innerSpan = useRef(null)
  const innerSpanTwo = useRef(null)
  const heroBottomSpan = useRef(null)

useEffect(() => {
  gsap.fromTo(sectionTitle.current, {
    opacity: 0, y: -50
  }, {
    opacity: 1, y: 0,  delay: .5
  }
) ,[]
} )

useEffect(() => {
  gsap.fromTo(innerSpan.current, {
    opacity: 0, y: -50
  }, {
    opacity: 1, y: 0,  delay: .8
  }
) ,[]
} )

useEffect(() => {
  gsap.fromTo(innerSpanTwo.current, {
    opacity: 0, y: -50
  }, {
    opacity: 1, y: 0,  delay: 1.2
  }
) ,[]
} )

useEffect(() => {
  gsap.fromTo(heroBottomSpan.current, {
    opacity: 0, y: -50
  }, {
    opacity: 1, y: 0,  delay: 1.5
  }
) ,[]
} )

  return (
    <>
    <Header></Header>
      <section className='hero'>
          <h2 ref={sectionTitle} className='section__title'>Welcome to animated website</h2>
          <span ref={innerSpan} className='inner__title'>Explore a world where creativity meets technology. 
            Our animated website invites you to discover captivating visuals, seamless
             interactions, and an immersive user experience.</span>
             <span ref={innerSpanTwo}>Dive into dynamic animations that bring content to life, 
              from sleek transitions to
               interactive elements.</span>
               <span ref={heroBottomSpan}>Made by GreenSock Animation Platform</span>
      </section>
      <section></section>
    </>
  )
}

export default App
