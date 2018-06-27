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
            userId: ''
        }
    }


    componentDidMount() {
        axios.get(`/api/tour/${this.props.match.params.tourId}`).then(res => {
            // console.log(res.data);
            this.setState({ tour: res.data[0] })
        });
        this.props.getUser().then(() => {
            this.setState({userId: this.props.user.id})

        })

        // axios.get('http://api.openweathermap.org/data/2.5/weather?q=Dubrovnik&appid=APIKEY').then(res=>{
        //     console.log(((res.data.main.temp-273)*1.8)+32);
        //     // this.setState({weather: res.data.results})
        // })
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

        const { tour } = this.state;
        return (
            <div className="App">
                <p>{tour.trip_name}</p>
                <img style={style} src={tour.trip_pic} alt='' />
                <p>{tour.description}</p>
                <p>{tour.dates}</p>
                <p>{tour.price}</p>


                   <Link to={ { pathname: '/checkout', query: { quantity: tour.price } } }>
                <button onClick={() => this.joinTrip()}>Join This Tour!</button>
                
                </Link>

                 {/* {
          weather.map((trip_name,i) => (
            <h3 key={i}>The weather in {trip_name.name} is {trip_name.temp}</h3>
          ))
        } */}
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



