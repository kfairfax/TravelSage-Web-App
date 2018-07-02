import React, { Component } from 'react';
import { getUser } from "./../../ducks/reducer";
import axios from 'axios';
import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Profile extends Component {
    constructor() {
        super();
        this.state = {
            trips: [{}]
        }
    }

    componentDidMount() {
        this.props.getUser().then(() => {

            axios.get(`/api/profile/${this.props.user.id}`).then(res => {
                this.setState({ trips: res.data });
            })
        });
    }

    render() {
        const { trips } = this.state;

        let myTrips = trips.map((trip, i) => {
            // console.log("trip ", trip)
            return <div key={i}>


                <br />
                {trip.trip_name}
              <br/>
                {trip.dates}
               <br/>
                            <Link to={"/tour/" + trip.id}>
                                <Image className="profileImages" alt="171x180" src={trip.trip_pic} />
                            </Link>
                  
            </div>

        })

        let { user_name, user_pic } = this.props.user;
        // console.log("this.state.trips ", this.state.trips)


        return (
            <div className="profileContainer">
                <h2>{user_name}'s Profile</h2>
                <hr />
                <div>
                    <br />
                    <Image className="profilePic" src={user_pic} circle responsive />
                    <br/>
                    <br/>
                    <h1>My Trips</h1>
                    {myTrips}
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

export default connect(mapStateToProps, { getUser })(Profile);

