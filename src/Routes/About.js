import React from 'react'
import AboutContent from '../Components/AboutContent'
import Body2 from '../Components/Body2'
import Footer from '../Components/Footer'
import NavigationBar from '../Components/NavigationBar'

function About() {
  return (
    <div>
        <NavigationBar/>
        <Body2 heading="About." text="I'M A REACT FRONT-END DEVELOPER"/>
        <AboutContent/> 
        <Footer/>
    </div>
  )
}

export default About