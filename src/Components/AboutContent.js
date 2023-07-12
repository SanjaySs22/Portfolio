import "./AboutStyle.css";

import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who Am I ? </h1>
            <p>
                Im a React front-end developer and I created a responsive portfolio for my project.
            </p>
            <Link to="/contact">
                <buttton className="btn"> Contact </buttton>
            </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img className="img" src="https://wallpapercave.com/wp/wp4923991.png"/>
            </div>
            <div className="img-stack bottom">
              <img className="img" src="https://wallpaperbat.com/img/641236-react-native-wallpaper.png"/>
            </div>

          </div>

        </div>
    </div>
  )
}

export default AboutContent