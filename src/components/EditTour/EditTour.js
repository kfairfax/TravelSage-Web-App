import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

{/* <Route path='/edit/:tourId' component={EditTour}/> */}


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


  updateTrip() {
    axios.put('/api/edit/'+ {
        tripName: this.state.trip_name,
        description: this.state.description,
        dates: this.state.dates,
        price: this.state.price,
        tripPic: this.state.tripPic
    }).then(res => this.props)
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
        EditTour
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
        <Link to='/dashboard'>
          <button onClick={()=>{this.updateTrip()}}>Save</button>
        </Link>
      </div>
    );
  }
}

export default EditTour;