import React, { Component } from 'react';
import { getUser } from "./../../ducks/reducer";
import { connect } from "react-redux";
import axios from 'axios';

class Profile extends Component {
    constructor(){
        super();
        this.state={
            trips:[]
        }
    }

    componentDidMount() {
        this.props.getUser().then(()=>{ 
            
            axios.get(`/api/profile/${this.props.user.id}`).then(res=>{
            this.setState({trips: res.data});
         })});
    }

    render() {
        let { user_name, user_pic, auth_id } = this.props.user;
        console.log("this.state.trips contains the following info", this.state.trips)
        return (
            <div className="App">
                <h2>Profile</h2>
                <hr />
                <div>
                    <img src={user_pic} alt="" />
                    <p>Profile For: {user_name}</p>
                    <p>Profile Number: {auth_id}</p>
                    <p>Your Trips: {this.state.trips.id}</p>
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

