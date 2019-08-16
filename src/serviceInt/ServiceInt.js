import React, { Component } from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import ServiceBanner from "../images/service-banner.svg";
import LatestWork from "../images/Latest-work.svg";
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
                      <h1 className="text-blue">2D Graphics</h1>
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
                    <p>you provide the vision, we provide the solution</p>
                    <h2>Bringing great design ideas to completion</h2>
                    <p className="para-p">We offer premium quality graphic design and 2D all services to our clients at affordable/reasonable cost. Our team of qualified professionals renders the service in adherence to requirement.   We create such unique concepts that touch your senses and induces to approach us. You can find wide array of creative services in,</p>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>2D <span>Web</span> Infographics, Elements <span>and</span> Icon <span>Creation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Desktop <span>and</span> Mobile <span>Website Planning Creation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Architecture <span>Plan and</span> Blueprint <span>Design</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Business <span>Card and</span> Invitation <span>Card Design</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Banner <span>Design and</span> Creative <span>Graphic Design</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Brochure <span>and</span> Pamphlet <span>Design</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>2d logo <span>Creation and</span> logo <span>Animation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>2d Motion <span>Graphics Animation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>2d <span>Advertisement</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>All <span>Types of</span> Web Banner <span>Creations</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2019</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
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
