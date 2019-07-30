import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      userName: "",
      password: ""
    };
  }
  login() {
    console.log(this.state.userName, this.state.password);
    localStorage.setItem("authToken", "true");
    this.props.history.push("/admin");
  }

  onChangeHandle = e => {
    e.preventDefault();
    // console.log("changes", e);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    if (localStorage.getItem("authToken")) return <Redirect to={from} />;
    return (
      <>
        <Container>
          <Row>
            <Col xs={12}>
              <h3>Login page</h3>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="userName"
                    placeholder="Enter email"
                    onChange={this.onChangeHandle}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.onChangeHandle}
                  />
                </Form.Group>
                <Button variant="outline-success" onClick={this.login}>
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
