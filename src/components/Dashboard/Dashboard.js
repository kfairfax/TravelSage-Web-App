import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';



class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      tourList: [],
      tourParticipation: []
    }
  }

  componentDidMount() {
    this.getTrips();
    this.getTripParticipation();

  }

  getTripParticipation() {
    axios.get('/api/tour_participation').then(res => {
      // console.log(res.data)
      // this shows the format of the data coming back
      this.setState({ tourParticipation: res.data })
      // tourParticipation is an array because that is the required format for data in the Doughnut chart
    })
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
    const { tourList, tourParticipation } = this.state;

    let data = {
      labels: [

      ],
      datasets: [{
        data: [

        ],
        backgroundColor: [
          '#58594D',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#cc65fe',
          '#33C870'
        ],
        hoverBackgroundColor: [
          '#58594D',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#cc65fe',
          '#33C870'
        ]
      }]
    };

    tourParticipation.map((tour) => {
      data.labels.push(tour.trip_name)
      data.datasets[0].data.push(tour.count)
    })

    return (
      <div className="App">
        <div>
          <h2>Trip Participation</h2>
          <Doughnut data={data} />
        </div>
        <br />
        <h3>Edit Your Trips Here!</h3>
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