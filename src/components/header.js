import { Link } from "gatsby"
import React from "react"
import "./Header.css"


class Header extends React.Component {
  render() {
    return (
      // Move all content between parentheses to here.
      <div className = "Header" >
        <div id ="site-title"> 
        <p>Tobi Adeleye</p>
        </div>
        <div className="HeaderGroup">
          <Link to="/resume">RESUME</Link>
          <Link to="/email">EMAIL</Link>
    </div> 
    
  </div> 
  
    )
  }
}

export default Header
