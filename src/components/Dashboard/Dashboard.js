import React, { Component } from 'react';


class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      tripName: '',
      description: '',
      dates: '',
      price: '',
      tripPic: ''
    }
  }
    render() {
        return (
      <div className="App">
        Dashboard
      </div>
        );
    }
}

export default Dashboard;