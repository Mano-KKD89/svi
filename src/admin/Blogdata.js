import React, { Component } from "react";
import { Container, Row, Col, Button, ProgressBar, Form, Table } from "react-bootstrap";
import fire, { storage } from '../firebase';
class Blogdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadImg: {},
      imgUrl: '',
      progress: 0,
      blogTitle: '',
      blogDescription: '',
      blogLink: '',
      blogData: []
    }
    this.onFilechange = this.onFilechange.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }
componentDidMount = () =>{
  this.fetchBlogData();
}
  fetchBlogData = () => {
    console.log('called');
    const databaseRef = fire.database().ref('blog');
    databaseRef.on('value', (snapshot) => {
     
     const dd = Object.values(snapshot.val()); //for change objects to array of object
      console.log(dd, 'dd')
      let newData = [];
      for (let d of dd) {
        newData.push({
          id: d.blog_id,
          title: d.blog_title,
          description: d.blog_description,
          link: d.blog_link,
          imgpath: d.blog_img,
        })
      }

      this.setState({
        blogData: newData
      })
    })
  }
  onChangeHandle = e => {
    e.preventDefault();
    // console.log("changes", e);
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  onFilechange = e => {

    const uploadImg = e.target.files[0];
    this.setState(() => ({ uploadImg }));
    // const reader = new FileReader();
    // reader.onloadend( r => {
    //   this.setState({
    //     uploadImg: e.target.files[0].name,
    //     imgUrl: reader.result
    //   })
    // })

  }
  onUpload = () => {
    const uid = fire.database().ref().child('bolg').push().key;
    const { uploadImg } = this.state;
    const fileUploaded = storage.ref(`blog/${uploadImg.name}`).put(uploadImg);
    fileUploaded.on('state_changed', (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({ progress });
    }, (error) => {
      console.log(error)
    }, () => {
      storage.ref('blog').child(uploadImg.name).getDownloadURL().then(imgUrl => {
        this.setState({ imgUrl });
        let data = {
          blog_id: uid,
          blog_title: this.state.blogTitle,
          blog_description: this.state.blogDescription,
          blog_link: this.state.blogLink,
          blog_img: imgUrl
        }

        let updates = {};
        updates[`/blog/${uid}`] = data;
        fire.database().ref().update(updates);
        this.fetchBlogData();
      })
    })
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>Blogdata form</Col>
            <Col xs={12} >
              <img style={{ height: '75px' }} src={this.state.imgUrl} />
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Blog title</Form.Label>
                  <Form.Control
                    type="text"
                    name="blogTitle"
                    placeholder="Blog title"
                    onChange={this.onChangeHandle}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Blog Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="blogDescription"
                    placeholder="blog Description"
                    onChange={this.onChangeHandle}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Blog Link</Form.Label>
                  <Form.Control
                    type="text"
                    name="blogLink"
                    placeholder="blog Link"
                    onChange={this.onChangeHandle}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="file"
                    name="uploadImg"

                    onChange={this.onFilechange}
                  />
                </Form.Group>
                <Button variant="outline-success" onClick={this.onUpload}>
                  Save Blog
                </Button>
              </Form>
            </Col>
            <Col xs={12} >
              <ProgressBar animated striped variant="success" now={this.state.progress} label={`${this.state.progress}%`} />
            </Col>

            <Col xs={12} >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Blog Tiele</th>
                    <th>
                       description</th>
                    <th>link</th>
                    <th>image</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.blogData.map((data, i) => {
                    return (
                      <tr key={data.id}>
                      <td>
                        {i + 1}
                      </td>
                      <td>
                        {data.title}
                      </td>
                      <td>{data.description}</td>
                      <td>{data.link}</td>
                      <td>
                      <img style={{ height: '35px' }} src={data.imgpath} />
                      </td>
                    </tr>
                    )
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

export default Blogdata;
