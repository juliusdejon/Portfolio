import React, { Component } from 'react';
import { Button, Tag} from 'antd';
import bg from '../images/bg.png';
import icon from '../images/react-icon.png';
import iconAntd from '../images/ant-icon.png';
class ShowCase extends Component {
    
  render() {
    const {
        title
      } = this.props;
    return (
    <header id="showcase">
    <img src={bg} className="showcase-background" alt="showcase-background" />
    <div>
      <div className="showcase-container">
        <h1>Hello, I'm {title}</h1>
        <h2><Tag color="#2db7f5">Full Stack Web Developer</Tag></h2>
        <p>this portfolio is powered by React <img src={icon} alt="react-icon" style={{width: '3rem'}}/> and antd  <img src={iconAntd} alt="antd-icon" style={{width: '2rem'}}/></p>
        <br /><br /><br /> <br />
          <Button ghost size="large"><a href="#AboutMe">Read More!</a></Button> 
      </div>
    </div>
    </header>
    );
  }
}

export default ShowCase;
