import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


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


  updateTrip(tourId) {
    axios.put('/api/edit/'+ {tourId}, {
        tripName: this.state.trip_name,
        description: this.state.description,
        dates: this.state.dates,
        price: this.state.price,
        tripPic: this.state.tripPic
    }).then(res=>this.setState({tour: res.data}))
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
      <div className="App">
        EditTour
        <br />
        <input placeholder='Trip Name' value={tripName} onChange={(e) => { this.handleNameEdit(e.target.value) }} />
        <br />
        <input placeholder='Description' value={description} onChange={(e) => { this.handleDescriptionEdit(e.target.value) }} />
        <br />
        <input placeholder='Dates' value={dates} onChange={(e) => { this.handleDatesEdit(e.target.value) }} />
        <br />
        <input placeholder='Price' value={price} onChange={(e) => { this.handlePriceEdit(e.target.value) }} />
        <br />
        <input placeholder='Trip Image' value={tripPic} onChange={e => { this.handleTripPicEdit(e.target.value) }} />
        <br />
        <Link to='/dashboard'>
          <button onClick={()=>{this.updateTrip()}}>Save</button>
        </Link>
      </div>
    );
  }
}

export default EditTour;