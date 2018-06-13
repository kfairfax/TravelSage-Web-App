import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import axios from 'axios';

class Tours extends Component {
  constructor() {
    super();
    this.state = {
      tourList: []
    }
  }

  componentDidMount(){
    this.getTrips();
  }

  getTrips() {
    axios.get('api/tours').then(res => {
      this.setState({ tourList: res.data })
    });
  }


  render() {
    const { tourList } = this.state;
    return (
      <div className="App">
        Tours
        {
          tourList.map((tour, i) => (
            <Tour key={i}
              tour={tour} />
          ))
        }
      </div>
    );
  }
}

export default Tours;