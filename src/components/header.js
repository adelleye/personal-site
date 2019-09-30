import { Link } from "gatsby"
import React from "react"
import "./Header.css"


class Header extends React.Component {
 
  
  myFunction = () =>  {
    document.getElementById("myDropdown").classList.toggle("show");
  }

/////////////
constructor(props) {
  super(props);

  this.setWrapperRef = this.setWrapperRef.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);
}

componentDidMount() {
  document.addEventListener("mousedown", this.handleClickOutside);
}

componentWillUnmount() {
  document.removeEventListener("mousedown", this.handleClickOutside);
}


setWrapperRef(node) {
  this.wrapperRef = node;
}

/**
 * If clicked outside dropdown remove ".show"
 */
handleClickOutside(event) {
  if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
    
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


  render() {
    return (
      <div className = "Header" >
        <div id ="site-title"> 
        <p>Tobi Adeleye</p>
        </div>
        <div className="HeaderGroup">
        
          <a href ="https://www.dropbox.com/s/744tsv9r6g3oxoq/Resume.pdf?dl=0" target="_blank">Resume</a>
          <a href="mailto:tobi@severenature.com?subject=Hi Tobi" >Send E-mail</a>
          <a href="https://github.com/adelleye/personal-site" target="_blank" >View Source</a>
    </div> 
    


    <div className="dropdown">
  <button onClick= {this.myFunction} className="dropbtn"  ref={this.setWrapperRef}></button>
  <div id="myDropdown" className="dropdown-content">
  <a href ="https://www.dropbox.com/s/744tsv9r6g3oxoq/Resume.pdf?dl=0" target="_blank">Resume</a>
          <a href="mailto:tobi@severenature.com?subject=Hi Tobi" >Send E-mail</a>
          <a href="https://github.com/adelleye/personal-site" target="_blank" >View Source</a>
  </div>
</div>
  </div> 

  
    )
  
  }
 
}


export default Header
