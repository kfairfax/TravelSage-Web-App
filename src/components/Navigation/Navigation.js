import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      admin: true
    }
  }

  componentDidMount() { }

  render() {
    return (

      <div>

        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">TRVLSage</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>

              <Nav pullRight>
              <NavItem eventKey={1} href= {`${process.env.REACT_APP_FRONTEND_URL}#/tours`}>
                Home
              </NavItem>
              <NavItem eventKey={2} href={`${process.env.REACT_APP_FRONTEND_URL}#/profile`}>
                Profile
              </NavItem>

              {/* {
                this.state.admin
                  ?
              <NavItem eventKey={2} href={`${process.env.FRONTEND_URL}#/dashboard`}>
                Admin
              </NavItem>
            :
            ''
            } */}
            
              <NavItem eventKey={2} href={`${process.env.REACT_APP_FRONTEND_URL}auth/logout`}>
                Logout
               </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
};

export default Navigation;