import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
// import Slider from "react-slick";
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
    var settings = {
      dots: true
    };
    return (
      <>
        <Row>
          <Col xs={12}>
            <div className="about-banner-about Container-fluid row">
              <div className="container">
                <div className="row">
                  <Col xs={8}>
                    <nav>
                      <Breadcrumb className="bread-c">
                        <Breadcrumb.Item to="/home" activeClassName="active">
                          home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>about us</Breadcrumb.Item>
                      </Breadcrumb>
                      <h1 className="text-blue">About Us</h1>
                      <h4 className="text-white">
                      We are gathering of 
                        <span className="text-blue"> Creative <br></br>Developers</span>{" "}
                        here to support you
                      </h4>
                      <p className="text-white">Make something new.</p>
                    </nav>
                  </Col>
                  <Col xs={4}>
                    <img src={banner} />
                  </Col>
                </div>
              </div>
            </div>
            <Container className="about-us mt-5 pt-2 mb-5 pb-5">
              {/* <h2>About Us</h2> */}
              <div className="row">
                <Col xs={6} className="d-flex align-items-center">
                  <div>
                  <h3>Get to know us</h3>
                  <h4>
                  We are promising specialist organization in the field of Graphics and animations. We manage all designs, VFX, 2D, 3D animation services and are perceived exactness and convenient execution of work. We are here to give better assistance at ostensible and benefitable expense for little scale specialists who are flourishing hard to prevail right now.
                  </h4>
                  </div>
                </Col>
                <Col xs={6} className="d-flex align-items-center pl-5">
                  <img src={imgfirst} />
                </Col>
                <Col xs={6} className="mt-5 d-flex align-items-center">
                  <img src={imgsec} />
                </Col>
                <Col xs={6} className="mt-5 d-flex align-items-center">
                  <div className="ml-5">
                  <h3>Our Vision</h3>
                  <h4 >
                  Sreenevasa is an UAE Based organization with 7 years' involvement with the field of 2d, 3d, VFX, Photography, Digital marketing and Web Development benefits in the pace of web development solution across the the country. Our vision is to elevate the customer's necessity in a creative and appealing technique to progress. Our fantasy is to set up cutting edge methods and ensure we convey the more noteworthy experience and powerful assistance to customer.
                  </h4>
                  </div>
                </Col>
                <Col xs={6} className="mt-5 d-flex align-items-center">
                  <div>
                  <h3>Our Mision</h3>
                  <h4>
                  Our Mission is to make a trademark in the field of designs, animation overall the nation and give total web improvement bundle to go into business at low cost. We make a workmanship that will represent your items and services alongside advanced showcasing administrations. We might want to make a stage which will fill in as one-stop answer for all your business necessities.
                  </h4>
                  </div>
                </Col>
                <Col xs={6} className="mt-5 d-flex align-items-center pl-5">
                  <img src={imgthird} />
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
