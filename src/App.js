import React from "react";
import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { routes } from "./Routes";
import Header from "./header/Header";
import Admin from "./admin/Admin";
import { PrivateRoutes } from "./_helpers/PrivateRoutes";
import Notfound from "./Notfound";
import jwt_decode from "jwt-decode";

// if (localStorage.getItem("authToken")) {
//   const tokenData = jwt_decode(localStorage.getItem("authToken"));
//   let currentDate = Date.now();
//   if (currentDate > tokenData.exp) {
//     localStorage.removeItem("authToken");
//     window.location.href = "/login";
//   }
// }

function App() {
  return (
    <>
      <Router>
        <Header />

        <Col xs={12} className="Whole-container">
          <Switch>
            {routes.map(url => {
              return <Route exact {...url} />;
            })}
            <PrivateRoutes exact path="/admin" component={Admin} />
            <Route component={Notfound} />
          </Switch>
        </Col>
      </Router>
    </>
  );
}

export default App;
