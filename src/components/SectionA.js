import React, { Component } from "react";
import prime from "../images/primeblue.png";
class SectionA extends Component {
  render() {
    return (
      <section id="AboutMe" className="SectionA">
        <div>
          <h2> About Me </h2>
          <p>
            &emsp;I graduated at the University of the East Majoring Information
            Technology. In school I learned some programming languages such as
            C, C++, C#, Java, .NET, HTML, CSS, Python, and PHP. I also learned
            frameworks such as Bootstrap and JQuery to develop a Web-based
            system using PHP.
          </p>
          <p>
            &emsp;At my 4 month of <b>Internship</b> I have been exposed to a
            industrial level of Web development. With my co-interns we developed
            system using ReactJS, antd, Laravel and other related tech.
          </p>
          <p>
            &emsp;After that I worked on a startup company for about 1.4 years,
            We Implement best practices and uses cutting edge technologies, I
            learn alot of things in <b>web development</b> as we thrive to be
            the best. Technology used (Docker, Elixir, React, Ruby, Terraform,
            Kubernetes, Vagrant, Ansible, Nginx, AWS, GCP, DO, Postgres,
            MongoDB, Redis){" "}
          </p>
          <p>
            &emsp;I currently work at a outsourcing company partnered with AWS,
            I work their as a <b>Software Engineer</b>
          </p>
          <p>
            &emsp;Since we strictly have tests in our API's at my previous
            company I decided to focus more on <b>testing</b> libraries used are
            Jest, react-testing-library, mocha, chai, cypress.
          </p>
          <p>
            I'm also a certified <b>AWS cloud practioner</b> and aiming the
            solutions architect path.
          </p>
          <p>
            I spend time learning new things via reading documentations and
            watching tutorials
          </p>
        </div>
        <div className="img-container">
          <img src={prime} alt="Working as Intern" />
        </div>
      </section>
    );
  }
}

export default SectionA;
