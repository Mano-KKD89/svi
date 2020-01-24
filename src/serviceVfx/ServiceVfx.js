import React, { Component } from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import ServiceBanner from "../images/Main-illustration_8.svg";
import LatestWork from "../images/Latest-work.svg";
import vfx_1 from "../images/vfx_1.svg";
import vfx_2 from "../images/vfx_2.svg";
import vfx_3 from "../images/vfx_3.svg";
import vfx_4 from "../images/vfx_4.svg";
import vfx_5 from "../images/vfx_5.svg";
import vfx_6 from "../images/vfx_6.svg";
import vfx_14 from "../images/vfx_14.svg";
import vfx_16 from "../images/vfx_16.svg";
import vfx_17 from "../images/vfx_17.svg";
import vfx_18 from "../images/vfx_18.svg";
import vfx_21 from "../images/vfx_21.svg";
import vfx_22 from "../images/vfx_22.svg";
import vfx_23 from "../images/vfx_23.svg";
import vfx_24 from "../images/vfx_24.svg";
import "./serviceVfx.scss";
class ServiceVfx extends Component {
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
                      <h1 className="text-blue">Visual Effects (VFX)</h1>
                      <h4 className="text-white">
                        If you can
                        <span className="text-blue">Imagine</span> it<br></br>
                        We can
                        <span className="text-blue">Create</span> it
                      </h4>
                      <p className="text-white">Believe in the power of ideas.</p>
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
                    <p>Smart, intuitive design for brilliant brands</p>
                    <h2>We share your dreams with the world!!!</h2>
                    <p className="para-p">We deliver the most attractive VFX services with all kind of effects using our well-groomed team with latest tools and technologies. We provide this service using superior quality instruments and fulfil client’s requirement as per their specification.</p>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Video <span>Editing</span> </h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_1} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Video Editing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_2} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Broadcast Video Editing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_3} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Commercial Video Editing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Video <span>Mixing</span> </h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_4} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Multi Video Mixing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_5} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Broadcast Video Mixing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_6} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Events Video Mixing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Social Media <span>Advertisement</span> Video Creation</h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_1} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Social Media Advertisement<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_1} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Social Media Advertisement<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_1} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Social Media Advertisement<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>TV Advertisement  <span>Video Creation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_1} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>TV Advertisement<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_1} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>TV Advertisement<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_1} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>TV Advertisement<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Compositing <span>and</span> Special <span>Effects</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_14} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Compositing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_14} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Special Effects <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_16} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Particle Effects <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Chroma key <span>Editing (</span> Green / Blue <span>Screen Removal)</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_16} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Chroma key Editing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_17} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Green Screen Removal<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_18} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Blue Screen Removal<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Sound <span>Recording and</span> sound <span>Editing</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_1} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Sound Recording <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_1} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4> Sound Editing<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_21} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>Foley Effects<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>2D to 3D <span>Convertion</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_22} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>2D - 3D Convertion <span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_23} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>2D - 3D Convertion<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={vfx_24} /></figure>
                          <div className="works-info">
                            <p>Visual Effects</p>
                            <h4>2D - 3D Convertion<span className="float-right">2020</span></h4>
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

export default ServiceVfx;
