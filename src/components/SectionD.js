import React, { Component } from 'react';
import {Icon} from 'antd';
class SectionD extends Component {
  render() {
    return (
      <div id="SectionD" className="grid">
        <h2>Connect With ME!</h2>
      <Icon type="github" className="icon"/> <a href="https://github.com/juliusdejon" alt="github">https://github.com/juliusdejon</a> <br />
      <Icon type="gitlab" className="icon"/> <a href="https://gitlab.com/juliusdejon" alt="gitlab">https://gitlab.com/juliusdejon</a> <br />
      <Icon type="linkedin" className="icon" /> <a href="https://www.linkedin.com/in/julius-dejon-954882157/" alt="linkedin"> https://www.linkedin.com/in/julius-dejon-954882157/</a> <br />
      <Icon type="mail" className="icon"/> juliusdejon@gmail.com <br />
      <Icon type="phone"  className="icon"/> +63 9951808520 
      </div>    
    );
  }
}

export default SectionD;
