import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class TourDetails extends Component {
    constructor() {
        super();
        this.state = {
            tour: {
                trip_pic: '',
                description: '',
                dates: '',
                price: ''
            },
            userId: '',
            weather: ''
        }
    }


    componentDidMount() {
        const APIKEY = process.env.REACT_APP_WEATHER_APIKEY;
        // this allows access fo the API key in the front end without exposing the key

        axios.get(`/api/tour/${this.props.match.params.tourId}`).then(res => {
            this.setState({ tour: res.data[0] })
            axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + res.data[0].trip_name + '&appid=' + APIKEY).then(res => {
                const temp = ((res.data.main.temp - 273) * 1.8) + 32;
                this.setState({ weather: temp.toFixed(1) })
                // the.toFixed(1) specifies that the temperature will be displayed to contain only one decimal place
                // the weather axios get call has to be nested in the api/tour get call because we want access to the city name before we load the weather for that city name and because they are asynchronous calls
            });
        });

        this.props.getUser().then(() => {
            this.setState({ userId: this.props.user.id })
        });

    }

    joinTrip() {
        // console.log(this.props.match.params.tourId)
        axios.post('/api/join', {
            tourId: this.props.match.params.tourId,
            userId: this.state.userId
        })
    }

    render() {

        const { tour, weather } = this.state;
        return (
            <div className="tourDetailContainer">
                <div className="row">
                        <h3>{tour.trip_name}</h3>
<br/>
                    <div className="col-md-6">
                        <div className="tourDetailImageContainer">
                            <img className="tourDetailImage" src={tour.trip_pic} alt='' />
                        </div>
                        <Link to={{ pathname: '/checkout', query: { quantity: tour.price } }}>
                            <Button onClick={() => this.joinTrip()}>Join This Tour!</Button>
                        </Link>
                    </div>

                    <div className="tourRight col-md-6">
                        <div className="detailContainer">
                            <span>Trip Dates</span>
                            <p>{tour.dates}</p>
                        </div>
                        <div className="detailContainer">
                            <span>Trip Price</span>
                            <p>${tour.price}</p>
                        </div>

                        <div className="detailContainer">
                            <span>Current Weather</span>
                            <p>{weather}&#8457;</p>
                        </div>

                        <div className="detailContainer">
                            <span>Trip Description</span>
                            <p>{tour.description}</p>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}


export default connect(mapStateToProps, { getUser })(TourDetails);



