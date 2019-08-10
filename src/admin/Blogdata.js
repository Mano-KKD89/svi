import React, { Component } from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { storage } from '../firebase';
class Blogdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadImg: {},
      imgUrl: '',
      progress: 0
    }
    this.onFilechange = this.onFilechange.bind(this);
  }
  onFilechange = e => {
    // console.log(e.target.files[0]);
    // this.setState({
    //   uploadImg: e.target.files[0]
    // });
    const uploadImg = e.target.files[0];
    this.setState(() => ({ uploadImg }));
    // const reader = new FileReader();
    // reader.onloadend( r => {
    //   this.setState({
    //     uploadImg: e.target.files[0].name,
    //     imgUrl: reader.result
    //   })
    // })

    // reader.onload = function(r) {
    //   console.log(r.target.result)
    //   this.setState({
    //     uploadImg: e.target.files[0],
    //     imgUrl: r.target.result
    //   })
    // };

  }
  onUpload = () => {
    const { uploadImg } = this.state;
    const fileUploaded = storage.ref(`images/${uploadImg.name}`).put(uploadImg);
    fileUploaded.on('state_changed', (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({ progress });
    }, (error) => {
      console.log(error)
    }, () => {
      storage.ref('images').child(uploadImg.name).getDownloadURL().then(imgUrl => {
        this.setState({ imgUrl });
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
            </Col>
            <Col xs={12} >
            <ProgressBar animated  striped variant="success" now={this.state.progress} label={`${this.state.progress}%`} />
            </Col>
           
            <Col xs={12} >
            <input type="file" name="uploadImg" id="uploadImg" onChange={this.onFilechange} />
            <Button variant="outline-success" onClick={this.onUpload}>click</Button>
            </Col>
            
          </Row>
        </Container>
      </>
    );
  }
}

export default Blogdata;
