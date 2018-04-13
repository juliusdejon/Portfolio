import React, { Component } from 'react';
import Particles from 'react-particles-js';
import bg2 from './images/bg2.png';


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
                      blur: 5
                    }
                  }
                }
              }}
              style={{
                backgroundImage: `url(${bg2})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center 0',
                position: 'relative',
                WebkitClipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 86%)',
                clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 86%)'
              }}
            >
            </Particles>
    );
  }
}

export default Particle;

  
   