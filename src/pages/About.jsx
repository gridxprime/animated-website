import React from 'react'
import Header from '../components/Header'
import './style.css'
import Footer from '../components/Footer'
import { useEffect } from 'react'

function About() {


  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
  return (
    <>      
    <Header></Header>
            <section className='pages__page'>
      
            <span className='page__title'>About me</span>
            <div className="about">
              <span>
                  With over four years of experience in web development 
                  specializing in React, I possess deep knowledge and skills
                  in creating modern, interactive, and high-performance user interfaces. My experience spans across projects 
                  of varying complexity, from small startups to large-scale corporate applications.
            </span>
            <div className="page__title">Skills</div>
            <ul>
              
              <li>Core Technologies: React, JavaScript (ES6+), HTML5, CSS3
              </li>
              <li>Development Tools: Webpack, Babel, ESLint, Prettier
              </li>
              <li>Version Control: Git, GitHub/GitLab/Bitbucket
              </li>
            </ul>
            </div>

        </section>
        <Footer></Footer>
    </>
  )
}

export default About