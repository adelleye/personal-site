import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    
    
    <SectionTitle>My name is Tobi, a Toronto based web and user interface designer. </SectionTitle>
    <SectionBridge>I'm currently designing a new version of this website, so it could look a little different each time you visit over the next few weeks. In the meantime you can check out my clothing brand Severe Nature or some of my work </SectionBridge>
    
    <Link to="/page-2/">LinkedIn</Link> 
    <Link to="/page-2/">Github</Link>

  </Layout>
)

const SectionBridge = styled.p`
   color: rgba(153,153,153,1.0);
    font-size: 40px;
    font-weight:500;
    margin: 0;
    line-height: 48px;
 
    @media (max-width: 640px) {
        font-size: 22px;
        line-height: 28px;
    }
`

const SectionTitle = styled.h3`
    color: rgba(41,42,44,1.0);
    font-size: 40px;
    font-weight:500;
    margin: 0;
    line-height: 48px;
 
    @media (max-width: 640px) {
        font-size: 22px;
        line-height: 28px;
    }
`
export default IndexPage

