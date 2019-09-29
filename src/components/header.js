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
        
          <a href ="https://www.dropbox.com/s/744tsv9r6g3oxoq/Resume.pdf?dl=0" target="_blank">Resume</a>
          <a href="mailto:tobi@severenature.com?subject=Hi Tobi" >Send E-mail</a>
          <a href="https://github.com/adelleye/personal-site" target="_blank" >View Source</a>
    </div> 
    
  </div> 
  
    )
  }
}

export default Header
