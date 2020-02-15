import React, { Component } from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import ServiceBanner from "../images/Main-illustration_10.svg";
import DigitalMarketingillustration_1 from "../images/DigitalMarketingillustration_1.svg";
import DigitalMarketingillustration_2 from "../images/DigitalMarketingillustration_2.svg";
import DigitalMarketingillustration_3 from "../images/DigitalMarketingillustration_3.svg";
import DigitalMarketingillustration_4 from "../images/DigitalMarketingillustration_4.svg";
import DigitalMarketingillustration_5 from "../images/DigitalMarketingillustration_5.svg";
import DigitalMarketingillustration_6 from "../images/DigitalMarketingillustration_6.svg";
import DigitalMarketingillustration_7 from "../images/DigitalMarketingillustration_7.svg";
import DigitalMarketingillustration_8 from "../images/DigitalMarketingillustration_8.svg";
import DigitalMarketingillustration_9 from "../images/DigitalMarketingillustration_9.svg";
import DigitalMarketingillustration_10 from "../images/DigitalMarketingillustration_10.svg";
import DigitalMarketingillustration_11 from "../images/DigitalMarketingillustration_11.svg";
import DigitalMarketingillustration_12 from "../images/DigitalMarketingillustration_12.svg";
import DigitalMarketingillustration_13 from "../images/DigitalMarketingillustration_13.svg";
import DigitalMarketingillustration_14 from "../images/DigitalMarketingillustration_14.svg";
import DigitalMarketingillustration_15 from "../images/DigitalMarketingillustration_15.svg";
import DigitalMarketingillustration_16 from "../images/DigitalMarketingillustration_16.svg";
import DigitalMarketingillustration_17 from "../images/DigitalMarketingillustration_17.svg";
import DigitalMarketingillustration_18 from "../images/DigitalMarketingillustration_18.svg";
import DigitalMarketingillustration_19 from "../images/DigitalMarketingillustration_19.svg";
import DigitalMarketingillustration_20 from "../images/DigitalMarketingillustration_20.svg";
import DigitalMarketingillustration_21 from "../images/DigitalMarketingillustration_21.svg";
import DigitalMarketingillustration_22 from "../images/DigitalMarketingillustration_22.svg";
import DigitalMarketingillustration_23 from "../images/DigitalMarketingillustration_23.svg";
import DigitalMarketingillustration_24 from "../images/DigitalMarketingillustration_24.svg";
import "./serviceApp.scss";
class ServiceApp extends Component {
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
                      <h1 className="text-blue">Digital Marketing</h1>
                      <h4 className="text-white">
                      Interfacing your 
                        <span className="text-blue"> Brand</span>{" "}<br></br>
                        with your {" "}
                        <span className="text-blue">Essence</span>
                      </h4>
                      <p className="text-white">A little organization with huge capacities.</p>
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
                    <p>Structure and advertising for greatest effect</p>
                    <h2>Design solutions for any media</h2>
                    <p className="para-p">We are offering advanced promoting service alongside web improvement arrangements which takes your business to the doorstep of every single individuals by means of on the web. We can take your business to the notification of onlookers worldwide in limited ability to focus span.</p>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Search Engine <span>Marketing</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_1} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Search Engine Marketing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_2} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Search Engine Marketing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_3} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Search Engine Marketing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Content <span>Marketing and</span> Content <span>Automation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_4} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Content Marketing <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_5} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Content Automation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_6} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Content Automation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Influencer <span>Marketing</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_7} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Influencer Marketing <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_8} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Influencer Marketing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_9} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Influencer Marketing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>E-Commerce <span>Marketing</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_10} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>E-Commerce Marketing <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_11} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>E-Commerce Marketing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_12} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>E-Commerce Marketing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Email Direct <span>Marketing</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_13} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Email Direct Marketing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_14} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Email Direct Marketing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_15} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Email Direct Marketingg<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Social Media <span>Marketing</span> </h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_16} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Social Media Marketing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_17} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Social Media Marketing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_18} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Social Media Marketing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Pay-per <span>Click Advertising</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_19} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Pay-per Click Advertising<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_20} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Pay-per Click Advertising<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_21} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Pay-per Click Advertising<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Affiliate <span>and</span> Campaign <span>Marketing</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_22} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Campaign Marketing <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_23} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Affiliate Marketing <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={DigitalMarketingillustration_24} /></figure>
                          <div className="works-info">
                            <p>Digital Marketing</p>
                            <h4>Campaign Marketing <span className="float-right">2020</span></h4>
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

export default ServiceApp;
