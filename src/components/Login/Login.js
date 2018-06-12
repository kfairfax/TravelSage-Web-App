import React, { Component } from 'react';


export default class Login extends Component {
  render() {
    return (
      <div className="App">

        <a href={process.env.REACT_APP_LOGIN} target='_blank'>
          <button>Login</button>
        </a>

      </div>
    );
  }
};


