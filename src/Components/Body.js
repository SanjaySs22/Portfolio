import './BodyStyle.css';
import React from 'react'
import { Link } from 'react-router-dom';
import Bg2 from '../Images/Bg2.jpg';


const Body = () => {
  return (
    <div className='content'>
        <div className='cont-img'>
            <img className='img-1' src={Bg2}  />
        </div>
        <div className='content-1'>
            <p> HAI I'M SANJAY </p>
            <h1> REACT DEVELOPER </h1>
            <Link to='/project' className='btn'> PROJECTS </Link>
            <Link to='/contact'className=' btn-light'> CONTACT </Link>
        </div>
    </div>
  )
}

export default Body