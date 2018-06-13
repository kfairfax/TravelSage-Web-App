import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    this.createTrip=this.createTrip.bind(this);
  }

  createTrip() {
    axios.post('/api/tour', {
      trip_name: this.state.tripName,
      description: this.state.description,
      dates: this.state.dates,
      price: this.state.price,
      trip_pic: this.state.tripPic
    }).then(res => {
      console.log(res.data)
  //  how can I set these results on state and redirect to /details
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
      <div className="App">
        CreateTour
        <br />
        <input placeholder='Trip Name' value={tripName} onChange={(e) => { this.handleNameChange(e.target.value) }} />
        <br />
        <input placeholder='Description' value={description} onChange={(e) => { this.handleDescriptionChange(e.target.value) }} />
        <br />
        <input placeholder='Dates' value={dates} onChange={(e) => { this.handleDatesChange(e.target.value) }} />
        <br />
        <input placeholder='Price' value={price} onChange={(e) => { this.handlePriceChange(e.target.value) }} />
        <br />
        <input placeholder='Trip Image' value={tripPic} onChange={e => { this.handleTripPicChange(e.target.value) }} />
        <br />
        <button onClick={() => { this.createTrip() }}>Preview Trip</button>
        <br />
        <Link to='/dashboard'>
          <button on>Back to Edit</button>
        </Link>
      </div>
    );
  }
}

export default CreateTour;