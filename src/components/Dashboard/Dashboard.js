import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Button } from 'react-bootstrap';



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

    const doughnutStyle = {
      height:'500px',
      width: '750px',
    }
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

        <div style ={doughnutStyle}>
          <h2>Trip Participation</h2>
          <Doughnut data={data} />
        </div>
        
        <h3>Edit Your Trips Here!</h3>
        <br />

        <Link to='/create'>
          <Button>Create Trip</Button>
        </Link>
        <br />

        {
          tourList.map((tour, i) => (
            <div key={i}>
              {/* put the key in the div so that i is unique to each button, otherwise, the key is not unique to each child component */}
              <Tour
                tour={tour} />
              {/* map over the Edit and Delete buttons so that they appear for each individual trip */}
              <Button onClick={() => { this.handleEditUpdate(tour.id) }}>Edit</Button>
              <Button onClick={() => { this.handleDelete(tour.id) }}>Delete</Button>
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