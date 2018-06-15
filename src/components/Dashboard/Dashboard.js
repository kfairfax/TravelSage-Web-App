import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
    // this triggers a reload of the dashboard page as soon as a trip is deleted, without a redirect
  }


  render() {
    const { tourList } = this.state;
    return (
      <div className="App">
        Dashboard
        <br />
        <Link to='/create'>
          <button>Create Trip</button>
        </Link>
        <br />

        {
          tourList.map((tour, i) => (
            <div key={i}>
              {/* put the key in the div so that i is unique to each button, otherwise, the key is not unique to each child component */}
              <Tour
                tour={tour} />
              {/* map over the Edit and Delete buttons so that they appear for each individual trip */}
              <button onClick={() => { this.handleEditUpdate(tour.id) }}>Edit</button>
              <button onClick={() => { this.handleDelete(tour.id) }}>Delete</button>
              {/* edit and delete are tour specific, so it must be handled with the id parameter */}
              {/* use id and not tourId because we are getting this data directly from the database */}
            </div>
          ))
        }

      </div>
    );
  }
}

export default Dashboard;