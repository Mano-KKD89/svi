import React, { Component } from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import ServiceBanner from "../images/Main-illustration_9.svg";
import WebDevelopmentillustration_1 from "../images/WebDevelopmentillustration_1.svg";
import WebDevelopmentillustration_2 from "../images/WebDevelopmentillustration_2.svg";
import WebDevelopmentillustration_3 from "../images/WebDevelopmentillustration_3.svg";
import WebDevelopmentillustration_4 from "../images/WebDevelopmentillustration_4.svg";
import WebDevelopmentillustration_5 from "../images/WebDevelopmentillustration_5.svg";
import WebDevelopmentillustration_6 from "../images/WebDevelopmentillustration_6.svg";
import WebDevelopmentillustration_7 from "../images/WebDevelopmentillustration_7.svg";
import WebDevelopmentillustration_8 from "../images/WebDevelopmentillustration_8.svg";
import WebDevelopmentillustration_9 from "../images/WebDevelopmentillustration_9.svg";
import WebDevelopmentillustration_10 from "../images/WebDevelopmentillustration_10.svg";
import WebDevelopmentillustration_11 from "../images/WebDevelopmentillustration_11.svg";
import WebDevelopmentillustration_12 from "../images/WebDevelopmentillustration_12.svg";
import "./serviceWeb.scss";
class ServiceWeb extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <div className="service-banner row">
              <div className="container">
                <div className="row">
                  <Col xs={8} className="d-flex align-items-center">
                    <nav>
                      <Breadcrumb className="bread-c">
                        <Breadcrumb.Item to="/home" activeClassName="active">
                          home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Services</Breadcrumb.Item>
                      </Breadcrumb>
                      <h1 className="text-blue">Web Development</h1>
                      <h4 className="text-white">
                      We fabricate a <span className="text-blue"> Website </span>
                        that will build your <span className="text-blue"> Business</span>
                      </h4>
                      <p className="text-white">We can make your business sparkle!</p>
                    </nav>
                  </Col>
                  <Col xs={4} className="d-flex align-items-center service-img">
                    <img src={ServiceBanner} />
                  </Col>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="service-section">
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className="text-center title-sec">
                    <p>We make sites that have everything: Beauty and Brains</p>
                    <h2>Transforming creative mind into the real world</h2>
                    <p className="para-p">We Provide total web development solutions like site advancement, web content development, customer/server side scripting, organize security design of your webpage and related services for your business necessity which upgrades your computerized space to run business online to contend and vanquish right now. </p>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Front-end <span>Development</span> </h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_1} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Front-end Development<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_2} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Front-end Development<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_3} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Front-end Development<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Backend <span>Development</span> </h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_4} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Backend Development<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_5} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Backend Development<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_6} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Backend Development<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Full-Stack <span> Development</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_7} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Full-Stack Development<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_8} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Full-Stack Development<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_9} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Full-Stack Developmentg<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Backend <span>Connected with</span> Database </h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_10} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Backend Connected with Database<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_11} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Backend Connected with Database<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_12} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Backend Connected with Database<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                                    </Col>
                  
                  
                   
                  
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
      </>
    );
  }
}
export default ServiceWeb;
