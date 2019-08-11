import React, { Component } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import fire from '../firebase';
class Contactdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount = () => {
    this.fetchContactData();
  }
  fetchContactData = () => {
    const databaseRef = fire.database().ref('contacts');
    databaseRef.on('value', (snapshot) => {
      const info = Object.values(snapshot.val());
      let newData = [];
      for (let n of info) {
        newData.push({
          id: n.id,
          name: n.name,
          address: n.address,
          subject: n.subject,
          message: n.message,
          contactNo: n.contactNo,
          admin_read: n.admin_read
        })
      }
      this.setState({
        data: newData
      })
    })
  }

  markAsRead = val => {
    console.log(val)
    let currentStatus = val.admin_read ? false : true;
    const data = {
      id: val.id,
      name: val.name,
      address: val.address,
      subject: val.subject,
      message: val.message,
      contactNo: val.contactNo,
      admin_read: currentStatus
    }
    let updates = {};
    updates[`/contacts/${val.id}`] = data;
    fire.database().ref().update(updates);
    this.fetchContactData();
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>Contactdata form</Col>
            <Col xs={12} >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>
                      subject</th>
                    <th>contactNo</th>
                    <th>address</th>

                    <th>message</th>
                    <th>admin_read</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((data, i) => {
                    return (
                      <tr key={data.id}>
                        <td>
                          {i + 1}
                        </td>
                        <td>
                          {data.name}
                        </td>
                        <td>{data.subject}</td>
                        <td>{data.contactNo}</td>
                        <td>{data.address}</td>

                        <td>{data.message}</td>
                        <td>{data.admin_read === false ? 'not read' : 'read'}</td>
                        <td> <Button variant="outline-success" onClick={this.markAsRead.bind(this, (data))} >{data.admin_read === false ? 'Mark as read' : 'Mark as unread'}</Button> </td>
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

export default Contactdata;
