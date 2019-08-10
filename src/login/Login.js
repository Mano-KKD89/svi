import React, { Component } from "react";
import { Container, Row, Col, Button, Form, Toast } from "react-bootstrap";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";
import fire from '../firebase';
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      userName: "",
      password: "",
      loginError: null
    };
  }
  login() {
    console.log(this.state.userName, this.state.password);
    
fire.auth().signInWithEmailAndPassword(this.state.userName, this.state.password ).then( u => {
console.log(u, 'logged in');
localStorage.setItem("authToken", u.user.uid);
this.props.history.push("/admin");
}).catch( error => {
  console.log(error.message, 'login error')
  this.setState({
    loginError: error.message
  })
})
    // axios
    //   .post("http://38354b1c.ngrok.io/api/v1/auth/login", {
    //     email: this.state.userName,
    //     password: this.state.password
    //   })
    //   .then(res => {
    //     console.log(jwt_decode(res.data.token), "response");
    //     localStorage.setItem("authToken", res.data.token);
    //     this.props.history.push("/admin");
    //   })
    //   .catch(error => {
    //     console.error(Error(error));
    //   });
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
              
                {this.state.loginError != null ? (
                 <Toast  onClose={() => this.setState({loginError: null})}>
                  <Toast.Header>
                    <small>Login error</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
                ) : null }
  
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
