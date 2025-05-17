import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import arrow from "../images/_ionicons_svg_md-arrow-dropright.svg"
import interestedInImage from "../images/undraw_young_and_happy_hfpe.svg"
import playlistImage from "../images/playlist.svg"
import moment from "moment"

class IndexPage extends React.Component {
  handleClick = () => {
    window.open("https://open.spotify.com/playlist/481Yd8XJuS0izrabVgXe75")
  }

  notionClick = () => {
    window.open(
      "https://www.notion.so/Thing-s-I-m-interested-in-7e3ebbc9c5c24042827567775682a3fc"
    )
  }

  //Set initial state
  constructor(props) {
    super(props)
    this.state = { isClicked: false }
  }

  showBiography = () => {
    var x = document.getElementById("myDIV")

    if (x.style.display === "block") {
      x.style.display = "none"
    } else {
      x.style.display = "block"
    }
  }

  handleButtonClick = () => {
    this.setState(state => ({
      isClicked: !state.isClicked,
    }))
  }

  handlingBothClicks = () => {
    this.handleButtonClick()
    this.showBiography()
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <FirstPageContainer>
          <SectionDiv>
            <SectionTitle> Introduction Note </SectionTitle>
            <SectionBridge>
              My name is Tobi, a Toronto based web (in training) and user
              interface designer. I use this site to learn & try new techniques,
              so it could look a little different each time you visit. In the
              meantime you can check out my clothing brand{" "}
              <SevereNatureLink href="https://severenature.com">
                Severe Nature
              </SevereNatureLink>
              . Professional links are below:
            </SectionBridge>
            <ProfessionalLinksContainer>
              <LinkedInLink href="https://www.linkedin.com/in/tobi-adeleye/">
                LinkedIn
              </LinkedInLink>
              <GithubLink href="https://github.com/adelleye">Github</GithubLink>
              <DribbleLink href="https://dribbble.com/tobiadeleye">
                Dribbble
              </DribbleLink>
            </ProfessionalLinksContainer>

            <BiograpghyButtonContainer>
              <BiograpghyButton
                onClick={this.handlingBothClicks}
                className={this.state.isClicked ? "rotate" : "normal"}
              />
              <BiographyLabel>Biography</BiographyLabel>
            </BiograpghyButtonContainer>
            <Biography id="myDIV">
              Born June 25, The great Tobi Adeleye started his education at
              Montesorri in Port-Harcourt then to Atlantic Hall in Lagos and
              finally York University in Toronto.
              <br /> At a young age, Tobi always knew he wanted to be an
              entrepreneur, so he started a record label named Aeroplay, which
              saw various hit songs emerge from it like "Go below" by Od-Woods
              and others. Then he moved on to events and threw one of the most
              significant African parties in Canada called "Imperial" that had
              over 2000 guests.
              <br /> After that, Tobi decided to start a clothing line with his
              close friend Chris called Severe Nature.{" "}
              <ReadMore href="https://www.notion.so/tobisstuff/Short-Biography-of-Tobi-Adeleye-548d2015e2114260b6bb4172e2713364">
                Read more
              </ReadMore>
            </Biography>
          </SectionDiv>
          <SecondHalfOfPage>
            <RectangularBoxLinks>
              <ThingsImInterestedIn onClick={this.notionClick}>
                {" "}
                <InterestedInImage /> <p>For Tobi</p>
              </ThingsImInterestedIn>
              <SpotifyPlaylist onClick={this.handleClick}>
                {" "}
                <PlaylistImage /> <p>Greatest Playlist Of All Time</p>
              </SpotifyPlaylist>
            </RectangularBoxLinks>
            <DateContainer>
              <Date>{moment().format("dddd, MMMM Do, YYYY.")}</Date>
            </DateContainer>
          </SecondHalfOfPage>
        </FirstPageContainer>
      </Layout>
    )
  }
}

export default IndexPage
//const IndexPage = props => (
// Add hamburger menu for mobile.

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
  padding-top: 110px;
  margin-left: 140px;
  margin-right: 30px;
  background-color: white;

  @media (max-width: 980px) {
    margin-left: 70px;
  }

  @media (max-width: 860px) {
    max-width: 430px;
    padding-top: 100px;
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

// PROFESSIONAL [LINKEDIN AND GITHUB] LINKS
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
    font-size: 16px;
    line-height: 28px;
    margin-top: 10px;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    line-height: 28px;
  }
`

const DribbleLink = styled.a`
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
    font-size: 16px;
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
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.03);
  }
  &:focus {
    outline: none;
    border: none;
  }
`
const BiographyLabel = styled.p`
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-weight: 500;
`

const ReadMore = styled.a`
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
const Biography = styled.div``

//SECOND HALF OF FIRST PAGE BEGINS HERE
const SecondHalfOfPage = styled.div``

//BOXES BEGINS HERE
const RectangularBoxLinks = styled.div`
  max-width: 500px;
  padding-top: 150px;
  margin-left: 10px;
  margin-right: 100px;
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

const InterestedInImage = styled.div`
  width: 100px;
  height: 74px;
  background: url(${interestedInImage});
  background-size: cover;
  margin-top: auto;
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

const PlaylistImage = styled.div`
  width: 100px;
  height: 74px;
  background: url(${playlistImage});
  background-size: cover;
  margin-top: auto;
`

const DateContainer = styled.div`
  margin-right: 140px;
  margin-top: 100px;

  @media (max-width: 980px) {
    margin-right: 70px;
  }

  @media (max-width: 860px) {
    margin-top: 100px;

    margin-right: 30px;
  }
  @media (max-width: 640px) {
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Date = styled.p`
  font-size: 14px;
  text-align: right;
  @media (max-width: 640px) {
    text-align: center;
  }
`
