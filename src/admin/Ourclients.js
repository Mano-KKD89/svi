import React, { Component } from "react";
import fire, { storage } from "../firebase";
import {
  Container,
  Row,
  Col,
  Button,
  ProgressBar,
  Form,
  Table
} from "react-bootstrap";
class Ourclients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientImg: {},
      clientName: "",
      imgUrl: "",
      progress: 0,
      data: []
    };
  }

  componentDidMount = () => {
    this.getClientDetails();
  };
  getClientDetails = () => {
    const databaseRef = fire.database().ref("clients");
    databaseRef.on("value", snapshot => {
      if (snapshot.val()) {
        let dd = Object.values(snapshot.val());
        let newData = [];
        for (let d of dd) {
          newData.push({
            id: d.id,
            clientName: d.clientName,
            imgUrl: d.imgUrl
          });
        }
        this.setState({
          data: newData
        });
      }
    });
  };

  onFilechange = e => {
    e.preventDefault();
    const clientImg = e.target.files[0];
    this.setState({ clientImg });
  };
  onChangeHandle = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onUpload = () => {
    const uid = fire
      .database()
      .ref()
      .child("clients")
      .push().key;
    const { clientImg } = this.state;
    const uploadAction = storage
      .ref(`clients/${clientImg.name}`)
      .put(clientImg);

    uploadAction.on(
      "state_changed",
      snapchat => {
        const progress = Math.round(
          (snapchat.bytesTransferred / snapchat.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("clients")
          .child(clientImg.name)
          .getDownloadURL()
          .then(imgUrl => {
            this.setState({ imgUrl });
            let data = {
              id: uid,
              clientName: this.state.clientName,
              imgUrl: this.state.imgUrl
            };
            const updates = {};
            updates[`/clients/${uid}`] = data;
            fire
              .database()
              .ref()
              .update(updates);
          });
        this.getClientDetails();
      }
    );
  };
  onDelete = id => {
    fire
      .database()
      .ref()
      .child(`/clients/${id}`)
      .remove();
    window.location.reload();
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>Add Clients details</Col>
          <Col xs={12}>
            <img
              alt={this.state.imgUrl}
              style={{ height: "75px" }}
              src={this.state.imgUrl}
            />
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Client Name</Form.Label>
                <Form.Control
                  type="text"
                  name="clientName"
                  placeholder="Client Name"
                  onChange={this.onChangeHandle}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Client image</Form.Label>
                <Form.Control
                  type="file"
                  name="clientImg"
                  onChange={this.onFilechange}
                  required
                />
              </Form.Group>
              <Button variant="outline-success" onClick={this.onUpload}>
                Save
              </Button>
            </Form>
            <Col xs={12} style={{ marginTop: "20px", marginBottom: "20px" }}>
              <ProgressBar
                animated
                striped
                variant="success"
                now={this.state.progress}
                label={`${this.state.progress}%`}
              />
            </Col>
          </Col>
          <Col xs={12} style={{ marginTop: "50px" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#id</th>
                  <th>Client name</th>
                  <th>image</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((data, i) => {
                  return (
                    <tr key={data.id}>
                      <td>{i + 1}</td>
                      <td>{data.clientName}</td>
                      <td>
                        <img style={{ height: "35px" }} src={data.imgUrl} />
                      </td>
                      <td>
                        <Button
                          variant="outline-danger"
                          onClick={this.onDelete.bind(this, data.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Ourclients;
