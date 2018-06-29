import React, { Component } from 'react';
import { Image } from 'react-bootstrap';


export default class Login extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     speed: this.props.speed || 1,
  //     width: '100%',
  //     height: this.props.height || '100%',
  //     top: this.props.top || '0%',
  //     left: this.props.left,
  //     right: this.props.right,
  //     position: 'absolute',
  //     zIndex: this.props.zIndex || '0%',

  //     // background properties:
  //     backgroundRepeat: 'no-repeat',
  //     backgroundPosition: 'center',
  //     backgroundColor: this.props.color || null,
  //     backgroundImage: `url(${this.props.image})`

  //   };
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  //   // this.handleScroll is a callback function
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // throttle(fn, wait) {
  //   // throttling makes sure that the eventHandler on scroll gets called ever 200ms instead of ever 1ms
  //   let time = Date.now()
  //   return function () {
  //     if ((time + wait - Date.now()) < 0) {
  //       fn()
  //       time = Date.now()
  //     }
  //   }
  // }

  // handleScroll() {
  //   const speed = this.props.speed;
  //   const top = this.top;
  //   const pageTop = window.scrollY;
  //   // this gets the position of the scroll along the y axis
  //   const newTop = (top - (pageTop * speed));
  //   // this calculates the new top
  //   this.refs.parallaxElement.style.top = `${newTop}px`;
  //   // this sets the new top position
  //   // with this statement, we are referencing the new dom node we just created
  // }

  render() {
    return (
      <div className="App">
        {/* <div ref="parallaxElement" style={{...this.state}}>
          {this.props.children}
        </div> */}

        <Image src="https://img.freepik.com/free-vector/travel-background-with-lettering_23-2147768764.jpg?size=338&ext=jpg" responsive />
        {/* we cannot proxy a tags! */}

        <a href={process.env.REACT_APP_LOGIN}>
          <button>Login</button>
        </a>

      </div>
    );
  }
};


