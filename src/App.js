import React, { Component } from 'react';
import './App.css';
import CreateTour from './components/CreateTour/CreateTour';
import Login from './components/Login/Login';
import Tours from './components/Tours/Tours';
import Tour from './components/Tour/Tour';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Dash from './components/Dash/Dash';
import EditTour from './components/EditTour/EditTour';


class App extends Component {
  render() {
    return (
      <div className="App">

      <Login/>
      <Tours/>
      <Tour/>
      <Profile/>
      <Nav/>
      <Dash/>
      <CreateTour/>
      <EditTour/>

      </div>
    );
  }
}

export default App;
