import { useEffect, useRef } from 'react'
import './App.css'
import './media.css'
import Header from './components/Header'
import Footer from './components/Footer'
import gsap from 'gsap'
import  ScrollTrigger  from 'gsap/ScrollTrigger'
import dedsec from './assets/img/logo1.jpg'

import infCube1 from './assets/img/inf/infcub1.jpg'
import infCube2 from './assets/img/inf/infcub2.webp'
import infCube3 from './assets/img/inf/infcub3.jpg'

import React from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {

  const sectionTitle = useRef(null)
  const innerSpan = useRef(null)
  const innerSpanTwo = useRef(null)
  const heroBottomSpan = useRef(null)



const box1 = useRef(null)
const box2 = useRef(null)
const box3 = useRef(null)

gsap.registerPlugin(ScrollTrigger)

useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])

useEffect(() => {
  gsap.fromTo(
    box1.current,
    { opacity: 0, x: 0, rotation: 0 },
    {
      opacity: 1, x: '50vw', borderRadius: '50%', rotation: 720,
      scrollTrigger: {
        trigger: '.start', 
        start: 'top bottom', 
        end: 'bottom center',
        scrub: true
      }
    }
  );

  gsap.fromTo(
    box3.current,
    { opacity: 0, x: 0, rotation: 0 },
    {
      opacity: 1, x: '50vw', borderRadius: '50%', rotation: 720,
      scrollTrigger: {
        trigger: '.start', 
        start: 'top bottom', 
        end: 'bottom center',
       
        scrub: true
      }
    }
  );

  gsap.fromTo(
    box2.current,
    { opacity: 0, x: 0, rotation: 60 },
    {
      opacity: 1, x: '30vw', borderRadius: '50%', rotation: 480,
      scrollTrigger: {
        trigger: '.start', 
        start: 'top bottom', 
        end: 'bottom center',
        scrub: true
      }
    }
  );
}, []);

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
useEffect(() => {
  gsap.fromTo('.inner__title-two', {
    opacity: 0, y: -50
  }, {
    opacity: 1, y: 0,  delay: 2
  }
) ,[]
} )
useEffect(() => {
  gsap.fromTo('.inner__title-three', {
    opacity: 0, y: -50
  }, {
    opacity: 1, y: 0,  delay: 2.3
  }
) ,[]
} )


const btnCubes = () => {



  gsap.fromTo('.cube1', {
    x: '-300%', delay: .3, rotation: -90
  }, {
    x: 0, ease: 'bounce.inOut', duration: 2, rotation: 0
  })


  gsap.fromTo('.cube2', {
    x: '200%', delay: .2, rotation: 720
  }, {
    x: 0, ease: 'bounce.in', duration: 1.5, rotation: 0
  })


  gsap.fromTo('.cube3', {
    x: '100%', delay: .5, rotation: 360
  }, {
    x: 0, ease: 'bounce.out', duration: 2, rotation: 0
  }) , []
  
}

const spanRef = useRef(null)

useEffect(() => {

  gsap.set(spanRef.current , { transformOrigin: 'top left' });


  const tl = gsap.timeline({repeat: -1, yoyo: true})
  tl.to('.inf__span',{ delay: 2,  rotate: 5 , duration: 2, ease: 'back.in' })
})

useEffect(() => {
 const infCube =  gsap.timeline({repeat: -1, yoyo: true})
  infCube.to('.inf__cube1', {
    scale: .8, duration: 1, delay: .5, borderRadius: '50%', ease: 'bounce.inOut'
  })

  const inf2Cube = gsap.timeline({repeat: -1, yoyo: true})
  inf2Cube.to('.inf__cube2', {
    scale: .3, rotation: 180, delay: .4, duration: 1.2, ease: 'back.inOut'
  }) , []

  const inf3Cube = gsap.timeline({repeat: -1, yoyo: true})
  inf3Cube.to('.inf__cube3', {
    rotate: 5
  })

})


  return (
    <>
    <Header></Header>
      <section className='hero'>
          <h2 ref={sectionTitle} className='section__title'>Transforming Ideas into Motion</h2>
          <span ref={innerSpan} className='inner__title'>Explore a world where creativity meets technology. 
            Our animated website invites you to discover captivating visuals, seamless
             interactions, and an immersive user experience.</span>
             <span ref={innerSpanTwo}>Dive into dynamic animations that bring content to life, 
              from sleek transitions to
               interactive elements.</span>
               <span ref={heroBottomSpan}><i><b>Made via GreenSock Animation Platform</b></i></span>
               <div className="hero__bottom">
               <span className='inner__title-two'>Experience the synergy of design and functionality as our animations guide you 
                                                  through an intuitive and engaging interface. Every element is crafted to enhance 
                                                  user interaction, making the journey through our site not just a visit, but an adventure.</span>
               <span className='inner__title-three'>
               From concept to execution, our team leverages the power of GreenSock to deliver 
  animations that are not only visually stunning but also performance-optimized, 
  ensuring a smooth and delightful experience across all devices.

               </span>
               </div>
      </section>
      <section className='start'>
        <div  className="boxes">
          <span>Using ScrollTrigger to make these perfect moves!</span>
          <div ref={box1}  className="box1"><img src={dedsec} alt="" /></div>
          <div ref={box2} className="box2"><img src={dedsec} alt="" /></div>
          <div ref={box3} className="box3"><img src={dedsec} alt="" /></div>
    
        </div>
      </section>
      <section className='btn__section'>
              <div className="btn__cubes">
                <div className="cube1 btn__cube"><span>Unlock the mysteries of tomorrow, one cube at a time.</span></div>
                <div className="cube2 btn__cube"><span>Navigate through the cosmos of creativity and innovation.</span></div>
                <div className="cube3 btn__cube"><span>Forge ahead with courage, for greatness awaits beyond the cube.</span></div>
              </div>
          <button onClick={btnCubes} className='btn__section-btn'>Tap</button>
      </section>
      <section className='infinite'>
        <span ref={spanRef} className='inf__span'>
          You can use infinite animations via <code>gsap.timeline()</code>
        </span>
        <div className="infinite__cubes">
              <div className="inf__cube1 inf__cube"><img src={infCube1} alt="" /></div>
              <div className="inf__cube2 inf__cube"><img src={infCube2} alt="" /></div>
              <div className="inf__cube3 inf__cube"><img src={infCube3} alt="" /></div>
              
        </div>
      </section>

      <Footer></Footer>


    </>

  )
}

export default App
