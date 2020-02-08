import React, { Component } from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import ServiceBanner from "../images/Main-illustration_11.svg";
import LatestWork from "../images/Latest-work.svg";
import Photographyillustration_1 from "../images/Photographyillustration_1.svg";
import Photographyillustration_8 from "../images/Photographyillustration_8.svg";
import Photographyillustration_9 from "../images/Photographyillustration_9.svg";
import Photographyillustration_14 from "../images/Photographyillustration_14.svg";
import Photographyillustration_19 from "../images/Photographyillustration_19.svg";
import Photographyillustration_20 from "../images/Photographyillustration_20.svg";
import Photographyillustration_21 from "../images/Photographyillustration_21.svg";
import Photographyillustration_23 from "../images/Photographyillustration_23.svg";
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
                        Creative{" "}
                        <span className="text-blue">Thinking</span>{" "}<br></br>
                        Creatives at your{" "}
                        <span className="text-blue">Service</span>
                      </h4>
                      <p className="text-white">Affordable solutions for all your creativity needs.</p>
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
                    <p>Providing big agency results with small agency pricing</p>
                    <h2>So complex, it’s simple</h2>
                    <p className="para-p">We have high-quality photographers and can make the experience to feel better and memorable.</p>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>2D <span>Web</span> Infographics, Elements <span>and</span> Icon <span>Creation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_1} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
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
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
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
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_8} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_9} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
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
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                   
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Banner <span>Design and</span> Creative <span>Graphic Design</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_14} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                   
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Brochure <span>and</span> Pamphlet <span>Design</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                   
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>2d logo <span>Creation and</span> logo <span>Animation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_19} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_20} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_21} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>2d Motion <span>Graphics Animation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={Photographyillustration_23} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>Photography</p>
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

export default ServiceInt;
