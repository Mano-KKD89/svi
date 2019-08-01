import React, { Component } from "react";
import LandingBg from "../images/Landing-page-Backround.svg";
import PlayIcon from "../images/play-icon.svg";
import LandingIllustration from "../images/Landing-page- illustration.svg";
import Landing2DGraphics from "../images/Landing-2D-Graphics.svg";
import LandingIllustration2 from "../images/Landing-illustration-2.svg";
import { Container, Row, Col, Button, Link } from "react-bootstrap";
import "./home.scss";
import banner from "../images/about-us.svg";

class Home extends Component {


  constructor() {
    super();
  }

  render() {
    const { hits } = this.state;
    return (
      <>
        <Row>
          <Col className="landing d-flex align-items-center" style={{ backgroundImage: `url(${LandingBg})` }}>
            <div className="landing-ill"><img src={LandingIllustration} /></div>
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={6} className="pl-0">
                    <h1>We Provide<span>Top Quality</span>&ensp;Services</h1>
                    <p>Perfect place for your perfect business.</p>
                    <a href=""><img src={PlayIcon} />Watch video</a>
                  </Col>

                </Row>
              </Col>
            </Container>
          </Col>
        </Row>


        <Row>
          <Col className="middle-section">
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className="text-center title-sec">
                    <p>We're offering these popular Services</p>
                    <h2>We give life to your imagination!!!</h2>
                  </Col>
                  <Col xs={12} className="inner-sec">
                    <Row>
                      <Col xs={4}>
                        <div className="grap-sec">
                          <h3>2D Graphics</h3>
                          <p>We offer premium quality graphic design and 2D all services to our clients at affordable/reasonable cost.</p>
                          <a href="">Read More</a>
                          <figure className="img-grap">
                            <img src={Landing2DGraphics} alt="{Landing2DGraphics}" />
                          </figure>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="grap-sec">
                          <h3>2D Graphics</h3>
                          <p>We offer premium quality graphic design and 2D all services to our clients at affordable/reasonable cost.</p>
                          <a href="">Read More</a>
                          <figure className="img-grap">
                            <img src={Landing2DGraphics} alt="{Landing2DGraphics}" />
                          </figure>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="grap-sec">
                          <h3>2D Graphics</h3>
                          <p>We offer premium quality graphic design and 2D all services to our clients at affordable/reasonable cost.</p>
                          <a href="">Read More</a>
                          <figure className="img-grap">
                            <img src={Landing2DGraphics} alt="{Landing2DGraphics}" />
                          </figure>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="grap-sec">
                          <h3>2D Graphics</h3>
                          <p>We offer premium quality graphic design and 2D all services to our clients at affordable/reasonable cost.</p>
                          <a href="">Read More</a>
                          <figure className="img-grap">
                            <img src={Landing2DGraphics} alt="{Landing2DGraphics}" />
                          </figure>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className="p-sec">
                    <p>We offer high quality output with the correct/perfect combination of design,
                      sound and effects that instantly capture your attention. Our exclusive range of
                      service includes Graphic designs, 2D and 3D animations, visual services and much more.
                      The service are delivered as per the clients need at economy cost.</p>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="sevice-sec " >
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={6} className="d-flex align-items-center pl-0">
                    <div className="">
                      <h1>Get ready for real time services</h1>
                      <p>Perfect place for your perfect business.</p>
                      <a href="">Quote Now</a>
                    </div>
                  </Col>
                  <Col xs={6} className="pr-0">
                    <figure className="img-grap">
                      <img src={LandingIllustration2} alt="{LandingIllustration2}" />
                    </figure>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="latest-work-sec " >
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className="text-center title-sec">
                    <h2>Latest<span>Work</span></h2>
                    <p>We "XYZ" are specialized in understanding your needs and get the desired output/result 
                      with great elegance. We developed creative designs for different business requirement within the 
                      stipulated time per
                    </p>
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

export default Home;
