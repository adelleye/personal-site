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
        
          <a href ="https://www.linkedin.com/in/tobi-adeleye-18ab1b119/" target="_blank">Resume</a>
          <a href="mailto:tobi@severenature.com?subject=Hi Tobi" >Send E-mail</a>
    </div> 
    
  </div> 
  
    )
  }
}

export default Header
