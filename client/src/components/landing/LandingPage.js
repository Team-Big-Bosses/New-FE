import React from "react";
import { Link } from 'react-router-dom'
import '../../scss/LandingPage.scss'


const LandingPage = () =>{
  return(
    <div className="landing-container">
      <h1>FlaskRPG</h1>
      <div className="landing-nav">
        <Link className="link" to="/login">Login</Link>
      </div>
    </div>
  )
}

export default LandingPage;