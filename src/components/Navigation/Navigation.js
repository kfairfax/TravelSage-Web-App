import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';


const Navigation = () => {
  return (
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">TravelSage</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
       
          <Nav pullRight>
            <NavItem eventKey={1} href="http://localhost:3000/#/">
              Home
            </NavItem>
            <NavItem eventKey={2} href="http://localhost:3000/#/profile">
              Profile
            </NavItem>
            <NavItem eventKey={2} href="http://localhost:3000/#/dashboard">
              Admin
            </NavItem>
            <NavItem eventKey={2} href="http://localhost:3000/auth/logout">
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
  )
};

export default Navigation;