import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
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
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Admin;
