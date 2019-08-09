import React, { Component } from "react";
import { Container, Row, Col, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "./footer.scss";
import instagramf from "../images/instagramf.svg";
import twitterf from "../images/twitterf.svg";
import facebookf from "../images/facebookf.svg";
import earthf from "../images/earthf.svg";
import { NavLink } from "react-router-dom";
class About extends Component {
  constructor() {
    super();
  }
  render() {
    var settings = {
      dots: true
    };
    return (
      <>
          <Col xs={12}>
            <div className="footer mt-5 pt-5">
              <Container>
                <Row>
                  <Col xs={3}>
                    <h2>Contact Us</h2>
                    <address>
                      218, School Street,<br></br>
                      Thazhanguda,<br></br>
                      Cuddalore, TN, India.
                  </address>
                    <a href="tel:9600610640">+91-9600610640</a>
                    <p><small><a href="mailto:info@sreenevasainfotech.com">info@sreenevasainfotech.com</a></small></p>
                  </Col>
                  <Col xs={3}>
                    <h2>Customer rervice</h2>
                    <ul>
                      <li>Contact Us</li>
                      <li>Ordering  Payment</li>
                      <li>Shipping</li>
                      <li>Returns</li>
                      <li>FAQ</li>
                    </ul>
                  </Col>
                  <Col xs={3}>
                    <h2>Information</h2>
                    <ul>
                      <li>About Us</li>
                      <li>Work With US</li>
                      <li>Privacy Policy</li>
                      <li>Terms  Conditions</li>
                      <li>Press Enquiries</li>
                    </ul>
                  </Col>
                  <Col xs={3}>
                    <h2 className="last">Subscribe via Email</h2>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    <Form>
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder="Email Address"
                          aria-label="Email Address"
                          aria-describedby="Email Address"
                        />
                        <InputGroup.Append>
                          <Button variant="outline-secondary">Subscribe</Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Form>
                  </Col>
                </Row>
              </Container>
              <div className="copy-r col-12">
                <Container>
                  <Row>
                    <Col xs={6}>Copyright © 2019. Sreenevasa Infotech, India.</Col>
                    <Col xs={6}>
                    <ul>
                      <li><NavLink to="#"> <img src={instagramf} alt="instagram"/></NavLink></li>
                      <li><NavLink to="#"> <img src={twitterf} alt="twitter"/></NavLink></li>
                      <li><NavLink to="#"> <img src={facebookf} alt="facebook"/></NavLink></li>
                      <li><NavLink to="#"> <img src={earthf} alt="earth"/></NavLink></li>
                    </ul>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
      </>
    );
  }
}
export default About;
