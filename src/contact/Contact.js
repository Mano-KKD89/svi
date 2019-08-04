import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import "./contact.scss";
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
            <h3>Contact</h3>
            <div style={{ height: "100vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDdXOYuUALdOGsYvJ3V3M3ix06YIfRG3QU"
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
          </Col>
        </Row>
      </>
    );
  }
}

export default Contact;
