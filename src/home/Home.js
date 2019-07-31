import React, { Component } from "react";
import LandingBg from "../images/Landing-page-Backround.svg";
import { Container, Row, Col, Button } from "react-bootstrap";
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
          <Col className="landing" style={{ backgroundImage: `url(${LandingBg})` }}>
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={6}>
                    <h1>We Provide<span>Top Quality</span>&ensp;Services</h1>
                    <p>Perfect place for your perfect business.</p>
                    <a href="">Watch video</a>
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
