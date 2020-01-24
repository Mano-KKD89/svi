import React, { Component } from 'react';
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
  import LatestWork from "../images/Latest-work.svg";
  import fire from "../firebase";
import { async } from 'q';
class LatestWorkComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            // profile: [
            //     {
            //       name: "Set Medeling",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "2D",
            //       year: "2019"
            //     },
            //     {
            //       name: "blockchain one",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "2D",
            //       year: "2019"
            //     },
            //     {
            //       name: "blockchain 2",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "2D",
            //       year: "2019"
            //     },
            //     {
            //       name: "ICO",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "3D",
            //       year: "2019"
            //     },
            //     {
            //       name: "ICO 1",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "3D",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "VFX",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "VFX",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "APP",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "APP",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "Website",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "Website",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "Interaction",
            //       year: "2019"
            //     }
            //   ],
            // newData: [
            //     {
            //       name: "Set Medeling",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "2D",
            //       year: "2019"
            //     },
            //     {
            //       name: "blockchain one",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "2D",
            //       year: "2019"
            //     },
            //     {
            //       name: "blockchain 2",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "2D",
            //       year: "2019"
            //     },
            //     {
            //       name: "ICO",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "3D",
            //       year: "2019"
            //     },
            //     {
            //       name: "ICO 1",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "3D",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "VFX",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "VFX",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "APP",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "APP",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "Website",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "Website",
            //       year: "2019"
            //     },
            //     {
            //       name: "act",
            //       title: "3D Graphics",
            //       url: LatestWork,
            //       type: "Interaction",
            //       year: "2019"
            //     }
            //   ],    
              workData: [],
              newData: [],
              typeArry: []
        }

       
    }

