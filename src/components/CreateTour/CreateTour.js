import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ControlLabel, Form, FormGroup, Col, FormControl, Button } from 'react-bootstrap';

class CreateTour extends Component {
  constructor() {
    super();
    this.state = {
      tripName: '',
      description: '',
      dates: '',
      price: '',
      tripPic: ''
    }
    this.createTrip = this.createTrip.bind(this);
  }

  createTrip() {
    axios.post('/api/tour', {
      trip_name: this.state.tripName,
      description: this.state.description,
      dates: this.state.dates,
      price: this.state.price,
      trip_pic: this.state.tripPic
    }).then(res => {
      this.props.history.push('/tours')
    })
  }

  handleNameChange(val) {
    this.setState({ tripName: val });
  }

  handleDescriptionChange(val) {
    this.setState({ description: val });
  }

  handleDatesChange(val) {
    this.setState({ dates: val });
  }

  handlePriceChange(val) {
    this.setState({ price: val });
  }

  handleTripPicChange(val) {
    this.setState({ tripPic: val });
  }

  render() {
    const { tripName, description, dates, price, tripPic } = this.state;
    return (
      <div className="App" class="row">
        <div class="col-md-4">

          <h3>CreateTour</h3>
          <Form horizontal>
            <FormGroup>
              <Col componentClass="inputLabel" sm={4}>
                <p class="text-right">
                  <ControlLabel>Trip Name</ControlLabel>
                </p>
              </Col>
              <Col sm={8}>
                <FormControl value={tripName} onChange={(e) => { this.handleNameChange(e.target.value) }} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass="inputLabel" sm={4} class="text-right">
                <p class="text-right">
                  <ControlLabel>Description</ControlLabel>
                </p>
              </Col>
              <Col sm={8}>
                <FormControl value={description} onChange={(e) => { this.handleNameChange(e.target.value) }} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass="inputLabel" sm={4}>
                <p class="text-right">
                  <ControlLabel>Dates</ControlLabel>
                </p>
              </Col>
              <Col sm={8}>
                <FormControl value={dates} onChange={(e) => { this.handleNameChange(e.target.value) }} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass="inputLabel" sm={4}>
                <p class="text-right">
                  <ControlLabel>Price</ControlLabel>
                </p>
              </Col>
              <Col sm={8}>
                <FormControl value={price} onChange={(e) => { this.handleNameChange(e.target.value) }} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass="inputLabel" sm={4}>
                <p class="text-right">
                  <ControlLabel>Trip Image</ControlLabel>
                </p>
              </Col>
              <Col sm={8}>
                <FormControl value={tripPic} onChange={(e) => { this.handleNameChange(e.target.value) }} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="button" onClick={() => { this.createTrip() }}>Create</Button>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Link to='/dashboard'>
                  <Button type="button">Back to Edit</Button>
                </Link>
              </Col>
            </FormGroup>

          </Form>
        </div>
      </div>
    );
  }
}

export default CreateTour;