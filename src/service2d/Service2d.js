import React, { Component } from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import ServiceBanner from "../images/service-banner.svg";
import LatestWork from "../images/Latest-work.svg";
import illustration_1 from "../images/2D-illustration_1.svg";
import illustration_2 from "../images/2D-illustration_2.svg";
import illustration_3 from "../images/2D-illustration_3.svg";
import illustration_4 from "../images/2D-illustration_4.svg";
import illustration_5 from "../images/2D-illustration_5.svg";
import illustration_6 from "../images/2D-illustration_6.svg";
import illustration_7 from "../images/2D-illustration_7.svg";
import illustration_8 from "../images/2D-illustration_8.svg";
import illustration_9 from "../images/2D-illustration_9.svg";
import illustration_10 from "../images/2D-illustration_10.svg";
import illustration_11 from "../images/2D-illustration_11.svg";
import illustration_12 from "../images/2D-illustration_12.svg";
import illustration_13 from "../images/2D-illustration_13.svg";
import illustration_14 from "../images/2D-illustration_14.svg";
import illustration_15 from "../images/2D-illustration_15.svg";
import illustration_16 from "../images/2D-illustration_16.svg";
import illustration_17 from "../images/2D-illustration_17.svg";
import illustration_18 from "../images/2D-illustration_18.svg";
import illustration_19 from "../images/2D-illustration_19.svg";
import illustration_20 from "../images/2D-illustration_20.svg";
// import illustration_21 from "../images/2D-illustration_21.svg";
// import illustration_22 from "../images/2D-illustration_22.svg";
// import illustration_23 from "../images/2D-illustration_23.svg";
// import illustration_24 from "../images/2D-illustration_24.svg";
// import illustration_25 from "../images/2D-illustration_25.svg";
// import illustration_26 from "../images/2D-illustration_26.svg";
// import illustration_27 from "../images/2D-illustration_27.svg";
import illustration_28 from "../images/2D-illustration_28.svg";
import illustration_29 from "../images/2D-illustration_29.svg";
import illustration_30 from "../images/2D-illustration_30.svg";
import "./service2d.scss";
class Service2d extends Component {
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
                      Inventive {" "}
                        <span className="text-blue">Thinking</span>{" "}<br></br>
                        Creatives at your{" "}
                        <span className="text-blue">Service</span>
                      </h4>
                      <p className="text-white">Solutions for all your inventiveness needs.</p>
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
                    <p>You provide the vision, we provide the solution</p>
                    <h2>Carrying extraordinary design thoughts to consummation</h2>
                    <p className="para-p">We offer premium quality visual design and 2D all services to our customers at sensible expense. Our group of qualified experts renders the service in adherence to prerequisite. We make such one of a kind ideas that touch your senses and initiates to move toward us. You can discover wide exhibit of inventive services in,</p>
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>2D <span>Web</span> Infographics, Elements <span>and</span> Icon <span>Creation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_1} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Web Infographics<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_2} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Web Elements<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_3} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Web Icons<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row> */}
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Desktop <span>and</span> Mobile <span>Website Planning Creation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_4} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_5} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Desktop Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_6} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Mobile Website Planning<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row> */}
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Architecture <span>Plan and</span> Blueprint <span>Design</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_7} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Floor Plan<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_8} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Home Plan<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_9} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Home Blueprint<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row> */}
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Business <span>Card and</span> Invitation <span>Card Design</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_10} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Business Card<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_11} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Business Card<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_12} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Invitation Card<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row> */}
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Banner <span>Design and</span> Creative <span>Graphic Design</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_13} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Banner Design<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_14} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Banner Design<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_15} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Creative Graphics Design<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row> */}
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>Brochure <span>and</span> Pamphlet <span>Design</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_16} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Brochure<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_17} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Brochure<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_18} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Pamphlet<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row> */}
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>2d logo <span>Creation and</span> logo <span>Animation</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_19} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>2D Logo<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_20} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>2D Logo<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>2D Logo Animation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row> */}
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
                            <p>2D Graphics</p>
                            <h4>Motion Graphic Animation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Motion Graphic Animation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Motion Graphic Animation<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row> */}
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>2d <span>Advertisement</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>2D Advertisement<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>2D Advertisement<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={LatestWork} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>2D Advertisement<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row> */}
                  </Col>
                  <Col xs={12} className=" title-sec1 p-0">
                    <h2>All <span>Types of</span> Web Banner <span>Creations</span></h2>
                  </Col>
                  <Col xs={12} className="p-0 mt-3 mb-5">
                    <Row>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_28} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Web Banner<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_29} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Web Banner<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} >
                        <div className="works-div mt-3 mb-3">
                          <figure className="works-img"><img src={illustration_30} /></figure>
                          <div className="works-info">
                            <p>2D Graphics</p>
                            <h4>Web Banner<span className="float-right">2020</span></h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row> */}
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

export default Service2d;
