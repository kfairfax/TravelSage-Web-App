import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import axios from 'axios';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      tourList: []
    }
  }

  componentDidMount() {
    this.getTrips();
  }

  getTrips() {
    axios.get('api/tours').then(res => {
      this.setState({ tourList: res.data })
    });
  }

  handleEditUpdate(id) {
   this.props.history.push('/edit/' + id);
   }

  handleDelete(id) {
    axios.delete('/api/tour/' + id).then(res => { window.location.reload() });
  }


  render() {
    const { tourList } = this.state;
    return (
      <div className="App">
        Dashboard
        {
          tourList.map((tour, i) => (
            <div key={i}>
            {/* put the key in the div so that i is unique to each button, otherwise, the key is not unique to each child component */}
              <Tour
                tour={tour} />
              <button onClick={() => { this.handleEditUpdate(tour.id) }}>Edit</button>
              <button onClick={() => { this.handleDelete(tour.id) }}>Delete</button>
              {/* use id and not tourId because we are getting this data directly from the database */}
            </div>
          ))
        }

      </div>
    );
  }
}

export default Dashboard;