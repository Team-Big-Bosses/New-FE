import React from 'react'
import {Link} from 'react-router-dom'
import '../scss/Header.scss'

const Header = () =>{
  return(
    <div className="header-container">
      <Link className="link" to="/"><h1>FlaskRPG</h1></Link>
    </div>
  )
}

export default Header;