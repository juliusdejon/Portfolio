import React, { Component } from 'react';
import { Icon } from 'antd';
class SectionD extends Component {
  render() {
    return (
      <section className="SectionD">
        <div>
          <h2>Let's talk</h2>
          <p>
            Wanna get in touch or talk about a project?
            Feel free to contact me via email at
            juliusdejon@gmail.com
        </p>
        </div>
        <div>
          <h2>Connect With ME!</h2>
          <Icon type="github" className="icon" /> <a href="https://github.com/juliusdejon" alt="github" target="_blank">https://github.com/juliusdejon</a> <br />
          <Icon type="gitlab" className="icon" /> <a href="https://gitlab.com/juliusdejon" alt="gitlab" target="_blank">https://gitlab.com/juliusdejon</a> <br />
          <Icon type="linkedin" className="icon" /> <a href="https://www.linkedin.com/in/julius-dejon-954882157/" alt="linkedin" target="_blank"> https://www.linkedin.com/in/julius-dejon-954882157/</a> <br />
          <Icon type="mail" className="icon" /> juliusdejon@gmail.com <br />
          <Icon type="phone" className="icon" /> +63 9568634321 <br />
          <Icon type="twitter" className="icon" /> <a href="https://twitter.com/dejonjulius" alt="twitter" target="_blank"> https://twitter.com/dejonjulius</a>
        </div>
      </section>
    );
  }
}

export default SectionD;
