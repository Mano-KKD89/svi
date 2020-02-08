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
                      We create websites that 
                        <span className="text-blue"> have it all</span><br></br>
                        Beauty and 
                        <span className="text-blue">Brains</span>
                      </h4>
                      <p className="text-white">Turning imagination into reality.</p>
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
                    <p>We create websites that have it all, Beauty and Brains</p>
                    <h2>Turning imagination into reality</h2>
                    <p className="para-p">We Provide complete web development solutions like website development, web content development, client/server side scripting, network security configuration of your site and related services for your business requirement which enhances your digital space to run business online to compete and conquer in this modern world. </p>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>2D <span>Web</span> Infographics, Elements <span>and</span> Icon <span>Creation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_1} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_2} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_3} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Desktop <span>and</span> Mobile <span>Website Planning Creation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_4} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_5} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_6} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Architecture <span>Plan and</span> Blueprint <span>Design</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_7} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_8} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_9} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Business <span>Card and</span> Invitation <span>Card Design</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_10} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_11} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={WebDevelopmentillustration_12} /></figure>
                          <div className="works-info">
                            <p>Web Development</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
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
