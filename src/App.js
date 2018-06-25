import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Navigation from './components/Navigation/Navigation';
import { withRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.location.pathname !== '/' ? (<Navigation />) : ""}

        {routes}

      </div>
    );
  }
}

export default withRouter(App);
