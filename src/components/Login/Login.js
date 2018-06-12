import React, { Component } from 'react';
import {Image} from 'react-bootstrap';


export default class Login extends Component {
  render() {
    return (
      <div className="App">

      <Image src="https://img.freepik.com/free-vector/travel-background-with-lettering_23-2147768764.jpg?size=338&ext=jpg" responsive />

        <a href={process.env.REACT_APP_LOGIN} target='_blank'>
          <button>Login</button>
        </a>

      </div>
    );
  }
};


