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
    const { tourList, tourParticipation } = this.state;

    let data = {
      labels: [

      ],
      datasets: [{
        data: [

        ],
        backgroundColor: [
          '#5680E9',
          '#84CEEB',
          '#5AB9EA',
          '#C1C8E4',
          '#8860D0',
          '#68D7CD'
        ],
        hoverBackgroundColor: [
          '#97B0EF',
          '#A7DAEE',
          '#99CEE8',
          '#E2E3E6',
          '#A891D2',
          '#92D9D3'
        ]
      }]
    };

    tourParticipation.map((tour) => {
      data.labels.push(tour.trip_name)
      data.datasets[0].data.push(tour.count)
    })

    return (
      <div>

        <div className="dashboardTourContainer">
            <h3>Trip Participation</h3>
              <div className="doughnutChartContainer" >
                <Doughnut data={data} />
             </div>
            <br/>

            <h1>Edit Your Trips Here!</h1>
            <br/>

              <Link to='/create'>
                <Button>Create Trip</Button>
              </Link>
            <br/>
        </div>
            <br/>

        <div className="toursBody">
          {
            tourList.map((tour, i) => (
              <div className="tourFlex" key={i}>
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

      </div>
    );
  }
}

export default Dashboard;