import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled , { keyframes }from "styled-components"

const IndexPage = props => (

  <Layout>
    <SEO title="Home" />
    <FirstPageContainer>
    <SectionDiv>
    <SectionTitle> Introduction Note </SectionTitle>
    <SectionBridge> My name is Tobi, a Toronto based web and user interface designer. I use this site to learn & try new techniques, so it could look a little different each time you visit. In the meantime you can check out my clothing brand <SevereNatureLink href="https://severenature.com" >Severe Nature</SevereNatureLink>. Professional links are below. </SectionBridge>
    <LinkedInLink href="https://www.linkedin.com/in/tobi-adeleye-18ab1b119/">LinkedIn</LinkedInLink> 
    <GithubLink href="https://github.com/adelleye">Github</GithubLink>
    </SectionDiv>

    <RectangularBoxLinks>
    <ThingsImInterestedIn> Things I'm interested in </ThingsImInterestedIn>
    </RectangularBoxLinks>

    </FirstPageContainer>
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

const FirstPageContainer= styled.div`
display:grid;
grid-template-columns: repeat(2,auto);
`


//First Half of First page
const SectionDiv = styled.div`
max-width: 492px;
height: 500px;
padding-top: 190px;
margin-left: 140px;
margin-right: 30px;

@media (max-width: 860px) {
  max-width: 430px;
  padding-top: 190px;
  margin-left: 30px;
  margin-right: 30px;

    }
@media (max-width: 640px) {
  max-width: 320px;
  padding-top: 190px;
  margin-left: 30px;
  margin-right: 30px;
    }
 
`


const SectionTitle = styled.p`
    color: rgba(41,42,44,1.0);
    font-size: 16px;
    font-weight:500;
    margin-bottom:20px;
    line-height: 24px;
    opacity: 0;
   animation: ${MainTextAnimation};
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

    @media (max-width: 860px) {
      font-size: 34px;
        line-height: 41px;
        margin-bottom:25px;

    }
 
    @media (max-width: 640px) {
        font-size: 28px;
        line-height: 34px;
        margin-bottom:20px;
    }
`


const SectionBridge = styled.p`
   color: rgba(0,0,0,1.0);
    font-size: 16px;
    font-weight:400;
    margin: 0;
    line-height: 24px;
    opacity: 0;
   animation: ${MainTextAnimation};
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);


    @media (max-width: 860px) {
      font-size: 34px;
        line-height: 41px;

    }
 
    @media (max-width: 640px) {
      font-size: 28px;
        line-height: 34px;
    }
`


const SevereNatureLink = styled.a `
font-size: 16px;
text-decoration:underline;
text-decoration-style:dotted;
font-weight:400;

transition: 1s;
color:rgba(0,0,0, 1.0);
display: inline-block;

&:hover { 
  color:rgba(0,145,255, 1.0);
  transform: translateY(-3px);
   }
   @media (max-width: 860px) {
        font-size: 17px;
        line-height: 28px;
        margin-top:30px;
    }
 
    @media (max-width: 640px) {
        font-size: 15px;
        line-height: 28px;
        margin-top:30px;
    }
`



const LinkedInLink = styled.a `
font-size: 16px;
text-decoration:none;
font-weight:500;
margin-top:40px;
margin-left: 0px;
transition: 1s;
display: inline-block;
color:rgba(0,0,0, 1.0);

&:hover { 
  color:rgba(0,145,255, 1.0);
  transform: translateY(-3px);
}

  @media (max-width: 860px) {
        font-size: 17px;
        line-height: 28px;
        margin-top:30px;
    }
 
    @media (max-width: 640px) {
        font-size: 15px;
        line-height: 28px;
        margin-top:30px;
    }

   
`

const GithubLink = styled.a `
font-size: 16px;
text-decoration:none;
font-weight:400;
margin-top:40px;
margin-left: 20px;
transition: 1s;
color:rgba(0,0,0, 1.0);
display: inline-block;

&:hover { 
  color:rgba(0,145,255, 1.0);
  transform: translateY(-3px);
   }
   @media (max-width: 860px) {
        font-size: 17px;
        line-height: 28px;
        margin-top:30px;
    }
 
    @media (max-width: 640px) {
        font-size: 15px;
        line-height: 28px;
        margin-top:30px;
    }

`

//Second Half of First page
 const RectangularBoxLinks = styled.div`
 max-width: 500px;
height: 500px;
padding-top: 190px;
margin-left: 0px;
margin-right: 140px;

@media (max-width: 860px) {
  max-width: 430px;
  padding-top: 190px;
  margin-left: 30px;
  margin-right: 30px;

    }
@media (max-width: 640px) {
  max-width: 320px;
  padding-top: 190px;
  margin-left: 30px;
  margin-right: 30px;
    }
 `



const ThingsImInterestedIn = styled.div`
width: 250px;
height: 300px;
margin-left: 50px;
margin-bottom: 50px;
border-style: solid;
transition: 1s;
display:grid;
justify-items: center;
align-items: center;

&:hover { 
  box-shadow: 5px 5px rgba(0,0,0,0.5);
   }
`

;
export default IndexPage

