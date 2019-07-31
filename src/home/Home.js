import React, { Component } from "react";
import LandingBg from "../images/Landing-page-Backround.svg";
import PlayIcon from "../images/play-icon.svg";
import LandingIllustration from "../images/Landing-page- illustration.svg";
import Landing2DGraphics from "../images/Landing-2D-Graphics.svg";
import { Container, Row, Col, Button, Link } from "react-bootstrap";
import "./home.scss";
import banner from "../images/about-us.svg";
class Home extends Component {
  constructor() {
    super();
  }
  render() {
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
