import React, { Component } from "react";
import LandingBg from "../images/Landing-page-Backround.svg";
import PlayIcon from "../images/play-icon.svg";
import LandingIllustration from "../images/Landing-page- illustration.svg";
import Landing2DGraphics from "../images/Landing-2D-Graphics.svg";
import LandingIllustration2 from "../images/Landing-illustration-2.svg";
import LatestWork from "../images/Latest-work.svg";
import SubscribIllustration from "../images/subscrib-illustration.svg";
import { Container, Row, Col, Button, Link, InputGroup, FormControl } from "react-bootstrap";
import "./home.scss";
import CreativeWork1 from "../images/Creative-work1.svg";
import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm.js';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      profile: [
        {
          name: "Set Medeling",
          title: "3D Graphics",
          url: LatestWork,
          type: "2D",
          year: "2019"
        },
        {
          name: "blockchain one",
          title: "3D Graphics",
          url: LatestWork,
          type: "2D",
          year: "2019"
        },
        {
          name: "blockchain 2",
          title: "3D Graphics",
          url: LatestWork,
          type: "2D",
          year: "2019"
        },
        {
          name: "ICO",
          title: "3D Graphics",
          url: LatestWork,
          type: "3D",
          year: "2019"
        },
        {
          name: "ICO 1",
          title: "3D Graphics",
          url: LatestWork,
          type: "3D",
          year: "2019"
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "VFX",
          year: "2019"
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "VFX",
          year: "2019",
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "App",
          year: "2019"
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "App",
          year: "2019"
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "Website",
          year: "2019"
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "Website",
          year: "2019"
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "Interaction",
          year: "2019"
        }
      ],
      newData: [
        {
          name: "Set Medeling",
          title: "3D Graphics",
          url: LatestWork,
          type: "2D",
          year: "2019"
        },
        {
          name: "blockchain one",
          title: "3D Graphics",
          url: LatestWork,
          type: "2D",
          year: "2019"
        },
        {
          name: "blockchain 2",
          title: "3D Graphics",
          url: LatestWork,
          type: "2D",
          year: "2019"
        },
        {
          name: "ICO",
          title: "3D Graphics",
          url: LatestWork,
          type: "3D",
          year: "2019"
        },
        {
          name: "ICO 1",
          title: "3D Graphics",
          url: LatestWork,
          type: "3D",
          year: "2019"
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "VFX",
          year: "2019"
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "VFX",
          year: "2019"
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "App",
          year: "2019"
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "App",
          year: "2019"
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "Website",
          year: "2019"
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "Website",
          year: "2019"
        },
        {
          name: "act",
          title: "3D Graphics",
          url: LatestWork,
          type: "Interaction",
          year: "2019"
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
    const params = {
      // Provide Swiper class as props
      Swiper,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 5,
        depth: 10,
        modifier: 4,
        slideShadows: true
      },
      // Add modules you need
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination',
        // type: 'bullets',
        // clickable: true
      },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev'
      // },
      // spaceBetween: 30
    }
    return (
      <>
        <Row>
          <Col className="landing d-flex align-items-center" style={{ backgroundImage: `url(${LandingBg})` }}>
            <div className="landing-ill"><img src={LandingIllustration} /></div>
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={6} className="pl-0">
                    <h1>We Provide<span>Top Quality</span>&ensp;Services</h1>
                    <p>Perfect place for your perfect business.</p>
                    <a href=""><img src={PlayIcon} />Watch video</a>

                  </Col>
                </Row>
              </Col>
            </Container>i
          </Col>
        </Row>
        <Row>
          <Col className="middle-section">
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className="text-center title-sec">
                    <p>We're offering these popular Services</p>
                    <h2>We give life to your imagination!!!</h2>
                  </Col>
                  <Col xs={12} className="inner-sec">
                    <Row>
                      <Col xs={4}>
                        <div className="grap-sec">
                          <h3>2D Graphics</h3>
                          <p>We offer premium quality graphic design and 2D all services to our clients at affordable/reasonable cost.</p>
                          <a href="">Read More</a>
                          <figure className="img-grap">
                            <img src={Landing2DGraphics} alt="{Landing2DGraphics}" />
                          </figure>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="grap-sec">
                          <h3>2D Graphics</h3>
                          <p>We offer premium quality graphic design and 2D all services to our clients at affordable/reasonable cost.</p>
                          <a href="">Read More</a>
                          <figure className="img-grap">
                            <img src={Landing2DGraphics} alt="{Landing2DGraphics}" />
                          </figure>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="grap-sec">
                          <h3>2D Graphics</h3>
                          <p>We offer premium quality graphic design and 2D all services to our clients at affordable/reasonable cost.</p>
                          <a href="">Read More</a>
                          <figure className="img-grap">
                            <img src={Landing2DGraphics} alt="{Landing2DGraphics}" />
                          </figure>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="grap-sec">
                          <h3>2D Graphics</h3>
                          <p>We offer premium quality graphic design and 2D all services to our clients at affordable/reasonable cost.</p>
                          <a href="">Read More</a>
                          <figure className="img-grap">
                            <img src={Landing2DGraphics} alt="{Landing2DGraphics}" />
                          </figure>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className="p-sec">
                    <p>We offer high quality output with the correct/perfect combination of design,
                      sound and effects that instantly capture your attention. Our exclusive range of
                      service includes Graphic designs, 2D and 3D animations, visual services and much more.
                      The service are delivered as per the clients need at economy cost.</p>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="sevice-sec " >
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={6} className="d-flex align-items-center pl-0">
                    <div className="">
                      <h2>Get ready for real time services</h2>
                      <p>Perfect place for your perfect business.</p>
                      <a href="">Quote Now</a>
                    </div>
                  </Col>
                  <Col xs={6} className="pr-0">
                    <figure className="img-grap">
                      <img src={LandingIllustration2} alt="{LandingIllustration2}" />
                    </figure>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="latest-work-sec " >
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className=" title-sec p-0">
                    <h2>Latest <span>Work</span></h2>
                    <p>We "XYZ" are specialized in understanding your needs and get the desired output/result
                      with great elegance. We developed creative designs for different business requirement within the
                      stipulated time period. We reply on quality work and excellent customer service.
                    </p>
                  </Col>
                  <Col xs={12} className="span-tap ">
                    <span
                      onClick={() => {
                        return this.onChoose("ALL");
                      }}
                    >
                      All
              </span>
                    <span
                      variant="outline-success"
                      onClick={() => {
                        return this.onChoose("2D");
                      }}
                    >
                      2D
              </span>
                    <span
                      variant="outline-success"
                      onClick={() => {
                        return this.onChoose("3D");
                      }}
                    >
                      3D
              </span>
                    <span
                      variant="outline-success"
                      onClick={() => {
                        return this.onChoose("VFX");
                      }}
                    >
                      VFX
              </span>
                    <span
                      variant="outline-success"
                      onClick={() => {
                        return this.onChoose("App");
                      }}
                    >
                      App
              </span>
                    <span
                      variant="outline-success"
                      onClick={() => {
                        return this.onChoose("Website");
                      }}
                    >
                      Website
              </span>
                    <span
                      variant="outline-success"
                      onClick={() => {
                        return this.onChoose("Interaction");

                      }}
                    >
                      Interaction
              </span>
                  </Col>
                  <Col xs={12} className="p-0 mt-3">
                    <Row>
                      {this.state.newData.map(d => {
                        return <Col xs={4} >
                          <div className="works-div mt-3 mb-3">
                            <figure className="works-img"><img src={d.url} /></figure>
                            <div className="works-info">
                              <p>{d.title}</p>
                              <h4>{d.name}<span className="float-right">{d.year}</span></h4>
                            </div>
                          </div>
                        </Col>;
                      })}
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="create-sec " >
            <Row>
              <Col xs={12}>
                <Row>
                  <div className="create-inner">
                    <figure className="img-create">
                      <img src={CreativeWork1} alt="{CreativeWork1}" />
                    </figure>
                    <figure className="img-create">
                      <img src={CreativeWork1} alt="{CreativeWork1}" />
                    </figure>
                    <figure className="img-create">
                      <img src={CreativeWork1} alt="{CreativeWork1}" />
                    </figure>
                    <figure className="img-create">
                      <img src={CreativeWork1} alt="{CreativeWork1}" />
                    </figure>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="create-sec " >
            <Row>
              <Col xs={12}>
                <Row>
                  {<ReactIdSwiperCustom {...params}>
                    <div><img src={LandingIllustration} alt="LandingIllustration" /></div>
                    <div><img src={LandingIllustration} alt="LandingIllustration" /></div>
                    <div><img src={LandingIllustration} alt="LandingIllustration" /></div>
                    <div><img src={LandingIllustration} alt="LandingIllustration" /></div>
                    <div><img src={LandingIllustration} alt="LandingIllustration" /></div>
                  </ReactIdSwiperCustom>}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="subscribe-sec " >
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={6} className="d-flex align-items-center pl-0">
                    <figure className="img-grap">
                      <img src={SubscribIllustration} alt="{SubscribIllustration}" />
                    </figure>
                  </Col>
                  <Col xs={6} className="d-flex align-items-center pr-0">
                    <div className="">
                      <h2>Get ready for real time services</h2>
                      <p>Perfect place for your perfect business.</p>
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder="Enter your e-mail"
                          aria-label="Enter your e-mail"
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                          <Button className="btn-subscribe">SUBSCRIBE</Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="latest-post-section">
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className="text-center title-sec">
                    <p>We're offering these popular Services</p>
                    <h2>We give life to your imagination!!!</h2>
                  </Col>
                  <Col xs={12} className="inner-sec">
                    <Row>
                      <Col xs={4}>
                        <div className="works-div mt-3 mb-3">
                          <figure className="img-grap">
                            <img src={Landing2DGraphics} alt="{Landing2DGraphics}" />
                          </figure>
                          <div className="works-info">
                            <h5>2D Graphics</h5>
                            <h3>Celebrating the Art, Craft and Business of Animation</h3>
                            <p>We offer premium quality graphic design and 2D all services to our clients at affordable/reasonable cost.</p>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="works-div mt-3 mb-3">
                          <figure className="img-grap">
                            <img src={Landing2DGraphics} alt="{Landing2DGraphics}" />
                          </figure>
                          <div className="works-info">
                            <h5>2D Graphics</h5>
                            <h3>Celebrating the Art, Craft and Business of Animation</h3>
                            <p>We offer premium quality graphic design and 2D all services to our clients at affordable/reasonable cost.</p>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="works-div mt-3 mb-3">
                          <figure className="img-grap">
                            <img src={Landing2DGraphics} alt="{Landing2DGraphics}" />
                          </figure>
                          <div className="works-info">
                            <h5>2D Graphics</h5>
                            <h3>Celebrating the Art, Craft and Business of Animation</h3>
                            <p>We offer premium quality graphic design and 2D all services to our clients at affordable/reasonable cost.</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
      </>
    );
  }

}

export default Home;
