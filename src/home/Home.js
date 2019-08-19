import React, { Component } from "react";
import LandingBg from "../images/Landing-page-Backround.svg";
import PlayIcon from "../images/play-icon.svg";
import LandingIllustration from "../images/subscrib-illustration.svg";
import Landing2DGraphics from "../images/Landing-2D-Graphics.svg";
import LandingIllustration2 from "../images/Landing-illustration-2.svg";
import LatestWork from "../images/Latest-work.svg";
import SubscribIllustration from "../images/subscrib-illustration.svg";
import User from "../images/user.jpg";
import php from "../images/php.png";
import atp from "../images/atp.png";
import teamviewer from "../images/teamviewer.png";
import {
  Container,
  Row,
  Col,
  Button,
  Link,
  InputGroup,
  FormControl,
  Form
} from "react-bootstrap";
import "./home.scss";
import CreativeWork1 from "../images/Creative-work1.svg";
import { Swiper, Navigation, Pagination } from "swiper/dist/js/swiper.esm.js";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import Slider from "react-slick";
import StarRatings from "react-star-ratings";
import fire from "../firebase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
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
      ],
      reviewData: [],
      clientsData: []
    };
    this.onChoose = this.onChoose.bind(this);
    
  }
 
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
    this.getReviewData();
    this.getClientData();
  }

  getReviewData = () => {
    const databaseRef = fire.database().ref("reviews");
    databaseRef.on("value", snapshot => {
      if (snapshot.val()) {
        const dd = Object.values(snapshot.val()); //for change objects to array of object
        console.log(dd, "review");

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
  getClientData = () => {
    const databaseRef = fire.database().ref("clients");
    databaseRef.on("value", snapshot => {
      if (snapshot.val()) {
        let dd = Object.values(snapshot.val());
        let newData = [];
        for (let d of dd) {
          newData.push({
            id: d.id,
            clientName: d.clientName,
            imgLink: d.imgUrl
          });
        }
        this.setState({
          clientsData: newData
        });
      }
    });
  };
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
  // changeRating( newRating, name ) {
  //   this.setState({
  //     rating: "5"
  //   });
  // }
  render() {
    const settings1 = {
      className: "multiple-items",
      dots: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 500
    };
    const settings = {
      className: "multiple-items",
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const params = {
      // Provide Swiper class as props
      Swiper,
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
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
        el: ".swiper-pagination"
        // type: 'bullets',
        // clickable: true
      }
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev'
      // },
      // spaceBetween: 30
    };
    return (
      <>
        <Row>
          <Col
            className="landing d-flex align-items-center"
            style={{ backgroundImage: `url(${LandingBg})` }}
          >
            <div className="landing-ill">
              <img src={LandingIllustration} />
            </div>
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={6} className="pl-0">
                    <h1>
                      We Provide<span>Top Quality</span>&ensp;Services
                    </h1>
                    <p>Perfect place for your perfect business.</p>
                    <a href="">
                      <img src={PlayIcon} />
                      Watch video
                    </a>
                  </Col>
                </Row>
              </Col>
            </Container>
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
                          <p>
                            We offer premium quality graphic design and 2D all
                            services to our clients at affordable/reasonable
                            cost.
                          </p>
                          <a href="">Read More</a>
                          <figure className="img-grap">
                            <img
                              src={Landing2DGraphics}
                              alt={Landing2DGraphics}
                            />
                          </figure>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="grap-sec">
                          <h3>2D Graphics</h3>
                          <p>
                            We offer premium quality graphic design and 2D all
                            services to our clients at affordable/reasonable
                            cost.
                          </p>
                          <a href="">Read More</a>
                          <figure className="img-grap">
                            <img
                              src={Landing2DGraphics}
                              alt={Landing2DGraphics}
                            />
                          </figure>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="grap-sec">
                          <h3>2D Graphics</h3>
                          <p>
                            We offer premium quality graphic design and 2D all
                            services to our clients at affordable/reasonable
                            cost.
                          </p>
                          <a href="">Read More</a>
                          <figure className="img-grap">
                            <img
                              src={Landing2DGraphics}
                              alt={Landing2DGraphics}
                            />
                          </figure>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="grap-sec">
                          <h3>2D Graphics</h3>
                          <p>
                            We offer premium quality graphic design and 2D all
                            services to our clients at affordable/reasonable
                            cost.
                          </p>
                          <a href="">Read More</a>
                          <figure className="img-grap">
                            <img
                              src={Landing2DGraphics}
                              alt={Landing2DGraphics}
                            />
                          </figure>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className="p-sec">
                    <p>
                      We offer high quality output with the correct/perfect
                      combination of design, sound and effects that instantly
                      capture your attention. Our exclusive range of service
                      includes Graphic designs, 2D and 3D animations, visual
                      services and much more. The service are delivered as per
                      the clients need at economy cost.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="sevice-sec ">
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
                      <img
                        src={LandingIllustration2}
                        alt={LandingIllustration2}
                      />
                    </figure>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="latest-work-sec ">
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className=" title-sec p-0">
                    <h2>
                      Latest <span>Work</span>
                    </h2>
                    <p>
                      We "XYZ" are specialized in understanding your needs and
                      get the desired output/result with great elegance. We
                      developed creative designs for different business
                      requirement within the stipulated time period. We reply on
                      quality work and excellent customer service.
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
                        return (
                          <Col xs={4}>
                            <div className="works-div mt-3 mb-3">
                              <figure className="works-img">
                                <img src={d.url} />
                              </figure>
                              <div className="works-info">
                                <p>{d.title}</p>
                                <h4>
                                  {d.name}
                                  <span className="float-right">{d.year}</span>
                                </h4>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                    <Row>
                      <Col xs={12} className="text-center">
                        <span className="view-project">View All Projects</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="create-sec ">
            <Col xs={12} className="">
              <Slider {...settings}>
                <figure className="img-create">
                  <img src={CreativeWork1} alt={CreativeWork1} />
                </figure>
                <figure className="img-create">
                  <img src={CreativeWork1} alt={CreativeWork1} />
                </figure>
                <figure className="img-create">
                  <img src={CreativeWork1} alt={CreativeWork1} />
                </figure>
                <figure className="img-create">
                  <img src={CreativeWork1} alt={CreativeWork1} />
                </figure>
                <figure className="img-create">
                  <img src={CreativeWork1} alt={CreativeWork1} />
                </figure>
                <figure className="img-create">
                  <img src={CreativeWork1} alt={CreativeWork1} />
                </figure>
              </Slider>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className="customer-review-section">
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className="text-center title-sec">
                    <h2>
                      Our <span>customers review</span>
                    </h2>
                    <p>
                      Customer Review Sites for Collecting Business & Product
                      Reviews
                    </p>
                  </Col>
                  <Col xs={12} className="inner-sec">
                    <Row>
                      <Col xs={12} sm={11} className="review-inner mx-auto">
                        <Slider
                          asNavFor={this.state.nav1}
                          ref={slider => (this.slider2 = slider)}
                          slidesToShow={3}
                          swipeToSlide={true}
                          focusOnSelect={true}
                          centerMode={true}
                        >
                          {this.state.reviewData.map(data => {
                            return (
                              <div>
                                <figure className="img-create">
                                  <img
                                    src={data.imgUrl}
                                    alt={data.customer_name}
                                  />
                                </figure>
                              </div>
                            );
                          })}
                        </Slider>
                        <Slider
                          asNavFor={this.state.nav2}
                          ref={slider => (this.slider1 = slider)}
                        >
                          {this.state.reviewData.map(data => {
                            return (
                              <div className="review-info">
                                <h3>{data.customer_name}</h3>
                                <h5>{data.customer_role}</h5>
                                {/* <StarRatings
                                      rating={data.rating}
                                      starRatedColor="Blue"
                                      changeRating={this.changeRating}
                                      numberOfStars={5}
                                      name="rating"
                                      starDimension="20px"
                                      starSpacing="5px"
                                    /> */}
                                <p>{data.description}</p>
                              </div>
                            );
                          })}
                        </Slider>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} className="text-center title-sec">
                    <h2>
                      Our <span>Valuable Clients</span>
                    </h2>
                  </Col>
                  <Col xs={12} className="inner-sec">
                    <Slider {...settings1}>
                      {this.state.clientsData.map(data => {
                        return (
                          <figure key={data.id} className="img-client">
                            <img
                              src={data.imgLink}
                              alt={data.clientName}
                              title={data.clientName}
                            />
                          </figure>
                        );
                      })}
                      {/* <figure className="img-client">
                        <img src={teamviewer} alt="{teamviewer}" />
                      </figure>
                      <figure className="img-client">
                        <img src={atp} alt="{atp}" />
                      </figure>
                      <figure className="img-client">
                        <img src={teamviewer} alt="{teamviewer}" />
                      </figure>
                      <figure className="img-client">
                        <img src={atp} alt="{atp}" />
                      </figure>
                      <figure className="img-client">
                        <img src={teamviewer} alt="{teamviewer}" />
                      </figure>
                      <figure className="img-client">
                        <img src={atp} alt="{atp}" />
                      </figure>
                      <figure className="img-client">
                        <img src={teamviewer} alt="{teamviewer}" />
                      </figure>
                      <figure className="img-client">
                        <img src={atp} alt="{atp}" />
                      </figure> */}
                    </Slider>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="subscribe-sec ">
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={6} className="d-flex align-items-center pl-0">
                    <figure className="img-grap">
                      <img
                        src={SubscribIllustration}
                        alt={SubscribIllustration}
                      />
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
                            <img
                              src={Landing2DGraphics}
                              alt={Landing2DGraphics}
                            />
                          </figure>
                          <div className="works-info">
                            <h5>2D Graphics</h5>
                            <h3>
                              Celebrating the Art, Craft and Business of
                              Animation
                            </h3>
                            <p>
                              We offer premium quality graphic design and 2D all
                              services to our clients at affordable/reasonable
                              cost.
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="works-div mt-3 mb-3">
                          <figure className="img-grap">
                            <img
                              src={Landing2DGraphics}
                              alt={Landing2DGraphics}
                            />
                          </figure>
                          <div className="works-info">
                            <h5>2D Graphics</h5>
                            <h3>
                              Celebrating the Art, Craft and Business of
                              Animation
                            </h3>
                            <p>
                              We offer premium quality graphic design and 2D all
                              services to our clients at affordable/reasonable
                              cost.
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="works-div mt-3 mb-3">
                          <figure className="img-grap">
                            <img
                              src={Landing2DGraphics}
                              alt={Landing2DGraphics}
                            />
                          </figure>
                          <div className="works-info">
                            <h5>2D Graphics</h5>
                            <h3>
                              Celebrating the Art, Craft and Business of
                              Animation
                            </h3>
                            <p>
                              We offer premium quality graphic design and 2D all
                              services to our clients at affordable/reasonable
                              cost.
                            </p>
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
