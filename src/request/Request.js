import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Request.scss";
import fire from "../firebase";
class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      contactNo: "",
      message: ""
    };
  }
  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = () => {
    const uid = fire
      .database()
      .ref()
      .child("contacts")
      .push().key;
    const data = {
      id: uid,
      admin_read: false,
      created_at: new Date(),
      ...this.state
    };
    console.log(data);
    let updates = {};
    updates[`/contacts/${uid}`] = data;
    fire
      .database()
      .ref()
      .update(updates);
  };
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
                          <Form.Control
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            placeholder="Your Name"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Control
                            type="text"
                            name="email"
                            onChange={this.onChange}
                            placeholder="Your email"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Control
                            type="text"
                            name="subject"
                            onChange={this.onChange}
                            placeholder="Your Subject"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Control
                            type="text"
                            name="contactNo"
                            onChange={this.onChange}
                            placeholder="Your Phone"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Control
                            as="textarea"
                            name="message"
                            onChange={this.onChange}
                            rows="4"
                            placeholder="Write Message"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} className="text-center">
                        <Button
                          className="btn-span"
                          type="submit"
                          onClick={this.onSubmit}
                        >
                          SEND
                        </Button>
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
