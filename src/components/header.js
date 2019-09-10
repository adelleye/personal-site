import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div id ="site-title"> <p>Tobi Adeleye</p></div>
    <div className="HeaderGroup">
          <Link to="/resume">Resume</Link>
          <Link to="/email">Email</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
