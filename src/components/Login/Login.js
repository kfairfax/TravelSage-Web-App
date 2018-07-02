import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap';


export default class Login extends Component {


  render() {
    return (
      <div className="loginContainer">
        <Image className="img-responsive center-block" src="https://lh3.googleusercontent.com/-mP6WjKr_Geg/WzmlAyWZO7I/AAAAAAACo6E/n845va8USw8BJdPSo3-F5Mpq5LXCx7noQCK8BGAs/s360/icon-above-font-transparent.png" />
        {/* we cannot proxy a tags! */}
        <br />
        <a href={process.env.REACT_APP_LOGIN}>
          <Button>Login</Button>
        </a>

      </div>
    );
  }
};


