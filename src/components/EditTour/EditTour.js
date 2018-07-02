import React, { Component } from 'react';
import axios from 'axios';
import { ControlLabel, Form, FormGroup, Col, FormControl, Button } from 'react-bootstrap';


class EditTour extends Component {
  constructor() {
    super();
    this.state = {
      tripName: '',
      description: '',
      dates: '',
      price: '',
      tripPic: ''
    }
  }

  componentDidMount() {
    axios.get(`/api/tour/${this.props.match.params.tourId}`).then(res => {
      // console.log(res)
      // this console log shows that res is an object, data is an array of objects, and data is coming from postgress
      this.setState({
        tripName: res.data[0].trip_name,
        description: res.data[0].description,
        dates: res.data[0].dates,
        price: res.data[0].price,
        tripPic: res.data[0].trip_pic
      })
    })
  }

  updateTrip() {
    axios.put(`/api/tour/${this.props.match.params.tourId}`, {
      trip_name: this.state.tripName,
      description: this.state.description,
      dates: this.state.dates,
      price: this.state.price,
      trip_pic: this.state.tripPic
    }).then(res => {
      this.props.history.push('/dashboard')
    }
    )
  }

  handleNameEdit(val) {
    this.setState({ tripName: val });
  }

  handleDescriptionEdit(val) {
    this.setState({ description: val });
  }

  handleDatesEdit(val) {
    this.setState({ dates: val });
  }

  handlePriceEdit(val) {
    this.setState({ price: val });
  }

  handleTripPicEdit(val) {
    this.setState({ tripPic: val });
  }


  render() {
    const { tripName, description, dates, price, tripPic } = this.state;
    return (
      <div className="editTourContainer">
        <h3>EditTour</h3>
        <div className="editTourBody">
          <Form horizontal>
            <FormGroup>
              <Col sm={3}>
                <p className="text-right">
                  <ControlLabel>Trip Name</ControlLabel>
                </p>
              </Col>
              <Col sm={9}>
                <FormControl value={tripName} onChange={(e) => { this.handleNameChange(e.target.value) }} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={3} className="text-right">
                <p className="text-right">
                  <ControlLabel>Description</ControlLabel>
                </p>
              </Col>
              <Col sm={9}>
                <FormControl value={description} onChange={(e) => { this.handleNameChange(e.target.value) }} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={3}>
                <p className="text-right">
                  <ControlLabel>Dates</ControlLabel>
                </p>
              </Col>
              <Col sm={9}>
                <FormControl value={dates} onChange={(e) => { this.handleNameChange(e.target.value) }} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={3}>
                <p className="text-right">
                  <ControlLabel>Price</ControlLabel>
                </p>
              </Col>
              <Col sm={9}>
                <FormControl value={price} onChange={(e) => { this.handleNameChange(e.target.value) }} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={3}>
                <p className="text-right">
                  <ControlLabel>Trip Image</ControlLabel>
                </p>
              </Col>
              <Col sm={9}>
                <FormControl value={tripPic} onChange={(e) => { this.handleNameChange(e.target.value) }} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="button" onClick={() => { this.updateTrip() }}>Save</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default EditTour;