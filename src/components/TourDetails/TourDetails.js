import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import {Link} from 'react-router-dom';


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
        const APIKEY=process.env.REACT_APP_WEATHER_APIKEY;
        // this allows access fo the API key in the front end without exposing the key

        axios.get(`/api/tour/${this.props.match.params.tourId}`).then(res => {
            this.setState({ tour: res.data[0] })
            axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + res.data[0].trip_name + '&appid='+ APIKEY).then(res=>{
                const temp=((res.data.main.temp-273)*1.8)+32;
                this.setState({weather:temp.toFixed(1) })
                // the.toFixed(1) specifies that the temperature will be displayed to contain only one decimal place
                // the weather axios get call has to be nested in the api/tour get call because we want access to the city name before we load the weather for that city name and because they are asynchronous calls
            });
        });

        this.props.getUser().then(() => {
            this.setState({userId: this.props.user.id})
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
        // console.log(this.props)
        const style = {
            width: '400px',
            height: '250px'
        };

        const { tour, weather } = this.state;
        return (
            <div className="App">
                <p>{tour.trip_name}</p>
                <img style={style} src={tour.trip_pic} alt='' />
                <p>{tour.description}</p>
                <p>{tour.dates}</p>
                <p>${tour.price}</p>
                <p>It is currently {weather}&#8457; in {tour.trip_name}</p>


                   <Link to={ { pathname: '/checkout', query: { quantity: tour.price } } }>
                <button onClick={() => this.joinTrip()}>Join This Tour!</button>
                
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      user: state.user
    };
  }
  

export default connect(mapStateToProps, {getUser})(TourDetails);



