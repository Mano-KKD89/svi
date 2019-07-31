import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
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
            <div className="hero-banner-about container-fluid">
              <div className="container">
                <div className="row">
                  <Col xs={8}>
                    <nav>
                    <Breadcrumb>
                      <Breadcrumb.Item to="/home" activeClassName="active">home</Breadcrumb.Item>
                      <Breadcrumb.Item active>about us</Breadcrumb.Item>
                    </Breadcrumb>
                      <h1 className="text-blue">About Us</h1>
                      <h4 className="text-white">We are group of <span className="text-blue">Creative Developers</span> here to help you</h4>
                      <small className="text-white">Make something new.</small>
                    </nav>
                  </Col>
                  <Col xs={4}>hi</Col>
                  </div>
                </div>
              </div>
              <Col className="about-us container mt-5 pt-2">
                <h2>About Us</h2>
              <Col className="row">
                <Col xs={6}>
                  <h3>Get to know us</h3>
                  <h4>We are promising service provider in the field of Graphics and animations. We deal with all graphics, VFX, 2D, 3D animation services and are acknowledged/recognized accuracy and timely execution of work.</h4>
                </Col>
                <Col xs={6}>
                  {/* <img src=""> */}
                </Col>
                <Col xs={6}>
                  {/* <img src=""> */}
                </Col>
                <Col xs={6}>
                    <h3>Our Vision</h3>
                    <h4>We are promising service provider in the field of Graphics and animations. We deal with all graphics, VFX, 2D, 3D animation services and are acknowledged/recognized accuracy and timely execution of work.</h4>
                </Col>
                <Col xs={6}>
                  <h3>Our Mision</h3>
                  <h4>We are promising service provider in the field of Graphics and animations. We deal with all graphics, VFX, 2D, 3D animation services and are acknowledged/recognized accuracy and timely execution of work.</h4>
                </Col>
                <Col xs={6}>
                  {/* <img src="#"> */}
                </Col>
              </Col>
            </Col>
          </Col>
        </Row>
      </>
        );
      }
    }
    
    export default About;
