import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./about.scss";
class About extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <h3>About krishna</h3>
          </Col>
        </Row>
      </>
    );
  }
  
}

export default About;
