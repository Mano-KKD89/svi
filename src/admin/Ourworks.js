import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
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
class Ourworks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadImg: {},
      projectName: "",
      projectType: "",
      created_at: new Date(),
      projectImg: "",
      editId: "",
      imgChangeStatus: false,
      progress: 0,
      worksData: []
    };
  }

  componentDidMount = () => {
    this.fetchWorkData();
  };

  fetchWorkData = () => {
    const databaseRef = fire.database().ref("works");

    databaseRef.on("value", snapshot => {
      if (snapshot.val()) {
        const dd = Object.values(snapshot.val());
        let newDate = [];

        for (let d of dd) {
          newDate.push({
            id: d.id,
            projectName: d.projectName,
            projectType: d.projectType,
            projectImg: d.projectImg,
            created_at: d.created_at
          });
        }

        this.setState({
          worksData: newDate
        });
      }
    });
  };

  onChangeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChange = date => {
    this.setState({
      created_at: date
    });
  };
  onFilechange = e => {
    const uploadImg = e.target.files[0];
    const imgChangeStatus = true;
    this.setState({ uploadImg, imgChangeStatus });
  };
  onUpload = () => {
    console.log(this.state, "works");

    if (this.state.imgChangeStatus) {
      const { uploadImg } = this.state;
      const uid = fire
        .database()
        .ref()
        .child("works")
        .push().key;

      const uploadAction = storage
        .ref(`works/${uploadImg.name}`)
        .put(uploadImg);

      uploadAction.on(
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
            .ref("works")
            .child(uploadImg.name)
            .getDownloadURL()
            .then(projectImg => {
              this.setState({ projectImg });
              const newId = this.state.editId !== "" ? this.state.editId : uid;

              const data = {
                id: newId,
                projectName: this.state.projectName,
                projectType: this.state.projectType,
                created_at: this.state.created_at,
                projectImg: projectImg
              };

              const updates = {};
              updates[`/works/${newId}`] = data;
              fire
                .database()
                .ref()
                .update(updates);
            });
        }
      );
    } else if (this.state.blogEditId) {
      const data = {
        id: this.state.editId,
        projectName: this.state.projectName,
        projectType: this.state.projectType,
        created_at: this.state.created_at,
        projectImg: this.state.projectImg
      };

      const updates = {};
      updates[`/works/${this.state.editId}`] = data;
      fire
        .database()
        .ref()
        .update(updates);
      // });
    }
  };
  onDelete = id => {
    fire
      .database()
      .ref()
      .child(`/works/${id}`)
      .remove();
    window.location.reload();
  };
  onEdit = val => {
    console.log(val);
    this.setState({
      editId: val.id,
      projectName: val.projectName,
      projectType: val.projectType,
      projectImg: val.projectImg,
      created_at: new Date(val.created_at),
      imgChangeStatus: false
    });
  };
  render() {
    console.log(this.state.worksData);
    return (
      <Container>
        <Row>
          <Col>our works form</Col>
          <Col xs={12}>
            <img style={{ height: "75px" }} src={this.state.projectImg} />
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Project title</Form.Label>
                <Form.Control
                  type="text"
                  name="projectName"
                  placeholder="Project title"
                  value={this.state.projectName}
                  onChange={this.onChangeHandle}
                />
              </Form.Group>
              <Form.Group controlId="formGridState">
                <Form.Label>Project category</Form.Label>
                <Form.Control
                  name="projectType"
                  value={this.state.projectType}
                  onChange={this.onChangeHandle}
                  as="select"
                >
                  <option>Choose...</option>
                  <option value="2D">2D</option>
                  <option value="3D">3D</option>
                  <option value="VFX">VFX</option>
                  <option value="APP">APP</option>
                  <option value="Website">Website</option>
                  <option value="Interaction">Interaction</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Created Date</Form.Label>
                <DatePicker
                  selected={this.state.created_at}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>upload image</Form.Label>
                <Form.Control
                  type="file"
                  name="uploadImg"
                  onChange={this.onFilechange}
                />
              </Form.Group>
              <Button variant="outline-success" onClick={this.onUpload}>
                Save work
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
          <Col xs={12} style={{ marginTop: "30px" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#id</th>
                  <th>Project Title</th>
                  <th>Category</th>
                  <th>date</th>
                  <th>image</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.worksData.map((data, i) => {
                  return (
                    <tr key={data.id}>
                      <td>{i + 1}</td>
                      <td>{data.projectName}</td>
                      <td>{data.projectType}</td>
                      <td>{moment(data.created_at).format("YYYY")}</td>
                      <td>
                        <img style={{ height: "35px" }} src={data.projectImg} />
                      </td>
                      <td>
                        <Button
                          variant="outline-danger"
                          onClick={this.onDelete.bind(this, data.id)}
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
    );
  }
}

export default Ourworks;
