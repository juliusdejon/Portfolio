import React, { Component } from 'react';
import { Layout, Card, Icon} from 'antd';

import bg from './images/bg.png';
import Particle from './particle';
import styled from 'styled-components';

import ProfileCard from './components/profilecard';


class HomePage extends Component {
  render() {
const StyledSection = styled.p`
font-family: 'Black Han Sans';
font-size: 3em;
font-weight:800;
letter-spacing: 2px;
margin: 0 0 0 100px;
`;
const StyledLayout = styled(Layout)`
background: #FAFAFA;
.background {
object-fit: cover;
height: 550px;
width:100%;
background-color: #FAFAFA;
position: relative;
-webkit-clip-path: polygon(49% 0, 100% 0, 100% 100%, 0 85%, 0 0);
clip-path: polygon(49% 0, 100% 0, 100% 100%, 0 85%, 0 0);
}
.container {
position:absolute;
top: 200px;
left: 0;
width: 100%;
text-align: center;
}

.cover-page-text {
color: white;
font-size: 2em;
font-family: 'Open Sans';
font-weight: 600;
letter-spacing: 2px;
}
.cover-page-description{
color:#dedede;
font-size: 1.4em;
font-family: 'Open Sans';
margin: 16px;
}
.cover-page-button {
    margin: 20px;
}

.about-me-container {
margin: 0;
min-height: 300px;
}
h1 {
    font-weight: 700;
}
.about-me-text {
    color: #FFC107;
}
.react {
    font-weight: 700;
}
.antd {
    font-weight: 700;
}
.about-me-paragraph {
    font-size: 16px;
    line-height: 20px;
}
.card-desc {
    border-left: 12px solid #424242;
}
.left {
    display:flex;
    justify-content:flex-start;
}
.right{
    display:flex;
    justify-content:flex-end;
    margin:0 0 0 20px;
}
.about-me-container-flex {
    display:flex;
    flex-direction:row;
    margin: 0 100px 0 100px;
}
.skills-container {
    position: relative;
    text-align: center;
    color: #FAFAFA;
}
.skills-title {
    position: absolute;
    top: 30px;
    right: 40px;
   font-family: 'Black Han Sans';
font-size: 3em;
font-weight:800;
letter-spacing: 2px;
}
.skills-desc {
     position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Black Han Sans';
    font-size: 2em;
}
.connect-container {
    margin: 0 0 0 100px;
    min-height: 400px;
}
.icon {
    font-size: 2em;
}
@media only screen and (max-width: 930px) {
  .about-me-container-flex {
    flex-direction: column;
  }
  .right {
    margin: 0px;
  }
  .wrapper {
    display: flex;
    justify-content: center;
  }
  .skills-desc {
    font-size: 1.3em;
  }
}
@media only screen and (max-width: 571px) {
    .skills-desc {
    font-size: 1.1em;
  }
  .skills-title {
    font-size: 2em;
  }
}
@media only screen and (max-width: 450px) {
    .skills-desc {
    font-size: 16px;
  }
  .skills-title {
    font-size: 18px;
  }
}

`;
    return (
    <StyledLayout>
    <img src={bg} className="background" alt="bg" />
    <div className="container">
    <span className="cover-page-text">DEJON, JULIUS M.</span>
    <div className="cover-page-description">made with &nbsp;
    <span className="react">React
    </span>&nbsp;
    and&nbsp;
    <span className="antd">
    Antd
    </span>
    </div>
    </div>
    <div className="about-me-container" id="about-me">
    <StyledSection>
    ABOUT ME!
    </StyledSection>
    <div className="about-me-container-flex">
    <div className="left">
       <ProfileCard />
       </div>
       <div className="right">
      <Card className="card-desc">
     <p className="about-me-paragraph">&emsp;I'm a fresh graduate at the University of the East Majoring Information Technology. In school I learned some programming languages such as C, C++, C#, Java, .NET, HTML, CSS, Python, and PHP. I also learned frameworks such as Bootstrap and JQuery to develop a Web-based system using PHP.</p>
     <p className="about-me-paragraph">&emsp;At my 4 months of Internship I have been exposed to a industrial level of Web development. With my co-interns we developed system using ReactJS, antd, Laravel and other related tech.</p>
     <p className="about-me-paragraph">&emsp;I spend time learning new things via reading documentations and watching tutorials.  Right now I'm looking to be part of company that has vision aligned with my goal.</p>
      </Card>
      </div>
      </div>
    </div>
     <div className="skills-container">
     <Particle/>
    <span className="skills-title"> SKILLS!</span>
    <div className="skills-desc">
    Web Development <br />
    ReactJS, Redux, API, Git, Laravel/Apiato, antd, Bootstrap, JQuery, Postman, ES6, NodeJS
    </div>
   
     </div>
    <StyledSection>
    CONNECT WITH ME!
    </StyledSection>
    <div className="connect-container">
    <Icon type="github" className="icon"/> <a href="https://github.com/juliusdejon" alt="github">https://github.com/juliusdejon</a> <br />
    <Icon type="gitlab" className="icon"/> <a href="https://gitlab.com/juliusdejon" alt="gitlab">https://gitlab.com/juliusdejon</a> <br />
    <Icon type="linkedin" className="icon" /> <a href="https://www.linkedin.com/in/julius-dejon-954882157/" alt="linkedin"> https://www.linkedin.com/in/julius-dejon-954882157/</a> <br />
    <Icon type="mail" className="icon"/> juliusdejon@gmail.com <br />
    <Icon type="phone"  className="icon"/> +63 9951808520 
    </div>    
    </StyledLayout>
    );
  }
}

export default HomePage;