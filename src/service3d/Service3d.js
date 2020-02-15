import React, { Component } from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import ServiceBanner from "../images/service-banner.svg";
import LatestWork from "../images/Latest-work.svg";
import threeDillustration_1 from "../images/3D-illustration_1.svg";
import threeDillustration_2 from "../images/3D-illustration_2.svg";
import threeDillustration_4 from "../images/3D-illustration_4.svg";
import threeDillustration_5 from "../images/3D-illustration_5.svg";
import threeDillustration_6 from "../images/3D-illustration_6.svg";
import threeDillustration_7 from "../images/3D-illustration_7.svg";
import threeDillustration_8 from "../images/3D-illustration_8.svg";
import threeDillustration_9 from "../images/3D-illustration_9.svg";
import threeDillustration_10 from "../images/3D-illustration_10.svg";
import threeDillustration_11 from "../images/3D-illustration_11.svg";
import threeDillustration_12 from "../images/3D-illustration_12.svg";
import threeDillustration_19 from "../images/3D-illustration_19.svg";
import threeDillustration_20 from "../images/3D-illustration_20.svg";
import threeDillustration_21 from "../images/3D-illustration_21.svg";
import threeDillustration_25 from "../images/3D-illustration_25.svg";
import threeDillustration_26 from "../images/3D-illustration_26.svg";
import threeDillustration_27 from "../images/3D-illustration_27.svg";
import Mainillustration from '../images/Main-illustration_7.svg';
import VideoIcon from '../images/Video-icon.svg'
import "./service3d.scss";
class Service3d extends Component {
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
                      <h1 className="text-blue">3D Graphics</h1>
                      <h4 className="text-white">
                        Good structure is
                        <span className="text-blue"> Obvious</span><br></br>
                        Great plan is
                        <span className="text-blue"> Transparent</span>
                      </h4>
                      <p className="text-white">New thoughts. Insightful design. Quantifiable outcomes.</p>
                    </nav>
                  </Col>
                  <Col xs={4} className="d-flex align-items-center service-img">
                    <img src={Mainillustration} />
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
                    <p>Where advancement, creative mind and inventiveness meet</p>
                    <h2>Making thoughts become animated</h2>
                    <p className="para-p">We give chief 3D animation services at ostensible costs. We utilize best 3D innovations to convey exceptional support of our customers. We principally center around consumer loyalty and unwavering quality. We offer wide assortment of test and innovative models which incorporate.</p>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>3D Logo <span>Creation and</span> Logo <span>Animation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_1} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Logo<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_2} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Logo<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={VideoIcon} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Logo Animation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>3D Elevation <span>Plan</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_4} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Elevation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_5} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Elevation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_6} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Elevation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>3D Set <span>models and</span> Character <span>models</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_7} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Printing Machine<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_8} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Drone<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_9} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Character Model<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>3D Architecture <span>Plans</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_10} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Architecture<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_11} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Architecture<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_12} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Architecture<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>3D <span>All type of</span> Product <span>Animation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={VideoIcon} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Engine Animation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={VideoIcon} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Kiosk Machine Animation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={VideoIcon} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Logo Animation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>3D Walk Through <span>Animation</span> </h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={VideoIcon} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>Architectural Walkthrough Animation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={VideoIcon} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>Home Decor Animation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={VideoIcon} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Car Animation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>3D Photorealistic <span>Rendering Output</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_19} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Building Rendering<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_20} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Car Rendering<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_21} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Kitchen Rendering<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>3D Advertisement <span>and Short films</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={VideoIcon} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Advertisement<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={VideoIcon} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Advertisement<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={VideoIcon} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>3D Short Films<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>3D 360-degree  <span>Panoramas</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_25} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>360 Degree Tajmahal<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_26} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>360 Degree Globe View<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={threeDillustration_27} /></figure>
                          <div className="works-info">
                            <p>3D Graphics</p>
                            <h4>360 Degree Home<span className="float-right">2020</span></h4>
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

export default Service3d;
