import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    
    <SectionDiv>
    <SectionTitle>My name is Tobi, a Toronto based web and user interface designer. </SectionTitle>
    <SectionBridge>I'm currently designing a new version of this website, so it could look a little different each time you visit over the next few weeks. In the meantime you can check out my clothing brand Severe Nature or some of my work </SectionBridge>
    </SectionDiv>
    <Link to="/page-2/">LinkedIn</Link> 
    <Link to="/page-2/">Github</Link>

  </Layout>
)

const SectionDiv = styled.div`
max-width: 860px;
height: 500px;
margin-top: 190px;
margin-left: 140px;
margin-right: 140px;

@media (max-width: 860px) {
  max-width: 800px;
  margin-top: 130px;
  margin-left: 30px;
  margin-right: 30px;

    }
@media (max-width: 640px) {
  max-width: 580px;
  margin-top: 130px;
  margin-left: 30px;
  margin-right: 30px;

    }
`

const SectionBridge = styled.p`
   color: rgba(153,153,153,1.0);
    font-size: 40px;
    font-weight:500;
    margin: 0;
    line-height: 48px;

    @media (max-width: 860px) {
      font-size: 28px;
        line-height: 34px;

    }
 
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

