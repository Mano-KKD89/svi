import React, { Component } from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import fire from '../firebase';
import "./blog.scss";
class Blog extends Component {   
  
  constructor(props) {
    super(props);
    this.state = {
      blogData: []
    }
  }
  componentDidMount = () => {
    const databaseRef = fire.database().ref('blog');
    databaseRef.on('value', (snapshot) => {
      if (snapshot.val()) {
        const details = Object.values(snapshot.val());
        let newData = [];
        for (let d of details) {
          newData.push({
            id: d.blog_id,
            title: d.blog_title,
            description: d.blog_description,
            link: d.blog_link,
            category: d.blog_category,
            imgpath: d.blog_img,
          })
        }
        this.setState({
          blogData: newData,
         
        })
      }
    })
  }
  render() {
    return (
      <>
        <Row>
            <Col className="latest-post-section">
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className="text-center title-sec">
                    <p>We're offering these popular Services</p>
                    <h2>Blog</h2>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} className="inner-sec">
                <Row>
                  {this.state.blogData.length ? (
                    <>
                      {this.state.blogData.map(data => {
                        return (
                          <Col xs={4}>
                            <div key={data.id} className="works-div mt-3 mb-3">
                              <figure className="img-grap">
                                <img src={data.imgpath} alt={data.category} title={data.category} />
                              </figure>
                              <div className="works-info">
                                <h5>{data.category}</h5>
                                <h3>{data.title}</h3>
                                <p>{data.description.slice(0, 120)}</p>                               
                              </div>
                            </div>
                          </Col>
                        )
                      })}
                    </>
                  ) : null}
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>

      </>
    );
  }
}

export default Blog;
