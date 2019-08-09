import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Request.scss";
class Request extends Component {
  render() {
    return (
      <>
          <Col className="request-section">
            <Container>
              <Col xs={12}>
                <div className="request-inner">
                  <Col xs={12} className="text-center title-sec">
                    <h2>Request Custom Design</h2>
                  </Col>
                  <Col xs={12} className="inner-sec">
                    <Form>
                      <Row className="form-div">
                        <Col xs={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Your Name" />
                          </Form.Group>
                        </Col>
                        <Col xs={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Your Address" />
                          </Form.Group>
                        </Col>
                        <Col xs={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Your Subject" />
                          </Form.Group>
                        </Col>
                        <Col xs={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Your Phone" />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="4" placeholder="Write Message" />
                          </Form.Group>
                        </Col>
                        <Col xs={12} className="text-center">
                          <Button className="btn-span" type="submit">SEND</Button>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </div>
              </Col>
            </Container>
          </Col>
      </>
    );
  }
}

export default Request;
