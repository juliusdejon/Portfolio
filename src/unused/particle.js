import React, { Component } from 'react';
import Particles from 'react-particles-js';
import bg2 from '../images/bg2.png';


class Particle extends Component {
  render() {
    return (
  <Particles 
              params={{
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 10
                    }
                  }
                }
              }}
              style={{
                backgroundImage: `url(${bg2})`,
                position: 'relative',
	              height: '450px',
	              width: '100%'
              }}
            >
            </Particles>
    );
  }
}

export default Particle;

  
   