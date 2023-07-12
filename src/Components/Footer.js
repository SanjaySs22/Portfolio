import "./FooterStyle.css";

import React from 'react'
import {FaEnvelope, FaInstagram,  FaLinkedin, FaMapSigns, FaPhoneSquare, FaTelegramPlane, FaWhatsapp   } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
        <div className="Fo-Container">
            <div className="left">
                <div className="address">
                <p>
                <FaMapSigns size={25} style={{color:"white",marginRight:32}} />
                       65, Aggaramanikkal Pallivasal Street,
                       Thiruthuraipoondi, Thiruvarur (Dist) 
                       614713 
                    </p>
                </div>
                <div className="Number">
                   <h4> <FaPhoneSquare size={20} style={{color:"white",marginRight:32}} />
                   +91 8489261163
                  </h4> 
                </div>
                <div className="Mail">
                    <h4>
                        <FaEnvelope size={20} style={{color:"white",marginRight:32}} />
                        ss1633244@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4> About Me </h4>
                <p>
                I'm a Front-End Developer and Working hard to up-skill myself with every opportunity that strikes my way
                </p>
                <div className="Social">
                <Link to ="https://www.instagram.com/_absent_minded__/"> 
                    <FaInstagram  size={20} style={{color:"white",marginRight:32}} />
                </Link>
                    <FaLinkedin size={20} style={{color:"white",marginRight:32}}/>
                    <FaTelegramPlane size={20} style={{color:"white",marginRight:32}}/>

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer