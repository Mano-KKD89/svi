import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  login() {
    localStorage.setItem("authToken", "true");
    this.props.history.push("/admin");
  }

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    if (localStorage.getItem("authToken")) return <Redirect to={from} />;
    return (
      <>
        <Container>
          <Row>
            <Col xs={12}>
              <h3>Login page</h3>
              <Button variant="outline-success" onClick={this.login}>
                Login
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
