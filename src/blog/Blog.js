import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./blog.scss";
class Blog extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <h3>Blog</h3>
          </Col>
        </Row>
      </>
    );
  }
}

export default Blog;
