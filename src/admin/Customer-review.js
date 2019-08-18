import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ProgressBar,
  Form,
  Table
} from "react-bootstrap";
import fire, { storage } from "../firebase";
class CustomerReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer_name: "",
      customer_role: "",
      customer_img: {},
      description: "",
      rating: 0,
      progress: 0,
      imgUrl: "",
      reviewData: [],
      reviewEditId: "",
      imgChangeStatus: false
    };
  }

  componentDidMount = () => {
    this.fetchReviewData();
  };
  fetchReviewData = () => {
    const databaseRef = fire.database().ref("reviews");
    databaseRef.on("value", snapshot => {
      if (snapshot.val()) {
        const dd = Object.values(snapshot.val()); //for change objects to array of object

        let newData = [];
        for (let d of dd) {
          newData.push({
            customer_id: d.customer_id,
            customer_name: d.customer_name,
            description: d.description,
            customer_role: d.customer_role,
            rating: d.rating,
            imgUrl: d.imgUrl
          });
        }

        this.setState({
          reviewData: newData
        });
      }
    });
  };

  onChangeHandle = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFilechange = e => {
    const customer_img = e.target.files[0];
    const imgChangeStatus = true;
    this.setState({ customer_img, imgChangeStatus });
  };

  onUpload = () => {
    if (this.state.imgChangeStatus) {
      const uid = fire
        .database()
        .ref()
        .child("review")
        .push().key;
      const { customer_img } = this.state;
      const uploadImgAction = storage
        .ref(`review/${customer_img.name}`)
        .put(customer_img);
      uploadImgAction.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progress });
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("review")
            .child(customer_img.name)
            .getDownloadURL()
            .then(imgUrl => {
              this.setState({ imgUrl });
              let newId =
                this.state.reviewEditId != "" ? this.state.reviewEditId : uid;
              let data = {
                customer_id: newId,
                customer_name: this.state.customer_name,
                customer_role: this.state.customer_role,
                description: this.state.description,
                rating: this.state.rating,
                imgUrl: imgUrl
              };
              let updates = {};
              updates[`/reviews/${newId}`] = data;
              fire
                .database()
                .ref()
                .update(updates);
            });
          this.fetchReviewData();
        }
      );
    } else if (this.state.reviewEditId) {
      let data = {
        customer_id: this.state.reviewEditId,
        customer_name: this.state.customer_name,
        customer_role: this.state.customer_role,
        description: this.state.description,
        rating: this.state.rating,
        imgUrl: this.state.imgUrl
      };
      let updates = {};
      updates[`/reviews/${this.state.reviewEditId}`] = data;
      fire
        .database()
        .ref()
        .update(updates);
      this.fetchReviewData();
    }
  };
  onEdit = val => {
    this.setState({
      reviewEditId: val.customer_id,
      customer_name: val.customer_name,
      customer_role: val.customer_role,
      description: val.description,
      rating: val.rating,
      imgUrl: val.imgUrl,
      imgChangeStatus: false
    });
  };
  onDelete = id => {
    fire
      .database()
      .ref()
      .child(`/reviews/${id}`)
      .remove();
    window.location.reload();
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={12}>
              <img style={{ height: "75px" }} src={this.state.imgUrl} />
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="customer_name"
                    placeholder="Customer Name"
                    value={this.state.customer_name}
                    onChange={this.onChangeHandle}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Customer Role</Form.Label>
                  <Form.Control
                    type="text"
                    name="customer_role"
                    placeholder="Customer Role"
                    value={this.state.customer_role}
                    onChange={this.onChangeHandle}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.onChangeHandle}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    type="text"
                    name="rating"
                    placeholder="Rating"
                    value={this.state.rating}
                    onChange={this.onChangeHandle}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>upload image</Form.Label>
                  <Form.Control
                    type="file"
                    name="customer_img"
                    onChange={this.onFilechange}
                  />
                </Form.Group>
                <Button variant="outline-success" onClick={this.onUpload}>
                  Save Review
                </Button>
              </Form>
            </Col>
            <Col xs={12} style={{ marginTop: "30px" }}>
              <ProgressBar
                animated
                striped
                variant="success"
                now={this.state.progress}
                label={`${this.state.progress}%`}
              />
            </Col>
            <Col xs={12} style={{ marginTop: "50px" }}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#id</th>
                    <th>name</th>
                    <th>role</th>
                    <th>description</th>
                    <th>rating</th>
                    <th>image</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.state.reviewData.map((data, i) => {
                    return (
                      <tr key={data.customer_id}>
                        <td>{i + 1}</td>
                        <td>{data.customer_name}</td>
                        <td>{data.customer_role}</td>
                        <td>{data.description}</td>
                        <td>{data.rating}</td>
                        <td>
                          <img style={{ height: "35px" }} src={data.imgUrl} />
                        </td>
                        <td>
                          <Button
                            variant="outline-danger"
                            onClick={this.onDelete.bind(this, data.customer_id)}
                          >
                            Delete
                          </Button>
                        </td>
                        <td>
                          <Button
                            variant="outline-warning"
                            onClick={this.onEdit.bind(this, data)}
                          >
                            Edit
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
      </>
    );
  }
}

export default CustomerReview;
