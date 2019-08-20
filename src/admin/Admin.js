import React, { Component } from "react";
import { Container, Row, Col, Button, Tab, Form, Nav } from "react-bootstrap";
import Homedata from "./Homedata";
import Aboutdata from "./Aboutdata";
import Servicedata from "./Servicedata";
import Blogdata from "./Blogdata";
import Contactdata from "./Contactdata";
import CustomerReview from "./Customer-review";
import Ourclients from "./Ourclients";
import Ourworks from "./Ourworks";
import fire from "../firebase";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    fire.auth().signOut();
    localStorage.removeItem("authToken");
    this.props.history.push("/login");
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={12}>
              <h3>welcome to Admin page</h3>
              <Button variant="outline-dark" onClick={this.logout}>
                Logout
              </Button>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={2}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="Home">Home</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="About">About</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Service">Service</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Blog">Blog</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Contact">Contact</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Customer-review">Review</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="clients">Our Clients</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="works">Our Works</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={10}>
                    <Tab.Content>
                      <Tab.Pane eventKey="Home">
                        <Homedata />
                      </Tab.Pane>
                      <Tab.Pane eventKey="About">
                        <Aboutdata />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Service">
                        <Servicedata />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Blog">
                        <Blogdata />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Contact">
                        <Contactdata />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Customer-review">
                        <CustomerReview />
                      </Tab.Pane>
                      <Tab.Pane eventKey="clients">
                        <Ourclients />
                      </Tab.Pane>
                      <Tab.Pane eventKey="works">
                        <Ourworks />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Admin;
