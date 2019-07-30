import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { routes } from "./Routes";
import Header from "./header/Header";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Row>
            <Col xs={12} className="Whole-container mt-5">
              <Switch>
                {routes.map(url => {
                  return <Route exact {...url} />;
                })}
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
