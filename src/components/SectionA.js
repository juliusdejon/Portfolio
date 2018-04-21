import React, { Component } from 'react';
import prime from '../images/primeblue.png';
class SectionA extends Component {
  render() {
    return (
    <section id="section-a" className="SectionA">
        <div>
          <h2> About Me </h2>
          <p>&emsp;I'm a fresh graduate at the University of the East Majoring Information Technology. In school I learned some programming languages such as C, C++, C#, Java, .NET, HTML, CSS, Python, and PHP. I also learned frameworks such as Bootstrap and JQuery to develop a Web-based system using PHP.</p>
          <p>&emsp;At my 4 month of Internship I have been exposed to a industrial level of Web development. With my co-interns we developed system using ReactJS, antd, Laravel and other related tech.</p>
          <p>&emsp;I spend time learning new things via reading documentations and watching tutorials.  Right now I'm looking to be part of company that has vision aligned with my goal.</p>
        </div>
        <div className="img-container">
        <img src={prime} alt="Working as Intern" />
        </div>
    </section>
    );
  }
}

export default SectionA;
