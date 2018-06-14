import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Navigation from './components/Navigation/Navigation';



class App extends Component {

  render() {
    return (
      <div className="App">

      <Navigation/>

      {routes}
     
      </div>
    );
  }
}

export default App;
