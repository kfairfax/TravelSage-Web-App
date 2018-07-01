import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap';


export default class Login extends Component {


  render() {
    return (
      <div className="App">

        <Image src="https://img.freepik.com/free-vector/travel-background-with-lettering_23-2147768764.jpg?size=338&ext=jpg" responsive />
        {/* we cannot proxy a tags! */}

        <a href={process.env.REACT_APP_LOGIN}>
          <Button>Login</Button>
        </a>

      </div>
    );
  }
};


