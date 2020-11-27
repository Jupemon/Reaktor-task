import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = (props) => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Navigation</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav fill="true">
          <Nav.Link onClick={() => {props.fetchProducts("jackets")}}>Jackets</Nav.Link>
          <Nav.Link onClick={() => {props.fetchProducts("shirts")}}>Shirts</Nav.Link>
          <Nav.Link onClick={() => {props.fetchProducts("accessories")}}>Accessories</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
