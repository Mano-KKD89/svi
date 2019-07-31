import React, { Component } from "react";
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
          <Col xs={12}>
            <h3>Landing Page</h3>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