async componentDidMount() {
    await this.getData();
}
    getData =  () => {
        const databaseRef = fire.database().ref("works");
        databaseRef.on("value", snapshot => {
          if (snapshot.val()) {
            const dd = Object.values(snapshot.val()); //for change objects to array of object
            console.log(dd, "works");
    
            let newData = [];
            let typeArry = [];
            let unique = [];
            for (let d of dd) {
              newData.push({
                work_id: d.id,
                name: d.projectName,
                url: d.projectImg,
                type: d.projectType,
                year: d.created_at,
              });
              typeArry.push(d.projectType)
            }
             unique = [...new Set(typeArry)];
            this.setState({
              workData: newData,
              newData,
              typeArry:unique
            });
          }
        });
      };

      getYear = date => {
          let d = new Date(date);
          let year = d.getFullYear();
          return year;
      }

    onChoose = type => {
      
        console.log(type, "type");
        if (type === "ALL") {
          this.setState({
            newData: this.state.workData
          });
        } else {
          const kk = this.state.workData.filter(d => {
            return d.type == type;
          });
          this.setState({
            newData: kk
          });
        }
      };
      handleClick = type => {
        var all = document.getElementById('ALL');
        // var twoD = document.getElementById('2D');
        var threeD = document.getElementById('3D');
        var vfx = document.getElementById('VFX');
        var app = document.getElementById('APP');
        var website = document.getElementById('Website');
        var Digital = document.getElementById('Digital');
        // var Photography = document.getElementById('Photography');
       
        if(type == 'ALL'){
          all.classList.add('activeWork');
        // if(twoD.classList.contains('activeWork')){
        //   twoD.classList.remove('activeWork');
        // }
          threeD.classList.remove('activeWork');
          vfx.classList.remove('activeWork');
          app.classList.remove('activeWork');
          website.classList.remove('activeWork');
          Digital.classList.remove('activeWork');
          // Photography.classList.remove('activeWork');
        } else if(type == '2D') {
          all.classList.remove('activeWork');
          // twoD.classList.add('activeWork');
          threeD.classList.remove('activeWork');
          vfx.classList.remove('activeWork');
          app.classList.remove('activeWork');
          website.classList.remove('activeWork');
          Digital.classList.remove('activeWork');
          // Photography.classList.remove('activeWork');
        }else if(type == '3D') {
          threeD.classList.add('activeWork');
          all.classList.remove('activeWork');
          // twoD.classList.remove('activeWork');
          vfx.classList.remove('activeWork');
          app.classList.remove('activeWork');
          website.classList.remove('activeWork');
          Digital.classList.remove('activeWork');
          // Photography.classList.remove('activeWork');
        }else if(type == 'VFX') {
          vfx.classList.add('activeWork');
          all.classList.remove('activeWork');
          // twoD.classList.remove('activeWork');
          threeD.classList.remove('activeWork');
          app.classList.remove('activeWork');
          website.classList.remove('activeWork');
          Digital.classList.remove('activeWork');
          // Photography.classList.remove('activeWork');
        }else if(type == 'APP') {
          app.classList.add('activeWork');
          all.classList.remove('activeWork');
          // twoD.classList.remove('activeWork');
          threeD.classList.remove('activeWork');
          vfx.classList.remove('activeWork');
          website.classList.remove('activeWork');
          Digital.classList.remove('activeWork');
          // Photography.classList.remove('activeWork');
        }else if(type == 'Website') {
          website.classList.add('activeWork');
          all.classList.remove('activeWork');
          // twoD.classList.remove('activeWork');
          threeD.classList.remove('activeWork');
          vfx.classList.remove('activeWork');
          app.classList.remove('activeWork');
          Digital.classList.remove('activeWork');
          // Photography.classList.remove('activeWork');
        }else if(type == 'Digital') {
          Digital.classList.add('activeWork');
          all.classList.remove('activeWork');
          // twoD.classList.remove('activeWork');
          threeD.classList.remove('activeWork');
          vfx.classList.remove('activeWork');
          app.classList.remove('activeWork');
          website.classList.remove('activeWork');
          // Photography.classList.remove('activeWork');
        } else{
          // Photography.classList.add('activeWork');
          all.classList.remove('activeWork');
          // twoD.classList.remove('activeWork');
          threeD.classList.remove('activeWork');
          vfx.classList.remove('activeWork');
          app.classList.remove('activeWork');
          website.classList.remove('activeWork');
          Digital.classList.remove('activeWork');
          
        }
      }
      getName = type => {

        switch(type) {
            case '2D':
            return '2D Graphics';
            case '3D':
            return '3D Graphics';
            case 'VFX':
            return 'VFX Graphics';
            case 'APP':
            return 'Mobile App';
            case 'Website':
            return 'Website';
            case 'Digital':
            return 'Digital Marketing';
            case 'Photography':
            return 'Photography';
            default:
            return ''
        }
      }


    render() {
        return (
            <Container>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className=" title-sec p-0">
                    <h2>
                      Latest <span>Work</span>
                    </h2>
                    <p>
                      We are specialized in understanding your needs and
                      get the desired output with great elegance. We
                      developed creative designs for different business
                      requirement within the stipulated time period. We reply on
                      quality work and excellent customer service.
                    </p>
                  </Col>
                  <Col xs={12} className="span-tap ">
                  <span id='ALL'
                      onClick={() => {
                        this.handleClick("ALL")
                        return this.onChoose("ALL");
                        
                      }}
                    >
                      All
                    </span>
{this.state.typeArry.map(type => {
              return (
                    <span
                    id={type}
                      onClick={() => {
                        this.handleClick(type)
                        return this.onChoose(type);
                      }}
                    >
                      {type}
                    </span>
    )
})}

                    {/* <span
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
                    </span> */}
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
                                {/* <p>{d.title}</p> */}
                                <p>{this.getName(d.type)}</p>
                                <h4>
                                  {d.name}
                                  <span className="float-right">{this.getYear(d.year)}</span>
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
        )
    }
}

export default LatestWorkComponent;