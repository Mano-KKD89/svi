import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./contact.scss";
class Contact extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <h3>Contact</h3>
          </Col>
        </Row>
      </>
    );
  }
}

export default Contact;
