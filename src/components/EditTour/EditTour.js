import React, { Component } from 'react';
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

  componentDidMount() {
    axios.get(`/api/tour/${this.props.match.params.tourId}`).then(res => {
      console.log(res)
      // this console log shows that res is an object, data is an array of objects, and data is from postgress
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
        <button onClick={() => { this.updateTrip() }}>Save</button>
      </div>
    );
  }
}

export default EditTour;