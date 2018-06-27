import React, { Component } from 'react';
import { getUser } from "./../../ducks/reducer";
import axios from 'axios';
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


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
                <br />
                {trip.dates}
                <Grid>
                    <Row>
                        <Col xs={6} md={3}>
                        <Link to={"/tour/" + trip.id}>
                            <Thumbnail  alt="171x180" src={trip.trip_pic} />
                            </Link>
                        </Col>
                    </Row>
                </Grid>
            </div>

        })

        let { user_name, user_pic} = this.props.user;
        // console.log("this.state.trips ", this.state.trips)


        return (
            <div className="App">
                <h2>Welcome to your profile page, {user_name}!</h2>
                <hr />
                <div>
                    <h1>My Trips</h1>
                    <br />
                    <Grid>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image src={user_pic} circle responsive />
                            </Col>
                        </Row>
                    </Grid>
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

