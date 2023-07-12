import './NavigationBarStyleSheet.css';

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import{FaBars, FaTimes} from 'react-icons/fa'

function NavigationBar() {
  const [click,setclick]=useState(false);
  const firstclick = () => setclick(!click);

  // const [colorChange,setcolorChange] = useState(false);
  // const changecolor = () =>{
  //   if(window.scrollY >= 100){
  //     setcolorChange(true); 
  //   }else{
  //     setcolorChange(false);
  //   }
  // };

  // window.addEventListener("scroll",changecolor); 




  return (
    <div className="nav" > 
        <Link to='/'>
        <h1>Portfolio</h1>
        </Link>
           <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                <Link to='/home'>Home</Link>
                </li>
                <li>
                <Link to='/project'>Project</Link>
                </li>
                <li> 
                <Link to='/about'>About</Link>
                </li>
                <li>
                <Link to='/contact'>Contact</Link>
                </li>  
            </ul>
            <div className='hamburger' onClick={firstclick}>
              {click ? (
                <FaTimes  size={20} style={{color: "white"} }/>) : <FaBars   size={20} style={{color: "white"} }/>
              }
            </div>
      
    </div>
  )
}

export default NavigationBar
