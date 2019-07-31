import React, { Component } from "react";
import LandingBg from "../images/Landing-page-Backround.svg";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./home.scss";
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
                <h3>Landing Page</h3>
              </Col>
            </Container>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
