import React, { Component } from 'react';
import csta from '../images/csta.png';
import piggyback from '../images/piggyback-logo.png';
import petify from '../images/petify.png';
import { Button, notification, Icon } from 'antd';
class SectionB extends Component {
  render() {
    const openNotification = () => {
      notification.open({
        message: 'Something went wrong.',
        description: 'Kindly visit http://github.com/juliusdejon or Contact me for this matter.',
        icon: <Icon type="warning" style={{ color: '#303030' }} />,
      });
    };
    return (
      <div id="section-b">
        <h2>Projects</h2>
        <section className="SectionB">
          <div className="card">
            <img src={csta} alt="logo" />
            <div className="card-container">
              <h3> CSTA Web-Based Library System </h3>
              <p>Master</p>
              <Button type="primary" href="http://cstaproject.x10host.com/" target="_blank">Visit</Button>
            </div>
          </div>
          <div className="card">
            <img src={piggyback} className="imgResize" alt="logo" />
            <div className="card-container">
              <h3> Piggyback </h3>
              <p>Contributor</p>
              <Button type="primary" href="http://piggyback.primephilippines.com" target="_blank">Visit</Button>
            </div>
          </div>
          <div className="card">
            <img src={petify} className="imgResize" alt="logo" style={{ borderRadius: '50%'}}/>
            <div className="card-container">
              <h3> Petify </h3>
              <p>Master</p>
              <Button type="primary" href="https://petified.herokuapp.com" target="_blank">Visit</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SectionB;
