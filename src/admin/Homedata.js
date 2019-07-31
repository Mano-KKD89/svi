import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
class Homedata extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Home heading",
      subTitle: "Home sub title"
    };
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>home form</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Homedata;
