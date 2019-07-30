import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./service.scss";
class Service extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <h3>Services</h3>
          </Col>
        </Row>
      </>
    );
  }
}

export default Service;
