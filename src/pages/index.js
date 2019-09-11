import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import styled , { keyframes }from "styled-components"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    
    <SectionDiv>
    <SectionTitle>My name is Tobi, a Toronto based web and user interface designer. </SectionTitle>
    <SectionBridge>I'm currently designing a new version of this website, so it could look a little different each time you visit over the next few weeks. In the meantime you can check out my clothing brand Severe Nature or some of my work </SectionBridge>
    </SectionDiv>
    

    <LinkedInLink href="https://www.linkedin.com/in/tobi-adeleye-18ab1b119/">LinkedIn</LinkedInLink> 
    <GithubLink href="https://www.linkedin.com/in/tobi-adeleye-18ab1b119/">Github</GithubLink>
    
  </Layout>
)
//
const MainTextAnimation = keyframes`
   0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const SectionDiv = styled.div`
max-width: 860px;
height: 500px;
padding-top: 190px;
margin-left: 140px;
margin-right: 140px;

@media (max-width: 860px) {
  max-width: 800px;
  padding-top: 130px;
  margin-left: 30px;
  margin-right: 30px;

    }
@media (max-width: 640px) {
  max-width: 580px;
  padding-top: 130px;
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
    opacity: 0;
   animation: ${MainTextAnimation};
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);


    @media (max-width: 860px) {
      font-size: 28px;
        line-height: 34px;

    }
 
    @media (max-width: 640px) {
        font-size: 22px;
        line-height: 28px;
    }
`

const SectionTitle = styled.p`
    color: rgba(41,42,44,1.0);
    font-size: 40px;
    font-weight:500;
    margin-bottom:30px;
    line-height: 48px;
    opacity: 0;
   animation: ${MainTextAnimation};
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

    @media (max-width: 860px) {
      font-size: 28px;
        line-height: 34px;

    }
 
    @media (max-width: 640px) {
        font-size: 22px;
        line-height: 28px;
        
    }
`
const LinkedInLink = styled.a `
font-size: 20px;
text-decoration:none;
font-weight:400;
margin-left: 140px;
transition: 1s;
color:rgba(0,145,255, 1.0);
display: inline-block;

&:hover { 
  transform: translateY(-3px);
   }
`

const GithubLink = styled.a `
font-size: 20px;
text-decoration:none;
font-weight:400;
margin-left: 20px;
transition: 1s;
color:rgba(0,145,255, 1.0);
display: inline-block;

&:hover { 
  transform: translateY(-3px);
   }
`


;
export default IndexPage

