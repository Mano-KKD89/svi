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
      blogEditId: '',
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
   
   
    if(this.state.uploadImg != '' && this.state.uploadImg != null) {
      console.log(this.state.uploadImg, 'lskfjdslkfjksdlf')
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
        let newId = this.state.blogEditId != '' ? this.state.blogEditId : uid;
        console.log(newId, 'newid')
        let data = {
          blog_id: newId,
          blog_title: this.state.blogTitle,
          blog_description: this.state.blogDescription,
          blog_link: this.state.blogLink,
          blog_img: imgUrl
        }

        let updates = {};
        updates[`/blog/${newId}`] = data;
        fire.database().ref().update(updates);
        this.fetchBlogData();
      })
    })
  } else if(this.state.blogEditId) {
    console.log(this.state, 'edited')
    let data = {
      blog_id: this.state.blogEditId,
      blog_title: this.state.blogTitle,
      blog_description: this.state.blogDescription,
      blog_link: this.state.blogLink,
      blog_img:this.state.imgUrl
    }

    let updates = {};
    updates[`/blog/${this.state.blogEditId}`] = data;
    fire.database().ref().update(updates);
    this.fetchBlogData();
  }
  }
  onDelete = id => {
    fire.database().ref().child(`/blog/${id}`).remove();
    // this.fetchBlogData();
    window.location.reload();
  }
  onEdit = val => {
    this.setState({
      blogEditId: val.id,
      imgUrl: val.imgpath,
      blogTitle:  val.title,
      blogDescription:  val.description,
      blogLink:  val.link,
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
                    value={this.state.blogTitle}
                    onChange={this.onChangeHandle}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Blog Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="blogDescription"
                    placeholder="blog Description"
                    value={this.state.blogDescription}
                    onChange={this.onChangeHandle}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Blog Link</Form.Label>
                  <Form.Control
                    type="text"
                    name="blogLink"
                    placeholder="blog Link"
                    value={this.state.blogLink}
                    onChange={this.onChangeHandle}
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
                    <th>#id</th>
                    <th>Blog  Title</th>
                    <th>
                       description</th>
                    <th>link</th>
                    <th>image</th>
                    <th></th>
                    <th></th>
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
                      <td><Button variant="outline-danger" onClick={this.onDelete.bind(this, data.id)}>
                 Delete
                </Button></td>
                <td><Button variant="outline-warning" onClick={this.onEdit.bind(this, data)}>
                 Edit
                </Button></td>
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
