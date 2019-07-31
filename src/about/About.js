import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./about.scss";
import banner from "../images/about-us.svg";
import imgfirst from "../images/About-us-1.svg";
import imgsec from "../images/About-us-2.svg";
import imgthird from "../images/About-us-3.svg";
class About extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <div className="about-banner-about Container-fluid">
              <div className="container">
                <div className="row">
                  <Col xs={8}>
                    <nav>
                    <Breadcrumb className="bread-c">
                      <Breadcrumb.Item to="/home" activeClassName="active">home</Breadcrumb.Item>
                      <Breadcrumb.Item active>about us</Breadcrumb.Item>
                    </Breadcrumb>
                      <h1 className="text-blue">About Us</h1>
                      <h4 className="text-white">We are group of <span className="text-blue">Creative Developers</span> here to help you</h4>
                      <small className="text-white">Make something new.</small>
                    </nav>
                  </Col>
                  <Col xs={4}><img src={banner}></img></Col>
                  </div>
                </div>
              </div>
            <Container className="about-us mt-5 pt-2">
                {/* <h2>About Us</h2> */}
              <div className="row">
                <Col xs={6}>
                  <h3>Get to know us</h3>
                  <h4>We are promising service provider in the field of Graphics and animations. We deal with all graphics, VFX, 2D, 3D animation services and are acknowledged/recognized accuracy and timely execution of work.</h4>
                </Col>
                <Col xs={6}>
                  <img src={imgfirst}></img>
                </Col>
                <Col xs={6} className="mt-5">
                  <img src={imgsec}></img>
                </Col>
                <Col xs={6} className="mt-5">
                    <h3>Our Vision</h3>
                    <h4>We are promising service provider in the field of Graphics and animations. We deal with all graphics, VFX, 2D, 3D animation services and are acknowledged/recognized accuracy and timely execution of work.</h4>
                </Col>
                <Col xs={6} className="mt-5">
                  <h3>Our Mision</h3>
                  <h4>We are promising service provider in the field of Graphics and animations. We deal with all graphics, VFX, 2D, 3D animation services and are acknowledged/recognized accuracy and timely execution of work.</h4>
                </Col>
                <Col xs={6} className="mt-5">
                 <img src={imgthird}></img>
                </Col>
              </div>
            </Container>
          </Col>
        </Row>
      </>
        );
      }
    }
    
    export default About;
