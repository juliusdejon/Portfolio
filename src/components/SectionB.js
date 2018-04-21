import React, { Component } from 'react';
import csta from '../images/csta.png';
import piggyback from '../images/piggyback-logo.png';
import mnemosyne from '../images/mnemosyne.png';
import {Button} from 'antd';
class SectionB extends Component {
  render() {
    return (
    <div id="section-b">
      <h2>Projects</h2>
    <section className="SectionB">
      <div className="card">
        <img src={csta} alt="logo" />
        <div className="card-container">
        <h3> CSTA Web-Based Library System </h3>
        <p>Master</p>
        <Button type="primary">Visit</Button>
        </div>
      </div>
      <div className="card">
        <img src={piggyback} className="imgResize" alt="logo" />
        <div className="card-container">
        <h3> Piggyback </h3>
        <p>Contributor</p>
        <Button type="primary">Visit</Button>
        </div>
        </div>
      <div className="card">
      <img src={mnemosyne} className="imgResize" alt="logo"  />
      <div className="card-container">
        <h3> Mnemosyne </h3>
        <p>Contributor</p>
        <Button type="primary">Visit</Button>
        </div>
        </div>
    </section>
    </div>
    );
  }
}

export default SectionB;
