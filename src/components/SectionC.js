import React, { Component } from "react";
import dataWarehouse from "../images/bg2.png";
import { Button, Icon } from "antd";
class SectionC extends Component {
  render() {
    return (
      <section id="section-c" className="SectionC">
        <img src={dataWarehouse} alt="data-warehouse" />
        <div className="panel">
          <span className="r-version">Curriculum Vitae</span>
          <p>Download a copy of my CV in PDF format!</p>
          <div>
            <Icon
              type="file-pdf"
              style={{
                fontSize: "2rem",
                display: "block",
                justifyContent: "center",
                color: "var(--dark-color)",
                padding: "5px 0"
              }}
            />
          </div>
          <Button type="primary" icon="download" size="large">
            &nbsp;
            <a
              download=""
              href="https://drive.google.com/uc?export=download&id=1hqbCxuubPZyzqEUdltwwyJht4tkLgMgi"
            >
              Download
            </a>
          </Button>
          <div></div>
        </div>
      </section>
    );
  }
}

export default SectionC;
