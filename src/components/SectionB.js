import React, { useState } from "react";
import csta from "../images/csta.png";
import valogo from "../images/valogo.png";
import piggyback from "../images/piggyback-logo.png";
import petify from "../images/petify.png";
import shore from "../images/shore.png";
import csta1 from "../images/csta/1.png";
import csta2 from "../images/csta/2.png";
import csta3 from "../images/csta/3.png";
import csta4 from "../images/csta/4.png";
import csta5 from "../images/csta/5.png";
import csta6 from "../images/csta/6.png";
import csta7 from "../images/csta/7.png";

import { Button, Carousel, Modal } from "antd";

const SectionB = () => {
  const [modal, setModal] = useState(false);
  // const openNotification = () => {
  //   notification.open({
  //     type: "error",
  //     message: "Ooops",
  //     description:
  //       "Kindly visit http://github.com/juliusdejon or Contact me for this matter.",
  //     icon: <Icon type="warning" style={{ color: "#303030" }} />,
  //   });
  // };
  return (
    <div id="section-b">
      <h2>Projects</h2>
      <section className="SectionB">
        <div className="card">
          <img src={csta} style={{ marginTop: "12px" }} alt="logo" />
          <div className="card-container">
            <h3> CSTA Web-Based Library System </h3>
            <p>Master</p>
            <Button
              type="primary"
              onClick={() => setModal(true)}
              target="_blank"
            >
              View
            </Button>
          </div>
        </div>
        <div className="card">
          <img src={valogo} alt="logo" />
          <div className="card-container">
            <h3> Villa Alfredo's Resort Reservation System </h3>
            <p>Master</p>
          </div>
        </div>

        <div className="card">
          <img src={piggyback} className="imgResize" alt="logo" />
          <div className="card-container">
            <h3> Piggyback </h3>
            <p>Contributor</p>
          </div>
        </div>
        <div className="card">
          <img
            src={shore}
            className="imgResize"
            style={{ marginTop: "12px" }}
            alt="logo"
          />
          <div className="card-container">
            <h3> Shore Suite </h3>
            <p>Contributor</p>
          </div>
        </div>
        <div className="card">
          <img
            src={petify}
            style={{ marginTop: "12px", borderRadius: "16px" }}
            alt="logo"
          />
          <div className="card-container">
            <h3> Petify </h3>
            <p>Master</p>
            <Button
              type="primary"
              href="https://petified.herokuapp.com"
              target="_blank"
            >
              Visit
            </Button>
          </div>
        </div>
        <Modal
          title="User Manual"
          visible={modal}
          footer={false}
          onCancel={() => setModal(false)}
        >
          <div>
            <Carousel autoplay autoplaySpeed={1000}>
              <img src={csta1} alt="manual" />
              <img src={csta2} alt="manual" />
              <img src={csta3} alt="manual" />
              <img src={csta4} alt="manual" />
              <img src={csta5} alt="manual" />
              <img src={csta6} alt="manual" />
              <img src={csta7} alt="manual" />
            </Carousel>
          </div>
        </Modal>
      </section>
    </div>
  );
};

export default SectionB;
