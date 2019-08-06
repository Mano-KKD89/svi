import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
class Blogdata extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>Blogdata form</Col>
            <Button variant="outline-success">click</Button>
          </Row>
        </Container>
      </>
    );
  }
}

export default Blogdata;
