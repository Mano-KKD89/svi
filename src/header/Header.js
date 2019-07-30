import React, { Component } from "react";
import logo from "../logo.svg";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  ul
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./header.scss";
class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
      <Col className="primary">
       <Row>
          <Container className="header new">
            <Navbar  variant="dark">
              <Navbar.Brand>
                <Link to="/home">
                  <img src={logo} style={{ height: "70px" }} />
                </Link>
              </Navbar.Brand>
              <Nav className="ml-auto header-link">
                <NavLink to="/home" activeClassName="active">
                  Home
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
                <NavLink to="/service" activeClassName="active">
                  Service
                </NavLink>
                <NavLink to="/blog" activeClassName="active">
                  Blog
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
                
              </Nav>
              <ul>
                <li><a>asas</a></li>
              </ul>
            </Navbar>
          </Container>
        </Row>
        </Col>
      </>
    );
  }
}

export default Header;
// 101475098823
// eEIEVH@@*165