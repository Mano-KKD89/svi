import React from "react";
import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { routes } from "./Routes";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Request from "./request/Request";
import Admin from "./admin/Admin";
import { PrivateRoutes } from "./_helpers/PrivateRoutes";
import Notfound from "./Notfound";
// import jwt_decode from "jwt-decode";
import fire from './firebase';
import moment from 'moment';
fire.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var loginTime = user.metadata.lastSignInTime;
   const timeDiff = moment().diff(loginTime, 'minutes');
   if(timeDiff > 60) {
     fire.auth().signOut();
     localStorage.removeItem("authToken");
    this.props.history.push("/login");
   }
  } else {
    console.log( 'user signout');
  }
});


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
        <Request/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
