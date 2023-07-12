import React from 'react'
import Body2 from '../Components/Body2'
import Footer from '../Components/Footer'
import FormContact from '../Components/FormContact'
import NavigationBar from '../Components/NavigationBar'

function Contact() {
  return (
    <div>
        <NavigationBar/>
        <Body2 heading="Contact" text=" Lets Have a Chat"/>
        <FormContact/>
        <Footer/>
    </div>
  )
}

export default Contact