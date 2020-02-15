import React, { Component } from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import ServiceBanner from "../images/Main-illustration_11.svg";
import LatestWork from "../images/Latest-work.svg";
import Photographyillustration_1 from "../images/Photographyillustration_1.svg";
import Photographyillustration_2 from "../images/Photographyillustration_2.svg";
import Photographyillustration_3 from "../images/Photographyillustration_3.svg";
import Photographyillustration_4 from "../images/Photographyillustration_4.svg";
import Photographyillustration_5 from "../images/Photographyillustration_5.svg";
import Photographyillustration_6 from "../images/Photographyillustration_6.svg";
import Photographyillustration_7 from "../images/Photographyillustration_7.svg";
import Photographyillustration_8 from "../images/Photographyillustration_8.svg";
import Photographyillustration_9 from "../images/Photographyillustration_9.svg";
import Photographyillustration_10 from "../images/Photographyillustration_10.svg";
import Photographyillustration_11 from "../images/Photographyillustration_11.svg";
import Photographyillustration_12 from "../images/Photographyillustration_12.svg";
import Photographyillustration_13 from "../images/Photographyillustration_13.svg";
import Photographyillustration_14 from "../images/Photographyillustration_14.svg";
import Photographyillustration_15 from "../images/Photographyillustration_15.svg";
import Photographyillustration_16 from "../images/Photographyillustration_16.svg";
import Photographyillustration_17 from "../images/Photographyillustration_17.svg";
import Photographyillustration_18 from "../images/Photographyillustration_18.svg";
import Photographyillustration_19 from "../images/Photographyillustration_19.svg";
import Photographyillustration_20 from "../images/Photographyillustration_20.svg";
import Photographyillustration_21 from "../images/Photographyillustration_21.svg";
import Photographyillustration_22 from "../images/Photographyillustration_22.svg";
import Photographyillustration_23 from "../images/Photographyillustration_23.svg";
import Photographyillustration_24 from "../images/Photographyillustration_24.svg";
import "./serviceInt.scss";
class ServiceInt extends Component {
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
                      <h1 className="text-blue">Photography</h1>
                      <h4 className="text-white">
                      Good Design  
                        <span className="text-blue"> Makes</span>{" "}<br></br>
                        the world more {" "}
                        <span className="text-blue">Awesome</span>
                      </h4>
                      <p className="text-white">Making you look great face to face and in pixel.</p>
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
                    <p>Giving huge organization results with more value</p>
                    <h2>So mind boggling, it's basic</h2>
                    <p className="para-p">We have excellent photographers and can improve the experience to feel and paramount.</p>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Landscape <span>and</span> Wildlife <span>Photography</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_1} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Landscape Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_2} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Landscape Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_3} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Wildlife Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Architectural <span>Photography</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_4} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Architectural Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_5} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Architectural Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_6} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Architectural Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Wedding <span>/</span> Event <span>Photography</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_7} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Wedding Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_8} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Wedding Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_9} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Event Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                   
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Family <span>Photography</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_10} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Family Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_11} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Family Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_12} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Family Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                   
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Macro <span>Photography</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_13} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Macro Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_14} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Macro Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_15} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Macro Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                   
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Modeling <span>Photography</span> </h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_16} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Modeling Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_17} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Modeling Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_18} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Modeling Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                   
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>360 Degree <span>Panoramic Photography</span> </h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_19} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Panoramic Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_20} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Panoramic Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_21} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Panoramic Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Abstract <span>and</span> HDR <span> Photography</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_22} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Abstract Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_23} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>HDR Photography <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_24} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>HDR Photography <span className="float-right">2020</span></h4>
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

export default ServiceInt;
