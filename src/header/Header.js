import React, { Component } from "react";
import logo from "../logo.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import earth from "../images/earth.svg";
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
      <Col className="header">
       <Row>
          <Container className=" new">
            <Navbar  variant="dark">
              <Navbar.Brand>
                <Link to="/home">
                  <img src={logo} style={{ height: "40px" }} />
                </Link>
              </Navbar.Brand>
              <Nav className="mx-auto header-link">
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
                <li><NavLink to="#"> <img src={instagram} alt="instagram"/></NavLink></li>
                <li><NavLink to="#"> <img src={twitter} alt="twitter"/></NavLink></li>
                <li><NavLink to="#"> <img src={facebook} alt="facebook"/></NavLink></li>
                <li><NavLink to="#"> <img src={earth} alt="earth"/></NavLink></li>
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