import React, { Component } from 'react';
import axios from 'axios';

class TourDetails extends Component {
    constructor() {
        super();
        this.state = {
            tour: {
                trip_pic: '',
                description: '',
                dates: '',
                price: ''
            }
        }
    }


    componentDidMount() {
        axios.get(`/api/tour/${this.props.match.params.tourId}`).then(res => {
            // console.log(res.data);
            this.setState({ tour: res.data[0] })
        })
    }

    render() {
    // console.log(this.props)


        const style = {
            width: '400px',
            height: '250px'
        };

        const { tour } = this.state;
        return (
            <div className="App">
                <p>{tour.trip_name}</p>
                <img style={style} src={tour.trip_pic} alt='' />
                <p>{tour.description}</p>
                <p>{tour.dates}</p>
                <p>{tour.price}</p>

                <button>Join This Tour!</button>
            </div>
        );
    }
}

export default TourDetails;

