import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import "./contact.scss";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import banner from "../images/about-us.svg";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Contact extends Component {
  constructor() {
    super();
  }
  static defaultProps = {
    center: {
      lat: 11.748,
      lng: 79.7714
    },
    zoom: 15
  };
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
          <div className="contact-banner-about Container-fluid row">
              <div className="container">
                <div className="row">
                  <Col xs={8}>
                    <nav>
                      <Breadcrumb className="bread-c">
                        <Breadcrumb.Item to="/home" activeClassName="active">
                          home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Contact</Breadcrumb.Item>
                      </Breadcrumb>
                      <h1 className="text-blue">Contact</h1>
                      <h4 className="text-white">
                      We are constantly <br />
                        <span className="text-blue"> Happy to Help</span>
                       
                      </h4>
                      <small className="text-white">Connect with us today!</small>
                    </nav>
                  </Col>
                  <Col xs={4}>
                    <img src={banner} />
                  </Col>
                </div>
              </div>
            </div>

            <Container className="mt-5 pt-3 map-sec">
              <h2>Contact Us</h2>
              {/* <h3>Get in Touch</h3> */}
              <div style={{ height: "400px", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: ""
                  }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                    lat={11.748}
                    lng={79.7714}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </Container>
          </Col>
        </Row>
      </>
    );
  }
}

export default Contact;
