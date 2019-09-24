import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import arrow from "../images/_ionicons_svg_md-arrow-dropright.svg"
import ReactDOM from 'react-dom';

class IndexPage extends React.Component {
  handleClick = () => {
   // window.location.href = 'https://open.spotify.com/playlist/481Yd8XJuS0izrabVgXe75'
   window.open('https://open.spotify.com/playlist/481Yd8XJuS0izrabVgXe75')
  }

  showBiography = () => {
    var x = document.getElementById('myDIV');
   console.log(x)
   if (x.style.display === 'block') {
    x.style.display = 'none';
} else {
    x.style.display = 'block';
}
  }
  
  


  render() {

    return (
  <Layout>
    <SEO title="Home" />
    <FirstPageContainer>
      <SectionDiv>
        <SectionTitle> Introduction Note </SectionTitle>
        <SectionBridge>
          My name is Tobi, a Toronto based web and user interface designer. I
          use this site to learn & try new techniques, so it could look a little
          different each time you visit. In the meantime you can check out my
          clothing brand <SevereNatureLink href="https://severenature.com">
            Severe Nature
          </SevereNatureLink>. Professional links are below:
        </SectionBridge>
        <ProfessionalLinksContainer>
          <LinkedInLink href="https://www.linkedin.com/in/tobi-adeleye-18ab1b119/">
            LinkedIn
          </LinkedInLink>
          <GithubLink href="https://github.com/adelleye">Github</GithubLink>
        </ProfessionalLinksContainer>

        <BiograpghyButtonContainer>
          <BiograpghyButton onClick={this.showBiography} />
          <BiographyLabel>Biography</BiographyLabel>
        </BiograpghyButtonContainer>
        <Biography id="myDIV" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed
          viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat.
          Nunc aliquet bibendum enim facilisis gravida. Nisl nunc mi ipsum
          faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus
          magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat
          velit scelerisque in. Egestas egestas fringilla phasellus faucibus
          scelerisque eleifend. Sagittis orci a scelerisque purus semper eget
          duis
        </Biography>
      </SectionDiv>

      <RectangularBoxLinks>
        <ThingsImInterestedIn  >Things I'm interested in</ThingsImInterestedIn>

        <SpotifyPlaylist onClick={this.handleClick}> Spotify Playlist</SpotifyPlaylist>
      </RectangularBoxLinks>
    </FirstPageContainer>
  </Layout>

  )
 }
}

export default IndexPage
//const IndexPage = props => (
// ADD IMAGE & LINK TO BOXES, POSITION BIOGRAPHY BUTTON ADD Image






// STYLED CSS
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

const FirstPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

//First Half of First page
const SectionDiv = styled.div`
  max-width: 492px;
  max-height: 100%;
  padding-top: 150px;
  margin-left: 140px;
  margin-right: 30px;
  background-color: white;

  @media (max-width: 860px) {
    max-width: 430px;
    padding-top: 120px;
    margin-left: 30px;
    margin-right: 30px;
  }
  @media (max-width: 640px) {
    max-width: 320px;
    padding-top: 100px;
    margin-left: auto;
    margin-right: auto;
  }
`

const SectionTitle = styled.p`
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  line-height: 24px;
  opacity: 0;
  animation: ${MainTextAnimation};
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 860px) {
  }

  @media (max-width: 640px) {
  }
`
//My name is Tobi..
const SectionBridge = styled.p`
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  line-height: 24px;
  opacity: 0;
  animation: ${MainTextAnimation};
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 860px) {
  }

  @media (max-width: 640px) {
  }
`


const SevereNatureLink = styled.a`
  font-size: 16px;
  text-decoration: underline;
  text-decoration-style: dotted;
  font-weight: 400;
  transition: 1s;
  color: rgba(0, 0, 0, 1);
  display: inline-block;

  &:hover {
    color: rgba(0, 145, 255, 1);
    transform: translateY(-3px);
  }
  @media (max-width: 860px) {
    font-size: 16px;
    line-height: 28px;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    line-height: 28px;
   
  }
`

// LINKEDIN AND GITHUB LINKS
const ProfessionalLinksContainer = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 12px;
`

const LinkedInLink = styled.a`
  text-decoration: underline;
  text-decoration-style: dotted;
  margin-left: 0px;
  transition: 1s;
  display: inline-block;
  color: rgba(0, 0, 0, 1);

  &:hover {
    color: rgba(0, 145, 255, 1);
    transform: translateY(-3px);
  }

  @media (max-width: 860px) {
    font-size: 16px;
    line-height: 28px;
   
  }

  @media (max-width: 640px) {
    font-size: 15px;
    
    
  }
`

const GithubLink = styled.a`
  text-decoration: underline;
  text-decoration-style: dotted;
  
  margin-left: 20px;
  transition: 1s;
  color: rgba(0, 0, 0, 1);
  display: inline-block;

  &:hover {
    color: rgba(0, 145, 255, 1);
    transform: translateY(-3px);
  }
  @media (max-width: 860px) {
    font-size: 17px;
    line-height: 28px;
    margin-top: 10px;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    line-height: 28px;
    
  }
`
//BIOGRAPHY STARTS HERE
const BiograpghyButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  width: 80px;
  margin-left: -10px;
  margin-top: 20px;
`
const BiograpghyButton = styled.button`
  width: 30px;
  height: 30px;
  border-style: none;
  background: url(${arrow});
`
const BiographyLabel = styled.p`
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-weight: 500;
`

const Biography = styled.div`



`

//Second Half of First page
const RectangularBoxLinks = styled.div`
  max-width: 500px;
  padding-top: 150px;
  margin-left: 0px;
  margin-right: 140px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 30px;

  @media (max-width: 860px) {
    max-width: 430px;
    padding-top: 50px;
    margin-left: 30px;
    margin-right: 30px;
    grid-template-columns: 1fr;
    grid-gap: 0px;
    
  }
  @media (max-width: 640px) {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
`


const ThingsImInterestedIn = styled.div`
  width: 250px;
  height: 300px;
  margin-bottom: 50px;
  border-style: solid;
  border-width: 2px;
  transition: 1s;
  display: grid;
  justify-items: center;
  align-items: center;

  &:hover {
    box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  @media (max-width: 640px) {
    padding-top: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`

const SpotifyPlaylist = styled.div`
  width: 250px;
  height: 300px;

  margin-bottom: 50px;
  border-style: solid;
  border-width: 2px;
  transition: 1s;
  display: grid;
  justify-items: center;
  align-items: center;

  &:hover {
    box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  @media (max-width: 640px) {
    padding-top: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`

