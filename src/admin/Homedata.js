import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class Homedata extends Component {
  constructor() {
    super();
    this.state = {
      profile: [
        {
          name: "blockchain",
          url: "",
          type: "BC"
        },
        {
          name: "blockchain one",
          url: "",
          type: "BC"
        },
        {
          name: "blockchain 2",
          url: "",
          type: "BC"
        },
        {
          name: "ICO",
          url: "",
          type: "ICO"
        },
        {
          name: "ICO 1",
          url: "",
          type: "ICO"
        },
        {
          name: "React",
          url: "",
          type: "RT"
        },
        {
          name: "React 1",
          url: "",
          type: "RT"
        }
      ],
      newData: [
        {
          name: "blockchain",
          url: "",
          type: "BC"
        },
        {
          name: "blockchain one",
          url: "",
          type: "BC"
        },
        {
          name: "blockchain 2",
          url: "",
          type: "BC"
        },
        {
          name: "ICO",
          url: "",
          type: "ICO"
        },
        {
          name: "ICO 1",
          url: "",
          type: "ICO"
        },
        {
          name: "React",
          url: "",
          type: "RT"
        },
        {
          name: "React 1",
          url: "",
          type: "RT"
        }
      ]
    };
    this.onChoose = this.onChoose.bind(this);
  }

  onChoose = type => {
    console.log(type, "type");
    if (type === "ALL") {
      this.setState({
        newData: this.state.profile
      });
    } else {
      const kk = this.state.profile.filter(d => {
        return d.type == type;
      });
      this.setState({
        newData: kk
      });
    }
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>home form</Col>
            <Col xs={12}>
              <Button
                variant="outline-success"
                onClick={() => {
                  return this.onChoose("ALL");
                }}
              >
                All
              </Button>
              <Button
                variant="outline-success"
                onClick={() => {
                  return this.onChoose("RT");
                }}
              >
                React
              </Button>
              <Button
                variant="outline-success"
                onClick={() => {
                  return this.onChoose("ICO");
                }}
              >
                ICO
              </Button>
              <Button
                variant="outline-success"
                onClick={() => {
                  return this.onChoose("BC");
                }}
              >
                Blockchain
              </Button>
            </Col>
            <ul>
              {this.state.newData.map(d => {
                return <li key={d.name}>{d.name}</li>;
              })}
            </ul>
          </Row>
        </Container>
      </>
    );
  }
}

export default Homedata;
