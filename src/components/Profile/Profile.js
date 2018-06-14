import React, { Component } from 'react';
import { getUser } from "./../../ducks/reducer";
import { connect } from "react-redux";

class Profile extends Component {

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        console.log(this.props)
        let { user_name, user_pic, auth_id } = this.props.user;
        return (
            <div className="App">
                <h2>Profile</h2>
                <hr />
                <div>
                    <img src={user_pic} alt="" />
                    <p>Profile For: {user_name}</p>
                    <p>Profile Number: {auth_id}</p>
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

